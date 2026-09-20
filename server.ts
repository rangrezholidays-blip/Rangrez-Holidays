import express from "express";
import path from "path";
import nodemailer from "nodemailer";
import { createServer as createViteServer } from "vite";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// In-memory store for recent inquiries so admin can review them
interface InquiryRecord {
  id: string;
  createdAt: string;
  type: "tour_package" | "taxi_rental" | "custom_plan";
  packageName?: string;
  destination?: string;
  startDate?: string;
  duration?: string;
  adults: number;
  children: number;
  cabPreference?: string;
  pickupLocation?: string;
  dropLocation?: string;
  fullName: string;
  email: string;
  phone: string;
  whatsappSameAsPhone: boolean;
  specialRequests?: string;
  emailDispatched: boolean;
  emailStatusMessage?: string;
}

const recentInquiries: InquiryRecord[] = [];

// Helper to configure Nodemailer transporter
function getTransporter() {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;

  if (user && pass && user !== "your-email@gmail.com") {
    return nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });
  }
  return null;
}

// API: Health
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    brand: "Rangrez Holidays",
    smtpConfigured: Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD && process.env.GMAIL_USER !== "your-email@gmail.com"),
  });
});

// API: Check Availability for Tour Package
app.post("/api/availability", (req, res) => {
  const { date, packageSlug } = req.body;
  if (!date) {
    return res.status(400).json({ error: "Date is required" });
  }

  // Deterministic mock availability based on date & slug
  const targetDate = new Date(date);
  const dayOfWeek = targetDate.getDay();
  const dayOfMonth = targetDate.getDate();

  // High demand on weekends
  const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
  const slotsRemaining = (dayOfMonth % 5) + (isWeekend ? 1 : 4);
  const isFastFilling = slotsRemaining <= 2;

  // Season indicator based on month
  const month = targetDate.getMonth(); // 0 = Jan, 11 = Dec
  let season = "Standard Season";
  if (month >= 9 || month <= 2) {
    season = "Peak Heritage & Royal Season (Optimal Weather)";
  } else if (month >= 4 && month <= 6) {
    season = "Summer & High Altitude Char Dham Pilgrimage Season";
  } else {
    season = "Monsoon Palace & Lush Heritage Season";
  }

  return res.json({
    available: slotsRemaining > 0,
    slotsRemaining,
    isFastFilling,
    season,
    guaranteedDeparture: true,
    freeCancellationAllowed: true,
    flexiblePostponement: true,
    message: slotsRemaining > 0
      ? `Slot available! ${slotsRemaining} curated spots left for selected departure.`
      : "Selected date is on waiting list. Immediate private taxi & custom departure can be arranged.",
  });
});

// API: Submit Tour Booking or Taxi Inquiry (dispatches via Gmail SMTP if configured)
app.post("/api/inquiry", async (req, res) => {
  try {
    const {
      type = "tour_package",
      packageName,
      destination,
      startDate,
      duration,
      adults = 2,
      children = 0,
      cabPreference,
      pickupLocation,
      dropLocation,
      fullName,
      email,
      phone,
      whatsappSameAsPhone = true,
      specialRequests,
    } = req.body;

    if (!fullName || !phone) {
      return res.status(400).json({ error: "Name and phone number are required" });
    }

    const inquiryId = `RH-${Date.now().toString().slice(-6)}`;
    const inquiryRecord: InquiryRecord = {
      id: inquiryId,
      createdAt: new Date().toISOString(),
      type,
      packageName,
      destination,
      startDate,
      duration,
      adults: Number(adults) || 2,
      children: Number(children) || 0,
      cabPreference,
      pickupLocation,
      dropLocation,
      fullName,
      email: email || "",
      phone,
      whatsappSameAsPhone,
      specialRequests,
      emailDispatched: false,
    };

    const transporter = getTransporter();
    let emailStatusMessage = "";

    if (transporter && email) {
      try {
        const receiver = process.env.NOTIFICATION_EMAIL || process.env.GMAIL_USER || "bookings@rangrezholidays.com";
        const emailHtml = `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0d0db; border-radius: 12px; overflow: hidden; background-color: #ffffff;">
            <div style="background: linear-gradient(135deg, #4A0E35 0%, #580B3A 50%, #F05A28 100%); padding: 24px; text-align: center; color: #ffffff;">
              <h1 style="margin: 0; font-size: 24px; letter-spacing: 2px; font-weight: 700;">RANGREZ HOLIDAYS</h1>
              <p style="margin: 4px 0 0; font-size: 13px; letter-spacing: 3px; color: #FFA000; text-transform: uppercase;">Royal India Tours & Luxury Taxi Rental</p>
            </div>
            
            <div style="padding: 24px 28px; color: #2D1A25;">
              <div style="background-color: #FDF6EE; border-left: 4px solid #F05A28; padding: 12px 16px; border-radius: 4px; margin-bottom: 20px;">
                <p style="margin: 0; font-weight: 600; color: #4A0E35; font-size: 15px;">New Booking Inquiry [ID: ${inquiryId}]</p>
                <p style="margin: 4px 0 0; font-size: 13px; color: #735467;">Type: ${type === "tour_package" ? "Custom Tour Package" : "Chauffeur Taxi Rental"}</p>
              </div>

              <table style="width: 100%; border-collapse: collapse; font-size: 14px; margin-bottom: 20px;">
                ${packageName ? `<tr><td style="padding: 8px 0; color: #735467; width: 40%;">Tour Package:</td><td style="padding: 8px 0; font-weight: 600; color: #4A0E35;">${packageName}</td></tr>` : ""}
                ${destination ? `<tr><td style="padding: 8px 0; color: #735467;">Destination/Route:</td><td style="padding: 8px 0; font-weight: 600;">${destination}</td></tr>` : ""}
                ${startDate ? `<tr><td style="padding: 8px 0; color: #735467;">Travel Date:</td><td style="padding: 8px 0; font-weight: 600;">${startDate}</td></tr>` : ""}
                ${duration ? `<tr><td style="padding: 8px 0; color: #735467;">Duration:</td><td style="padding: 8px 0;">${duration}</td></tr>` : ""}
                ${cabPreference ? `<tr><td style="padding: 8px 0; color: #735467;">Vehicle / Cab Preference:</td><td style="padding: 8px 0; font-weight: 600; color: #F05A28;">${cabPreference}</td></tr>` : ""}
                ${pickupLocation ? `<tr><td style="padding: 8px 0; color: #735467;">Pickup Point:</td><td style="padding: 8px 0;">${pickupLocation}</td></tr>` : ""}
                ${dropLocation ? `<tr><td style="padding: 8px 0; color: #735467;">Drop-off Point:</td><td style="padding: 8px 0;">${dropLocation}</td></tr>` : ""}
                <tr><td style="padding: 8px 0; color: #735467;">Travelers:</td><td style="padding: 8px 0;">${adults} Adults, ${children} Children</td></tr>
              </table>

              <h3 style="font-size: 15px; color: #4A0E35; border-bottom: 1px solid #EADBDF; padding-bottom: 6px; margin: 20px 0 10px;">Guest Details</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 6px 0; color: #735467; width: 40%;">Name:</td><td style="padding: 6px 0; font-weight: 600;">${fullName}</td></tr>
                <tr><td style="padding: 6px 0; color: #735467;">Phone:</td><td style="padding: 6px 0; font-weight: 600; color: #4A0E35;">${phone} ${whatsappSameAsPhone ? "(WhatsApp Available)" : ""}</td></tr>
                <tr><td style="padding: 6px 0; color: #735467;">Email:</td><td style="padding: 6px 0;">${email}</td></tr>
                ${specialRequests ? `<tr><td style="padding: 6px 0; color: #735467;">Special Requests:</td><td style="padding: 6px 0; font-style: italic;">${specialRequests}</td></tr>` : ""}
              </table>
            </div>
            
            <div style="background-color: #FAF4F8; padding: 14px 24px; text-align: center; font-size: 12px; color: #735467;">
              Rangrez Holidays • Golden Triangle • Rajasthan • Char Dham • Luxury Chauffeur Rental
            </div>
          </div>
        `;

        // Dispatch admin alert
        await transporter.sendMail({
          from: `"Rangrez Holidays" <${process.env.GMAIL_USER}>`,
          to: receiver,
          subject: `[New Inquiry] ${packageName || "Custom Travel Plan"} - ${fullName} (${inquiryId})`,
          html: emailHtml,
        });

        // Dispatch guest confirmation
        await transporter.sendMail({
          from: `"Rangrez Holidays" <${process.env.GMAIL_USER}>`,
          to: email,
          subject: `Namaste ${fullName}! Your Rangrez Holidays Inquiry [${inquiryId}] has been received`,
          html: `
            <div style="font-family: sans-serif; max-width: 580px; margin: 0 auto; color: #333; line-height: 1.6;">
              <h2 style="color: #4A0E35;">Namaste ${fullName},</h2>
              <p>Thank you for choosing <strong>Rangrez Holidays</strong> for your journey! We have received your inquiry for <strong>${packageName || "your customized tour / taxi rental"}</strong>.</p>
              <p>Our dedicated travel concierge is reviewing your preferred dates (${startDate || "Flexible"}) and will contact you via WhatsApp/Phone at <strong>${phone}</strong> with a personalized itinerary and availability options within 30 minutes.</p>
              <p>If you need instant priority assistance, feel free to chat with us directly on WhatsApp at <strong>+91 98712 34567</strong>.</p>
              <br/>
              <p style="color: #735467; font-size: 13px;">Warm regards,<br/><strong>Team Rangrez Holidays</strong></p>
            </div>
          `,
        });

        inquiryRecord.emailDispatched = true;
        emailStatusMessage = "Email dispatched successfully via Gmail SMTP.";
      } catch (mailErr: any) {
        console.error("Nodemailer error:", mailErr.message);
        emailStatusMessage = `SMTP notice: ${mailErr.message}. Inquiry saved safely.`;
      }
    } else {
      emailStatusMessage = "Inquiry logged successfully. (Configure GMAIL_USER & GMAIL_APP_PASSWORD in settings to enable live Gmail dispatch).";
    }

    inquiryRecord.emailStatusMessage = emailStatusMessage;
    recentInquiries.unshift(inquiryRecord);
    if (recentInquiries.length > 50) recentInquiries.pop();

    return res.json({
      success: true,
      inquiryId,
      message: "Your inquiry has been successfully registered with Rangrez Holidays! Our travel expert will reach out promptly.",
      emailDispatched: inquiryRecord.emailDispatched,
      emailStatusMessage,
      inquiry: {
        id: inquiryId,
        fullName,
        phone,
        startDate,
        packageName: packageName || "Custom Tour",
      },
    });
  } catch (err: any) {
    console.error("Inquiry error:", err);
    return res.status(500).json({ error: "Failed to process inquiry. Please try again or reach out on WhatsApp." });
  }
});

// API: List recent inquiries (for admin/review verification)
app.get("/api/inquiries", (_req, res) => {
  res.json({ inquiries: recentInquiries });
});

async function startServer() {
  // Vite middleware in dev, static files in production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Rangrez Holidays server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
