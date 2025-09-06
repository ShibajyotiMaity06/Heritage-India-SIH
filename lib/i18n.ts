export const languages = {
  en: { name: "English", flag: "🇬🇧" },
  hi: { name: "हिंदी", flag: "🇮🇳" },
  ta: { name: "தமிழ்", flag: "🇮🇳" },
  bn: { name: "বাংলা", flag: "🇮🇳" },
  gu: { name: "ગુજરાતી", flag: "🇮🇳" },
}

export type Language = keyof typeof languages

export const translations = {
  en: {
    // Navigation
    home: "Home",
    challenges: "Challenges",
    rewards: "Rewards",
    community: "Community",
    explore: "Explore",
    artforms: "Art Forms",
    communities: "Communities",
    marketplace: "Marketplace",
    profile: "Profile",
    admin: "Admin",
    login: "Login",
    register: "Register",
    logout: "Logout",

    // Common
    welcome: "Welcome",
    loading: "Loading...",
    save: "Save",
    cancel: "Cancel",
    submit: "Submit",
    search: "Search",
    filter: "Filter",
    viewAll: "View All",
    learnMore: "Learn More",

    // Homepage
    heroTitle: "Reviving the Heritage of India",
    heroSubtitle: "Discover, Learn, and Preserve India's Rich Cultural Legacy",
    featuredStories: "Featured Heritage Stories",
    upcomingChallenges: "Upcoming Challenges",
    communityHighlights: "Community Highlights",

    // Challenges
    challengesTitle: "Heritage Challenges",
    challengesSubtitle: "Participate in cultural activities and earn rewards",
    difficulty: "Difficulty",
    duration: "Duration",
    participants: "Participants",

    // Rewards
    rewardsTitle: "Heritage Rewards",
    rewardsSubtitle: "Redeem your coins for authentic cultural treasures",
    coins: "Coins",
    redeem: "Redeem",

    // Community
    joinCommunity: "Join Community",
    createCommunity: "Create Community",
    members: "Members",
    activities: "Activities",
  },

  hi: {
    // Navigation
    home: "मुख्य पृष्ठ",
    challenges: "चुनौतियां",
    rewards: "पुरस्कार",
    community: "समुदाय",
    explore: "खोजें",
    artforms: "कला रूप",
    communities: "समुदाय",
    marketplace: "बाज़ार",
    profile: "प्रोफ़ाइल",
    admin: "प्रशासक",
    login: "लॉगिन",
    register: "पंजीकरण",
    logout: "लॉगआउट",

    // Common
    welcome: "स्वागत",
    loading: "लोड हो रहा है...",
    save: "सहेजें",
    cancel: "रद्द करें",
    submit: "जमा करें",
    search: "खोजें",
    filter: "फ़िल्टर",
    viewAll: "सभी देखें",
    learnMore: "और जानें",

    // Homepage
    heroTitle: "भारत की विरासत को पुनर्जीवित करना",
    heroSubtitle: "भारत की समृद्ध सांस्कृतिक विरासत की खोज, सीखें और संरक्षण करें",
    featuredStories: "विशेष विरासत कहानियां",
    upcomingChallenges: "आगामी चुनौतियां",
    communityHighlights: "समुदायिक मुख्य बातें",

    // Challenges
    challengesTitle: "विरासत चुनौतियां",
    challengesSubtitle: "सांस्कृतिक गतिविधियों में भाग लें और पुरस्कार जीतें",
    difficulty: "कठिनाई",
    duration: "अवधि",
    participants: "प्रतिभागी",

    // Rewards
    rewardsTitle: "विरासत पुरस्कार",
    rewardsSubtitle: "प्रामाणिक सांस्कृतिक खजाने के लिए अपने सिक्के भुनाएं",
    coins: "सिक्के",
    redeem: "भुनाएं",

    // Community
    joinCommunity: "समुदाय में शामिल हों",
    createCommunity: "समुदाय बनाएं",
    members: "सदस्य",
    activities: "गतिविधियां",
  },

  ta: {
    // Navigation
    home: "முகப்பு",
    challenges: "சவால்கள்",
    rewards: "பரிசுகள்",
    community: "சமூகம்",
    explore: "ஆராயுங்கள்",
    artforms: "கலை வடிவங்கள்",
    communities: "சமூகங்கள்",
    marketplace: "சந்தை",
    profile: "சுயவிவரம்",
    admin: "நிர்வாகி",
    login: "உள்நுழைவு",
    register: "பதிவு",
    logout: "வெளியேறு",

    // Common
    welcome: "வரவேற்கிறோம்",
    loading: "ஏற்றுகிறது...",
    save: "சேமி",
    cancel: "ரத்து செய்",
    submit: "சமர்பிக்கவும்",
    search: "தேடு",
    filter: "வடிகட்டி",
    viewAll: "அனைத்தையும் பார்க்க",
    learnMore: "மேலும் அறிய",

    // Homepage
    heroTitle: "இந்தியாவின் பாரம்பரியத்தை புத்துயிர் பெறச் செய்தல்",
    heroSubtitle: "இந்தியாவின் வளமான கலாச்சார பாரம்பரியத்தை கண்டறிந்து, கற்றுக்கொண்டு, பாதுகாக்கவும்",
    featuredStories: "சிறப்பு பாரம்பரிய கதைகள்",
    upcomingChallenges: "வரவிருக்கும் சவால்கள்",
    communityHighlights: "சமூக சிறப்பம்சங்கள்",

    // Challenges
    challengesTitle: "பாரம்பரிய சவால்கள்",
    challengesSubtitle: "கலாச்சார நடவடிக்கைகளில் பங்கேற்று பரிசுகளை வெல்லுங்கள்",
    difficulty: "சிரமம்",
    duration: "காலம்",
    participants: "பங்கேற்பாளர்கள்",

    // Rewards
    rewardsTitle: "பாரம்பரிய பரிசுகள்",
    rewardsSubtitle: "உண்மையான கலாச்சார பொக்கிஷங்களுக்கு உங்கள் நாணயங்களை மீட்டெடுக்கவும்",
    coins: "நாணயங்கள்",
    redeem: "மீட்டெடுக்க",

    // Community
    joinCommunity: "சமூகத்தில் சேரவும்",
    createCommunity: "சமூகத்தை உருவாக்கவும்",
    members: "உறுப்பினர்கள்",
    activities: "நடவடிக்கைகள்",
  },

  bn: {
    // Navigation
    home: "হোম",
    challenges: "চ্যালেঞ্জ",
    rewards: "পুরস্কার",
    community: "কমিউনিটি",
    explore: "অন্বেষণ",
    artforms: "শিল্পকলা",
    communities: "কমিউনিটি",
    marketplace: "বাজার",
    profile: "প্রোফাইল",
    admin: "অ্যাডমিন",
    login: "লগইন",
    register: "নিবন্ধন",
    logout: "লগআউট",

    // Common
    welcome: "স্বাগতম",
    loading: "লোড হচ্ছে...",
    save: "সংরক্ষণ",
    cancel: "বাতিল",
    submit: "জমা দিন",
    search: "অনুসন্ধান",
    filter: "ফিল্টার",
    viewAll: "সব দেখুন",
    learnMore: "আরও জানুন",

    // Homepage
    heroTitle: "ভারতের ঐতিহ্যকে পুনরুজ্জীবিত করা",
    heroSubtitle: "ভারতের সমৃদ্ধ সাংস্কৃতিক ঐতিহ্য আবিষ্কার, শিখুন এবং সংরক্ষণ করুন",
    featuredStories: "বিশেষ ঐতিহ্যের গল্প",
    upcomingChallenges: "আসন্ন চ্যালেঞ্জ",
    communityHighlights: "কমিউনিটি হাইলাইট",

    // Challenges
    challengesTitle: "ঐতিহ্য চ্যালেঞ্জ",
    challengesSubtitle: "সাংস্কৃতিক কার্যক্রমে অংশগ্রহণ করুন এবং পুরস্কার জিতুন",
    difficulty: "কঠিনতা",
    duration: "সময়কাল",
    participants: "অংশগ্রহণকারী",

    // Rewards
    rewardsTitle: "ঐতিহ্য পুরস্কার",
    rewardsSubtitle: "প্রামাণিক সাংস্কৃতিক ধনসম্পদের জন্য আপনার কয়েন রিডিম করুন",
    coins: "কয়েন",
    redeem: "রিডিম",

    // Community
    joinCommunity: "কমিউনিটিতে যোগ দিন",
    createCommunity: "কমিউনিটি তৈরি করুন",
    members: "সদস্য",
    activities: "কার্যক্রম",
  },

  gu: {
    // Navigation
    home: "હોમ",
    challenges: "પડકારો",
    rewards: "પુરસ્કારો",
    community: "સમુદાય",
    explore: "અન્વેષણ",
    artforms: "કલા સ્વરૂપો",
    communities: "સમુદાયો",
    marketplace: "બજાર",
    profile: "પ્રોફાઇલ",
    admin: "એડમિન",
    login: "લોગિન",
    register: "નોંધણી",
    logout: "લોગઆઉટ",

    // Common
    welcome: "સ્વાગત",
    loading: "લોડ થઈ રહ્યું છે...",
    save: "સેવ કરો",
    cancel: "રદ કરો",
    submit: "સબમિટ કરો",
    search: "શોધો",
    filter: "ફિલ્ટર",
    viewAll: "બધું જુઓ",
    learnMore: "વધુ જાણો",

    // Homepage
    heroTitle: "ભારતના વારસાને પુનર્જીવિત કરવું",
    heroSubtitle: "ભારતની સમૃદ્ધ સાંસ્કૃતિક વારસાની શોધ, શીખો અને સંરક્ષણ કરો",
    featuredStories: "વિશેષ વારસાની વાર્તાઓ",
    upcomingChallenges: "આગામી પડકારો",
    communityHighlights: "સમુદાયની મુખ્ય બાબતો",

    // Challenges
    challengesTitle: "વારસાના પડકારો",
    challengesSubtitle: "સાંસ્કૃતિક પ્રવૃત્તિઓમાં ભાગ લો અને પુરસ્કારો જીતો",
    difficulty: "મુશ્કેલી",
    duration: "અવધિ",
    participants: "સહભાગીઓ",

    // Rewards
    rewardsTitle: "વારસાના પુરસ્કારો",
    rewardsSubtitle: "પ્રામાણિક સાંસ્કૃતિક ખજાના માટે તમારા સિક્કા રિડીમ કરો",
    coins: "સિક્કા",
    redeem: "રિડીમ કરો",

    // Community
    joinCommunity: "સમુદાયમાં જોડાઓ",
    createCommunity: "સમુદાય બનાવો",
    members: "સભ્યો",
    activities: "પ્રવૃત્તિઓ",
  },
}

export type TranslationKey = keyof typeof translations.en
