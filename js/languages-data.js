/* ==========================================================================
   LinguaVerse — Language Data Source
   Single source of truth for every language card & the dynamic details page.
   Add a new language by pushing another object into LANGUAGES below —
   every page that reads this file will pick it up automatically.
   ========================================================================== */

const LANGUAGES = [
  {
    id: "english",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    tagline: "The world's global connector",
    description: "Master the language of business, travel and the internet with practical, real-world lessons.",
    difficulty: "Easy",
    difficultyLevel: 2,
    lessons: 120,
    duration: "3–6 months",
    learners: "9,200+",
    accent: "indigo",
    popularity: "Popular",
    details: {
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
        { n: 1, word: "One" }, { n: 2, word: "Two" }, { n: 3, word: "Three" },
        { n: 4, word: "Four" }, { n: 5, word: "Five" }
      ],
      phrases: [
        { phrase: "Could you repeat that, please?", meaning: "Polite request to repeat" },
        { phrase: "I don't understand", meaning: "Expressing confusion" },
        { phrase: "Where is the nearest station?", meaning: "Asking for directions" }
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
      levels: [
        { level: "Beginner", desc: "Greetings, basic questions, present tense, core vocabulary." },
        { level: "Intermediate", desc: "Past/future tenses, conditionals, everyday conversation." },
        { level: "Advanced", desc: "Idioms, nuanced writing, professional & academic English." }
      ],
      roadmap: [
        "Learn the alphabet & sounds",
        "Build core 500-word vocabulary",
        "Practice present-tense conversation",
        "Add past & future tenses",
        "Practice listening with native audio",
        "Hold 10-minute unscripted conversations"
      ],
      tips: [
        "Watch shows with English subtitles, not your native ones.",
        "Keep a phrase journal instead of a word list.",
        "Speak out loud daily, even alone."
      ],
      related: ["french", "spanish"],
      facts: [
        "English has more words than most languages, largely due to borrowing.",
        "It's the most widely used second language in the world.",
        "About 400 million people speak it as a first language."
      ],
      resources: [
        { label: "Beginner Course", note: "12 modules · placeholder link" },
        { label: "Grammar Handbook", note: "PDF guide · placeholder link" },
        { label: "Listening Practice", note: "Audio library · placeholder link" }
      ]
    }
  },
  {
    id: "hindi",
    name: "Hindi",
    nativeName: "हिन्दी",
    flag: "🇮🇳",
    tagline: "The heartbeat of North India",
    description: "Learn the Devanagari script and speak the language of Bollywood, business and everyday life in India.",
    difficulty: "Medium",
    difficultyLevel: 3,
    lessons: 100,
    duration: "5–8 months",
    learners: "6,400+",
    accent: "amber",
    popularity: "Trending",
    details: {
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
        { n: 1, word: "एक (Ek)" }, { n: 2, word: "दो (Do)" }, { n: 3, word: "तीन (Teen)" },
        { n: 4, word: "चार (Chaar)" }, { n: 5, word: "पाँच (Paanch)" }
      ],
      phrases: [
        { phrase: "क्या आप दोहरा सकते हैं?", meaning: "Could you repeat that?" },
        { phrase: "मुझे समझ नहीं आया", meaning: "I don't understand" },
        { phrase: "सबसे नज़दीकी स्टेशन कहाँ है?", meaning: "Where is the nearest station?" }
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
      levels: [
        { level: "Beginner", desc: "Devanagari script, greetings, simple present tense." },
        { level: "Intermediate", desc: "Gendered agreement, past/future tense, daily conversation." },
        { level: "Advanced", desc: "Formal registers, poetry, complex sentence structures." }
      ],
      roadmap: [
        "Learn Devanagari vowels & consonants",
        "Practice reading simple words",
        "Build 300-word survival vocabulary",
        "Master gender agreement rules",
        "Practice conversational sentences",
        "Watch Hindi media without subtitles"
      ],
      tips: [
        "Learn the script before chasing fluency — it unlocks everything else.",
        "Bollywood songs are a fun way to absorb rhythm and vocabulary.",
        "Practice gendered verb endings with flashcards."
      ],
      related: ["telugu"],
      facts: [
        "Hindi is one of the most spoken languages on Earth by total speakers.",
        "It shares a large vocabulary base with Sanskrit and Urdu.",
        "India's film industry produces Hindi content watched worldwide."
      ],
      resources: [
        { label: "Devanagari Script Guide", note: "Interactive tracer · placeholder link" },
        { label: "Beginner Course", note: "10 modules · placeholder link" },
        { label: "Conversation Practice", note: "Audio dialogues · placeholder link" }
      ]
    }
  },
  {
    id: "spanish",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
    tagline: "A gateway to 20+ countries",
    description: "Pick up one of the easiest languages for English speakers, spoken across Europe and the Americas.",
    difficulty: "Easy",
    difficultyLevel: 2,
    lessons: 110,
    duration: "4–6 months",
    learners: "7,800+",
    accent: "coral",
    popularity: "Popular",
    details: {
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
        { n: 1, word: "Uno" }, { n: 2, word: "Dos" }, { n: 3, word: "Tres" },
        { n: 4, word: "Cuatro" }, { n: 5, word: "Cinco" }
      ],
      phrases: [
        { phrase: "¿Puedes repetir eso?", meaning: "Could you repeat that?" },
        { phrase: "No entiendo", meaning: "I don't understand" },
        { phrase: "¿Dónde está la estación más cercana?", meaning: "Where is the nearest station?" }
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
      levels: [
        { level: "Beginner", desc: "Greetings, present tense, gendered nouns." },
        { level: "Intermediate", desc: "Preterite/imperfect past tenses, subjunctive intro." },
        { level: "Advanced", desc: "Full subjunctive mood, idioms, regional dialects." }
      ],
      roadmap: [
        "Learn pronunciation & the alphabet",
        "Build core 500-word vocabulary",
        "Master present-tense conjugation",
        "Add past tenses (preterite & imperfect)",
        "Practice with native podcasts",
        "Attempt the subjunctive mood"
      ],
      tips: [
        "Latin American and European Spanish differ — pick one accent first.",
        "Conjugation drills pay off fast; do them daily in short bursts.",
        "Find a language exchange partner for real conversation practice."
      ],
      related: ["french", "english"],
      facts: [
        "Spanish is an official language in 20 countries.",
        "It's the second most spoken native language in the world.",
        "Spanish and English share thousands of cognates (e.g. 'nación'/'nation')."
      ],
      resources: [
        { label: "Beginner Course", note: "12 modules · placeholder link" },
        { label: "Conjugation Charts", note: "Downloadable PDF · placeholder link" },
        { label: "Podcast Playlist", note: "Native audio · placeholder link" }
      ]
    }
  },
  {
    id: "french",
    name: "French",
    nativeName: "Français",
    flag: "🇫🇷",
    tagline: "The language of culture & diplomacy",
    description: "Learn the elegant sounds of French, spoken across Europe, Africa and Canada.",
    difficulty: "Medium",
    difficultyLevel: 3,
    lessons: 105,
    duration: "5–7 months",
    learners: "5,900+",
    accent: "indigo",
    popularity: "Trending",
    details: {
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
        { n: 1, word: "Un" }, { n: 2, word: "Deux" }, { n: 3, word: "Trois" },
        { n: 4, word: "Quatre" }, { n: 5, word: "Cinq" }
      ],
      phrases: [
        { phrase: "Pouvez-vous répéter, s'il vous plaît?", meaning: "Could you repeat that, please?" },
        { phrase: "Je ne comprends pas", meaning: "I don't understand" },
        { phrase: "Où est la gare la plus proche?", meaning: "Where is the nearest station?" }
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
      levels: [
        { level: "Beginner", desc: "Pronunciation, gendered nouns, present tense." },
        { level: "Intermediate", desc: "Passé composé, imperfect, everyday fluency." },
        { level: "Advanced", desc: "Subjunctive mood, literary tenses, nuanced style." }
      ],
      roadmap: [
        "Master French pronunciation & liaison rules",
        "Learn gendered noun patterns",
        "Build core 500-word vocabulary",
        "Practice present-tense verb groups",
        "Add passé composé for past events",
        "Hold everyday conversations"
      ],
      tips: [
        "Shadow native speakers to internalise rhythm and liaison.",
        "Learn nouns with their article (le/la) from day one.",
        "French radio and podcasts help tune your ear early."
      ],
      related: ["spanish", "english"],
      facts: [
        "French is an official language in 29 countries.",
        "It shares roughly 30% of English vocabulary through shared Latin roots.",
        "French is one of the six official languages of the United Nations."
      ],
      resources: [
        { label: "Beginner Course", note: "11 modules · placeholder link" },
        { label: "Pronunciation Guide", note: "Audio walkthrough · placeholder link" },
        { label: "Grammar Reference", note: "PDF guide · placeholder link" }
      ]
    }
  },
  {
    id: "japanese",
    name: "Japanese",
    nativeName: "日本語",
    flag: "🇯🇵",
    tagline: "Unlock anime, tech & tradition",
    description: "Explore Hiragana, Katakana and Kanji while learning one of the most distinctive languages in the world.",
    difficulty: "Hard",
    difficultyLevel: 5,
    lessons: 130,
    duration: "10–18 months",
    learners: "4,300+",
    accent: "coral",
    popularity: "New",
    details: {
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
        { n: 1, word: "一 (Ichi)" }, { n: 2, word: "二 (Ni)" }, { n: 3, word: "三 (San)" },
        { n: 4, word: "四 (Yon)" }, { n: 5, word: "五 (Go)" }
      ],
      phrases: [
        { phrase: "もう一度言ってください", meaning: "Could you say that again, please?" },
        { phrase: "わかりません", meaning: "I don't understand" },
        { phrase: "一番近い駅はどこですか?", meaning: "Where is the nearest station?" }
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
      levels: [
        { level: "Beginner", desc: "Hiragana & Katakana, basic particles, polite present tense." },
        { level: "Intermediate", desc: "Core Kanji, plain form, more natural conversation." },
        { level: "Advanced", desc: "Extended Kanji, keigo (honorific speech), nuanced writing." }
      ],
      roadmap: [
        "Master Hiragana and Katakana",
        "Learn basic particles & sentence structure",
        "Build 300 essential Kanji",
        "Practice polite conversational forms",
        "Add plain/casual speech forms",
        "Read simple native material"
      ],
      tips: [
        "Learn Hiragana and Katakana fully before touching Kanji.",
        "Study Kanji with mnemonics and stroke order together.",
        "Immerse with anime or podcasts using subtitles at first."
      ],
      related: ["telugu"],
      facts: [
        "Japanese uses three scripts together in ordinary writing.",
        "Politeness levels are built directly into verb grammar.",
        "It has no grammatical gender and no plural nouns."
      ],
      resources: [
        { label: "Hiragana & Katakana Trainer", note: "Interactive drills · placeholder link" },
        { label: "Beginner Course", note: "14 modules · placeholder link" },
        { label: "Kanji Flashcards", note: "300-card deck · placeholder link" }
      ]
    }
  },
  {
    id: "telugu",
    name: "Telugu",
    nativeName: "తెలుగు",
    flag: "🇮🇳",
    tagline: "The 'Italian of the East'",
    description: "Discover the melodic Dravidian language of South India, known for its rich literature and cinema.",
    difficulty: "Medium",
    difficultyLevel: 4,
    lessons: 90,
    duration: "6–9 months",
    learners: "3,100+",
    accent: "amber",
    popularity: "New",
    details: {
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
        { n: 1, word: "ఒకటి (Okati)" }, { n: 2, word: "రెండు (Rendu)" }, { n: 3, word: "మూడు (Moodu)" },
        { n: 4, word: "నాలుగు (Naalugu)" }, { n: 5, word: "ఐదు (Aidu)" }
      ],
      phrases: [
        { phrase: "మీరు మళ్ళీ చెప్పగలరా?", meaning: "Could you repeat that?" },
        { phrase: "నాకు అర్థం కాలేదు", meaning: "I don't understand" },
        { phrase: "దగ్గరలో ఉన్న స్టేషన్ ఎక్కడ ఉంది?", meaning: "Where is the nearest station?" }
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
      levels: [
        { level: "Beginner", desc: "Telugu script, greetings, simple sentence patterns." },
        { level: "Intermediate", desc: "Case suffixes, verb conjugation, daily conversation." },
        { level: "Advanced", desc: "Literary Telugu, formal registers, classical poetry." }
      ],
      roadmap: [
        "Learn Telugu vowels & consonants",
        "Practice reading common words",
        "Build 300-word survival vocabulary",
        "Learn core case-marking suffixes",
        "Practice everyday conversation",
        "Enjoy Telugu cinema without subtitles"
      ],
      tips: [
        "Learn the script early — it's fully phonetic and pays off fast.",
        "Telugu cinema and music are a fun, natural immersion source.",
        "Practice suffix patterns with simple sentence drills."
      ],
      related: ["hindi"],
      facts: [
        "Telugu has classical language status in India for its ancient literature.",
        "It's one of the most spoken Dravidian languages in the world.",
        "Telugu cinema (Tollywood) is one of India's largest film industries."
      ],
      resources: [
        { label: "Script Tracer", note: "Interactive guide · placeholder link" },
        { label: "Beginner Course", note: "9 modules · placeholder link" },
        { label: "Conversation Practice", note: "Audio dialogues · placeholder link" }
      ]
    }
  }
];

// Small helper so other scripts can fetch a language by its id
function getLanguageById(id) {
  return LANGUAGES.find((lang) => lang.id === id) || null;
}
