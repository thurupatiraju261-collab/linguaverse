

const languagesData = [
  {
    id: "english",
    slug: "english",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    description: "Master the language of business, travel and the internet with practical, real-world lessons.",
    difficulty: "Easy",
    difficultyLevel: 2,
    lessons: 120,
    duration: "3–6 months",
    learners: "9,200+",
    popularity: "Popular",
    bannerSubtitle: "A West Germanic language spoken across every continent",
    history: "English grew out of the dialects brought to Britain by Anglo-Saxon settlers around the 5th century, absorbed thousands of French words after 1066, and later spread worldwide through trade and colonisation, picking up vocabulary from dozens of languages along the way.",
    countries: ["United Kingdom", "United States", "Canada", "Australia", "Ireland", "New Zealand", "South Africa", "India (co-official)"],
    alphabet: { name: "Latin script", count: 26, note: "26 letters, no accents in standard spelling." },
    pronunciation: [
      "Stress usually falls on the first syllable of root words.",
      "Vowel sounds shift a lot between accents — start with one accent (UK or US) and stay consistent.",
      "Silent letters are common: 'knee', 'write', 'island'."
    ],
    greetings: [
      { phrase: "Hello", meaning: "Hello" },
      { phrase: "Good morning", meaning: "Good morning" },
      { phrase: "How are you?", meaning: "How are you?" },
      { phrase: "Nice to meet you", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "One" }, { n: 2, word: "Two" }, { n: 3, word: "Three" }, { n: 4, word: "Four" }, { n: 5, word: "Five" },
      { n: 6, word: "Six" }, { n: 7, word: "Seven" }, { n: 8, word: "Eight" }, { n: 9, word: "Nine" }, { n: 10, word: "Ten" },
      { n: 11, word: "Eleven" }, { n: 12, word: "Twelve" }, { n: 13, word: "Thirteen" }, { n: 14, word: "Fourteen" }, { n: 15, word: "Fifteen" },
      { n: 16, word: "Sixteen" }, { n: 17, word: "Seventeen" }, { n: 18, word: "Eighteen" }, { n: 19, word: "Nineteen" }, { n: 20, word: "Twenty" }
    ],
    vocabulary: {
      "Everyday": ["Water", "Food", "House", "Friend", "Time"],
      "Travel": ["Airport", "Ticket", "Hotel", "Passport", "Luggage"]
    },
    grammar: [
      "Subject–Verb–Object word order (I eat rice).",
      "Only two verb tenses are marked morphologically: present and past.",
      "Articles 'a/an/the' don't change with gender or case."
    ],
    roadmap: [
      "Learn the alphabet & sounds",
      "Build core 500-word vocabulary",
      "Practice present-tense conversation",
      "Add past & future tenses",
      "Practice listening with native audio",
      "Hold 10-minute unscripted conversations"
    ],
    culture: [
      "English culture places a strong emphasis on politeness, queuing, and indirect communication.",
      "Tea culture remains central in the UK, while coffee dominates in North America.",
      "Global pop culture is heavily driven by English-language cinema, music, and literature."
    ],
    resources: [
      { label: "Beginner Course", note: "12 modules · placeholder link" },
      { label: "Grammar Handbook", note: "PDF guide · placeholder link" },
      { label: "Listening Practice", note: "Audio library · placeholder link" }
    ],
    faq: [
      { q: "How long does it take to learn English?", a: "With consistent daily practice, you can reach conversational fluency in 6-12 months." },
      { q: "Is English grammar difficult?", a: "English grammar is relatively straightforward early on (no gendered nouns), but spelling and phrasal verbs can be tricky." },
      { q: "Which accent should I learn?", a: "Pick either a standard US or UK accent and stick to it for consistency. Both are universally understood." }
    ]
  },
  {
    id: "hindi",
    slug: "hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    description: "Learn the Devanagari script and speak the language of Bollywood, business and everyday life in India.",
    difficulty: "Medium",
    difficultyLevel: 3,
    lessons: 100,
    duration: "5–8 months",
    learners: "6,400+",
    popularity: "Trending",
    bannerSubtitle: "An Indo-Aryan language written in the Devanagari script",
    history: "Hindi developed from Sanskrit-derived Prakrit dialects of North India and was standardised in the 19th–20th centuries. It shares deep vocabulary roots with Sanskrit and everyday roots with Urdu, and today serves as one of India's official languages.",
    countries: ["India", "Nepal (widely understood)", "Fiji (Fiji Hindi)", "Mauritius"],
    alphabet: { name: "Devanagari", count: 46, note: "33 consonants + 13 vowels, written left to right with a top connecting line." },
    pronunciation: [
      "Devanagari is largely phonetic — words are read as they're written.",
      "Aspirated vs unaspirated consonants matter (क vs ख).",
      "Nasal vowels are marked with a small dot (ं) above the letter."
    ],
    greetings: [
      { phrase: "नमस्ते (Namaste)", meaning: "Hello / greetings" },
      { phrase: "शुभ प्रभात (Shubh prabhaat)", meaning: "Good morning" },
      { phrase: "आप कैसे हैं? (Aap kaise hain?)", meaning: "How are you?" },
      { phrase: "आपसे मिलकर खुशी हुई", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "एक (Ek)" }, { n: 2, word: "दो (Do)" }, { n: 3, word: "तीन (Teen)" }, { n: 4, word: "चार (Chaar)" }, { n: 5, word: "पाँच (Paanch)" },
      { n: 6, word: "छह (Chhah)" }, { n: 7, word: "सात (Saat)" }, { n: 8, word: "आठ (Aath)" }, { n: 9, word: "नौ (Nau)" }, { n: 10, word: "दस (Das)" },
      { n: 11, word: "ग्यारह (Gyaarah)" }, { n: 12, word: "बारह (Baarah)" }, { n: 13, word: "तेरह (Terah)" }, { n: 14, word: "चौदह (Chaudah)" }, { n: 15, word: "पंद्रह (Pandrah)" },
      { n: 16, word: "सोलह (Solah)" }, { n: 17, word: "सत्रह (Satrah)" }, { n: 18, word: "अठारह (Athaarah)" }, { n: 19, word: "उन्नीस (Unnees)" }, { n: 20, word: "बीस (Bees)" }
    ],
    vocabulary: {
      "Everyday": ["पानी (water)", "खाना (food)", "घर (house)", "दोस्त (friend)", "समय (time)"],
      "Travel": ["हवाई अड्डा (airport)", "टिकट (ticket)", "होटल (hotel)", "पासपोर्ट (passport)"]
    },
    grammar: [
      "Word order is Subject–Object–Verb (मैं चावल खाता हूँ).",
      "Nouns and adjectives carry gender (masculine/feminine).",
      "Verbs change based on the subject's gender and number."
    ],
    roadmap: [
      "Learn Devanagari vowels & consonants",
      "Practice reading simple words",
      "Build 300-word survival vocabulary",
      "Master gender agreement rules",
      "Practice conversational sentences",
      "Watch Hindi media without subtitles"
    ],
    culture: [
      "Festivals like Diwali and Holi are central to the culture.",
      "Bollywood cinema heavily influences modern spoken Hindi.",
      "Respect is deeply ingrained, showing up in formal vs informal pronouns (Aap vs Tum)."
    ],
    resources: [
      { label: "Devanagari Script Guide", note: "Interactive tracer · placeholder link" },
      { label: "Beginner Course", note: "10 modules · placeholder link" },
      { label: "Conversation Practice", note: "Audio dialogues · placeholder link" }
    ],
    faq: [
      { q: "Do I really need to learn the script?", a: "Yes, learning Devanagari is essential. Relying on English letters (transliteration) will hurt your pronunciation long-term." },
      { q: "Is Hindi the same as Urdu?", a: "Spoken Hindi and Urdu are nearly identical (Hindustani), but they use different scripts and have different formal vocabulary." },
      { q: "How hard are the genders?", a: "Every noun is masculine or feminine, and verbs change to match. It takes practice, but the rules become intuitive." }
    ]
  },
  {
    id: "spanish",
    slug: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    description: "Pick up one of the easiest languages for English speakers, spoken across Europe and the Americas.",
    difficulty: "Easy",
    difficultyLevel: 2,
    lessons: 110,
    duration: "4–6 months",
    learners: "7,800+",
    popularity: "Popular",
    bannerSubtitle: "A Romance language spoken natively by over 480 million people",
    history: "Spanish evolved from Vulgar Latin spoken on the Iberian Peninsula and spread across the Americas, the Caribbean and parts of Africa and Asia through colonisation from the 15th century onward, absorbing Arabic influence along the way.",
    countries: ["Spain", "Mexico", "Argentina", "Colombia", "Peru", "Chile", "United States (widely spoken)"],
    alphabet: { name: "Latin script", count: 27, note: "26 letters plus 'ñ', with accent marks on vowels." },
    pronunciation: [
      "Spanish is highly phonetic — most letters have one consistent sound.",
      "Roll or tap the 'r' depending on single vs double 'rr'.",
      "Stress falls on the second-to-last syllable unless marked with an accent."
    ],
    greetings: [
      { phrase: "Hola", meaning: "Hello" },
      { phrase: "Buenos días", meaning: "Good morning" },
      { phrase: "¿Cómo estás?", meaning: "How are you?" },
      { phrase: "Mucho gusto", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "Uno" }, { n: 2, word: "Dos" }, { n: 3, word: "Tres" }, { n: 4, word: "Cuatro" }, { n: 5, word: "Cinco" },
      { n: 6, word: "Seis" }, { n: 7, word: "Siete" }, { n: 8, word: "Ocho" }, { n: 9, word: "Nueve" }, { n: 10, word: "Diez" },
      { n: 11, word: "Once" }, { n: 12, word: "Doce" }, { n: 13, word: "Trece" }, { n: 14, word: "Catorce" }, { n: 15, word: "Quince" },
      { n: 16, word: "Dieciséis" }, { n: 17, word: "Diecisiete" }, { n: 18, word: "Dieciocho" }, { n: 19, word: "Diecinueve" }, { n: 20, word: "Veinte" }
    ],
    vocabulary: {
      "Everyday": ["Agua (water)", "Comida (food)", "Casa (house)", "Amigo (friend)", "Tiempo (time)"],
      "Travel": ["Aeropuerto (airport)", "Boleto (ticket)", "Hotel", "Pasaporte (passport)"]
    },
    grammar: [
      "Subject–Verb–Object order, similar to English.",
      "Every noun has a gender that its articles and adjectives must match.",
      "Verbs conjugate distinctly for each subject pronoun."
    ],
    roadmap: [
      "Learn pronunciation & the alphabet",
      "Build core 500-word vocabulary",
      "Master present-tense conjugation",
      "Add past tenses (preterite & imperfect)",
      "Practice with native podcasts",
      "Attempt the subjunctive mood"
    ],
    culture: [
      "Spanish culture values strong family ties and late, social meals (like tapas).",
      "Dance and music, such as Flamenco and Salsa, are deeply embedded in Hispanic culture.",
      "Siestas are a traditional part of the culture in some regions, though less common in modern business."
    ],
    resources: [
      { label: "Beginner Course", note: "12 modules · placeholder link" },
      { label: "Conjugation Charts", note: "Downloadable PDF · placeholder link" },
      { label: "Podcast Playlist", note: "Native audio · placeholder link" }
    ],
    faq: [
      { q: "Is the 'R' hard to roll?", a: "It takes practice. Start by trying to say 'butter' very fast; the flap of your tongue is the first step to the Spanish R." },
      { q: "Latin American vs. European Spanish?", a: "They are mutually intelligible. The main differences are in vocabulary (like slang) and the 'vosotros' pronoun used only in Spain." },
      { q: "What is the subjunctive?", a: "It's a mood used to express doubt, emotion, or uncertainty. It's a key part of intermediate Spanish." }
    ]
  },
  {
    id: "french",
    slug: "french",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    description: "Learn the elegant sounds of French, spoken across Europe, Africa and Canada.",
    difficulty: "Medium",
    difficultyLevel: 3,
    lessons: 105,
    duration: "5–7 months",
    learners: "5,900+",
    popularity: "Trending",
    bannerSubtitle: "A Romance language and a working language of the UN and EU",
    history: "French descended from the Latin spoken in Roman Gaul, standardised around the Paris region, and spread through French colonial expansion so that today it is spoken natively and as a second language across five continents.",
    countries: ["France", "Canada", "Belgium", "Switzerland", "Senegal", "Ivory Coast", "DR Congo"],
    alphabet: { name: "Latin script", count: 26, note: "26 letters with accents (é, è, ê, ç) affecting pronunciation." },
    pronunciation: [
      "Many final consonants are silent unless followed by a vowel (liaison).",
      "Nasal vowels (an, in, on, un) have no direct English equivalent — practice by ear.",
      "Stress is even across a phrase, with slight emphasis on the final syllable."
    ],
    greetings: [
      { phrase: "Bonjour", meaning: "Hello / Good day" },
      { phrase: "Bonsoir", meaning: "Good evening" },
      { phrase: "Comment ça va?", meaning: "How are you?" },
      { phrase: "Enchanté(e)", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "Un" }, { n: 2, word: "Deux" }, { n: 3, word: "Trois" }, { n: 4, word: "Quatre" }, { n: 5, word: "Cinq" },
      { n: 6, word: "Six" }, { n: 7, word: "Sept" }, { n: 8, word: "Huit" }, { n: 9, word: "Neuf" }, { n: 10, word: "Dix" },
      { n: 11, word: "Onze" }, { n: 12, word: "Douze" }, { n: 13, word: "Treize" }, { n: 14, word: "Quatorze" }, { n: 15, word: "Quinze" },
      { n: 16, word: "Seize" }, { n: 17, word: "Dix-sept" }, { n: 18, word: "Dix-huit" }, { n: 19, word: "Dix-neuf" }, { n: 20, word: "Vingt" }
    ],
    vocabulary: {
      "Everyday": ["Eau (water)", "Nourriture (food)", "Maison (house)", "Ami (friend)", "Temps (time)"],
      "Travel": ["Aéroport (airport)", "Billet (ticket)", "Hôtel", "Passeport (passport)"]
    },
    grammar: [
      "Nouns carry grammatical gender that changes articles and adjectives.",
      "Verbs conjugate differently across three main regular verb groups.",
      "Formal 'vous' and informal 'tu' both mean 'you', chosen by context."
    ],
    roadmap: [
      "Master French pronunciation & liaison rules",
      "Learn gendered noun patterns",
      "Build core 500-word vocabulary",
      "Practice present-tense verb groups",
      "Add passé composé for past events",
      "Hold everyday conversations"
    ],
    culture: [
      "French cuisine and dining etiquette are renowned worldwide and taken very seriously.",
      "The concept of 'laïcité' (secularism) is a core pillar of modern French society.",
      "Literature, philosophy, and cinema are highly celebrated parts of daily life."
    ],
    resources: [
      { label: "Beginner Course", note: "11 modules · placeholder link" },
      { label: "Pronunciation Guide", note: "Audio walkthrough · placeholder link" },
      { label: "Grammar Reference", note: "PDF guide · placeholder link" }
    ],
    faq: [
      { q: "Why are there so many silent letters?", a: "French spelling reflects its history rather than its modern pronunciation. Over time, you learn the patterns (like dropping final consonants)." },
      { q: "How do I know if a noun is masculine or feminine?", a: "Look at the ending of the word. Words ending in -tion or -ette are usually feminine, while words ending in -ment or -eau are usually masculine." },
      { q: "What is liaison?", a: "Liaison is linking the final consonant of one word with the beginning vowel of the next to maintain a smooth flow of speech." }
    ]
  },
  {
    id: "japanese",
    slug: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    description: "Explore Hiragana, Katakana and Kanji while learning one of the most distinctive languages in the world.",
    difficulty: "Hard",
    difficultyLevel: 5,
    lessons: 130,
    duration: "10–18 months",
    learners: "4,300+",
    popularity: "New",
    bannerSubtitle: "A language isolate written with three combined scripts",
    history: "Japanese developed largely in isolation on the Japanese archipelago, borrowing Chinese characters (Kanji) starting around the 5th century and later developing two phonetic scripts, Hiragana and Katakana, to fit its own grammar.",
    countries: ["Japan"],
    alphabet: { name: "Hiragana, Katakana & Kanji", count: 46, note: "46 Hiragana + 46 Katakana characters, plus thousands of Kanji." },
    pronunciation: [
      "Japanese has only 5 vowel sounds, always pronounced the same way.",
      "Pitch accent changes word meaning more than stress does.",
      "Syllables are evenly timed, giving Japanese its steady rhythm."
    ],
    greetings: [
      { phrase: "こんにちは (Konnichiwa)", meaning: "Hello" },
      { phrase: "おはようございます (Ohayou gozaimasu)", meaning: "Good morning" },
      { phrase: "お元気ですか? (O-genki desu ka?)", meaning: "How are you?" },
      { phrase: "はじめまして (Hajimemashite)", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "一 (Ichi)" }, { n: 2, word: "二 (Ni)" }, { n: 3, word: "三 (San)" }, { n: 4, word: "四 (Yon)" }, { n: 5, word: "五 (Go)" },
      { n: 6, word: "六 (Roku)" }, { n: 7, word: "七 (Nana/Shichi)" }, { n: 8, word: "八 (Hachi)" }, { n: 9, word: "九 (Kyuu/Ku)" }, { n: 10, word: "十 (Juu)" },
      { n: 11, word: "十一 (Juuichi)" }, { n: 12, word: "十二 (Juuni)" }, { n: 13, word: "十三 (Juusan)" }, { n: 14, word: "十四 (Juuyon)" }, { n: 15, word: "十五 (Juugo)" },
      { n: 16, word: "十六 (Juuroku)" }, { n: 17, word: "十七 (Juunana)" }, { n: 18, word: "十八 (Juuhachi)" }, { n: 19, word: "十九 (Juukyuu)" }, { n: 20, word: "二十 (Nijuu)" }
    ],
    vocabulary: {
      "Everyday": ["水 (water)", "食べ物 (food)", "家 (house)", "友達 (friend)", "時間 (time)"],
      "Travel": ["空港 (airport)", "切符 (ticket)", "ホテル (hotel)", "パスポート (passport)"]
    },
    grammar: [
      "Word order is Subject–Object–Verb (私はご飯を食べます).",
      "Particles like は, を and に mark grammatical roles instead of word order.",
      "Verbs conjugate for politeness level rather than for the subject's person or number."
    ],
    roadmap: [
      "Master Hiragana and Katakana",
      "Learn basic particles & sentence structure",
      "Build 300 essential Kanji",
      "Practice polite conversational forms",
      "Add plain/casual speech forms",
      "Read simple native material"
    ],
    culture: [
      "Politeness and reading the atmosphere (kuuki wo yomu) are critical in social interactions.",
      "Bowing is the standard greeting, varying in depth based on respect and formality.",
      "Traditional arts like tea ceremonies (sado) contrast deeply with modern pop culture like anime."
    ],
    resources: [
      { label: "Hiragana & Katakana Trainer", note: "Interactive drills · placeholder link" },
      { label: "Beginner Course", note: "14 modules · placeholder link" },
      { label: "Kanji Flashcards", note: "300-card deck · placeholder link" }
    ],
    faq: [
      { q: "Should I learn Kanji?", a: "Yes, you cannot truly read or understand Japanese without Kanji. Start with the most common 300 radicals and characters." },
      { q: "Is anime a good way to learn?", a: "It's good for listening practice, but be careful! Anime characters use highly exaggerated, casual language that is inappropriate in real life." },
      { q: "What are particles?", a: "Particles are small words (like 'wa' or 'o') attached to nouns to indicate their grammatical role in the sentence." }
    ]
  },
  {
    id: "telugu",
    slug: "telugu",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
    description: "Discover the melodic Dravidian language of South India, known for its rich literature and cinema.",
    difficulty: "Medium",
    difficultyLevel: 4,
    lessons: 90,
    duration: "6–9 months",
    learners: "3,100+",
    popularity: "New",
    bannerSubtitle: "A classical Dravidian language spoken mainly in South India",
    history: "Telugu descends from the Dravidian language family and has a continuous literary tradition dating back over a thousand years, historically nicknamed the 'Italian of the East' for its vowel-rich, melodic sound.",
    countries: ["India (Andhra Pradesh & Telangana)"],
    alphabet: { name: "Telugu script", count: 56, note: "Rounded Brahmic script with 16 vowels and 40 consonants." },
    pronunciation: [
      "Almost every word ends in a vowel, giving Telugu its flowing sound.",
      "Consonants can be aspirated or unaspirated — listen closely for the difference.",
      "The script is phonetic: each symbol maps to one consistent sound."
    ],
    greetings: [
      { phrase: "నమస్కారం (Namaskaram)", meaning: "Hello / greetings" },
      { phrase: "శుభోదయం (Shubhodayam)", meaning: "Good morning" },
      { phrase: "మీరు ఎలా ఉన్నారు? (Meeru ela unnaru?)", meaning: "How are you?" },
      { phrase: "మిమ్మల్ని కలవడం సంతోషం", meaning: "Nice to meet you" }
    ],
    numbers: [
      { n: 1, word: "ఒకటి (Okati)" }, { n: 2, word: "రెండు (Rendu)" }, { n: 3, word: "మూడు (Moodu)" }, { n: 4, word: "నాలుగు (Naalugu)" }, { n: 5, word: "ఐదు (Aidu)" },
      { n: 6, word: "ఆరు (Aaru)" }, { n: 7, word: "ఏడు (Eedu)" }, { n: 8, word: "ఎనిమిది (Enimidi)" }, { n: 9, word: "తొమ్మిది (Tommidi)" }, { n: 10, word: "పది (Padi)" },
      { n: 11, word: "పదకొండు (Padakondu)" }, { n: 12, word: "పన్నెండు (Pannendu)" }, { n: 13, word: "పదమూడు (Padamoodu)" }, { n: 14, word: "పద్నాలుగు (Padnalugu)" }, { n: 15, word: "పదిహేను (Padihenu)" },
      { n: 16, word: "పదహారు (Padahaaru)" }, { n: 17, word: "పదిహేడు (Padiheedu)" }, { n: 18, word: "పద్దెనిమిది (Paddenimidi)" }, { n: 19, word: "పంతొమ్మిది (Pantommidi)" }, { n: 20, word: "ఇరవై (Iravai)" }
    ],
    vocabulary: {
      "Everyday": ["నీళ్ళు (water)", "ఆహారం (food)", "ఇల్లు (house)", "స్నేహితుడు (friend)", "సమయం (time)"],
      "Travel": ["విమానాశ్రయం (airport)", "టికెట్ (ticket)", "హోటల్ (hotel)", "పాస్‌పోర్ట్ (passport)"]
    },
    grammar: [
      "Word order is typically Subject–Object–Verb.",
      "It's an agglutinative language — suffixes stack onto root words to add meaning.",
      "Nouns are marked for case using suffixes rather than separate words."
    ],
    roadmap: [
      "Learn Telugu vowels & consonants",
      "Practice reading common words",
      "Build 300-word survival vocabulary",
      "Learn core case-marking suffixes",
      "Practice everyday conversation",
      "Enjoy Telugu cinema without subtitles"
    ],
    culture: [
      "Telugu cinema (Tollywood) is one of the largest and most influential film industries in India.",
      "Classical Kuchipudi dance and Carnatic music are deeply embedded in the region's heritage.",
      "Festivals like Sankranti and Ugadi (Telugu New Year) are celebrated with immense enthusiasm and traditional feasts."
    ],
    resources: [
      { label: "Script Tracer", note: "Interactive guide · placeholder link" },
      { label: "Beginner Course", note: "9 modules · placeholder link" },
      { label: "Conversation Practice", note: "Audio dialogues · placeholder link" }
    ],
    faq: [
      { q: "Is Telugu related to Hindi?", a: "No, Telugu is a Dravidian language native to South India, while Hindi is Indo-Aryan. They have completely different grammar structures, though they share some Sanskrit loanwords." },
      { q: "Why do the letters look so round?", a: "Historically, Telugu was written on palm leaves using a stylus. Straight lines would tear the leaf, so rounded scripts were developed to prevent this." },
      { q: "Is it difficult to pronounce?", a: "Telugu is phonetic and every letter has a strict sound. Once you master the alphabet, pronunciation is very predictable!" }
    ]
  }
];

export const LANGUAGES = languagesData;
