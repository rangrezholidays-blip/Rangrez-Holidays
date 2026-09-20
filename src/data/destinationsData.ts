import { Destination } from '../types';

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'delhi',
    name: 'Delhi',
    tagline: 'The Imperial Capital — Where 1,000 Years of Empires Meet Modern India',
    state: 'National Capital Territory (NCT)',
    heroImage: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1600&auto=format&fit=crop', // India Gate
    gallery: [
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop', // India Gate
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1200&auto=format&fit=crop', // Qutub Minar
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', // Mughal architectural wonder
      'https://images.unsplash.com/photo-1600100397608-f010f443b749?q=80&w=1200&auto=format&fit=crop', // Delhi heritage
    ],
    overview:
      'India’s bustling capital is a living palimpsest of historical dynasties. From the monumental 12th-century Qutub Minar and the Persian symmetries of Humayun’s Tomb (inspiration for the Taj Mahal) to the labyrinthine bazaars of Chandni Chowk and the stately colonial avenues of Lutyens’ Delhi, the city is a mesmerizing crossroads of culture, politics, and legendary gastronomy.',
    culturalSignificance:
      'Delhi has served as the throne for the Tomar Rajputs, the Delhi Sultanate, the Mughal Emperors, and the British Raj before becoming the democratic heart of contemporary India. Its architectural layering is unparalleled anywhere in South Asia.',
    topAttractions: [
      {
        name: 'Qutub Minar Complex',
        description: '73-meter fluted red sandstone minaret built in 1192, featuring intricate Quranic inscriptions and the rust-resistant 4th-century Iron Pillar.',
      },
      {
        name: 'Humayun’s Tomb (UNESCO)',
        description: 'The first grand garden-tomb on the Indian subcontinent, representing the peak of Persian and Mughal symmetry surrounded by water channels.',
      },
      {
        name: 'Old Delhi & Chandni Chowk',
        description: 'A sensory whirlwind of spice aroma at Khari Baoli, traditional cycle rickshaw rides, Jama Masjid courtyard, and historic food stalls dating to 1857.',
      },
      {
        name: 'India Gate & Kartavya Path',
        description: 'The 42-meter triumphal war memorial arch honoring soldiers, fronting the presidential boulevard and newly designed central vista.',
      },
      {
        name: 'Lotus Temple & Akshardham',
        description: 'Modern spiritual masterworks showcasing pure white Greek marble lotus petals and hand-carved stone depicting millennia of Indian spirituality.',
      },
    ],
    bestTimeToVisit: 'October to March (Pleasant, sunny days and cool evenings)',
    climateInfo: 'Summer: 32°C - 45°C (May-June). Monsoon: July-September. Winter: 8°C - 24°C (November-February).',
    travelTips: [
      'Opt for early morning visits to Old Delhi and Chandni Chowk to avoid peak vehicle congestion.',
      'Dress modestly covering shoulders and knees when visiting Jama Masjid and Gurudwara Bangla Sahib.',
      'Our chauffeurs are equipped with prepaid FASTag tolls for smooth airport transfers and highway exits.',
    ],
    recommendedVehicles: ['Executive Sedan (Dzire / Etios)', 'Toyota Innova Crysta / Hycross', 'Mercedes-Benz E-Class VIP'],
    popularTours: ['same-day-delhi-heritage', 'golden-triangle-classic'],
  },
  {
    id: 'agra',
    name: 'Agra',
    tagline: 'The City of Eternal Love, Mughal Citadel & Marble Inlay Mastery',
    state: 'Uttar Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1600&auto=format&fit=crop', // Taj Mahal
    gallery: [
      'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=1200&auto=format&fit=crop', // Taj Mahal Front
      'https://images.unsplash.com/photo-1524492417138-554dd599e482?q=80&w=1200&auto=format&fit=crop', // Taj Mahal Morning Mist
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1200&auto=format&fit=crop', // Agra Fort Ramparts
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop', // Fatehpur Sikri
    ],
    overview:
      'Perched on the banks of the Yamuna River, Agra was the golden seat of the Mughal empire under Akbar, Jahangir, and Shah Jahan. It is world-renowned for housing the Taj Mahal—the zenith of Mughal art and one of the universally admired Seven Wonders of the World. Beyond the marble monument, Agra enchants with the colossal red sandstone ramparts of Agra Fort, the ghost capital of Fatehpur Sikri, and master craftsmen continuing centuries-old Pietra Dura marble inlay traditions.',
    culturalSignificance:
      'Agra preserves the pinnacle of Mughal aesthetic philosophy, where Persian poetic romance merged with indigenous Indian stone carving and geometry.',
    topAttractions: [
      {
        name: 'The Taj Mahal (UNESCO)',
        description: 'Shah Jahan’s marble tribute to his beloved Mumtaz Mahal, glowing in iridescent soft pink at dawn and translucent ivory under the midday sun.',
      },
      {
        name: 'Agra Fort (UNESCO)',
        description: 'Vast 16th-century fortress city housing the Diwan-i-Am, Jahangiri Mahal, and the Sheesh Mahal where Shah Jahan was held during his twilight years.',
      },
      {
        name: 'Fatehpur Sikri & Buland Darwaza',
        description: 'Emperor Akbar’s preserved red sandstone city featuring the 54-meter Buland Darwaza and the saintly white marble shrine of Sheikh Salim Chishti.',
      },
      {
        name: 'Mehtab Bagh (Moonlight Garden)',
        description: 'Charbagh complex across the river offering the most tranquil, crowd-free vantage point for sunset reflections of the Taj Mahal.',
      },
      {
        name: 'Tomb of I’timād-ud-Daulah (Baby Taj)',
        description: 'Intricately decorated tomb often considered the delicate architectural draft for the Taj Mahal, built by Empress Nur Jahan.',
      },
    ],
    bestTimeToVisit: 'October to March (Taj Mahal is closed for visitors every Friday)',
    climateInfo: 'Winter temperatures range between 10°C and 25°C. Summers can exceed 42°C in May and June.',
    travelTips: [
      'Always visit the Taj Mahal at sunrise for the best light, cooler temperatures, and minimal crowds.',
      'Friday is weekly maintenance closure for Taj Mahal; plan visits on Saturday through Thursday.',
      'The Yamuna Expressway from Delhi takes just 3 to 3.5 hours in our air-conditioned chauffeur cabs.',
    ],
    recommendedVehicles: ['Toyota Innova Crysta', 'Executive Sedan', 'Force Urbania VIP Coach'],
    popularTours: ['same-day-agra-taj-mahal', 'golden-triangle-classic'],
  },
  {
    id: 'rajasthan',
    name: 'Rajasthan',
    tagline: 'The Land of Maharajas, Desert Citadels, Lake Palaces & Vibrant Royalty',
    state: 'Rajasthan',
    heroImage: 'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1600&auto=format&fit=crop', // Mehrangarh Fort Jodhpur
    gallery: [
      'https://images.unsplash.com/photo-1477587458883-47145ed94245?q=80&w=1200&auto=format&fit=crop', // Jodhpur
      'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop', // Hawa Mahal Jaipur
      'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop', // Jaisalmer Dunes
      'https://images.unsplash.com/photo-1615836245337-f5b9b2303f10?q=80&w=1200&auto=format&fit=crop', // Udaipur Lake Pichola
    ],
    overview:
      'Rajasthan is India’s romantic jewel of heroic legends, royal hospitality, and intoxicating colors. Journey across the Pink City of Jaipur with its hilltop Amber Fort, into the indigo-draped alleys of the Blue City Jodhpur under the mighty gaze of Mehrangarh, through the shimmering golden living fort of Jaisalmer in the Thar Desert, to the floating white marble palaces and sunset boat cruises of Udaipur’s Lake Pichola.',
    culturalSignificance:
      'Home of the Rajput warrior dynasties whose patronized arts, mirrored glass mosaics, gemstone cutting, block printing, and vibrant folk melodies remain celebrated globally.',
    topAttractions: [
      {
        name: 'Jaipur — Pink City & Amber Fort',
        description: 'UNESCO World Heritage capital featuring Amber Fort’s Mirror Palace, Hawa Mahal’s 953 jharokhas, and City Palace royal residence.',
      },
      {
        name: 'Udaipur — City of Lakes & Lake Palace',
        description: 'Venice of the East with romantic boat cruises on Lake Pichola, towering City Palace courtyards, and Monsoon Palace sunsets.',
      },
      {
        name: 'Jodhpur — The Sun & Blue City',
        description: 'The invincible Mehrangarh Fort towering 400 feet above indigo houses, Jaswant Thada marble cenotaphs, and spice markets.',
      },
      {
        name: 'Jaisalmer — Golden Living Fort & Thar Desert',
        description: 'Sonar Qila built of yellow sandstone where a quarter of the town still lives, carved Havelis, and luxury camel glamping under desert stars.',
      },
      {
        name: 'Pushkar & Ranakpur',
        description: 'The sacred holy lake and only Brahma Temple in the world, alongside Ranakpur’s 1,444 uniquely hand-sculpted marble pillars.',
      },
    ],
    bestTimeToVisit: 'October to April (Crisp desert nights, warm sunny days, and colorful desert festivals)',
    climateInfo: 'Winter: 10°C - 27°C (Peak season). Summer: 35°C - 46°C in desert districts.',
    travelTips: [
      'Allow at least 6 to 10 days to comfortably explore multiple royal cities without rushing.',
      'Our Innova Crysta and Urbania vehicles are specifically suited for smooth multi-city highway travel.',
      'Enjoy an authentic Rajasthani Thali (Dal Baati Churma and Gatte ki Sabzi) in Jaipur and Jodhpur.',
    ],
    recommendedVehicles: ['Toyota Innova Crysta / Hycross', 'Force Urbania VIP', 'Maharaja Tempo Traveller'],
    popularTours: ['rajasthan-royal-heritage', 'golden-triangle-classic', 'same-day-jaipur-pink-city'],
  },
  {
    id: 'uttarakhand',
    name: 'Uttarakhand',
    tagline: 'Devbhoomi — The Abode of the Gods, Holy Ganga & Sacred Himalayan Shrines',
    state: 'Uttarakhand',
    heroImage: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1600&auto=format&fit=crop', // Kedarnath Himalayan peak
    gallery: [
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', // Kedarnath temple
      'https://images.unsplash.com/photo-1600100397608-f010f443b749?q=80&w=1200&auto=format&fit=crop', // Haridwar Ganga Aarti
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop', // Himalayan river valley
      'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?q=80&w=1200&auto=format&fit=crop', // Scenic Garhwal
    ],
    overview:
      'Cradled in the majestic Garhwal and Kumaon Himalayas, Uttarakhand is revered as "Devbhoomi" (Land of the Gods). It is the sacred origin of the holy rivers Ganga and Yamuna, and home to the sacred Char Dham Yatra—Yamunotri, Gangotri, Kedarnath, and Badrinath. Alongside sacred river ghats at Haridwar and spiritual yoga ashrams in Rishikesh, it boasts breathtaking hill retreats including Mussoorie, Nainital, and alpine meadows.',
    culturalSignificance:
      'For over three millennia, sages, pilgrims, and spiritual seekers have journeyed along Uttarakhand’s sacred confluences (Panch Prayag) in search of inner peace, divine darshan, and moksha.',
    topAttractions: [
      {
        name: 'Kedarnath Dham (3,584m)',
        description: 'Ancient stone temple dedicated to Lord Shiva situated dramatically against the snow-clad Kedar Dome; reachable by scenic trek or helicopter.',
      },
      {
        name: 'Badrinath Dham & Mana Village',
        description: 'Sacred abode of Lord Vishnu beside the Alaknanda river, Tapt Kund hot springs, and Mana (India’s first village on the Tibet border).',
      },
      {
        name: 'Haridwar & Har Ki Pauri',
        description: 'The gateway to the Himalayas where thousands gather at dusk for the mesmerizing, bell-ringing evening Ganga Aarti.',
      },
      {
        name: 'Rishikesh — World Yoga Capital',
        description: 'Spiritual haven famous for the iconic suspension bridges Ram Jhula and Lakshman Jhula, Beatles Ashram, and river rafting.',
      },
      {
        name: 'Gangotri & Yamunotri Dhams',
        description: 'The Himalayan origins of India’s most sacred rivers amidst serene apple orchards and glacial hot water springs.',
      },
    ],
    bestTimeToVisit: 'May to June & September to November for Char Dham; year-round for Haridwar & Rishikesh',
    climateInfo: 'Alpine mountain climate: Summers are cool and pleasant (15°C - 25°C). Winters bring heavy snowfall to high-altitude shrines.',
    travelTips: [
      'Char Dham Yatra requires mandatory Uttarakhand Government biometric registration, which our team assists with.',
      'High-altitude destinations (Kedarnath & Badrinath) require warm thermal clothing even in summer months.',
      'All Rangrez mountain chauffeurs are seasoned Garhwal drivers with safety certification and on-board oxygen canisters.',
    ],
    recommendedVehicles: ['Mountain-Certified Innova Crysta', 'Force Urbania 10-Seater', 'Tempo Traveller 4x4'],
    popularTours: ['char-dham-yatra-sacred'],
  },
  {
    id: 'himachal',
    name: 'Himachal Pradesh',
    tagline: 'The Land of Snows, Pine Forests, High Passes & Himalayan Valleys',
    state: 'Himachal Pradesh',
    heroImage: 'https://images.unsplash.com/photo-1596761633766-085594043286?q=80&w=1600&auto=format&fit=crop', // Himachal snow peaks
    gallery: [
      'https://images.unsplash.com/photo-1596761633766-085594043286?q=80&w=1200&auto=format&fit=crop', // Snowy pine mountains
      'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop', // Lush Beas river valley
      'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?q=80&w=1200&auto=format&fit=crop', // Rohtang pass vistas
      'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop', // Hill station views
    ],
    overview:
      'Perched in the Western Himalayas, Himachal Pradesh is a paradise of snow-dusted pine forests, emerald apple orchards, gushing rivers, and serene Tibetan monasteries. Whether strolling along the colonial promenades of Shimla’s Mall Road, soaring over Solang Valley and crossing the engineering marvel of Atal Tunnel to Lahaul, or finding peace in the hillside sanctuary of the Dalai Lama in McLeodganj, Himachal promises refreshing mountain magic.',
    culturalSignificance:
      'A harmonious fusion of Pahari folk culture, indigenous temple architecture with slate roofs, British colonial summer heritage, and Tibetan Buddhist monasteries.',
    topAttractions: [
      {
        name: 'Shimla — Queen of the Hills',
        description: 'Historic summer capital of British India featuring the neo-Gothic Christ Church, Mall Road, Jakhu Temple, and Kufri pine trails.',
      },
      {
        name: 'Manali, Solang Valley & Rohtang Pass',
        description: 'Gateway to snow adventures, paragliding, Hadimba Devi wooden temple, Old Manali cafes, and high-altitude mountain passes at 13,058 ft.',
      },
      {
        name: 'Atal Tunnel & Sissu (Lahaul Valley)',
        description: 'The world’s longest highway tunnel above 10,000 feet connecting lush green Kullu to the dramatic barren peaks and waterfalls of Lahaul.',
      },
      {
        name: 'Dharamshala & McLeodganj',
        description: 'Residence of His Holiness the 14th Dalai Lama, surrounded by cedar forests, prayer wheels, Tibetan culinary arts, and Kangra tea gardens.',
      },
      {
        name: 'Spiti Valley & Chandratal Lake',
        description: 'The middle land between Tibet and India—an awe-inspiring cold desert of 1,000-year-old Key Monastery, Kunzum Pass, and turquoise alpine lakes.',
      },
    ],
    bestTimeToVisit: 'March to June (Spring blooms & pleasant weather) & December to February (Fresh snowfall & skiing)',
    climateInfo: 'Summer: 14°C - 28°C. Monsoon: July-August (occasional landslides). Winter: -2°C - 15°C with snow in upper reaches.',
    travelTips: [
      'Travel in hill-rated vehicles with experienced hill drivers; our fleet is equipped for safe Himalayan gradient driving.',
      'Rohtang Pass permits and Atal Tunnel crossings are handled directly by your dedicated trip coordinator.',
      'Sample local delicacies like Siddu, Trout Fish, Madra, and fresh Himachali royal delicious apples.',
    ],
    recommendedVehicles: ['Toyota Innova Crysta (High Clearance)', 'Toyota Fortuner 4x4', 'Maharaja Tempo Traveller (Hills)'],
    popularTours: ['himachal-shimla-manali-delight', 'himachal-spiti-valley-adventure'],
  },
];
