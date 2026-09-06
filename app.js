/* Manthan Prep – a focused UPSC study companion prototype */

const icons = {
  home: '<path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1Z"/><path d="M8 21h8"/>',
  book: '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v16H6.5A2.5 2.5 0 0 0 4 21.5Z"/><path d="M4 5.5v16M8 7h8M8 11h8"/>',
  clipboard: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3h6v1M8 9h8M8 13h6M8 17h4"/>',
  users: '<path d="M16 20v-1.5a4.5 4.5 0 0 0-4.5-4.5h-3A4.5 4.5 0 0 0 4 18.5V20"/><circle cx="10" cy="7" r="3"/><path d="M16 11a3 3 0 1 0-1.3-5.7M17 14.2a4.5 4.5 0 0 1 3 4.3V20"/>',
  user: '<circle cx="12" cy="8" r="3.5"/><path d="M5 21v-1.4A5.6 5.6 0 0 1 10.6 14h2.8a5.6 5.6 0 0 1 5.6 5.6V21"/>',
  spark: '<path d="m12 3-1.4 5.6L5 10l5.6 1.4L12 17l1.4-5.6L19 10l-5.6-1.4Z"/><path d="m19 16-.6 2.4L16 19l2.4.6L19 22l.6-2.4L22 19l-2.4-.6Z"/>',
  bookmark: '<path d="M6 4.5A1.5 1.5 0 0 1 7.5 3h9A1.5 1.5 0 0 1 18 4.5V21l-6-3.8L6 21Z"/>',
  pen: '<path d="m14.5 5.5 4 4M5 19l.8-3.4L16.8 4.6a1.8 1.8 0 0 1 2.6 0l.1.1a1.8 1.8 0 0 1 0 2.6L8.4 18.4Z"/><path d="M4 21h16"/>',
  scroll: '<path d="M5 4h13a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"/><path d="M8 8h8M8 12h8M8 16h5"/>',
  calendar: '<rect x="3" y="4.5" width="18" height="16" rx="2"/><path d="M7 3v3M17 3v3M3 9h18M7 13h.01M11 13h.01M15 13h.01M7 17h.01M11 17h.01"/>',
  bell: '<path d="M18 9a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9ZM10 21h4"/>',
  search: '<circle cx="10.8" cy="10.8" r="6.8"/><path d="m16 16 5 5"/>',
  arrowRight: '<path d="M4 12h16M14 6l6 6-6 6"/>',
  arrowLeft: '<path d="M20 12H4M10 6l-6 6 6 6"/>',
  chevronDown: '<path d="m6 9 6 6 6-6"/>',
  chevronRight: '<path d="m9 18 6-6-6-6"/>',
  check: '<path d="m5 12 4 4L19 6"/>',
  circleCheck: '<circle cx="12" cy="12" r="9"/><path d="m8 12 2.7 2.7L16.5 9"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  bolt: '<path d="m13 2-8 11h6l-1 9 8-12h-6Z"/>',
  flame: '<path d="M12.2 22c4.2 0 7.3-2.7 7.3-6.9 0-3.1-1.6-5.5-4.6-8.1.2 2.3-.6 3.7-1.9 4.5.1-3.8-1.6-7-5-9.5.4 3.9-3.1 5.8-3.1 10.7C4.9 18.4 8 22 12.2 22Z"/>',
  target: '<circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.2"/><path d="M12 1v3M12 20v3M1 12h3M20 12h3"/>',
  chart: '<path d="M4 19V5M4 19h17"/><path d="m7 15 3-4 3 2 5-7"/><path d="M17 6h2v2"/>',
  crown: '<path d="m3 7 4 3 5-6 5 6 4-3-2 12H5Z"/><path d="M5 22h14"/>',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 10v6M12 7.2v.1"/>',
  lock: '<rect x="5" y="10" width="14" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/>',
  settings: '<path d="M12 15.2A3.2 3.2 0 1 0 12 8.8a3.2 3.2 0 0 0 0 6.4Z"/><path d="m19.4 15 .1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.8 1.8 0 0 0-3.1 1.3v.2a2 2 0 1 1-4 0v-.2a1.8 1.8 0 0 0-3.1-1.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.8 1.8 0 0 0-1.3-3.1h-.2a2 2 0 1 1 0-4h.2a1.8 1.8 0 0 0 1.3-3.1l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.8 1.8 0 0 0 3.1-1.3v-.2a2 2 0 1 1 4 0v.2a1.8 1.8 0 0 0 3.1 1.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.8 1.8 0 0 0 1.3 3.1h.2a2 2 0 1 1 0 4h-.2a1.8 1.8 0 0 0-1.3 3.1Z"/>',
  logOut: '<path d="M10 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h5M15 16l4-4-4-4M19 12H9"/>',
  play: '<path d="m9 6 9 6-9 6Z"/>',
  shield: '<path d="M12 3 20 6v5c0 5.2-3.4 8.9-8 10-4.6-1.1-8-4.8-8-10V6Z"/><path d="m9 12 2 2 4-4"/>',
  globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.2 2.4 3.3 5.4 3.3 9s-1.1 6.6-3.3 9c-2.2-2.4-3.3-5.4-3.3-9S9.8 5.4 12 3Z"/>',
  grid: '<rect x="4" y="4" width="6" height="6" rx="1"/><rect x="14" y="4" width="6" height="6" rx="1"/><rect x="4" y="14" width="6" height="6" rx="1"/><rect x="14" y="14" width="6" height="6" rx="1"/>',
  trophy: '<path d="M8 4h8v5a4 4 0 0 1-8 0Z"/><path d="M8 6H5a1 1 0 0 0-1 1v.5A4.5 4.5 0 0 0 8.5 12M16 6h3a1 1 0 0 1 1 1v.5a4.5 4.5 0 0 1-4.5 4.5M12 13v4M8 21h8M9 17h6"/>',
  filter: '<path d="M4 6h16M7 12h10M10 18h4"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  refresh: '<path d="M20 11a8 8 0 0 0-14.8-4L3 9M3 4v5h5M4 13a8 8 0 0 0 14.8 4L21 15M21 20v-5h-5"/>',
  send: '<path d="m21 3-7.5 18-3.7-7.8L2 9.5Z"/><path d="M21 3 9.8 13.2"/>',
  menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
  image: '<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="8.5" cy="9" r="1.3"/><path d="m3 17 5-5 3 3 2-2 8 6"/>',
  crop: '<path d="M6 3v12a3 3 0 0 0 3 3h12M3 6h12a3 3 0 0 1 3 3v12M8 8h8v8"/>',
  close: '<path d="m6 6 12 12M18 6 6 18"/>',
  upload: '<path d="M12 16V4M8 8l4-4 4 4M5 14v4a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-4"/>',
  lightbulb: '<path d="M9 18h6M10 22h4M8.3 14.5A6.5 6.5 0 1 1 15.7 14.5c-.9.7-1.4 1.6-1.6 2.5H9.9c-.2-.9-.7-1.8-1.6-2.5Z"/><path d="M9.5 10.5c.7-1.5 2.3-2.5 4-2.5"/>',
  puzzle: '<path d="M9 3h3a2 2 0 1 1 4 0h3a2 2 0 0 1 2 2v3a2 2 0 1 0 0 4v3a2 2 0 0 1-2 2h-3a2 2 0 1 0-4 0H9a2 2 0 0 1-2-2v-3a2 2 0 1 0 0-4V5a2 2 0 0 1 2-2Z"/><path d="M12 3v3M7 12h3M14 18v3"/>',
  coffee: '<path d="M5 8h11v6a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4Z"/><path d="M16 10h2a2.5 2.5 0 0 1 0 5h-2M7 4c0 1 1 1 1 2M11 4c0 1 1 1 1 2M5 21h13"/>',
  headset: '<path d="M4 14v-2a8 8 0 0 1 16 0v2"/><path d="M4 14h3v5H5a1 1 0 0 1-1-1ZM20 14h-3v5h2a1 1 0 0 0 1-1Z"/><path d="M17 19c-.5 2-2.2 3-5 3"/>',
  edit: '<path d="M4 20h4L19 9a2.8 2.8 0 0 0-4-4L4 16Z"/><path d="m13.5 6.5 4 4M4 20l1-4"/>',
};

function icon(name, size = 18, className = '') {
  return `<svg class="icon ${className}" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name] || icons.info}</svg>`;
}

const subjects = [
  { id: 'history', name: 'History', icon: 'scroll', description: 'Ancient, medieval & modern India', percent: 74, topics: 24, done: 18 },
  { id: 'polity', name: 'Indian Polity', icon: 'shield', description: 'Constitution, governance & rights', percent: 82, topics: 22, done: 18 },
  { id: 'geography', name: 'Geography', icon: 'globe', description: 'Physical, human & Indian geography', percent: 58, topics: 19, done: 11 },
  { id: 'economy', name: 'Economy', icon: 'chart', description: 'Macro, banking & development', percent: 61, topics: 18, done: 11 },
  { id: 'science', name: 'Science & Tech', icon: 'spark', description: 'Everyday science & emerging tech', percent: 46, topics: 15, done: 7 },
  { id: 'current-affairs', name: 'Current Affairs', icon: 'calendar', description: 'Daily news with exam relevance', percent: 71, topics: 14, done: 10 },
];

const topicMap = {
  history: ['Indus Valley Civilisation', 'Buddhism and Jainism', 'Mughal administration', 'The Revolt of 1857', 'Constitutional developments'],
  polity: ['Constitutional framework', 'Fundamental Rights & DPSP', 'Parliament and legislative procedure', 'Judiciary and judicial review', 'Local government and federalism'],
  geography: ['Geomorphology and landforms', 'Indian monsoon system', 'Rivers and drainage', 'Agriculture and resources', 'Mapping and locations'],
  economy: ['National income and growth', 'Inflation and monetary policy', 'Fiscal policy and taxation', 'External sector', 'Inclusive development'],
  science: ['Biology and human health', 'Space technology', 'Information technology', 'Environment technology', 'Defence technology'],
  'current-affairs': ['Polity and governance', 'Economy and indices', 'International relations', 'Environment and ecology', 'Science and technology'],
};

const questions = [
  {
    id: 'q1', subject: 'Indian Polity', topic: 'Constitutional framework', difficulty: 'Moderate', pyq: true, year: '2021',
    text: 'Consider the following statements about the office of the Comptroller and Auditor General of India:',
    options: ['The CAG submits audit reports directly to the Parliament.', 'The CAG holds office for a period of six years or until attaining 65 years of age.', 'The CAG can be removed in the same manner and on the same grounds as a judge of the Supreme Court.', 'Both 2 and 3'],
    correct: 2,
    explanation: 'The CAG is an independent constitutional authority under Article 148. Although reports are submitted to the President or Governor, they are laid before Parliament or the State Legislature. The CAG is removed in the same manner as a Supreme Court judge, and the tenure is six years or until 65 years, whichever is earlier.',
    model: 'The CAG safeguards legislative control over public finance. Security of tenure and a difficult removal process protect audit independence, while the legislature uses the reports through its Public Accounts Committee.'
  },
  {
    id: 'q2', subject: 'Geography', topic: 'Indian monsoon system', difficulty: 'Easy', pyq: false, year: '',
    text: 'Which of the following best explains the onset of the southwest monsoon over Kerala?',
    options: ['Seasonal reversal of winds caused by differential heating of land and sea', 'The annual migration of the Inter-Tropical Convergence Zone alone', 'The weakening of the subtropical westerly jet over northern India', 'The formation of a permanent low-pressure cell over the Arabian Sea'],
    correct: 0,
    explanation: 'The southwest monsoon is a complex system shaped by differential heating, the seasonal shift of the ITCZ, jet streams and ocean-atmosphere interactions. Differential heating establishes the broad pressure gradient that reverses the winds.',
    model: 'Monsoon onset is driven by a seasonal pressure reversal between the heated Indian landmass and the surrounding seas, assisted by the northward shift of the ITCZ and changes in upper-air circulation.'
  },
  {
    id: 'q3', subject: 'Economy', topic: 'Monetary policy', difficulty: 'Moderate', pyq: true, year: '2019',
    text: 'If the Reserve Bank of India raises the repo rate, which of the following is the most likely immediate effect?',
    options: ['Borrowing by commercial banks becomes more expensive.', 'Liquidity in the system increases sharply.', 'The rupee automatically depreciates against the dollar.', 'Government capital expenditure rises.'],
    correct: 0,
    explanation: 'The repo rate is the rate at which the RBI lends short-term funds to commercial banks against securities. A higher repo rate raises the cost of funds, transmitting into tighter credit conditions and helping moderate inflationary pressure.',
    model: 'A repo rate hike is a contractionary monetary policy signal. It increases the marginal cost of bank funds, may raise lending rates, and can reduce aggregate demand and inflation over time.'
  },
  {
    id: 'q4', subject: 'History', topic: 'The Revolt of 1857', difficulty: 'Moderate', pyq: false, year: '',
    text: 'Which one of the following was a major political cause of the Revolt of 1857?',
    options: ['The policy of Doctrine of Lapse', 'The Permanent Settlement', 'The Ilbert Bill controversy', 'The Vernacular Press Act'],
    correct: 0,
    explanation: 'The Doctrine of Lapse, associated with Lord Dalhousie, allowed the East India Company to annex princely states without a natural male heir. The annexation of states such as Jhansi and Satara generated deep political resentment.',
    model: 'The annexationist policies of the Company eroded the authority of Indian rulers. The Doctrine of Lapse became a prominent political grievance and contributed to the coalition of discontent that surfaced in 1857.'
  },
];

// Bilingual quiz source. The production app can hydrate this same shape from
// Firestore/Airtable/API without changing the quiz renderer.
const quizDatabase = [
  {
    id: 1, subject: "Polity", difficulty: "Medium",
    question: { en: "Which Article of the Indian Constitution deals with Constitutional Amendments?", hi: "भारतीय संविधान का कौन सा अनुच्छेद संवैधानिक संशोधनों से संबंधित है?" },
    options: { en: ["Article 352", "Article 356", "Article 360", "Article 368"], hi: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 368"] },
    correct_option_index: 3,
    explanation: { en: "Article 368 in Part XX of the Constitution deals with the powers of Parliament to amend the Constitution.", hi: "संविधान के भाग XX में अनुच्छेद 368 संविधान में संशोधन करने की संसद की शक्तियों से संबंधित है।" }
  },
  {
    id: 2, subject: "History", difficulty: "Medium",
    question: { en: "The policy of the Doctrine of Lapse is most closely associated with which Governor-General?", hi: "हड़प नीति (Doctrine of Lapse) किस गवर्नर-जनरल से सबसे अधिक संबंधित है?" },
    options: { en: ["Lord Wellesley", "Lord Dalhousie", "Lord Curzon", "Lord Canning"], hi: ["लॉर्ड वेलेजली", "लॉर्ड डलहौजी", "लॉर्ड कर्जन", "लॉर्ड कैनिंग"] },
    correct_option_index: 1,
    explanation: { en: "Lord Dalhousie used the Doctrine of Lapse to annex princely states where the ruler had no natural male heir. The policy created political resentment before the Revolt of 1857.", hi: "लॉर्ड डलहौजी ने हड़प नीति के माध्यम से उन रियासतों का विलय किया जहाँ शासक का कोई प्राकृतिक पुत्र उत्तराधिकारी नहीं था। इस नीति ने 1857 के विद्रोह से पहले राजनीतिक असंतोष बढ़ाया।" }
  },
  {
    id: 3, subject: "Geography", difficulty: "Easy",
    question: { en: "Which factor most directly drives the seasonal reversal of winds in the Indian monsoon system?", hi: "भारतीय मानसून प्रणाली में पवनों के मौसमी प्रत्यावर्तन को सबसे प्रत्यक्ष रूप से कौन सा कारक प्रेरित करता है?" },
    options: { en: ["Differential heating of land and sea", "Rotation of the Moon", "Permanent high pressure over India", "Uniform heating of the Indian Ocean"], hi: ["स्थल और समुद्र का असमान ताप", "चंद्रमा का घूर्णन", "भारत के ऊपर स्थायी उच्च दबाव", "हिंद महासागर का समान ताप"] },
    correct_option_index: 0,
    explanation: { en: "Differential heating creates seasonal pressure differences between the Indian landmass and surrounding seas. This pressure gradient, alongside upper-air circulation and the ITCZ shift, supports the monsoon reversal.", hi: "स्थल और समुद्र का असमान ताप भारतीय भूभाग और आसपास के समुद्रों के बीच मौसमी दबाव-अंतर पैदा करता है। यह दबाव प्रवणता, ऊपरी वायुमंडलीय परिसंचरण और ITCZ के खिसकाव के साथ मानसून के प्रत्यावर्तन में सहायक होती है।" }
  },
  {
    id: 4, subject: "Economy", difficulty: "Medium",
    question: { en: "If the Reserve Bank of India raises the repo rate, what is the most likely immediate effect?", hi: "यदि भारतीय रिज़र्व बैंक रेपो दर बढ़ाता है, तो सबसे संभावित तात्कालिक प्रभाव क्या होगा?" },
    options: { en: ["Borrowing by commercial banks becomes more expensive", "System liquidity increases sharply", "The rupee automatically depreciates", "Government capital expenditure rises"], hi: ["वाणिज्यिक बैंकों के लिए उधार लेना महंगा हो जाता है", "प्रणाली में तरलता तेजी से बढ़ जाती है", "रुपया स्वतः अवमूल्यित हो जाता है", "सरकारी पूंजीगत व्यय बढ़ जाता है"] },
    correct_option_index: 0,
    explanation: { en: "The repo rate is the rate at which the RBI lends short-term funds to banks. A higher rate increases the cost of funds and can tighten credit conditions, helping moderate demand and inflation.", hi: "रेपो दर वह दर है जिस पर RBI बैंकों को अल्पावकालिक धन उधार देता है। दर बढ़ने से धन की लागत बढ़ती है और ऋण की स्थिति कड़ी हो सकती है, जिससे मांग और मुद्रास्फीति को नियंत्रित करने में मदद मिलती है।" }
  },
  {
    id: 5, subject: "Science & Tech", difficulty: "Medium",
    question: { en: "Which principle is most important when using artificial intelligence in public-service delivery?", hi: "सार्वजनिक सेवा वितरण में कृत्रिम बुद्धिमत्ता का उपयोग करते समय कौन सा सिद्धांत सबसे महत्वपूर्ण है?" },
    options: { en: ["Accountability and explainability", "Replacing every human decision", "Keeping all model decisions secret", "Optimising only for processing speed"], hi: ["जवाबदेही और व्याख्येयता", "हर मानव निर्णय को बदल देना", "सभी मॉडल निर्णयों को गुप्त रखना", "केवल प्रसंस्करण गति को अनुकूलित करना"] },
    correct_option_index: 0,
    explanation: { en: "Public-sector AI affects rights, entitlements and access to services. Accountable systems with explainability, human oversight and auditability are essential for fairness and trust.", hi: "सार्वजनिक क्षेत्र की AI प्रणालियाँ अधिकारों, लाभों और सेवाओं तक पहुंच को प्रभावित करती है। निष्पक्षता और विश्वास के लिए व्याख्येयता, मानवीय निगरानी और ऑडिट योग्यता वाली जवाबदेह प्रणालियाँ आवश्यक है।" }
  },
  {
    id: 6, subject: "Polity", difficulty: "Easy",
    question: { en: "Which body recommends the distribution of net tax proceeds between the Union and the States?", hi: "केंद्र और राज्यों के बीच शुद्ध कर-प्राप्तियों के वितरण की सिफारिश कौन सा निकाय करता है?" },
    options: { en: ["NITI Aayog", "Finance Commission", "Public Accounts Committee", "Inter-State Council"], hi: ["नीति आयोग", "वित्त आयोग", "लोक लेखा समिति", "अंतर-राज्य परिषद"] },
    correct_option_index: 1,
    explanation: { en: "Under Article 280, the Finance Commission recommends the distribution of tax revenues between the Union and States and the principles governing grants-in-aid.", hi: "अनुच्छेद 280 के अंतर्गत वित्त आयोग केंद्र और राज्यों के बीच कर राजस्व के वितरण तथा अनुदान-सहायता के सिद्धांतों की सिफारिश करता है।" }
  },
  {
    id: 7, subject: "Environment", difficulty: "Medium",
    question: { en: "Wetlands are important to cities primarily because they provide which combination of services?", hi: "शहरों के लिए आर्द्रभूमियाँ मुख्यतः किस प्रकार की सेवाओं का संयोजन प्रदान करने के कारण महत्वपूर्ण है?" },
    options: { en: ["Flood buffering and groundwater recharge", "Only recreational space", "Permanent drought conditions", "A replacement for all drainage networks"], hi: ["बाढ़ नियंत्रण और भूजल पुनर्भरण", "केवल मनोरंजन स्थल", "स्थायी सूखे की स्थिति", "सभी जल निकासी नेटवर्क का विकल्प"] },
    correct_option_index: 0,
    explanation: { en: "Urban wetlands absorb excess water, slow runoff and support groundwater recharge. They also provide habitat, improve water quality and moderate local microclimates.", hi: "शहरी आर्द्रभूमियाँ अतिरिक्त जल को सोखती है, बहाव को धीमा करती है और भूजल पुनर्भरण में सहायता करती है। वे आवास, जल गुणवत्ता सुधार और स्थानीय सूक्ष्मजलवायु को संतुलित करने जैसी सेवाएँ भी देती है।" }
  },
  {
    id: 8, subject: "Geography", difficulty: "Medium",
    question: { en: "The Inter-Tropical Convergence Zone is best described as a zone where which winds converge?", hi: "अंतर-उष्णकटिबंधीय अभिसरण क्षेत्र (ITCZ) को उस क्षेत्र के रूप में वर्णित किया जाता है जहाँ कौन सी पवन अभिसरित होती है?" },
    options: { en: ["Trade winds from both hemispheres", "Polar easterlies only", "Westerlies from both poles", "Local mountain breezes"], hi: ["दोनों गोलार्धों की व्यापारिक पवने", "केवल ध्रुवीय पूर्वी पवने", "दोनों ध्रुवों से आने वाली पछुआ पवने", "स्थानीय पर्वतीय समीर"] },
    correct_option_index: 0,
    explanation: { en: "The ITCZ is a near-equatorial belt where the northeast and southeast trade winds converge. Its seasonal migration is important to the onset and withdrawal of the Indian monsoon.", hi: "ITCZ भूमध्य रेखा के निकट वह पट्टी है जहाँ उत्तर-पूर्वी और दक्षिण-पूर्वी व्यापारिक पवने अभिसरित होती है। इसका मौसमी खिसकाव भारतीय मानसून के आगमन और वापसी के लिए महत्वपूर्ण है।" }
  },
];

// Paheli dataset. Keep this shape compatible with data/paheli_dataset.json so
// the riddles can later be loaded from a live content table.
const paheliData = [
  {
    "id": 1,
    "category": "General",
    "question": "एक गुफा के दो रखवाले, दोनों लंबे दोनों काले। बताओ क्या?",
    "questionEn": "Two guards stand at the mouth of a cave, both long and both black. What are they?",
    "answer": "मूंछें",
    "answerEn": "Mustache",
    "options": ["मूंछें", "आंखें", "कान", "बाल"],
    "hint": "यह चेहरे पर होती है और होठों के ऊपर पाई जाती है।"
  },
  {
    "id": 2,
    "category": "Nature",
    "question": "बिना पैर के चलती हूँ, बिना मुंह के बोलती हूँ। बताओ मैं कौन?",
    "questionEn": "I move without feet and speak without a mouth. What am I?",
    "answer": "नदी",
    "answerEn": "A river",
    "options": ["नदी", "हवा", "बादल", "सड़क"],
    "hint": "यह पहाड़ों से निकलकर समुद्र तक जाती है।"
  },
  {
    "id": 3,
    "category": "Everyday",
    "question": "ऐसी कौन सी चीज़ है जो पानी पीते ही मर जाती है?",
    "questionEn": "What is the thing that dies as soon as it drinks water?",
    "answer": "आग",
    "answerEn": "Fire",
    "options": ["आग", "पौधा", "मछली", "मिट्टी"],
    "hint": "यह गर्मी देती है, लेकिन पानी से बुझ जाती है।"
  },
  {
    "id": 4,
    "category": "Wordplay",
    "question": "जितना खींचो उतनी ही छोटी होती जाती है। बताओ क्या?",
    "questionEn": "The more you pull it, the shorter it becomes. What is it?",
    "answer": "सिगरेट",
    "answerEn": "A cigarette",
    "options": ["रस्सी", "सिगरेट", "रबर", "मोमबत्ती"],
    "hint": "यह धीरे-धीरे जलती रहती है।"
  },
  {
    "id": 5,
    "category": "Nature",
    "question": "आसमान में उड़ती हूँ, पर पंख नहीं है। आंखों से दिखती हूँ, पर हाथों से पकड़ नहीं सकते।",
    "questionEn": "I fly in the sky without wings. You can see me, but you cannot hold me.",
    "answer": "बादल",
    "answerEn": "A cloud",
    "options": ["बादल", "पतंग", "चिड़िया", "धुआं"],
    "hint": "कभी सफेद, कभी काले; बारिश भी ला सकते है।"
  },
  {
    "id": 6,
    "category": "General",
    "question": "चार पैर है, फिर भी चल नहीं सकती। पीठ है, मगर लेट नहीं सकती।",
    "questionEn": "I have four legs but cannot walk. I have a back but cannot lie down.",
    "answer": "कुर्सी",
    "answerEn": "A chair",
    "options": ["मेज़", "कुर्सी", "खाट", "घोड़ा"],
    "hint": "आप इस पर बैठते है।"
  },
  {
    "id": 7,
    "category": "Wordplay",
    "question": "वह क्या है जो आपके पास जितना ज्यादा होगा, आप उतना ही कम देख पाएंगे?",
    "questionEn": "What is the thing that the more you have of it, the less you can see?",
    "answer": "अंधेरा",
    "answerEn": "Darkness",
    "options": ["अंधेरा", "रोशनी", "धुआं", "चश्मा"],
    "hint": "रोशनी की अनुपस्थिति।"
  },
  {
    "id": 8,
    "category": "General",
    "question": "सुबह चार पैर, दोपहर दो पैर और शाम को तीन पैर — यह कौन है?",
    "questionEn": "Who walks on four legs in the morning, two at noon and three in the evening?",
    "answer": "मनुष्य",
    "answerEn": "A human being",
    "options": ["मनुष्य", "बिल्ली", "पेड़", "सांप"],
    "hint": "जीवन के तीन चरणों के बारे में सोचिए।"
  },
  {
    "id": 9,
    "category": "Everyday",
    "question": "मैं जितना सुखता हूं, उतना ही गीला करता हूं। बताओ मैं कौन?",
    "questionEn": "The more I dry, the wetter I make things. What am I?",
    "answer": "तौलिया",
    "answerEn": "A towel",
    "options": ["कपड़ा", "तौलिया", "साबुन", "कागज़"],
    "hint": "नहाने के बाद इसका काम आता है।"
  },
  {
    "id": 10,
    "category": "Nature",
    "question": "न पैर है, न पंख, फिर भी घर-घर घूमती हूँ। बताओ क्या?",
    "questionEn": "I have neither feet nor wings, yet I travel from house to house. What am I?",
    "answer": "हवा",
    "answerEn": "Air",
    "options": ["हवा", "डाक", "रोशनी", "आवाज़"],
    "hint": "इसे महसूस कर सकते है, पकड़ नहीं सकते।"
  },
];

// Time-table data. It mirrors data/timetable.json for live-content migration.
const timetableData = [
  {
    "id": "morning-refresh",
    "start": "05:00",
    "end": "06:00",
    "timeLabel": "05:00 AM – 06:00 AM",
    "icon": "flame",
    "title": "Morning Routine & Mind Refreshening",
    "description": "Exercise, meditation and a calm start before the study day.",
    "tag": "Mindfulness"
  },
  {
    "id": "core-study-1",
    "start": "06:00",
    "end": "08:30",
    "timeLabel": "06:00 AM – 08:30 AM",
    "icon": "book",
    "title": "Core Study Session 1",
    "description": "High-focus GS or Optional Subject study with active recall.",
    "tag": "Deep focus"
  },
  {
    "id": "breakfast-news",
    "start": "08:30",
    "end": "09:30",
    "timeLabel": "08:30 AM – 09:30 AM",
    "icon": "calendar",
    "title": "Healthy Breakfast & News Analysis",
    "description": "Fuel well and connect the daily newspaper to the syllabus.",
    "tag": "Current affairs"
  },
  {
    "id": "core-study-2",
    "start": "09:30",
    "end": "12:30",
    "timeLabel": "09:30 AM – 12:30 PM",
    "icon": "pen",
    "title": "Core Study Session 2",
    "description": "Practice questions, answer writing and analytical note-making.",
    "tag": "Practice"
  },
  {
    "id": "lunch-nap",
    "start": "12:30",
    "end": "14:00",
    "timeLabel": "12:30 PM – 02:00 PM",
    "icon": "coffee",
    "title": "Lunch Break & Quick Power Nap",
    "description": "Eat mindfully, reset your energy and return refreshed.",
    "tag": "Recharge"
  },
  {
    "id": "study-session-3",
    "start": "14:00",
    "end": "16:30",
    "timeLabel": "02:00 PM – 04:30 PM",
    "icon": "spark",
    "title": "Study Session 3",
    "description": "Revision, Play Quiz and Paheli for active, varied recall.",
    "tag": "Recall"
  },
  {
    "id": "evening-break",
    "start": "16:30",
    "end": "17:30",
    "timeLabel": "04:30 PM – 05:30 PM",
    "icon": "coffee",
    "title": "Evening Break & Walk",
    "description": "Refreshment, movement and a screen-free mental reset.",
    "tag": "Refresh"
  },
  {
    "id": "mock-analysis",
    "start": "17:30",
    "end": "20:00",
    "timeLabel": "05:30 PM – 08:00 PM",
    "icon": "target",
    "title": "Mock Tests & Weak Topic Analysis",
    "description": "Attempt a timed test, then study the gaps it reveals.",
    "tag": "Exam mode"
  },
  {
    "id": "dinner-relax",
    "start": "20:00",
    "end": "21:00",
    "timeLabel": "08:00 PM – 09:00 PM",
    "icon": "users",
    "title": "Dinner & Relaxing Time",
    "description": "Slow down, eat well and protect your evening recovery.",
    "tag": "Recovery"
  },
  {
    "id": "light-revision",
    "start": "21:00",
    "end": "22:30",
    "timeLabel": "09:00 PM – 10:30 PM",
    "icon": "scroll",
    "title": "Light Revision & Tomorrow's Plan",
    "description": "Review the day's takeaways and set three clear priorities.",
    "tag": "Close the loop"
  },
  {
    "id": "sleep",
    "start": "22:30",
    "end": "23:59",
    "timeLabel": "10:30 PM onwards",
    "icon": "clock",
    "title": "Sleep",
    "description": "Protect a mandatory 7-hour sleep cycle for tomorrow's focus.",
    "tag": "Mandatory"
  },
];

const affairs = [
  { date: '25 Aug', day: 'Today', category: 'Polity', title: 'India’s new urban governance framework focuses on resilient city finance', summary: 'A proposed framework brings together municipal finance, climate resilience and citizen-first service delivery.', relevance: 'Use in answers on urbanisation, 74th Constitutional Amendment and cooperative federalism.' },
  { date: '25 Aug', day: 'Today', category: 'Economy', title: 'RBI keeps focus on inflation expectations and transmission', summary: 'The central bank’s communication highlights the balance between price stability and sustaining productive credit.', relevance: 'Connect monetary policy tools with inflation targeting and growth trade-offs.' },
  { date: '24 Aug', day: 'Mon', category: 'International', title: 'India and ASEAN deepen cooperation on maritime connectivity', summary: 'The dialogue emphasises a free, open and inclusive Indo-Pacific with stronger resilient supply chains.', relevance: 'Useful for GS-II answers on Act East, ASEAN centrality and maritime security.' },
  { date: '23 Aug', day: 'Sun', category: 'Environment', title: 'New landscape approach expands community-led wetland restoration', summary: 'The programme links local livelihoods with ecosystem services and science-backed monitoring.', relevance: 'Add to examples for wetlands, commons and participatory conservation.' },
  { date: '22 Aug', day: 'Sat', category: 'Science & Tech', title: 'India’s public research network releases open climate datasets', summary: 'Researchers and administrators can use interoperable datasets to improve climate-risk planning.', relevance: 'Quote for GS-III answers on technology, evidence-based policy and climate adaptation.' },
];

const groups = [
  { id: 'civils-circle', name: 'Civils Circle', code: 'CIVILS24', members: 8, pass: 76, tests: 12, emblem: 'users', description: 'Daily 7 AM accountability circle', avatars: ['AK', 'SP', 'RM', 'NS'] },
  { id: 'ncr-aspirants', name: 'NCR Aspirants', code: 'NCR2026', members: 14, pass: 68, tests: 9, emblem: 'globe', description: 'UPSC CSE – General Studies', avatars: ['RV', 'AM', 'DS', 'PK'] },
];

function getMembers() {
  return [
    { name: 'Aarav Khanna', meta: '12 tests · 84% avg.', initials: 'AK', score: '86%', status: 'PASS', tone: 'aqua' },
    { name: 'Sanya Prasad', meta: '11 tests · 81% avg.', initials: 'SP', score: '81%', status: 'PASS', tone: 'aqua' },
    { name: 'Rohan Mehta', meta: '10 tests · 72% avg.', initials: 'RM', score: '72%', status: 'PASS', tone: 'aqua' },
    { name: 'Nivedita Shah', meta: '9 tests · 48% avg.', initials: 'NS', score: '48%', status: 'FAIL', tone: 'coral' },
    { name: `You · ${accountFirstName()}`, meta: '12 tests · 78% avg.', initials: accountInitials(), score: '78%', status: 'PASS', tone: 'aqua' },
  ];
}

const revisionItems = [
  { id: 'r1', type: 'Bookmarked', subject: 'Indian Polity', topic: 'Parliament and legislative procedure', text: 'Which of the following statements about a Money Bill is correct?', time: 'Saved 2 hours ago' },
  { id: 'r2', type: 'Bookmarked', subject: 'Economy', topic: 'Monetary policy', text: 'What is the role of the Monetary Policy Committee in India?', time: 'Saved yesterday' },
  { id: 'r3', type: 'Wrong Answers', subject: 'Geography', topic: 'Indian monsoon system', text: 'Which factor most directly influences the onset of the southwest monsoon?', time: 'Attempted 24 Aug' },
  { id: 'r4', type: 'Wrong Answers', subject: 'History', topic: 'Modern India', text: 'Match the personalities with the movements they led.', time: 'Attempted 22 Aug' },
];

const pyqs = [
  { year: '2023', subject: 'Indian Polity', text: 'Consider the following statements regarding the Constitution of India and constitutional morality.', tag: 'GS-II · Prelims' },
  { year: '2022', subject: 'Geography', text: 'Which of the following is/are the characteristic/characteristics of Indian coal?', tag: 'GS-I · Prelims' },
  { year: '2021', subject: 'Economy', text: 'Which one of the following effects of the interest rate hike is most likely in an economy?', tag: 'GS-III · Prelims' },
  { year: '2020', subject: 'Environment', text: 'With reference to Indian laws, consider the following statements about protected areas.', tag: 'GS-III · Prelims' },
  { year: '2019', subject: 'History', text: 'The Congress Socialist Party was formed within the Indian National Congress with a particular ideological aim.', tag: 'GS-I · Prelims' },
];

const syllabus = [
  { id: 'polity', name: 'Indian Polity', icon: 'shield', percent: 82, done: 18, total: 22, topics: ['Constitutional framework', 'Fundamental Rights & DPSP', 'Parliament and legislative procedure', 'Judiciary and judicial review', 'Local government and federalism'] },
  { id: 'history', name: 'History', icon: 'scroll', percent: 74, done: 18, total: 24, topics: ['Ancient India', 'Medieval India', 'Modern India', 'Art and culture', 'World history'] },
  { id: 'geography', name: 'Geography', icon: 'globe', percent: 58, done: 11, total: 19, topics: ['Physical geography', 'Indian physiography', 'Climate and monsoon', 'Resources and industries', 'Human geography'] },
  { id: 'economy', name: 'Economy', icon: 'chart', percent: 61, done: 11, total: 18, topics: ['National income', 'Money and banking', 'Public finance', 'External sector', 'Inclusive growth'] },
  { id: 'science', name: 'Science & Technology', icon: 'spark', percent: 46, done: 7, total: 15, topics: ['Biology and health', 'Space and defence', 'IT and communication', 'Biotechnology', 'Emerging technologies'] },
];

const battleQuestions = [
  { text: 'Which Schedule of the Constitution deals with allocation of seats in the Rajya Sabha?', options: ['Third Schedule', 'Fourth Schedule', 'Fifth Schedule', 'Seventh Schedule'], correct: 1 },
  { text: 'The term "Blue Revolution" in India is associated with which sector?', options: ['Dairy development', 'Fisheries', 'Oilseeds', 'Horticulture'], correct: 1 },
  { text: 'The Tropic of Cancer passes through how many Indian states?', options: ['Six', 'Seven', 'Eight', 'Nine'], correct: 2 },
];

const state = {
  screen: 'home',
  selectedSubject: 'polity',
  selectedGroup: 'civils-circle',
  practiceIndex: 0,
  practiceAnswered: null,
  practiceBookmarked: false,
  revisionTab: 'Bookmarked',
  affairsDate: 0,
  affairsCategory: 'All',
  openSyllabus: ['polity'],
  answerText: '',
  modelVisible: false,
  answerSubmitted: false,
  mockIndex: 0,
  mockAnswers: {},
  mockMarked: {},
  mockSeconds: 42 * 60 + 18,
  mockTimerStarted: false,
  battleIndex: 0,
  battleAnswered: null,
  battleScore: 0,
  opponentScore: 0,
  battleCombo: 0,
  battlePhase: 'idle',
  loginMode: 'signin',
  loginId: '',
  loginPassword: '',
  loginName: '',
  loginConfirm: '',
  loginError: '',
  loginQuestion: 0,
  loginSecurityAnswer: '',
  forgotStep: 1,
  adminTab: 'users',
  accountId: '',
  uiLanguage: (() => { try { return localStorage.getItem('manthanUiLanguage') || 'en'; } catch (e) { return 'en'; } })(),
  languageMenuOpen: false,
  phone: '',
  otp: '',
  setupExam: 'UPSC CSE',
  photoModal: null,
  cropSrc: '',
  photoZoom: 1,
  photoUploading: false,
  timetableDate: '',
  timetableCompleted: {},
  timetableMidnightTimer: null,
  profilePhotoData: (() => { try { return localStorage.getItem('manthanProfilePhoto') || ''; } catch (e) { return ''; } })(),
  profileRecord: null,
  profileLoaded: false,
  profileLoading: false,
  profileRefreshInFlight: false,
  profileEditOpen: false,
  profileSaving: false,
  profileForm: { name: '', email: '', phone: '', profile_picture_url: '' },
  preferredLanguage: (() => { try { const value = localStorage.getItem('manthanPreferredLanguage'); return value === 'hi' ? 'hi' : 'en'; } catch (e) { return 'en'; } })(),
  quizLanguage: 'en',
  quizDeck: 'subject',
  quizSubject: 'Polity',
  quizIndex: 0,
  quizAnswers: {},
  quizBookmarked: {},
  quizPhase: 'idle',
  quizRemaining: 0,
  quizTimerStarted: false,
  quizTimer: null,
  quizQuestionStartedAt: 0,
  quizTimeSpent: {},
  quizAutoSubmitted: false,
  quizResult: null,
  quizHistory: (() => { try { const value = JSON.parse(localStorage.getItem('manthanQuizHistory') || '[]'); return Array.isArray(value) ? value : []; } catch (e) { return []; } })(),
  paheliIndex: 0,
  paheliAnswerVisible: false,
  paheliTypedAnswer: '',
  paheliInputStatus: null,
  paheliSelectedOption: null,
  paheliHintVisible: false,
  paheliSpeaking: false,
  paheliBookmarked: (() => { try { const value = JSON.parse(localStorage.getItem('manthanPaheliBookmarks') || '{}'); return value && typeof value === 'object' ? value : {}; } catch (e) { return {}; } })(),
  navigationHistory: ['home'],
  navigationDirection: 'forward',
  pendingPageTransition: true,
  toastTimer: null,
};

const navMain = [
  ['home', 'Home', 'home'],
  ['subjects', 'Subjects', 'book'],
  ['tests', 'Tests', 'clipboard'],
  ['groups', 'Groups', 'users'],
];
const navStudy = [
  ['currentAffairs', 'Current Affairs', 'calendar'],
  ['revision', 'Revision', 'bookmark'],
  ['answerWriting', 'Answer Writing', 'pen'],
  ['pyq', 'PYQ Bank', 'scroll'],
  ['syllabus', 'Syllabus Tracker', 'check'],
];
const screenMeta = {
  home: ['Workspace', 'Good morning'],
  timeTable: ['Plan your day', 'टाइम टेबल'],
  paheli: ['Home / Brain break', 'बुझौता पहेलियां'],
  subjects: ['Your preparation', 'Subjects'],
  subjectDetail: ['Subjects / Indian Polity', 'Topic map'],
  practice: ['Practice room', 'Question + Explanation'],
  currentAffairs: ['Stay informed', 'Current Affairs'],
  tests: ['Measure your edge', 'Tests & Challenges'],
  twoDeckQuiz: ['Play Quiz / Two-Deck engine', 'Bilingual Quiz'],
  mock: ['Tests / Full-length mock', 'Mock Test'], 
  groups: ['Learn together', 'Groups'],
  groupDetail: ['Groups / Civils Circle', 'Pass Result Dashboard'],
  battle: ['Competitive practice', 'Live Quiz Battle'],
  revision: ['Recall what matters', 'Revision Desk'],
  answerWriting: ['Mains preparation', 'Answer Writing'],
  pyq: ['Learn from the exam', 'PYQ Bank'],
  syllabus: ['Plan with clarity', 'Syllabus Tracker'],
  profile: ['Your journey', 'Profile & Analytics'],
  admin: ['Control centre', 'Admin Panel'],
};

function ring(percent, size = '', dark = false, label = true, color = 'var(--aqua)') {
  return `<div class="progress-ring ${dark ? 'dark' : ''}" style="--value:${percent};--ring:${color};${size ? `width:${size}px;height:${size}px;` : ''}">${label ? `<div class="ring-label"><strong>${percent}%</strong><small>complete</small></div>` : ''}</div>`;
}

// Isolated animation helper for the existing Home Page syllabus ring.
function homeProgressRing(targetPercent) {
  return `<div class="progress-ring dark home-progress-ring" data-home-progress-target="${targetPercent}" style="--value:0;--ring:var(--aqua);"><div class="ring-label"><strong data-home-progress-value>0%</strong><small>complete</small></div></div>`;
}

function badge(text, tone = 'slate') { return `<span class="badge badge-${tone}">${text}</span>`; }
function avatar(initials, className = '') { return `<span class="avatar ${className}">${initials}</span>`; }
function profileImageSource() {
  const photo = state.profileRecord?.profile_picture_url || state.profilePhotoData || '';
  if (!photo) return '';
  if (/^https?:\/\//i.test(photo) && state.profileRecord?.updated_at) {
    const hashIndex = photo.indexOf('#');
    const base = hashIndex >= 0 ? photo.slice(0, hashIndex) : photo;
    const hash = hashIndex >= 0 ? photo.slice(hashIndex) : '';
    const separator = base.includes('?') ? '&' : '?';
    return `${base}${separator}v=${encodeURIComponent(state.profileRecord.updated_at)}${hash}`;
  }
  return photo;
}

function profileAvatarButton(className = '') {
  const photo = profileImageSource();
  const content = photo ? `<img src="${escapeHtml(photo)}" alt="${escapeHtml(accountDisplayName())} profile photo">` : accountInitials();
  return `<button class="avatar profile-photo-trigger ${className}" data-action="choose-profile-photo" aria-label="Choose profile picture from gallery">${content}<span class="profile-photo-edit">${icon('image', 10)}</span></button>`;
}

function homeProgressProfileButton() {
  const photo = profileImageSource();
  const content = photo ? `<img src="${escapeHtml(photo)}" alt="Open profile editing">` : `<span class="home-progress-avatar-fallback">${icon('user', 24)}</span>`;
  return `<button class="home-progress-avatar" data-action="open-home-profile-editor" aria-label="Open profile editing">${content}<span class="home-progress-avatar-edit">${icon('edit', 11)}</span></button>`;
}
function escapeHtml(value) { return String(value).replace(/[&<>'"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[c])); }
function subjectById(id) { return subjects.find(s => s.id === id) || subjects[0]; }
function accountDisplayName() { return String(state.profileForm.name || state.profileRecord?.name || state.accountId || 'Aspirant').trim() || 'Aspirant'; }
function accountFirstName() { return String(accountDisplayName()).split(/\s+/)[0] || 'Aspirant'; }
function accountInitials() { const parts = String(accountDisplayName()).split(/\s+/).filter(Boolean); return ((parts[0] || 'M').charAt(0) + (parts[1] || '').charAt(0)).toUpperCase(); }

function homeGreetingText(now = new Date()) {
  const hour = now.getHours();
  const name = String(state.profileRecord?.name || state.profileForm?.name || '').trim();
  let english;
  let hindi;
  let emoji;
  if (hour >= 5 && hour < 12) { english = 'Good Morning'; hindi = 'सुप्रभात'; emoji = '☀️'; }
  else if (hour >= 12 && hour < 17) { english = 'Good Afternoon'; hindi = 'शुभ दोपहर'; emoji = '🌤️'; }
  else if (hour >= 17 && hour < 21) { english = 'Good Evening'; hindi = 'शुभ संध्या'; emoji = '🌇'; }
  else { english = 'Good Night'; hindi = 'शुभ रात्रि'; emoji = '🌙'; }
  const label = state.preferredLanguage === 'hi' ? hindi : english;
  return `${label}${name ? `, ${escapeHtml(name)}` : ''} ${emoji}`;
}

function currentNav() {
  const mapping = { timeTable: 'home', paheli: 'home', subjectDetail: 'subjects', practice: 'subjects', twoDeckQuiz: 'tests', mock: 'tests', battle: 'tests', groupDetail: 'groups' };
  return mapping[state.screen] || state.screen;
}

function sidebar() {
  const active = currentNav();
  const item = ([id, label, ico]) => `<button class="nav-item ${active === id ? 'active' : ''}" data-screen="${id}"><span class="nav-icon">${icon(ico, 17)}</span><span>${label}</span></button>`;
  return `<aside class="sidebar">
    <div class="brand"><span class="brand-mark">M</span><div><div class="brand-name">Manthan Prep</div><div class="brand-sub">Analytical learning</div></div></div>
    <div class="nav-label">Workspace</div>
    <nav class="nav-list">${navMain.map(item).join('')}</nav>
    <div class="nav-separator"></div>
    <div class="nav-label">Study tools</div>
    <nav class="nav-list">${navStudy.map(item).join('')}</nav>
    ${isAdminId(state.accountId) ? `<div class="nav-separator"></div><div class="nav-label">Management</div><nav class="nav-list">${item(['admin', 'Admin panel', 'shield'])}</nav>` : ''}
    <div class="sidebar-spacer"></div>
    <div class="sidebar-tip"><div class="tip-icon">${icon('spark', 16)}</div><strong>One thoughtful hour</strong><p>Small, consistent sessions compound into command.</p></div>
    <div class="sidebar-user">${profileAvatarButton()}<div><div class="sidebar-user-name">${escapeHtml(accountDisplayName())}</div><div class="sidebar-user-meta">UPSC CSE · 12 day streak</div></div></div>
  </aside>`;
}

/* ---- Indian languages menu: click the globe to pick any Indian language. ---- */
const indianLanguages = [
  { code: 'en', native: 'English', name: 'English' },
  { code: 'hi', native: 'हिन्दी', name: 'Hindi' },
  { code: 'as', native: 'অসমীয়া', name: 'Assamese' },
  { code: 'bn', native: 'বাংলা', name: 'Bengali' },
  { code: 'brx', native: 'बड़ो', name: 'Bodo' },
  { code: 'doi', native: 'डोगरी', name: 'Dogri' },
  { code: 'gu', native: 'ગુજરાતી', name: 'Gujarati' },
  { code: 'kn', native: 'ಕನ್ನಡ', name: 'Kannada' },
  { code: 'ks', native: 'कॉशुर', name: 'Kashmiri' },
  { code: 'kok', native: 'कोंकणी', name: 'Konkani' },
  { code: 'mai', native: 'मैथिली', name: 'Maithili' },
  { code: 'ml', native: 'മലയാളം', name: 'Malayalam' },
  { code: 'mni', native: 'মেইতেই', name: 'Manipuri' },
  { code: 'mr', native: 'मराठी', name: 'Marathi' },
  { code: 'ne', native: 'नेपाली', name: 'Nepali' },
  { code: 'or', native: 'ଓଡ଼ିଆ', name: 'Odia' },
  { code: 'pa', native: 'ਪੰਜਾਬੀ', name: 'Punjabi' },
  { code: 'sa', native: 'संस्कृतम्', name: 'Sanskrit' },
  { code: 'sat', native: 'ᱥᱱᱛᱟᱲᱤ', name: 'Santali' },
  { code: 'sd', native: 'سنڌي', name: 'Sindhi' },
  { code: 'ta', native: 'தமிழ்', name: 'Tamil' },
  { code: 'te', native: 'తెలుగు', name: 'Telugu' },
  { code: 'ur', native: 'اردو', name: 'Urdu' },
];
const securityQuestions = [
  'Aapka nickname kya hai?',
  'Aapke favourite teacher ka naam kya hai?',
  'Aapka home town kaun sa hai?',
  'Aapka favourite subject kya hai?',
];
function normalizeSecurityAnswer(value) { return String(value || '').trim().toLowerCase().replace(/\s+/g, ' '); }
function currentLanguage() { return indianLanguages.find(item => item.code === state.uiLanguage) || indianLanguages[0]; }
function setTranslateCookie(code) {
  const value = code === 'en' ? '/en/en' : `/en/${code}`;
  try {
    document.cookie = `googtrans=${value}; path=/`;
    document.cookie = `googtrans=${value}; path=/; domain=${window.location.hostname}`;
  } catch (e) { /* translation is optional */ }
}
function ensureTranslateEngine() {
  if (state.uiLanguage === 'en') return;
  if (!document.getElementById('google_translate_element')) {
    const holder = document.createElement('div');
    holder.id = 'google_translate_element';
    holder.className = 'translate-holder';
    document.body.appendChild(holder);
  }
  window.googleTranslateElementInit = function googleTranslateElementInit() {
    if (!window.google || !window.google.translate) return;
    try {
      new window.google.translate.TranslateElement({ pageLanguage: 'en', autoDisplay: false, includedLanguages: indianLanguages.map(item => item.code).join(',') }, 'google_translate_element');
    } catch (e) { /* translation is optional */ }
  };
  if (window.google && window.google.translate) { window.googleTranslateElementInit(); return; }
  if (!document.getElementById('gtEngineScript')) {
    const script = document.createElement('script');
    script.id = 'gtEngineScript';
    script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
    script.onerror = () => toast('Translation engine internet se load nahi ho saka. Hindi aur English offline bhi chalte hain.', 'error');
    document.head.appendChild(script);
  }
}
function languageSheet() {
  if (!state.languageMenuOpen) return '';
  const active = currentLanguage().code;
  return `<div class="modal-backdrop" data-action="close-language-menu"><section class="lang-sheet" role="dialog" aria-modal="true" aria-labelledby="langSheetTitle"><div class="modal-header"><div><div class="eyebrow">अपनी भाषा चुनें · Choose your language</div><h2 id="langSheetTitle">भारतीय भाषाएँ · Indian Languages</h2></div><button class="icon-btn" data-action="close-language-menu" aria-label="Close language menu">${icon('close', 16)}</button></div><div class="lang-grid">${indianLanguages.map(item => `<button class="lang-option ${item.code === active ? 'active' : ''}" data-action="select-ui-language" data-lang="${item.code}"><strong>${item.native}</strong><small>${item.name}</small>${item.code === active ? icon('check', 15) : ''}</button>`).join('')}</div><p class="lang-note">${icon('globe', 13)} Hindi aur English app me built-in hain. Baaki bhashaon ke liye translation engine live site pe internet se chalta hai — page refresh karne par bhi apply rehta hai.</p></section></div>`;
}

function topbar() {
  const meta = screenMeta[state.screen] || screenMeta.home;
  const title = state.screen === 'home' ? homeGreetingText() : state.screen === 'subjectDetail' ? `${subjectById(state.selectedSubject).name}` : state.screen === 'groupDetail' ? 'Civils Circle' : meta[1];
  return `<header class="topbar">
    <div class="topbar-left"><div class="mobile-brand"><span class="brand-mark">M</span><span class="brand-name">Manthan</span></div><div><div class="topbar-kicker">${meta[0]}</div><h1 class="topbar-title">${title}</h1></div></div>
    <div class="topbar-right"><button class="lang-btn" data-action="open-language-menu" aria-label="Choose language" aria-haspopup="dialog">${icon('globe', 15)}<span>${currentLanguage().native}</span></button><span class="date-chip">Tuesday, 25 August 2026</span><button class="icon-btn" data-action="search" aria-label="Search">${icon('search', 17)}</button><button class="icon-btn" data-action="notifications" aria-label="Notifications">${icon('bell', 17)}<span class="notification-dot"></span></button>${profileAvatarButton()}</div>
  </header>`;
}

function bottomNav() {
  const active = currentNav();
  const items = [['home', 'Home', 'home'], ['tests', 'Tests', 'clipboard'], ['groups', 'Groups', 'users'], ['profile', 'Profile', 'user']];
  return `<nav class="bottom-nav">${items.map(([id, label, ico]) => `<button class="bottom-item ${active === id ? 'active' : ''}" data-screen="${id}"><span class="nav-icon">${icon(ico, 18)}</span><span>${label}</span></button>`).join('')}</nav>`;
}

function renderApp() {
  return `<div class="app-shell">${sidebar()}<div class="content-shell">${topbar()}<main class="page">${renderScreen()}</main></div></div>${bottomNav()}`;
}

function formatQuizDuration(seconds) {
  const safe = Math.max(0, Number(seconds) || 0);
  return `${String(Math.floor(safe / 60)).padStart(2, '0')}:${String(safe % 60).padStart(2, '0')}`;
}

function quizQuestionSet() {
  const set = state.quizDeck === 'subject'
    ? quizDatabase.filter(question => question.subject === state.quizSubject)
    : quizDatabase.slice();
  return set.length ? set : quizDatabase.slice();
}

function quizCurrentQuestion() {
  const set = quizQuestionSet();
  return set[Math.max(0, Math.min(state.quizIndex, set.length - 1))];
}

function quizLanguageToggle() {
  return `<div class="quiz-language-toggle" role="group" aria-label="Quiz language"><span>Language</span><button class="${state.quizLanguage === 'en' ? 'active' : ''}" data-action="quiz-language" data-language="en">EN</button><i>|</i><button class="${state.quizLanguage === 'hi' ? 'active' : ''}" data-action="quiz-language" data-language="hi">HI</button></div>`;
}

function quizDeckTitle() {
  return state.quizDeck === 'subject' ? `${state.quizSubject} Practice` : 'Full-Length Mock Test';
}

function quizAnsweredCount(set = quizQuestionSet()) {
  return set.filter(question => Number.isInteger(state.quizAnswers[question.id])).length;
}

function recordQuizQuestionTime() {
  if (state.quizPhase !== 'playing' || !state.quizQuestionStartedAt) return;
  const question = quizCurrentQuestion();
  if (!question) return;
  const elapsed = Math.max(0, Math.round((Date.now() - state.quizQuestionStartedAt) / 1000));
  state.quizTimeSpent[question.id] = (state.quizTimeSpent[question.id] || 0) + elapsed;
  state.quizQuestionStartedAt = Date.now();
}

function stopTwoDeckTimer() {
  if (state.quizTimer) clearInterval(state.quizTimer);
  state.quizTimer = null;
  state.quizTimerStarted = false;
}

function startTwoDeckTimer() {
  if (state.quizTimerStarted || state.quizPhase !== 'playing' || state.screen !== 'twoDeckQuiz') return;
  state.quizTimerStarted = true;
  state.quizTimer = setInterval(() => {
    if (state.screen !== 'twoDeckQuiz' || state.quizPhase !== 'playing') return;
    state.quizRemaining = Math.max(0, state.quizRemaining - 1);
    const timer = document.querySelector('[data-quiz-timer]');
    if (timer) timer.textContent = formatQuizDuration(state.quizRemaining);
    if (state.quizRemaining === 0) finishTwoDeckQuiz(true);
  }, 1000);
}

function openTwoDeckLobby() {
  
  stopTwoDeckTimer();
  state.quizPhase = 'lobby';
  state.quizLanguage = state.preferredLanguage;
  state.quizIndex = 0;
  state.quizAnswers = {};
  state.quizBookmarked = {};
  state.quizTimeSpent = {};
  state.quizQuestionStartedAt = 0;
  state.quizAutoSubmitted = false;
  state.quizResult = null;
  go('twoDeckQuiz');
}

function startTwoDeckQuiz() {
  
  stopTwoDeckTimer();
  state.quizPhase = 'playing';
  state.quizLanguage = state.preferredLanguage;
  state.quizIndex = 0;
  state.quizAnswers = {};
  state.quizBookmarked = {};
  state.quizTimeSpent = {};
  state.quizQuestionStartedAt = Date.now();
  state.quizAutoSubmitted = false;
  state.quizResult = null;
  state.quizRemaining = state.quizDeck === 'mock' ? 45 * 60 : 8 * 60;
  go('twoDeckQuiz');
}

function calculateTwoDeckStats(set = quizQuestionSet()) {
  const attempted = quizAnsweredCount(set);
  const correct = set.filter(question => state.quizAnswers[question.id] === question.correct_option_index).length;
  const wrong = Math.max(0, attempted - correct);
  const maxStreak = set.reduce((result, question) => {
    if (state.quizAnswers[question.id] === question.correct_option_index) return { current: result.current + 1, max: Math.max(result.max, result.current + 1) };
    return { current: 0, max: result.max };
  }, { current: 0, max: 0 }).max;
  const totalTime = Object.values(state.quizTimeSpent).reduce((sum, value) => sum + (Number(value) || 0), 0);
  return {
    total: set.length,
    attempted,
    correct,
    wrong,
    unanswered: Math.max(0, set.length - attempted),
    accuracy: attempted ? Math.round((correct / attempted) * 100) : 0,
    score: Math.max(0, Number((correct * 2 - wrong * 0.66).toFixed(2))),
    totalTime,
    maxStreak,
  };
}

function finishTwoDeckQuiz(autoSubmitted = false) {
  if (state.quizPhase !== 'playing') return;
  recordQuizQuestionTime();
  const stats = calculateTwoDeckStats();
  state.quizAutoSubmitted = autoSubmitted;
  state.quizResult = stats;
  state.quizPhase = 'result';
  state.quizQuestionStartedAt = 0;
  
  stopTwoDeckTimer();
  const historyEntry = { ...stats, deck: state.quizDeck, subject: state.quizDeck === 'subject' ? state.quizSubject : 'Mixed subjects', language: state.quizLanguage, autoSubmitted, date: new Date().toISOString() };
  state.quizHistory = [historyEntry, ...state.quizHistory].slice(0, 20);
  try { localStorage.setItem('manthanQuizHistory', JSON.stringify(state.quizHistory)); } catch (e) { /* persistence is optional in preview */ }
  render();
  toast(autoSubmitted ? 'Time is up. Your quiz was submitted automatically.' : 'Quiz submitted. Your analytics are ready.');
}

function renderQuizLobby() {
  const subjectsInDeck = [...new Set(quizDatabase.map(question => question.subject))];
  const selectedSet = state.quizDeck === 'subject' ? quizDatabase.filter(question => question.subject === state.quizSubject) : quizDatabase;
  return `<div class="quiz-shell"><div class="quiz-screen-bar"><div><button class="text-link" data-screen="tests">${icon('arrowLeft', 13)} Back to Tests</button><h2>Two-Deck Quiz</h2><p>One engine. Two ways to sharpen your exam edge.</p></div><div class="quiz-screen-actions">${quizLanguageToggle()}</div></div><section class="card quiz-deck-switcher"><div class="quiz-deck-tabs"><button class="quiz-deck-tab ${state.quizDeck === 'subject' ? 'active' : ''}" data-action="quiz-select-deck" data-deck="subject"><span class="quiz-tab-icon aqua">${icon('book', 18)}</span><span><strong>Deck 1 · Subject Practice</strong><small>Target a single GS subject</small></span></button><button class="quiz-deck-tab ${state.quizDeck === 'mock' ? 'active' : ''}" data-action="quiz-select-deck" data-deck="mock"><span class="quiz-tab-icon gold">${icon('clipboard', 18)}</span><span><strong>Deck 2 · Full-Length Mock</strong><small>Mixed subjects · timed paper</small></span></button></div><div class="quiz-deck-content">${state.quizDeck === 'subject' ? `<div class="eyebrow">Choose your arena</div><h3>What do you want to work on?</h3><p>Build confidence with focused, bilingual practice before you step into a mixed paper.</p><div class="quiz-subject-chips">${subjectsInDeck.map(subject => `<button class="quiz-subject-chip ${state.quizSubject === subject ? 'active' : ''}" data-action="quiz-select-subject" data-subject="${subject}">${subject}<span>${quizDatabase.filter(question => question.subject === subject).length}</span></button>`).join('')}</div>` : `<div class="eyebrow">Exam simulation mode</div><h3>Mixed subjects. One focused sitting.</h3><p>Attempt a comprehensive paper with strict timing, question palette, negative marking and a full analytics summary.</p><div class="quiz-feature-row"><span>${icon('clock', 15)} 45 minutes</span><span>${icon('clipboard', 15)} ${quizDatabase.length} questions</span><span>${icon('chart', 15)} +2 / 0.66 marks</span></div>`}</div><div class="quiz-start-row"><div><span class="badge badge-slate">${selectedSet.length} questions</span><span class="badge badge-aqua">${state.quizDeck === 'mock' ? 'Mixed subjects' : state.quizSubject}</span><span class="badge badge-gold">${state.quizDeck === 'mock' ? '45 min' : '8 min'}</span></div><button class="btn btn-primary" data-action="quiz-start">Start ${state.quizDeck === 'mock' ? 'mock test' : 'practice'} ${icon('arrowRight', 14)}</button></div></section><section class="quiz-lobby-lower"><article class="card quiz-principles"><div class="eyebrow">Designed for analytical recall</div><h3>Answer, understand, remember.</h3><div class="principle-list"><div><span>${icon('circleCheck', 15)}</span><p><strong>Instant explanations</strong>Review the reasoning in English or Hindi immediately after every answer.</p></div><div><span>${icon('bolt', 15)}</span><p><strong>Fast navigation</strong>Jump through the question palette, mark items and return later.</p></div><div><span>${icon('chart', 15)}</span><p><strong>Useful analytics</strong>Accuracy, time per question and streaks are stored after submission.</p></div></div></article><article class="card quiz-recent"><div class="section-heading"><div><h2>Recent two-deck attempts</h2><p>Your last signals, not your labels.</p></div></div>${state.quizHistory.length ? state.quizHistory.slice(0, 3).map(item => `<div class="quiz-history-row"><span class="quiz-history-icon">${icon(item.deck === 'mock' ? 'clipboard' : 'book', 15)}</span><div><strong>${item.deck === 'mock' ? 'Full-Length Mock' : `${item.subject} Practice`}</strong><small>${item.correct}/${item.total} correct · ${item.accuracy}% accuracy</small></div><span class="quiz-history-score">${item.score}</span></div>`).join('') : `<div class="empty-state" style="padding:22px 13px;background:transparent"><div class="empty-state-icon" style="width:38px;height:38px;margin-bottom:8px">${icon('chart', 17)}</div><h3 style="font-size:13px">No attempts yet</h3><p style="margin-bottom:0">Your first session will appear here.</p></div>`}</article></section></div>`;
}

function renderQuizPlaying() {
  const set = quizQuestionSet();
  const question = quizCurrentQuestion();
  if (!question) return `<div class="empty-state"><h3>Quiz unavailable</h3><p>There are no questions in this deck yet.</p><button class="btn btn-primary" data-screen="tests">Back to tests</button></div>`;
  startTwoDeckTimer();
  const language = state.quizLanguage === 'hi' ? 'hi' : 'en';
  const selected = state.quizAnswers[question.id];
  const options = question.options[language] || question.options.en || [];
  const answered = Number.isInteger(selected);
  const answeredCount = quizAnsweredCount(set);
  const progress = Math.round(((state.quizIndex + 1) / set.length) * 100);
  const timeForQuestion = state.quizTimeSpent[question.id] || 0;
  return `<div class="quiz-shell"><div class="quiz-screen-bar"><div><button class="text-link" data-action="quiz-exit">${icon('arrowLeft', 13)} Exit quiz</button><h2>${quizDeckTitle()}</h2><p>Question ${state.quizIndex + 1} of ${set.length} · Switch language any time.</p></div><div class="quiz-screen-actions">${quizLanguageToggle()}<span class="quiz-timer-chip ${state.quizRemaining < 60 ? 'urgent' : ''}">${icon('clock', 14)}<strong data-quiz-timer>${formatQuizDuration(state.quizRemaining)}</strong></span></div></div><div class="quiz-progress-track"><span style="width:${progress}%"></span></div><div class="quiz-main-layout"><article class="card bilingual-question-card"><div class="quiz-question-header"><div class="quiz-question-meta"><span class="quiz-number">${String(state.quizIndex + 1).padStart(2, '0')}</span>${badge(question.subject, 'aqua')}${badge(question.difficulty, question.difficulty === 'Easy' ? 'aqua' : 'gold')}</div><button class="bookmark-btn ${state.quizBookmarked[question.id] ? 'active' : ''}" data-action="quiz-bookmark" aria-label="Bookmark question">${icon('bookmark', 17)}</button></div><h3 class="quiz-question-text">${escapeHtml(question.question[language] || question.question.en)}</h3><div class="quiz-options">${options.map((option, index) => { const correct = index === question.correct_option_index; const selectedWrong = answered && selected === index && !correct; const cls = answered && correct ? 'correct' : selectedWrong ? 'incorrect' : ''; return `<button class="quiz-option ${cls}" data-action="quiz-answer" data-index="${index}" ${answered ? 'disabled' : ''}><span class="quiz-option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span>${answered && correct ? `<span class="quiz-option-status">${icon('check', 16)}</span>` : ''}${selectedWrong ? `<span class="quiz-option-status">${icon('close', 16)}</span>` : ''}</button>`; }).join('')}</div>${answered ? `<div class="quiz-explanation-drawer"><div class="quiz-explanation-heading">${icon('spark', 15)} Explanation · ${language === 'hi' ? 'हिंदी' : 'English'}</div><div class="quiz-explanation-scroll">${escapeHtml(question.explanation[language] || question.explanation.en)}</div></div>` : `<div class="quiz-answer-hint">${icon('info', 14)} Choose one option to unlock the explanation.</div>`}<div class="quiz-navigation"><button class="btn btn-plain btn-sm" data-action="quiz-previous" ${state.quizIndex === 0 ? 'disabled' : ''}>${icon('arrowLeft', 14)} Previous</button><div class="quiz-nav-center"><span>${timeForQuestion ? `${timeForQuestion}s on this question` : 'Not answered yet'}</span><button class="text-link" data-action="quiz-submit">Submit quiz</button></div><button class="btn btn-primary btn-sm" data-action="quiz-next" ${state.quizIndex === set.length - 1 ? 'disabled' : ''}>Next question ${icon('arrowRight', 14)}</button></div></article><aside class="quiz-sidebar"><article class="card quiz-status-card"><div class="quiz-status-ring">${ring(Math.round((answeredCount / set.length) * 100), 76, false, true, 'var(--aqua)')}</div><div><div class="eyebrow">Quiz progress</div><h3>${answeredCount} / ${set.length} answered</h3><p>${state.quizDeck === 'mock' ? 'Full-length mock' : state.quizSubject} · ${state.quizLanguage === 'hi' ? 'Hindi active' : 'English active'}</p></div></article><article class="card quiz-palette-card"><div class="section-heading"><div><h2>Question palette</h2><p>Jump or mark for later.</p></div></div><div class="quiz-palette">${set.map((item, index) => `<button class="quiz-palette-btn ${Number.isInteger(state.quizAnswers[item.id]) ? 'answered' : ''} ${state.quizBookmarked[item.id] ? 'marked' : ''} ${index === state.quizIndex ? 'current' : ''}" data-action="quiz-goto" data-index="${index}">${String(index + 1).padStart(2, '0')}</button>`).join('')}</div><div class="quiz-palette-legend"><span><i class="answered"></i>Answered</span><span><i class="marked"></i>Saved</span><span><i></i>Open</span></div></article><article class="card quiz-coach-card"><span>${icon('spark', 16)}</span><strong>Switch language without losing your place.</strong><p>Both language versions share the same answer key and analytics record.</p></article></aside></div></div>`;
}

function renderQuizResult() {
  const set = quizQuestionSet();
  const stats = state.quizResult || calculateTwoDeckStats(set);
  const language = state.quizLanguage === 'hi' ? 'hi' : 'en';
  return `<div class="quiz-shell"><div class="quiz-screen-bar"><div><button class="text-link" data-screen="tests">${icon('arrowLeft', 13)} Back to Tests</button><h2>Quiz Result</h2><p>${quizDeckTitle()} · ${stats.totalTime}s recorded across this attempt.</p></div><div class="quiz-screen-actions">${quizLanguageToggle()}</div></div>${state.quizAutoSubmitted ? `<div class="quiz-auto-submit-banner">${icon('clock', 15)} Time expired – your answers were submitted automatically and safely.</div>` : ''}<section class="card quiz-result-card"><div class="quiz-result-hero"><div class="result-medal">${icon(stats.accuracy >= 70 ? 'trophy' : 'spark', 28)}</div><div><div class="eyebrow">Attempt complete</div><h2>${stats.accuracy >= 70 ? `A thoughtful attempt, ${escapeHtml(accountFirstName())}.` : 'Your mistakes have given you a map.'}</h2><p>${stats.attempted === stats.total ? 'You completed every question in the deck.' : `${stats.unanswered} questions were left open. Review them before your next sitting.`}</p></div></div><div class="quiz-result-metrics"><div><strong>${stats.score}</strong><span>score</span></div><div><strong>${stats.accuracy}%</strong><span>accuracy</span></div><div><strong>${stats.correct}/${stats.total}</strong><span>correct</span></div><div><strong>${stats.maxStreak}</strong><span>best streak</span></div></div><div class="quiz-result-actions"><button class="btn btn-primary" data-action="quiz-retry">Try again ${icon('refresh', 14)}</button><button class="btn btn-soft" data-screen="tests">Return to tests ${icon('arrowRight', 14)}</button></div></section><div class="section-heading" style="margin-top:25px"><div><h2>Answer review</h2><p>Explanations stay in your selected language.</p></div><span class="badge badge-aqua">${language === 'hi' ? 'हिंदी' : 'English'}</span></div><div class="quiz-review-list">${set.map((question, index) => { const localizedOptions = question.options[language] || question.options.en || []; const answer = state.quizAnswers[question.id]; const correct = answer === question.correct_option_index; const status = answer === undefined ? 'Unanswered' : correct ? 'Correct' : 'Review'; const tone = answer === undefined ? 'slate' : correct ? 'aqua' : 'coral'; return `<article class="card quiz-review-item"><div class="quiz-review-top"><span class="quiz-number">${String(index + 1).padStart(2, '0')}</span><div><strong>${escapeHtml(question.question[language] || question.question.en)}</strong><small>${question.subject} · ${state.quizTimeSpent[question.id] || 0}s spent</small></div>${badge(status, tone)}</div><div class="quiz-review-answer"><span>Correct answer</span><strong>${escapeHtml(localizedOptions[question.correct_option_index] || localizedOptions[0] || '')}</strong></div><div class="quiz-review-explanation">${escapeHtml(question.explanation[language] || question.explanation.en)}</div></article>`; }).join('')}</div></div>`;
}

function renderTwoDeckQuiz() {
  if (state.quizPhase === 'playing') return renderQuizPlaying();
  if (state.quizPhase === 'result') return renderQuizResult();
  return renderQuizLobby();
}

function currentPaheli() {
  return paheliData[Math.max(0, Math.min(state.paheliIndex, paheliData.length - 1))] || paheliData[0];
}

function savePaheliBookmarks() {
  try { localStorage.setItem('manthanPaheliBookmarks', JSON.stringify(state.paheliBookmarked)); } catch (e) { /* persistence is optional in preview */ }
}

function localDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function timeTableStorageKey(dateKey = localDateKey()) {
  return `manthanTimetable:${dateKey}`;
}

function scheduleTimetableMidnightReset() {
  if (state.timetableMidnightTimer) clearTimeout(state.timetableMidnightTimer);
  const now = new Date();
  const nextMidnight = new Date(now);
  nextMidnight.setHours(24, 0, 1, 0);
  state.timetableMidnightTimer = setTimeout(() => {
    state.timetableDate = '';
    state.timetableCompleted = {};
    ensureTimetableDay();
    if (state.screen === 'timeTable' || state.screen === 'home') render();
  }, Math.max(1000, nextMidnight.getTime() - now.getTime()));
}

function ensureTimetableDay() {
  const today = localDateKey();
  if (state.timetableDate !== today) {
    state.timetableDate = today;
    try {
      const saved = JSON.parse(localStorage.getItem(timeTableStorageKey(today)) || '{}');
      state.timetableCompleted = saved && typeof saved === 'object' && !Array.isArray(saved) ? saved : {};
    } catch (error) {
      state.timetableCompleted = {};
    }
  }
  scheduleTimetableMidnightReset();
}

function saveTimetableProgress() {
  try { localStorage.setItem(timeTableStorageKey(state.timetableDate), JSON.stringify(state.timetableCompleted)); } catch (error) { /* local persistence is optional */ }
}

function timetableProgress() {
  ensureTimetableDay();
  const completed = timetableData.filter(slot => Boolean(state.timetableCompleted[slot.id])).length;
  return { completed, total: timetableData.length, percent: timetableData.length ? Math.round((completed / timetableData.length) * 100) : 0 };
}

function currentTimetableSlotId() {
  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();
  return timetableData.find(slot => {
    const [startHour, startMinute] = slot.start.split(':').map(Number);
    const [endHour, endMinute] = slot.end.split(':').map(Number);
    const start = startHour * 60 + startMinute;
    const end = endHour * 60 + endMinute;
    return currentMinutes >= start && currentMinutes < end;
  })?.id || '';
}

function resetTimetableInteraction() {
  state.timetableCompleted = {};
  saveTimetableProgress();
}

function renderHomeTimeTableCard() {
  const progress = timetableProgress();
  return `<article class="timetable-home-card" data-action="open-timetable" role="button" tabindex="0"><div class="timetable-home-icon"><span class="timetable-home-glow"></span><span>${icon('calendar', 24)}</span><i>${icon('clock', 13)}</i></div><div class="timetable-home-copy"><div class="eyebrow">Daily Schedule · ${progress.completed}/${progress.total} blocks done</div><h3>दिनचर्या <span>Daily Schedule</span></h3><p>Turn your UPSC day into focused, finishable blocks – one check mark at a time.</p><div class="timetable-home-progress"><span style="width:${progress.percent}%"></span></div></div><div class="timetable-home-action"><strong>${progress.percent}%</strong><span>today complete</span><button class="btn btn-accent btn-sm" data-action="open-timetable">Open schedule ${icon('arrowRight', 14)}</button></div></article>`;
}

function renderTimeTable() {
  const progress = timetableProgress();
  const currentSlot = currentTimetableSlotId();
  const dateLabel = new Date().toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  return `<div class="timetable-screen"><div class="page-header"><div><button class="text-link" data-screen="home">${icon('arrowLeft', 13)} Home</button><div class="eyebrow">Your day, with intention</div><h2>   </h2><p>Daily Schedule · ${dateLabel}</p></div><div class="page-header-actions"><span class="badge badge-aqua">${progress.completed}/${progress.total} completed</span><button class="btn btn-soft btn-sm" data-action="reset-timetable">${icon('refresh', 14)} Start new day</button></div></div><article class="card timetable-summary"><div class="timetable-summary-ring">${ring(progress.percent, 94, false, true, 'var(--aqua)')}</div><div class="timetable-summary-copy"><div class="eyebrow">Today s schedule progress</div><h2>${progress.percent}% of today s schedule completed</h2><p>Build a steady rhythm across study, recovery and sleep. Completed blocks stay saved for this day.</p><div class="progress-bar"><span style="width:${progress.percent}%"></span></div><div class="timetable-summary-meta"><span>${progress.completed} done</span><span>${progress.total - progress.completed} remaining</span><span>Auto-resets at midnight</span></div></div></article><div class="timetable-list">${timetableData.map((slot, index) => { const done = Boolean(state.timetableCompleted[slot.id]); const isCurrent = slot.id === currentSlot; return `<label class="timetable-slot ${done ? 'done' : ''} ${isCurrent ? 'current' : ''}"><div class="timetable-slot-rail"><span class="timetable-slot-index">${String(index + 1).padStart(2, '0')}</span><span class="timetable-slot-line"></span></div><div class="timetable-slot-time"><strong>${slot.timeLabel}</strong>${isCurrent ? '<span class="timetable-now">Now</span>' : ''}</div><span class="timetable-slot-icon">${icon(slot.icon, 17)}</span><span class="timetable-slot-content"><strong>${slot.title}</strong><span>${slot.description}</span><em>${slot.tag}</em></span><input class="timetable-checkbox" type="checkbox" ${done ? 'checked' : ''} data-timetable-id="${slot.id}" aria-label="Mark ${escapeHtml(slot.title)} as complete"><span class="timetable-checkmark">${icon('check', 14)}</span></label>`; }).join('')}</div><div class="timetable-footer"><span>${icon('target', 14)} A calm plan is a competitive advantage.</span><span>${currentSlot ? 'Current block highlighted' : 'Your next block is ready when you are.'}</span></div></div>`;
}

function renderHomePaheliCard() {
  const paheli = currentPaheli();
  const bookmarkCount = Object.values(state.paheliBookmarked).filter(Boolean).length;
  return `<article class="paheli-home-card" data-action="open-paheli" role="button" tabindex="0"><div class="paheli-home-illustration"><span class="paheli-orbit orbit-one"></span><span class="paheli-orbit orbit-two"></span><span class="paheli-home-bulb">${icon('lightbulb', 23)}</span><span class="paheli-puzzle-badge">${icon('puzzle', 14)}</span></div><div class="paheli-home-copy"><div class="eyebrow">Daily brain break · ${paheli.category}</div><h3>    <span>Paheli</span></h3><p>Give your mind a playful five minutes. Solve one riddle, unlock the answer.</p><div class="paheli-home-meta"><span>${icon('spark', 13)} ${paheliData.length} riddles</span><span>${icon('bookmark', 13)} ${bookmarkCount} saved</span></div></div><button class="btn btn-accent btn-sm paheli-home-cta" data-action="open-paheli">Try a Paheli ${icon('arrowRight', 14)}</button></article>`;
}

function normalizePaheliAnswer(value) {
  return String(value || '')
    .toLowerCase()
    .normalize('NFKC')
    .replace(/[()[\]{}]/g, ' ')
    .replace(/[\u0900-\u0903\u093c]/g, '')
    .replace(/[^\p{L}\p{N}]+/gu, '');
}

function paheliEditDistance(first, second) {
  const a = Array.from(first);
  const b = Array.from(second);
  const row = Array.from({ length: b.length + 1 }, (_, index) => index);
  for (let i = 1; i <= a.length; i += 1) {
    let diagonal = row[0];
    row[0] = i;
    for (let j = 1; j <= b.length; j += 1) {
      const above = row[j];
      row[j] = a[i - 1] === b[j - 1]
        ? diagonal
        : Math.min(diagonal + 1, above + 1, row[j - 1] + 1);
      diagonal = above;
    }
  }
  return row[b.length];
}

function paheliAnswerMatches(value, paheli) {
  const input = normalizePaheliAnswer(value);
  if (!input) return false;
  const candidates = [paheli.answer, paheli.answerEn, ...(Array.isArray(paheli.answerAliases) ? paheli.answerAliases : [])]
    .map(normalizePaheliAnswer)
    .filter(Boolean);
  return candidates.some(candidate => {
    if (input === candidate) return true;
    if (input.length >= 3 && (input.includes(candidate) || candidate.includes(input))) return true;
    const tolerance = Array.from(candidate).length >= 7 ? 2 : 1;
    return paheliEditDistance(input, candidate) <= tolerance;
  });
}

function paheliCorrectOptionIndex(paheli) {
  if (!Array.isArray(paheli.options)) return -1;
  const index = paheli.options.findIndex(option => paheliAnswerMatches(option, paheli));
  return index >= 0 ? index : 0;
}

function resetPaheliInteraction() {
  state.paheliAnswerVisible = false;
  state.paheliTypedAnswer = '';
  state.paheliInputStatus = null;
  state.paheliSelectedOption = null;
  state.paheliHintVisible = false;
  
  
}

function renderPaheli() {
  const paheli = currentPaheli();
  const isRevealed = state.paheliAnswerVisible;
  const isSaved = Boolean(state.paheliBookmarked[paheli.id]);
  const inputStatus = state.paheliInputStatus;
  const optionIndex = paheliCorrectOptionIndex(paheli);
  const options = Array.isArray(paheli.options) ? paheli.options : [];
  const feedback = inputStatus === 'correct'
    ? `<div class="paheli-feedback correct">${icon('circleCheck', 15)} <strong>सही उत्तर! 🎉</strong><span>Excellent thinking – the answer is unlocked.</span></div>`
    : inputStatus === 'incorrect'
      ? `<div class="paheli-feedback incorrect">${icon('info', 15)} <strong>गलत उत्तर, दोबारा प्रयास करें! 📚</strong><span>Try the hint or choose another answer.</span></div>`
      : '';
  return `<div class="paheli-screen"><div class="paheli-page-header"><div><button class="text-link" data-screen="home">${icon('arrowLeft', 13)} Home</button><div class="eyebrow">Manthan brain break · ${state.paheliIndex + 1} of ${paheliData.length}</div><h2>मज़ेदार पहेलियां</h2><p>Fun riddles to wake up the curious side of your mind.</p></div><div class="paheli-header-actions"><button class="btn btn-soft btn-sm" data-action="share-paheli">${icon('send', 14)} Share</button><button class="bookmark-btn ${isSaved ? 'active' : ''}" data-action="bookmark-paheli" aria-label="Bookmark this riddle">${icon('bookmark', 17)}</button></div></div><div class="paheli-layout"><article class="card paheli-card"><div class="paheli-card-top"><div class="paheli-category">${icon('puzzle', 14)} ${paheli.category}</div><span class="paheli-count">${String(state.paheliIndex + 1).padStart(2, '0')} / ${String(paheliData.length).padStart(2, '0')}</span></div><div class="paheli-question-mark">?</div><h3 class="paheli-question">${escapeHtml(paheli.question)}</h3><details class="paheli-translation"><summary>English translation</summary><p>${escapeHtml(paheli.questionEn || '')}</p></details><div class="paheli-hint-row"><button class="btn paheli-hint-button ${state.paheliHintVisible ? 'active' : ''}" data-action="show-paheli-hint">${icon('lightbulb', 15)} ${state.paheliHintVisible ? 'इशारा छिपाएं' : 'इशारा देखें'}</button>${state.paheliHintVisible ? `<div class="paheli-hint paheli-hint-revealed">${icon('lightbulb', 15)}<span><strong>इशारा:</strong> ${escapeHtml(paheli.hint)}</span></div>` : `<span class="paheli-hint-locked">${icon('lock', 13)} Hint stays subtle – no spoilers.</span>`}</div><div class="paheli-input-block"><div class="paheli-input-label"><span>अपना उत्तर लिखें <small>Type your guess</small></span><span>${icon('edit', 13)}</span></div><div class="paheli-input-row"><input id="paheliAnswerInput" class="paheli-answer-input" type="text" autocomplete="off" placeholder="यहाँ अपना उत्तर लिखें…" value="${escapeHtml(state.paheliTypedAnswer)}" aria-label="Type your answer"><button class="btn btn-accent paheli-check-btn" data-action="check-paheli-answer">सबमिट करें</button></div>${feedback}</div><div class="paheli-option-divider"><span>या विकल्प चुनें</span></div><div class="paheli-options">${options.map((option, index) => { const correct = index === optionIndex; const selected = state.paheliSelectedOption === index; const optionClass = state.paheliSelectedOption !== null && correct ? 'correct' : selected && !correct ? 'incorrect' : ''; return `<button class="paheli-option ${optionClass}" data-action="select-paheli-option" data-index="${index}"><span class="paheli-option-letter">${String.fromCharCode(65 + index)}</span><span>${escapeHtml(option)}</span>${state.paheliSelectedOption !== null && correct ? `<span class="paheli-option-status">${icon('check', 15)}</span>` : ''}${selected && !correct ? `<span class="paheli-option-status">${icon('close', 15)}</span>` : ''}</button>`; }).join('')}</div>${isRevealed ? `<div class="paheli-answer-zone revealed"><div class="paheli-answer-label">${icon('circleCheck', 14)} उत्तर</div><div class="paheli-answer-text">${escapeHtml(paheli.answer)}${paheli.answerEn ? ` <span>(${escapeHtml(paheli.answerEn)})</span>` : ''}</div></div>` : `<div class="paheli-answer-zone"><div class="paheli-answer-hidden"><span class="paheli-lock-dot">?</span><span>पहेली उत्तर छिपा है</span></div></div>`}<button class="btn ${isRevealed ? 'btn-soft' : 'btn-primary'} paheli-reveal-btn" data-action="toggle-paheli-answer">${icon(isRevealed ? 'close' : 'lightbulb', 15)} ${isRevealed ? 'उत्तर छिपाएं' : 'उत्तर देखें'}</button><div class="paheli-card-footer"><span>${icon('spark', 13)} Think before you peek</span><span>${isRevealed ? 'Answer unlocked' : 'No spoilers yet'}</span></div></article><aside class="paheli-side"><article class="card paheli-streak-card"><div class="paheli-side-icon">${icon('flame', 18)}</div><div><div class="eyebrow">Curiosity streak</div><h3>Keep your mind playful</h3><p>Solve one Paheli a day to build a tiny, delightful habit.</p></div></article><article class="card paheli-saved-card"><div class="section-heading"><div><h2>Saved riddles</h2><p>Come back to your favourites.</p></div><span class="badge badge-gold">${Object.values(state.paheliBookmarked).filter(Boolean).length}</span></div>${Object.values(state.paheliBookmarked).some(Boolean) ? `<div class="paheli-saved-list">${paheliData.filter(item => state.paheliBookmarked[item.id]).slice(0, 3).map(item => `<button class="paheli-saved-row" data-action="open-paheli-index" data-index="${paheliData.indexOf(item)}"><span>${icon('bookmark', 13)}</span><strong>${escapeHtml(item.question)}</strong>${icon('chevronRight', 14)}</button>`).join('')}</div>` : `<div class="paheli-side-empty">${icon('bookmark', 18)}<span>Bookmark a riddle to find it here.</span></div>`}</article></aside></div><div class="paheli-navigation"><button class="btn btn-plain" data-action="previous-paheli" ${state.paheliIndex === 0 ? 'disabled' : ''}>${icon('arrowLeft', 15)} Previous</button><div class="paheli-progress-dots">${paheliData.map((item, index) => `<button aria-label="Go to riddle ${index + 1}" class="paheli-dot ${index === state.paheliIndex ? 'active' : ''} ${state.paheliBookmarked[item.id] ? 'saved' : ''}" data-action="open-paheli-index" data-index="${index}"></button>`).join('')}</div><button class="btn btn-primary" data-action="next-paheli" ${state.paheliIndex === paheliData.length - 1 ? 'disabled' : ''}>Next Paheli ${icon('arrowRight', 15)}</button></div></div>`;
}

function checkPaheliTypedAnswer() {
  const input = document.getElementById('paheliAnswerInput');
  const value = input ? input.value.trim() : state.paheliTypedAnswer.trim();
  state.paheliTypedAnswer = value;
  state.paheliSelectedOption = null;
  if (!value) {
    state.paheliInputStatus = null;
    state.paheliAnswerVisible = false;
    render();
    toast('पहले अपना उत्तर लिखें।', 'error');
    return;
  }
  const correct = paheliAnswerMatches(value, currentPaheli());
  state.paheliInputStatus = correct ? 'correct' : 'incorrect';
  state.paheliAnswerVisible = correct;
  render();
  toast(correct ? 'सही उत्तर! 🎉' : 'गलत उत्तर, दोबारा प्रयास करें! 📚', correct ? 'normal' : 'error');
}

function selectPaheliOption(indexValue) {
  const index = Number(indexValue);
  const paheli = currentPaheli();
  if (!Array.isArray(paheli.options) || !Number.isInteger(index) || index < 0 || index >= paheli.options.length) return;
  const correct = index === paheliCorrectOptionIndex(paheli);
  state.paheliTypedAnswer = '';
  state.paheliSelectedOption = index;
  state.paheliInputStatus = correct ? 'correct' : 'incorrect';
  state.paheliAnswerVisible = correct;
  render();
  toast(correct ? 'सही उत्तर! 🎉' : 'गलत उत्तर, दोबारा प्रयास करें! 📚', correct ? 'normal' : 'error');
}

function shareCurrentPaheli() {
  const paheli = currentPaheli();
  const shareText = `पहेली: ${paheli.question}\n\nबुझौता — फिर उत्तर देखें: ${paheli.answer}\n\nManthan Prep`;
  try {
    if (navigator.share) {
      navigator.share({ title: 'मज़ेदार पहेली – Manthan Prep', text: shareText }).then(() => toast('Paheli shared successfully.')).catch(error => {
        if (error?.name !== 'AbortError') toast('Share was not completed. You can try again.', 'error');
      });
      return;
    }
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(shareText)}`;
    const popup = window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    if (popup) toast('Opening WhatsApp to share this Paheli.');
    else if (navigator.clipboard?.writeText) navigator.clipboard.writeText(shareText).then(() => toast('Paheli copied. Share it with a friend!')).catch(() => toast('Sharing is unavailable in this browser.', 'error'));
    else toast('Sharing is unavailable in this browser.', 'error');
  } catch (error) {
    console.error('Paheli share failed', error);
    toast('Sharing is unavailable right now.', 'error');
  }
}

function renderHome() {
  return `<section class="home-intro"><div><div class="eyebrow">Tuesday, 25 August 2026</div><h2>${homeGreetingText()}</h2><p>Keep the chain going – your next breakthrough is one focused session away.</p></div><div class="streak-chip">${icon('flame', 15)} 12 day streak</div></section>
  ${renderHomeTimeTableCard()}
  <section class="home-hero">
    <article class="card hero-progress"><div class="home-progress-visual">${homeProgressRing(68)}${homeProgressProfileButton()}</div><div class="hero-copy"><div class="eyebrow">Overall syllabus completion</div><h3>A clear view of your climb.</h3><p>You have covered the fundamentals. Now deepen recall in the topics that move your score.</p><div class="hero-meta"><div><strong>52 / 76</strong>topics covered</div><div><strong>+8%</strong>this week</div></div></div></article>
    <article class="card hero-plan"><div class="hero-plan-top"><div><div class="eyebrow">Today’s study plan</div><h3>Build momentum</h3></div><span class="goal-icon">${icon('target', 19)}</span></div><div><div class="plan-row"><span>Daily target</span><strong>2 of 3 done</strong></div><div class="progress-bar"><span style="width:66%"></span></div></div><div class="plan-foot"><p>Next up: Polity revision</p><button class="btn btn-primary btn-sm" data-action="open-practice">Continue ${icon('arrowRight', 14)}</button></div></article>
  </section>
  <div class="section-heading"><div><h2>Quick access</h2><p>Pick up exactly where you need to.</p></div></div>
  <section class="quick-grid">
    <button class="quick-card" data-screen="tests"><div class="quick-card-top"><span class="quick-icon aqua">${icon('bolt', 17)}</span><span class="quick-arrow">${icon('arrowRight', 15)}</span></div><strong>Today’s Quiz</strong><small>10 questions · 8 min</small></button>
    <button class="quick-card" data-screen="groups"><div class="quick-card-top"><span class="quick-icon gold">${icon('users', 17)}</span><span class="quick-arrow">${icon('arrowRight', 15)}</span></div><strong>My Groups</strong><small>2 active circles</small></button>
    <button class="quick-card" data-screen="revision"><div class="quick-card-top"><span class="quick-icon coral">${icon('target', 17)}</span><span class="quick-arrow">${icon('arrowRight', 15)}</span></div><strong>Weak Topics</strong><small>5 topics to revisit</small></button>
    <button class="quick-card" data-screen="groups"><div class="quick-card-top"><span class="quick-icon violet">${icon('trophy', 17)}</span><span class="quick-arrow">${icon('arrowRight', 15)}</span></div><strong>Leaderboard</strong><small>You rank #04 this week</small></button>
  </section>
  ${renderHomePaheliCard()}
  <section class="home-lower">
    <article class="card focus-card"><div class="section-heading"><div><h2>Today’s focus</h2><p>High-value questions curated for your plan.</p></div><button class="text-link" data-screen="subjects">View all ${icon('arrowRight', 13)}</button></div><div class="focus-list">
      ${questions.slice(0, 3).map((q, i) => `<div class="focus-item"><span class="question-number">0${i + 1}</span><div class="focus-item-main"><strong>${q.text}</strong><small>${q.subject} · ${q.topic} ${q.pyq ? `· ${q.year} PYQ` : ''}</small></div>${badge(q.difficulty, q.difficulty === 'Easy' ? 'aqua' : 'gold')}<button class="btn btn-soft btn-sm" data-action="open-practice" data-question="${i}">Solve</button></div>`).join('')}
    </div></article>
    <article class="card performance-card"><div class="section-heading"><div><h2>Performance</h2><p>Average score across tests</p></div><span class="badge badge-aqua">Last 30 days</span></div><div class="perf-stat"><strong>78%</strong><span>  6.4%</span></div><div class="chart-wrap"><svg viewBox="0 0 420 130" role="img" aria-label="Performance trend"><defs><linearGradient id="perfFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#65c7bf" stop-opacity=".28"/><stop offset="1" stop-color="#65c7bf" stop-opacity="0"/></linearGradient></defs><path d="M0 105H420M0 70H420M0 35H420" stroke="#edf1f5" stroke-width="1" fill="none"/><path d="M0 98 C32 92, 38 93, 62 80 S98 83, 121 69 S158 78, 180 55 S218 61, 245 53 S278 45, 305 50 S344 26, 365 34 S399 25, 420 15 L420 130 L0 130Z" fill="url(#perfFill)"/><path d="M0 98 C32 92, 38 93, 62 80 S98 83, 121 69 S158 78, 180 55 S218 61, 245 53 S278 45, 305 50 S344 26, 365 34 S399 25, 420 15" stroke="#3aaba4" stroke-width="3" fill="none" stroke-linecap="round"/><circle cx="420" cy="15" r="4.5" fill="#fff" stroke="#3aaba4" stroke-width="3"/></svg></div><div class="chart-labels"><span>01 Aug</span><span>08 Aug</span><span>15 Aug</span><span>22 Aug</span><span>Today</span></div></article>
  </section>`;
}

function renderSubjects() {
  return `<div class="page-header"><div><div class="eyebrow">Six pillars of GS preparation</div><h2>Subjects</h2><p>Study by concept, then test your understanding.</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="filter-subjects">${icon('filter', 14)} Filter</button><button class="btn btn-primary btn-sm" data-action="open-practice">${icon('bolt', 14)} Quick practice</button></div></div>
  <div class="subject-grid">${subjects.map(s => `<article class="card subject-card" data-action="open-subject" data-id="${s.id}" role="button" tabindex="0"><div class="subject-top"><span class="subject-icon">${icon(s.icon, 19)}</span>${ring(s.percent, '', false, true, s.percent > 75 ? 'var(--aqua)' : s.percent > 55 ? 'var(--gold)' : 'var(--coral)')}</div><h3>${s.name}</h3><p>${s.description}</p><div class="subject-card-foot"><span>${s.done} of ${s.topics} topics covered</span><button data-action="open-subject" data-id="${s.id}">Open ${icon('arrowRight', 12)}</button></div></article>`).join('')}</div>`;
}

function renderSubjectDetail() {
  const subject = subjectById(state.selectedSubject);
  const topics = topicMap[subject.id] || topicMap.polity;
  return `<div class="page-header"><div><button class="text-link" data-screen="subjects">${icon('arrowLeft', 13)} All subjects</button><h2>${subject.name}</h2><p>${subject.description}. Build from first principles, then revise with intent.</p></div><div class="page-header-actions"><button class="btn btn-primary btn-sm" data-action="open-practice" data-question="0">${icon('bolt', 14)} Practice this subject</button></div></div>
  <div class="subject-detail-layout"><article class="card subject-overview"><span class="subject-icon">${icon(subject.icon, 20)}</span><div class="eyebrow" style="color:#86d4ce">Subject mastery</div><h2>${subject.percent}% complete</h2><p>You are building a strong base. Close the remaining gaps with targeted recall sessions.</p><div class="overview-stat-row"><div class="overview-stat"><strong>${subject.done}</strong><span>topics done</span></div><div class="overview-stat"><strong>${subject.topics - subject.done}</strong><span>to revisit</span></div><div class="overview-stat"><strong>+5%</strong><span>this week</span></div></div><button class="btn btn-accent" data-action="open-practice">Start a 10-min drill ${icon('arrowRight', 14)}</button></article><article class="card topic-list-card"><div class="section-heading"><div><h2>Topic map</h2><p>Check off your completed concepts.</p></div><span class="badge badge-aqua">${subject.done}/${subject.topics} complete</span></div>${topics.map((topic, i) => `<label class="topic-row"><input class="topic-check" type="checkbox" ${i < Math.round(subject.done / subject.topics * topics.length) ? 'checked' : ''} data-topic-subject="${subject.id}" data-topic-index="${i}"><span class="topic-copy"><strong>${topic}</strong><span>${i % 2 === 0 ? 'Core concept · 12 min review' : 'Application & examples · 15 min review'}</span></span><span class="topic-pct">${i < 2 ? 'Strong' : i === 2 ? 'Building' : 'To do'}</span></label>`).join('')}</article></div>`;
}

function renderPractice() {
  const q = questions[state.practiceIndex % questions.length];
  const answered = state.practiceAnswered !== null;
  return `<div class="page-header"><div><button class="text-link" data-screen="subjects">${icon('arrowLeft', 13)} Back to subjects</button><h2>Question + Explanation</h2><p>Every answer is a chance to make the concept stick.</p></div><div class="page-header-actions"><span class="badge badge-slate">Question ${state.practiceIndex + 1} of ${questions.length}</span></div></div>
  <div class="practice-layout"><article class="card question-card"><div class="question-card-header"><div><div class="question-meta">${badge(q.subject, 'aqua')}${q.pyq ? badge(`PYQ ${q.year}`, 'gold') : badge('Concept check', 'violet')}${badge(q.difficulty, q.difficulty === 'Easy' ? 'aqua' : 'slate')}</div><h2>${q.text}</h2></div><button class="bookmark-btn ${state.practiceBookmarked ? 'active' : ''}" data-action="toggle-bookmark" aria-label="Bookmark question">${icon('bookmark', 17)}</button></div><div class="options">${q.options.map((option, i) => { const isCorrect = i === q.correct; const isSelected = state.practiceAnswered === i; let cls = ''; if (answered && isCorrect) cls = 'correct'; else if (answered && isSelected && !isCorrect) cls = 'incorrect'; return `<button class="option-btn ${cls}" data-action="answer-practice" data-index="${i}" ${answered ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${option}</span>${answered && isCorrect ? `<span class="option-mark">${icon('check', 16)}</span>` : ''}${answered && isSelected && !isCorrect ? `<span class="option-mark">${icon('info', 16)}</span>` : ''}</button>`; }).join('')}</div>${answered ? `<div class="explanation-box"><div class="explanation-title">${icon('circleCheck', 15)} Why this is right</div><p>${q.explanation}</p></div><div class="model-answer"><div class="explanation-title">${icon('spark', 15)} Model answer lens</div><p>${q.model}</p></div><div style="display:flex;justify-content:flex-end;margin-top:17px"><button class="btn btn-primary btn-sm" data-action="next-practice">Next question ${icon('arrowRight', 14)}</button></div>` : `<div style="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:20px;color:var(--muted);font-size:10px"><span>${icon('info', 14)} Select one option to reveal the explanation.</span><span>+2 marks</span></div>`}</article><aside class="question-side"><article class="card session-card"><h3>Session snapshot</h3><div class="session-row"><span>Accuracy today</span><strong>8 / 10</strong></div><div class="session-row"><span>Current streak</span><strong>4 correct</strong></div><div class="session-row"><span>Time invested</span><strong>24 min</strong></div><div class="session-row"><span>Next review</span><strong>In 3 days</strong></div></article><article class="card session-card focus-tip"><div class="tip-icon">${icon('spark', 16)}</div><h3>Analytical cue</h3><p>In UPSC answers, pair the constitutional provision with the institutional reason behind it. That is where analysis begins.</p></article></aside></div>`;
}

function renderCurrentAffairs() {
  const dateTabs = ['25 Aug', '24 Aug', '23 Aug', '22 Aug', '21 Aug', '20 Aug', '19 Aug'];
  const categories = ['All', 'Polity', 'Economy', 'International', 'Environment', 'Science & Tech'];
  const activeDate = dateTabs[state.affairsDate];
  let cards = affairs.filter(item => item.date === activeDate);
  if (!cards.length) cards = affairs.slice(0, 2);
  if (state.affairsCategory !== 'All') cards = cards.filter(item => item.category === state.affairsCategory);
  return `<div class="page-header"><div><div class="eyebrow">A daily 15-minute habit</div><h2>Current Affairs</h2><p>Read the headline, then read the relevance note – that is the Manthan difference.</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="refresh-affairs">${icon('refresh', 14)} Updated just now</button></div></div><div class="date-tabs">${dateTabs.map((date, i) => `<button class="date-tab ${state.affairsDate === i ? 'active' : ''}" data-action="affairs-date" data-index="${i}"><strong>${date.split(' ')[0]}</strong><span>${i === 0 ? 'Today' : date.split(' ')[1]}</span></button>`).join('')}</div><div class="affairs-layout"><div><div class="pill-tabs" style="margin-bottom:15px">${categories.map(c => `<button class="pill-tab ${state.affairsCategory === c ? 'active' : ''}" data-action="affairs-category" data-category="${c}">${c}</button>`).join('')}</div><div class="affair-list">${cards.length ? cards.map(item => `<article class="card affair-card"><div class="affair-date"><strong>${item.date.split(' ')[0]}</strong><span>${item.date.split(' ')[1]}</span></div><div><div>${badge(item.category, item.category === 'Economy' ? 'gold' : item.category === 'International' ? 'violet' : 'aqua')}</div><h3>${item.title}</h3><p>${item.summary}</p><div class="relevance"><strong>UPSC relevance</strong> · ${item.relevance}</div></div></article>`).join('') : `<div class="empty-state"><div class="empty-state-icon">${icon('calendar', 20)}</div><h3>No stories in this filter yet</h3><p>Try another category or check back after the daily editorial update.</p><button class="btn btn-soft btn-sm" data-action="affairs-category" data-category="All">Clear filter</button></div>`}</div></div><aside class="card affairs-sidebar"><div class="eyebrow">This week s mix</div><h3 style="margin:5px 0 0;color:var(--navy);font-size:16px">Read with a lens</h3><div class="category-list"><div class="category-row"><span class="category-dot" style="background:var(--aqua)"></span><span>Polity & governance</span><span>32%</span></div><div class="category-row"><span class="category-dot" style="background:var(--gold)"></span><span>Economy</span><span>24%</span></div><div class="category-row"><span class="category-dot" style="background:var(--violet)"></span><span>International</span><span>18%</span></div><div class="category-row"><span class="category-dot" style="background:var(--coral)"></span><span>Environment</span><span>14%</span></div></div><div class="editor-note">${icon('spark', 14)} <strong>Editorial note</strong><br>In your notes, record one fact, one connection and one possible answer use-case for every story.</div></aside></div>`;
}

function renderTests() {
  return `<div class="page-header"><div><div class="eyebrow">Practice under pressure</div><h2>Tests & Challenges</h2><p>Short drills for rhythm. Full mocks for exam temperament.</p></div><div class="page-header-actions"><span class="badge badge-aqua">3 tests ready</span><button class="btn btn-primary btn-sm" data-action="open-two-deck">${icon('bolt', 14)} Play Quiz</button></div></div><div class="test-grid"><article class="card test-card featured"><span class="test-deco"></span><div class="eyebrow">Recommended for today</div><h3>GS Foundation Mock 04</h3><p>A balanced 50-question set across polity, economy, geography and current affairs.</p><div class="test-meta"><span>${icon('clock', 13)} 45 min</span><span>${icon('clipboard', 13)} 50 Qs</span></div><button class="btn btn-accent btn-sm" data-action="start-mock">Start full-length ${icon('arrowRight', 14)}</button></article><article class="card test-card"><div class="eyebrow">Daily drill</div><h3>Today’s Quiz</h3><p>Ten high-yield questions to keep your recall active.</p><div class="test-meta"><span>${icon('clock', 13)} 8 min</span><span>${icon('bolt', 13)} +20 XP</span></div><button class="btn btn-primary btn-sm" data-action="open-two-deck">Play Quiz ${icon('arrowRight', 14)}</button></article><article class="card test-card"><div class="eyebrow">Build speed</div><h3>Polity Sprint</h3><p>Ten questions on Parliament, federalism and constitutional bodies.</p><div class="test-meta"><span>${icon('clock', 13)} 10 min</span><span>${icon('clipboard', 13)} 10 Qs</span></div><button class="btn btn-soft btn-sm" data-action="open-practice" data-question="0">Practice now ${icon('arrowRight', 14)}</button></article></div><section class="two-deck-promo"><div><div class="eyebrow">New · Play Quiz</div><h3>Two decks. Two ways to build your edge.</h3><p>Switch between focused subject practice and a timed mixed mock – in English or Hindi, with explanations that stay with you.</p></div><div class="two-deck-promo-actions"><span class="promo-language">EN <b>·</b> HI</span><button class="btn btn-accent btn-sm" data-action="open-two-deck">Open Two-Deck Quiz ${icon('arrowRight', 13)}</button></div></section><section class="battle-banner"><div class="battle-copy"><div class="eyebrow" style="color:#86d4ce">Real-time learning</div><h3>Think fast. Learn faster.</h3><p>Challenge an online aspirant in a three-question live battle. A bot takes over if your opponent disconnects.</p></div><button class="btn btn-accent" data-action="start-battle">${icon('bolt', 15)} Quick Match</button></section><div class="section-heading" style="margin-top:27px"><div><h2>Recent performance</h2><p>Use your mistakes as a study plan.</p></div><button class="text-link" data-screen="profile">View analytics ${icon('arrowRight', 13)}</button></div><article class="card" style="padding:0;overflow:hidden"><div class="member-row" style="padding:15px 20px;border-top:0"><div class="member-info"><span class="question-number">01</span><div><strong>GS Foundation Mock 03</strong><span>Completed 24 Aug · 42 / 50</span></div></div><span class="member-score">84%</span>${badge('PASS', 'aqua')}</div><div class="member-row" style="padding:15px 20px"><div class="member-info"><span class="question-number">02</span><div><strong>Economy Sprint</strong><span>Completed 21 Aug · 14 / 20</span></div></div><span class="member-score">70%</span>${badge('PASS', 'aqua')}</div></article>`;
}

function renderMock() {
  const q = questions[state.mockIndex % questions.length];
  const selected = state.mockAnswers[state.mockIndex];
  const answeredCount = Object.keys(state.mockAnswers).length;
  if (!state.mockTimerStarted) startMockTimer();
  const minutes = Math.floor(state.mockSeconds / 60).toString().padStart(2, '0');
  const seconds = (state.mockSeconds % 60).toString().padStart(2, '0');
  return `<div class="mock-shell"><div class="mock-topline"><div><button class="text-link" data-screen="tests">${icon('arrowLeft', 13)} Exit test</button><h2>GS Foundation Mock 04</h2></div><span class="badge badge-slate">Question ${state.mockIndex + 1} of 20</span></div><div class="mock-progress"><span style="width:${((state.mockIndex + 1) / 20) * 100}%"></span></div><div class="mock-layout"><article class="card mock-question"><div class="question-meta">${badge(q.subject, 'aqua')}${q.pyq ? badge(`PYQ ${q.year}`, 'gold') : badge('Concept check', 'violet')}</div><h3 class="mock-question-title">${q.text}</h3><div class="options">${q.options.map((option, i) => `<button class="option-btn ${selected === i ? 'correct' : ''}" data-action="answer-mock" data-index="${i}"><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${option}</span>${selected === i ? `<span class="option-mark">${icon('check', 16)}</span>` : ''}</button>`).join('')}</div><div class="mock-actions"><button class="btn btn-plain btn-sm" data-action="mock-previous" ${state.mockIndex === 0 ? 'disabled' : ''}>${icon('arrowLeft', 14)} Previous</button><button class="btn btn-soft btn-sm" data-action="mock-mark">${state.mockMarked[state.mockIndex] ? icon('bookmark', 13) + ' Unmark' : icon('bookmark', 13) + ' Mark for review'}</button><button class="btn btn-primary btn-sm" data-action="mock-next">${state.mockIndex === 19 ? 'Review test' : 'Next'} ${icon('arrowRight', 14)}</button></div></article><aside><div class="card timer-box">${icon('clock', 21)}<div><small>Time remaining</small><strong>${minutes}:${seconds}</strong></div></div><article class="card palette-card"><div class="palette-header"><h3>Question palette</h3><span>${answeredCount} answered</span></div><div class="palette-grid">${Array.from({ length: 20 }, (_, i) => `<button class="palette-btn ${state.mockAnswers[i] !== undefined ? 'answered' : ''} ${state.mockMarked[i] ? 'marked' : ''} ${i === state.mockIndex ? 'current' : ''}" data-action="mock-goto" data-index="${i}">${String(i + 1).padStart(2, '0')}</button>`).join('')}</div><div class="palette-legend"><div class="legend-item"><span class="legend-swatch answered"></span>Answered</div><div class="legend-item"><span class="legend-swatch marked"></span>Marked for review</div><div class="legend-item"><span class="legend-swatch"></span>Unanswered</div></div><button class="btn btn-primary" style="width:100%;margin-top:19px" data-action="submit-mock">Submit test</button></article></aside></div></div>`;
}

function renderGroups() {
  return `<div class="page-header"><div><div class="eyebrow">Accountability works</div><h2>My Groups</h2><p>Study beside people who make showing up feel normal.</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="join-group">${icon('plus', 14)} Join with code</button><button class="btn btn-primary btn-sm" data-action="create-group">${icon('plus', 14)} Create group</button></div></div><div class="groups-grid">${groups.map(g => `<article class="card group-card" data-action="open-group" data-id="${g.id}" role="button" tabindex="0"><div class="group-card-top"><span class="group-emblem">${icon(g.emblem, 19)}</span>${ring(g.pass, 57, false, true, g.pass > 70 ? 'var(--aqua)' : 'var(--gold)')}</div><h3>${g.name}</h3><p>${g.description}</p><div class="group-stats"><div class="group-stat"><strong>${g.members}</strong><span>members</span></div><div class="group-stat"><strong>${g.tests}</strong><span>tests this month</span></div><div class="group-stat"><strong>${g.pass}%</strong><span>pass rate</span></div></div><div class="group-foot"><div class="member-stack">${g.avatars.map(a => avatar(a)).join('')}</div><button class="text-link" data-action="open-group" data-id="${g.id}">Dashboard ${icon('arrowRight', 12)}</button></div></article>`).join('')}</div><div class="empty-state" style="margin-top:16px;padding:25px;display:flex;align-items:center;justify-content:space-between;text-align:left;gap:20px"><div style="display:flex;align-items:center;gap:13px"><div class="empty-state-icon" style="margin:0;width:40px;height:40px">${icon('users', 18)}</div><div><h3 style="font-size:13px">Build your study circle</h3><p style="margin:3px 0 0;max-width:420px">Invite two or more peers to compare scores, share accountability and learn together.</p></div></div><button class="btn btn-soft btn-sm" data-action="create-group">${icon('plus', 13)} New group</button></div>`;
}

function renderGroupDetail() {
  const group = groups.find(g => g.id === state.selectedGroup) || groups[0];
  return `<div class="page-header"><div><button class="text-link" data-screen="groups">${icon('arrowLeft', 13)} All groups</button><h2>${group.name}</h2><p>${group.description} · updated 12 min ago</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="copy-code">${icon('lock', 13)} ${group.code}</button><button class="btn btn-primary btn-sm" data-action="invite-group">${icon('plus', 13)} Invite member</button></div></div><div class="group-detail-layout"><article class="card group-summary"><div class="eyebrow" style="color:#86d4ce;text-align:center">Group pass rate</div>${ring(group.pass, 142, true, true, 'var(--aqua)')}<h2>${group.name}</h2><p>${group.members} active members · ${group.tests} tests this month</p><div class="group-code">Group code<strong>${group.code}</strong></div><button class="btn btn-accent" style="width:100%" data-action="copy-code">${icon('send', 14)} Share group code</button></article><article class="card member-card"><div class="member-card-head"><div><div class="eyebrow">Performance dashboard</div><h3>Member results</h3></div>${badge('5 members', 'slate')}</div><div class="top-performer"><span class="crown">${icon('crown', 18)}</span><div><strong>Top performer · Aarav Khanna</strong><span>86% average across 12 tests · +9% this month</span></div></div>${getMembers().map(m => `<div class="member-row"><div class="member-info">${avatar(m.initials)}<div><strong>${m.name}</strong><span>${m.meta}</span></div></div><span class="member-score">${m.score}</span>${badge(m.status, m.tone)}</div>`).join('')}</article></div>`;
}

function renderBattle() {
  if (state.battlePhase === 'result') return renderBattleResult();
  const q = battleQuestions[state.battleIndex];
  const answered = state.battleAnswered !== null;
  return `<div class="battle-stage"><div class="battle-head"><div><button class="text-link" data-screen="tests">${icon('arrowLeft', 13)} Leave battle</button><h2>Live Quiz Battle</h2></div><span class="combo">${icon('flame', 13)} ${state.battleCombo} combo</span></div><section class="card battle-scoreboard"><div class="score-row"><div class="player">${avatar(accountInitials())}<div><strong>You · ${escapeHtml(accountFirstName())}</strong><span>Faster + correct earns more</span></div></div><div class="score-number">${state.battleScore}</div><span class="vs">VS</span><div class="score-number" style="color:var(--coral)">${state.opponentScore}</div><div class="player right"><div><strong>Neha Rao</strong><span>Online · answering</span></div>${avatar('NR')}</div></div><div class="score-bars"><div class="score-bar"><span style="width:${Math.min(100, 50 + state.battleScore * 1.5)}%"></span></div><div class="score-bar opponent"><span style="width:${Math.min(100, 50 + state.opponentScore * 1.5)}%"></span></div></div></section><article class="card battle-question"><div class="battle-question-top"><div><div class="question-meta">${badge(`Question ${state.battleIndex + 1} of ${battleQuestions.length}`, 'slate')}${badge('Both players', 'aqua')}</div><h3>${q.text}</h3></div><div class="progress-ring battle-timer" style="--value:${answered ? 0 : 72};--ring:var(--coral);width:55px;height:55px"><strong>${answered ? ' ' : '12'}</strong></div></div><div class="options">${q.options.map((option, i) => { const cls = answered && i === q.correct ? 'correct' : answered && state.battleAnswered === i ? 'incorrect' : ''; return `<button class="option-btn ${cls}" data-action="answer-battle" data-index="${i}" ${answered ? 'disabled' : ''}><span class="option-letter">${String.fromCharCode(65 + i)}</span><span>${option}</span>${answered && i === q.correct ? `<span class="option-mark">${icon('check', 16)}</span>` : ''}</button>`; }).join('')}</div>${answered ? `<div class="explanation-box"><div class="explanation-title">${icon('circleCheck', 15)} Quick explanation</div><p>${q.correct === state.battleAnswered ? 'Correct. Strong recall – and your speed bonus is locked in.' : `The correct answer is ${String.fromCharCode(65 + q.correct)}. Add this fact to your next revision pass.`}</p></div><div style="display:flex;justify-content:flex-end;margin-top:17px"><button class="btn btn-primary btn-sm" data-action="next-battle">${state.battleIndex === battleQuestions.length - 1 ? 'See battle result' : 'Next question'} ${icon('arrowRight', 14)}</button></div>` : `<div style="display:flex;align-items:center;justify-content:space-between;margin-top:20px;color:var(--muted);font-size:10px"><span>${icon('bolt', 14)} Your opponent is answering...</span><strong style="color:var(--coral)">12 sec</strong></div>`}</article></div>`;
}

function renderBattleResult() {
  const won = state.battleScore >= state.opponentScore;
  return `<div class="battle-result card"><div class="result-medal">${icon(won ? 'trophy' : 'spark', 29)}</div><div class="eyebrow">Battle complete</div><h2>${won ? `Sharp thinking, ${escapeHtml(accountFirstName())}.` : 'Good fight. Your gaps are useful.'}</h2><p>${won ? 'You combined accuracy with speed and edged past Neha. Keep the explanations in your revision loop.' : 'The result is only a signal. Review the missed questions below and come back stronger.'}</p><div class="result-score"><div><strong>${state.battleScore}</strong><span>Your points</span></div><div><strong>${state.opponentScore}</strong><span>Neha’s points</span></div><div><strong>${Math.max(0, state.battleIndex + 1 - (state.battleScore < 15 ? 1 : 0))}/${battleQuestions.length}</strong><span>Reviewed</span></div></div><div style="display:flex;gap:8px;justify-content:center;flex-wrap:wrap"><button class="btn btn-primary" data-action="start-battle">Play again ${icon('refresh', 14)}</button><button class="btn btn-soft" data-screen="revision">Review mistakes ${icon('arrowRight', 14)}</button></div></div><div class="section-heading" style="max-width:680px;margin:0 auto 12px"><div><h2>What to remember</h2><p>Every competitive moment should leave you wiser.</p></div></div><div class="card" style="max-width:680px;margin:0 auto;padding:0;overflow:hidden">${battleQuestions.map((q, i) => `<div class="member-row" style="padding:14px 18px"><div class="member-info"><span class="question-number">0${i + 1}</span><div><strong>${q.text}</strong><span>Correct answer: ${q.options[q.correct]}</span></div></div>${badge(i === 0 ? 'Correct' : 'Review', i === 0 ? 'aqua' : 'gold')}</div>`).join('')}</div>`;
}

function renderRevision() {
  const filtered = revisionItems.filter(item => item.type === state.revisionTab);
  return `<div class="page-header"><div><div class="eyebrow">Make mistakes productive</div><h2>Revision Desk</h2><p>Saved concepts and wrong answers, ready for another look.</p></div><div class="page-header-actions"><select class="filter-select" data-action="revision-subject"><option>All subjects</option><option>Indian Polity</option><option>Economy</option><option>Geography</option><option>History</option></select></div></div><div class="revision-layout"><article class="card revision-card"><div class="pill-tabs"><button class="pill-tab ${state.revisionTab === 'Bookmarked' ? 'active' : ''}" data-action="revision-tab" data-tab="Bookmarked">Bookmarked <span style="opacity:.7">(2)</span></button><button class="pill-tab ${state.revisionTab === 'Wrong Answers' ? 'active' : ''}" data-action="revision-tab" data-tab="Wrong Answers">Wrong Answers <span style="opacity:.7">(2)</span></button></div><div class="revision-list">${filtered.length ? filtered.map((item, i) => `<div class="revision-item"><span class="question-number">${String(i + 1).padStart(2, '0')}</span><div class="revision-copy"><strong>${item.text}</strong><span>${item.subject} · ${item.topic} · ${item.time}</span></div><button class="bookmark-btn ${item.type === 'Bookmarked' ? 'active' : ''}" data-action="open-practice" data-question="${i}">${icon(item.type === 'Bookmarked' ? 'bookmark' : 'refresh', 15)}</button></div>`).join('') : `<div class="empty-state"><div class="empty-state-icon">${icon('bookmark', 20)}</div><h3>Your revision desk is clear</h3><p>Bookmark a concept or complete a quiz to build a useful revision list.</p><button class="btn btn-primary btn-sm" data-screen="subjects">Explore subjects</button></div>`}</div></article><aside class="card revision-summary"><div class="eyebrow">Revision health</div><h3>What needs your attention</h3>${subjects.slice(0, 4).map(s => `<div class="revision-summary-row">${ring(s.percent, 43, false, true, s.percent > 75 ? 'var(--aqua)' : s.percent > 55 ? 'var(--gold)' : 'var(--coral)')}<div class="revision-summary-copy"><strong>${s.name}</strong><span>${s.percent > 75 ? 'Strong recall' : s.percent > 55 ? 'Keep revising' : 'Priority topic'}</span></div></div>`).join('')}<div class="divider" style="margin:18px 0 14px"></div><div style="display:flex;justify-content:space-between;color:var(--muted);font-size:10px"><span>Next smart review</span><strong style="color:var(--navy)">Tomorrow, 7:30 AM</strong></div></aside></div>`;
}

function renderAnswerWriting() {
  const words = state.answerText.trim() ? state.answerText.trim().split(/\s+/).length : 0;
  return `<div class="page-header"><div><div class="eyebrow">Mains answer lab</div><h2>Answer Writing Practice</h2><p>Structure your thinking before the exam asks for it.</p></div><div class="page-header-actions">${badge('GS-II · 150 words', 'gold')}</div></div><div class="answer-layout"><article class="card answer-card"><div class="eyebrow">Today’s prompt · 15 minutes</div><div class="answer-prompt"><p>"Cooperative federalism in India has moved from a slogan to an institutional practice." Discuss with suitable examples.</p><small>Discuss · 10 marks · Suggested length: 150 words</small></div><label class="form-label" for="answerText">Your answer</label><textarea id="answerText" class="answer-textarea" placeholder="Begin with a clear definition or context, develop two or three dimensions, and close with a balanced way forward...">${escapeHtml(state.answerText)}</textarea><div class="answer-tools"><span class="word-count"><strong>${words}</strong> / 150 words</span><label class="toggle-row">View model answer <input class="toggle" type="checkbox" data-action="toggle-model" ${state.modelVisible ? 'checked' : ''}></label></div><button class="btn btn-primary" data-action="submit-answer" ${words < 4 ? 'disabled' : ''}>${icon('send', 14)} Submit for review</button><div class="model-reveal ${state.modelVisible ? 'visible' : ''}"><h3>Model answer structure</h3><p>Cooperative federalism refers to collaboration between the Union and States in policy, finance and implementation. Institutions such as the GST Council, NITI Aayog and inter-state councils create regular spaces for coordination. The vaccination programme and UPI show how shared platforms can translate this idea into outcomes, while differences over fiscal transfers and the role of Governors reveal continuing friction. Strengthening the Inter-State Council, predictable devolution and evidence-led consultation can make federal cooperation more substantive. Thus, cooperation is not a substitute for autonomy; it is the operating method through which India’s diversity becomes a governing strength.</p></div></article><aside class="answer-side"><article class="card rubric-card"><div class="eyebrow">Self-review rubric</div><h3>Before you submit</h3>${[['Introduction', 80], ['Arguments', 55], ['Examples', 40], ['Conclusion', 25]].map(([label, value]) => `<div class="rubric-row"><span>${label}</span><div class="progress-bar"><span style="width:${value}%;background:${value > 70 ? 'var(--aqua)' : value > 45 ? 'var(--gold)' : 'var(--coral)'}"></span></div><strong>${value}%</strong></div>`).join('')}</article><article class="card session-card focus-tip"><div class="tip-icon">${icon('spark', 16)}</div><h3>One useful habit</h3><p>Leave the last two minutes for a so what? check. UPSC rewards answers that connect an issue to governance outcomes.</p></article></aside></div>`;
}

function renderPyq() {
  return `<div class="page-header"><div><div class="eyebrow">The exam leaves clues</div><h2>PYQ Bank</h2><p>Previous year questions, organised for deliberate practice.</p></div><div class="page-header-actions"><span class="badge badge-gold">2019 2023</span></div></div><div class="pyq-toolbar"><div class="pill-tabs"><button class="pill-tab active">All years</button><button class="pill-tab">2023</button><button class="pill-tab">2022</button><button class="pill-tab">2021</button><button class="pill-tab">2020</button></div><select class="filter-select"><option>All subjects</option><option>Indian Polity</option><option>History</option><option>Geography</option><option>Economy</option></select></div><div class="pyq-list">${pyqs.map((p, i) => `<article class="card pyq-item"><span class="pyq-year"><strong>${p.year}</strong><span>PYQ</span></span><div class="pyq-copy"><h3>${p.text}</h3><p>${p.subject} · ${p.tag}</p></div><button class="btn btn-soft btn-sm" data-action="open-practice" data-question="${i % questions.length}">Solve ${icon('arrowRight', 13)}</button></article>`).join('')}</div><div class="empty-state" style="margin-top:15px;padding:24px;display:flex;align-items:center;justify-content:space-between;text-align:left;gap:15px"><div><h3 style="font-size:13px">Looking for a specific year?</h3><p style="margin:3px 0 0">More papers can be added live from your connected content table.</p></div><button class="btn btn-soft btn-sm" data-action="request-pyq">Request a paper</button></div>`;
}

function renderSyllabus() {
  const completed = 52;
  const total = 76;
  return `<div class="page-header"><div><div class="eyebrow">Know what is left</div><h2>Syllabus Tracker</h2><p>Turn a large syllabus into visible, finishable steps.</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="collapse-syllabus">${icon('chevronDown', 14)} ${state.openSyllabus.length ? 'Collapse all' : 'Expand all'}</button></div></div><article class="card syllabus-summary">${ring(68, 82, false, true, 'var(--aqua)')}<div><div class="eyebrow">Overall completion</div><h2>${completed} of ${total} topics covered</h2><p>At your current pace, the first pass is on track for 18 September 2026.</p></div><span class="badge badge-aqua" style="margin-left:auto">On track</span></article><div class="accordion-list">${syllabus.map(s => { const open = state.openSyllabus.includes(s.id); const doneCount = Math.round(s.done / s.total * s.topics.length); return `<article class="accordion ${open ? 'open' : ''}"><button class="accordion-head" data-action="toggle-accordion" data-id="${s.id}"><span class="accordion-icon">${icon(s.icon, 16)}</span><span class="accordion-copy"><strong>${s.name}</strong><span>${s.done} of ${s.total} topics covered</span></span><span class="accordion-percent">${s.percent}%</span><span class="accordion-chevron">${icon('chevronDown', 16)}</span></button><div class="accordion-body">${s.topics.map((topic, i) => `<label class="syllabus-topic"><input type="checkbox" ${i < doneCount ? 'checked' : ''} data-syllabus-subject="${s.id}" data-syllabus-index="${i}"><span>${topic}</span>${i < doneCount ? badge('Covered', 'aqua') : badge('To do', 'slate')}</label>`).join('')}</div></article>`; }).join('')}</div>`;
}

function profileFallbackRecord() {
  return {
    id: state.accountId || 'local-user',
    name: accountDisplayName(),
    email: state.profileForm.email || '',
    phone: state.profileForm.phone || '',
    profile_picture_url: state.profilePhotoData || '',
    updated_at: new Date().toISOString(),
  };
}

function applyProfileRecord(record) {
  const fallback = profileFallbackRecord();
  const next = { ...fallback, ...(record || {}) };
  state.profileRecord = next;
  state.profileForm = {
    name: next.name || fallback.name,
    email: next.email || fallback.email,
    phone: next.phone || fallback.phone,
    profile_picture_url: next.profile_picture_url || state.profilePhotoData || '',
  };
  if (next.profile_picture_url) {
    state.profilePhotoData = next.profile_picture_url;
    try { localStorage.setItem('manthanProfilePhoto', next.profile_picture_url); } catch (e) { /* local persistence is optional */ }
  }
}

function ensureProfileLoaded() {
  if (state.profileLoaded || state.profileLoading) return;
  state.profileLoading = true;
  const repository = window.ManthanProfileRepository;
  const load = repository?.load ? repository.load() : Promise.resolve(profileFallbackRecord());
  Promise.resolve(load).then(record => {
    applyProfileRecord(record);
    state.profileLoaded = true;
    state.profileLoading = false;
    if (state.screen === 'profile') render();
  }).catch(error => {
    console.debug('[Profile] using local fallback record', error);
    applyProfileRecord(profileFallbackRecord());
    state.profileLoaded = true;
    state.profileLoading = false;
    if (state.screen === 'profile') render();
  });
}

function refreshProfileForHome() {
  const repository = window.ManthanProfileRepository;
  if (state.profileRefreshInFlight || !repository?.load) return;
  state.profileRefreshInFlight = true;
  const current = state.profileRecord || state.profileForm;
  const before = JSON.stringify({
    name: current.name,
    email: current.email,
    phone: current.phone,
    profile_picture_url: current.profile_picture_url || state.profilePhotoData,
  });
  Promise.resolve(repository.load()).then(record => {
    const previousUpdated = Date.parse(state.profileRecord?.updated_at || '');
    const incomingUpdated = Date.parse(record?.updated_at || '');
    // Never replace a just-saved local profile with an older remote snapshot.
    if (Number.isFinite(previousUpdated) && Number.isFinite(incomingUpdated) && incomingUpdated < previousUpdated) {
      state.profileLoaded = true;
      state.profileLoading = false;
      return;
    }
    applyProfileRecord(record);
    state.profileLoaded = true;
    state.profileLoading = false;
    const after = JSON.stringify({
      name: state.profileRecord.name,
      email: state.profileRecord.email,
      phone: state.profileRecord.phone,
      profile_picture_url: state.profileRecord.profile_picture_url,
    });
    if (state.screen === 'home' && before !== after) render();
  }).catch(error => {
    console.debug('[Profile] home refresh skipped', error);
  }).finally(() => {
    state.profileRefreshInFlight = false;
  });
}

function openProfileEditor() {
  ensureProfileLoaded();
  const profile = state.profileRecord || profileFallbackRecord();
  state.profileForm = {
    name: profile.name || accountDisplayName(),
    email: profile.email || '',
    phone: profile.phone || '',
    profile_picture_url: profile.profile_picture_url || state.profilePhotoData || '',
  };
  state.profileEditOpen = true;
  if (state.screen !== 'profile') go('profile');
  else render();
}

function profileFieldValue(id, fallback = '') {
  return document.getElementById(id)?.value ?? fallback;
}

function saveProfileEditor() {
  if (state.profileSaving) return;
  const patch = {
    name: profileFieldValue('profileNameInput', state.profileForm.name).trim(),
    email: profileFieldValue('profileEmailInput', state.profileForm.email).trim(),
    phone: profileFieldValue('profilePhoneInput', state.profileForm.phone).trim(),
    profile_picture_url: String(state.profileForm.profile_picture_url || '').trim(),
  };
  state.profileForm = patch;
  if (state.accountId && patch.name) {
    try {
      const users = manthanUsers();
      if (users[state.accountId]) { users[state.accountId].name = patch.name; saveManthanUsers(users); }
    } catch (e) { /* optional */ }
  }
  state.profileSaving = true;
  render();
  const repository = window.ManthanProfileRepository;
  const save = repository?.save ? repository.save(patch) : Promise.resolve({ ...profileFallbackRecord(), ...patch });
  Promise.resolve(save).then(record => {
    applyProfileRecord(record);
    state.profileLoaded = true;
    state.profileSaving = false;
    state.profileEditOpen = false;
    render();
    toast('Profile updated successfully.');
  }).catch(error => {
    // The repository normally falls back locally. This final guard keeps the
    // screen usable even if a custom adapter throws unexpectedly.
    console.debug('[Profile] save failed; keeping local profile data', error);
    applyProfileRecord({ ...profileFallbackRecord(), ...patch });
    state.profileLoaded = true;
    state.profileSaving = false;
    state.profileEditOpen = false;
    render();
    toast('Profile updated successfully.');
  });
}

function closeProfileEditor() {
  if (state.profileSaving) return;
  state.profileEditOpen = false;
  render();
}

function renderProfileEditor() {
  if (!state.profileEditOpen) return '';
  const form = state.profileForm;
  const photo = profileImageSource() || form.profile_picture_url || '';
  const avatarContent = photo
    ? `<img src="${escapeHtml(photo)}" alt="Current profile picture">`
    : `<span class="profile-editor-avatar-fallback">${icon('user', 30)}</span>`;
  return `<div class="modal-backdrop" data-action="close-profile-editor"><section class="photo-sheet profile-editor-sheet" role="dialog" aria-modal="true" aria-labelledby="profileEditorTitle"><div class="modal-header"><div><div class="eyebrow">Profile details</div><h2 id="profileEditorTitle">Edit profile</h2></div><button class="icon-btn" data-action="close-profile-editor" aria-label="Close profile editor">${icon('close', 16)}</button></div><div class="profile-photo-editor"><button class="profile-editor-avatar" data-action="choose-editor-photo" aria-label="Change profile picture">${avatarContent}<span class="profile-editor-avatar-edit">${icon('image', 12)}</span></button><div class="profile-photo-editor-copy"><div class="eyebrow">Profile picture</div><strong>Keep your profile personal.</strong><p>Choose an image from your gallery. It will be previewed and uploaded automatically.</p><button class="btn btn-soft btn-sm" data-action="choose-editor-photo">${icon('image', 14)} Change Photo</button>${state.photoUploading ? `<div class="profile-upload-status">${icon('upload', 13)} Uploading your photo </div>` : ''}</div></div><div class="profile-form"><label class="form-label" for="profileNameInput">Display name</label><input id="profileNameInput" class="text-input" type="text" autocomplete="name" value="${escapeHtml(form.name || '')}" placeholder="Your name"><label class="form-label" for="profileEmailInput">Email</label><input id="profileEmailInput" class="text-input" type="email" autocomplete="email" value="${escapeHtml(form.email || '')}" placeholder="you@example.com"><label class="form-label" for="profilePhoneInput">Phone number</label><input id="profilePhoneInput" class="text-input" type="tel" autocomplete="tel" value="${escapeHtml(form.phone || '')}" placeholder="+91 98765 43210"><p class="profile-form-help">Your profile details are saved using the authenticated user ID. If the network is unavailable, changes are kept locally and sync can resume later.</p></div><div class="profile-editor-actions"><button class="btn btn-plain" data-action="close-profile-editor" ${state.profileSaving ? 'disabled' : ''}>Cancel</button><button class="btn btn-primary" data-action="save-profile" ${state.profileSaving ? 'disabled' : ''}>${state.profileSaving ? 'Saving ' : 'Save changes'} ${state.profileSaving ? '' : icon('check', 14)}</button></div></section></div>`;
}

function renderProfile() {
  ensureProfileLoaded();
  const profile = state.profileRecord || profileFallbackRecord();
  const displayName = profile.name || accountDisplayName();
  const displayPhone = profile.phone || state.profileForm.phone || 'Not added yet';
  return `<div class="page-header"><div><div class="eyebrow">A record of your work</div><h2>Profile & Analytics</h2><p>See the patterns behind your preparation.</p></div><div class="page-header-actions"><button class="btn btn-soft btn-sm" data-action="edit-profile">${icon('edit', 14)} Edit profile</button></div></div><div class="profile-layout"><article class="card profile-main">${profileAvatarButton('profile-avatar')}<h2>${escapeHtml(displayName)}</h2><p>UPSC CSE aspirant · Joined 14 May 2026</p><div class="profile-badges">${badge('12 day streak', 'gold')}${badge('Consistent learner', 'aqua')}</div><div class="profile-stats"><div class="profile-stat"><strong>78%</strong><span>avg. score</span></div><div class="profile-stat"><strong>34</strong><span>tests taken</span></div><div class="profile-stat"><strong>412</strong><span>questions</span></div></div><button class="btn btn-plain btn-sm" data-action="signout">${icon('logOut', 14)} Sign out</button></article><div class="analytics-grid"><article class="card analytics-card"><div class="section-heading"><div><h2>Strength map</h2><p>Mastery by subject</p></div><span class="badge badge-slate">This month</span></div>${[['Polity', 82], ['History', 74], ['Current Affairs', 71], ['Economy', 61], ['Geography', 58], ['Science & Tech', 46]].map(([name, value]) => `<div class="strength-row"><span>${name}</span><div class="progress-bar"><span style="width:${value}%;background:${value > 75 ? 'var(--aqua)' : value > 60 ? 'var(--gold)' : 'var(--coral)'}"></span></div><strong>${value}%</strong></div>`).join('')}</article><article class="card analytics-card"><div class="section-heading"><div><h2>Streak & rhythm</h2><p>Small wins add up</p></div><span style="color:var(--gold)">${icon('flame', 18)}</span></div><div style="display:flex;align-items:end;gap:9px;margin:13px 0 17px"><strong style="color:var(--navy);font-size:32px;letter-spacing:-1px">12</strong><span class="muted" style="font-size:11px;margin-bottom:6px">days in a row</span></div><div style="display:grid;grid-template-columns:repeat(14,1fr);gap:5px;align-items:end;height:73px">${[1,1,1,1,1,1,0,1,1,1,1,1,1,1].map((v, i) => `<span title="Day ${i + 1}" style="height:${v ? 24 + ((i * 13) % 42) : 10}px;border-radius:4px 4px 2px 2px;background:${v ? (i > 9 ? 'var(--aqua)' : '#b8ddd9') : '#e8edf1'}"></span>`).join('')}</div><div class="chart-labels"><span>2 weeks ago</span><span>Today</span></div></article><article class="card analytics-card wide"><div class="section-heading"><div><h2>Performance history</h2><p>Average test score across your last six attempts</p></div><span class="badge badge-aqua">+6.4% trend</span></div><div class="chart-wrap" style="height:160px"><svg viewBox="0 0 760 160" role="img" aria-label="Performance history line chart"><path d="M0 138H760M0 93H760M0 48H760" stroke="#edf1f5" stroke-width="1"/><path d="M20 125 C85 126 95 115 140 117 S198 96 244 105 S297 91 350 79 S403 85 452 70 S510 78 548 58 S621 61 665 43 S714 40 742 27 L742 160 L20 160Z" fill="url(#profileFill)" opacity=".8"/><defs><linearGradient id="profileFill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stop-color="#65c7bf" stop-opacity=".23"/><stop offset="1" stop-color="#65c7bf" stop-opacity="0"/></linearGradient></defs><path d="M20 125 C85 126 95 115 140 117 S198 96 244 105 S297 91 350 79 S403 85 452 70 S510 78 548 58 S621 61 665 43 S714 40 742 27" fill="none" stroke="#3aaba4" stroke-width="3" stroke-linecap="round"/><circle cx="742" cy="27" r="5" fill="#fff" stroke="#3aaba4" stroke-width="3"/></svg></div><div class="chart-labels"><span>Mock 01</span><span>Mock 02</span><span>Mock 03</span><span>Mock 04</span><span>Mock 05</span><span>Mock 06</span></div></article><article class="card analytics-card wide"><div class="section-heading"><div><h2>Settings</h2><p>Keep the experience personal.</p></div></div><div class="settings-list"><div class="setting-row"><span class="setting-icon">${icon('globe', 16)}</span><div class="setting-copy"><strong>Preferred quiz language</strong><span>Applies when you start a new two-deck quiz</span></div><div class="settings-language-control"><button class="${state.preferredLanguage === 'en' ? 'active' : ''}" data-action="set-preferred-language" data-language="en">EN</button><button class="${state.preferredLanguage === 'hi' ? 'active' : ''}" data-action="set-preferred-language" data-language="hi">HI</button></div></div><div class="setting-row"><span class="setting-icon">${icon('bell', 16)}</span><div class="setting-copy"><strong>Daily reminders</strong><span>Every day at 7:30 AM</span></div><input class="toggle" type="checkbox" checked></div><div class="setting-row"><span class="setting-icon">${icon('users', 16)}</span><div class="setting-copy"><strong>Group activity updates</strong><span>New scores, invites and battles</span></div><input class="toggle" type="checkbox" checked></div><div class="setting-row"><span class="setting-icon">${icon('lock', 16)}</span><div class="setting-copy"><strong>Phone & privacy</strong><span>${escapeHtml(displayPhone)}</span></div><span class="setting-arrow">${icon('chevronRight', 16)}</span></div></div></article>${renderProfileEditor()}</div></div>`;
}

/* ---- Local account store: users create a User ID + password on this device. ---- */
function manthanUsers() {
  try { const value = JSON.parse(localStorage.getItem('manthanUsers') || '{}'); return value && typeof value === 'object' ? value : {}; } catch (e) { return {}; }
}
function saveManthanUsers(users) { try { localStorage.setItem('manthanUsers', JSON.stringify(users)); } catch (e) { /* storage optional in preview */ } }
function hashText(text) {
  let h1 = 0x811c9dc5; let h2 = 0x01000193;
  for (let i = 0; i < text.length; i += 1) {
    const c = text.charCodeAt(i);
    h1 = Math.imul(h1 ^ c, 0x01000193) >>> 0;
    h2 = Math.imul(h2 ^ ((c * 31) + i), 0x85ebca6b) >>> 0;
  }
  return h1.toString(16).padStart(8, '0') + h2.toString(16).padStart(8, '0');
}
function hashPassword(password, salt) { return hashText(`${salt}::manthan::${password}`); }
function normalizeLoginId(value) { return String(value || '').trim().toLowerCase(); }
function currentSession() { try { return JSON.parse(localStorage.getItem('manthanSession') || 'null'); } catch (e) { return null; } }
function startSession(userId) { try { localStorage.setItem('manthanSession', JSON.stringify({ userId, at: Date.now() })); } catch (e) { /* optional */ } }
function endSession() { try { localStorage.removeItem('manthanSession'); } catch (e) { /* optional */ } }
function openAccount(userId, name) {
  startSession(userId);
  state.accountId = userId;
  state.loginError = '';
  state.loginPassword = '';
  state.loginConfirm = '';
  if (name) state.profileForm.name = name;
  state.screen = 'home';
  render();
  toast(`Welcome, ${name || userId} — your account is open.`);
}

function forgotPanel() {
  const id = normalizeLoginId(state.loginId);
  const user = manthanUsers()[id];
  const error = state.loginError ? `<div class="login-error" role="alert">${icon('info', 13)}<span>${escapeHtml(state.loginError)}</span></div>` : '';
  const back = `<button class="text-link" data-action="login-mode" data-mode="signin">${icon('arrowLeft', 13)} Back to sign in</button>`;
  if (state.forgotStep === 1) {
    return `${back}<h2 style="margin-top:14px">Password bhool gaye?</h2><p>Apna User ID daaliye — account verify karke hum naya password set karwayenge.</p><label class="form-label" for="loginIdInput">User ID</label><input class="text-input" id="loginIdInput" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Your User ID" value="${escapeHtml(state.loginId)}">${error}<button class="btn btn-primary" data-action="login-forgot-id">Continue ${icon('arrowRight', 15)}</button><div class="otp-note">${icon('lock', 13)} Account create karte waqt chuna gaya <strong>security question</strong> (ya registered naam) verify hota hai, isliye password sirf aap reset kar sakte hain.</div>`;
  }
  if (state.forgotStep === 2) {
    const viaQuestion = Boolean(user && user.secHash);
    const field = viaQuestion
      ? `<div class="otp-note" style="margin-bottom:14px">${icon('info', 13)} <strong>Security question:</strong> ${escapeHtml(user.secQ || securityQuestions[0])}</div><label class="form-label" for="loginSecurityAnswer">Security answer</label><input class="text-input" id="loginSecurityAnswer" autocomplete="off" placeholder="Aapka jawab" value="${escapeHtml(state.loginSecurityAnswer)}">`
      : `<div class="otp-note" style="margin-bottom:14px">${icon('info', 13)} Is account ke liye security question set nahi tha — verify karne ke liye <strong>registered full name</strong> daaliye.</div><label class="form-label" for="loginNameInput">Registered full name</label><input class="text-input" id="loginNameInput" autocomplete="name" placeholder="Your full name" value="${escapeHtml(state.loginName)}">`;
    return `${back}<h2 style="margin-top:14px">Account verify karein</h2><p>User ID: <strong>${escapeHtml(id)}</strong></p>${field}${error}<button class="btn btn-primary" data-action="login-forgot-verify">Verify ${icon('arrowRight', 15)}</button>`;
  }
  return `${back}<h2 style="margin-top:14px">Naya password set karein</h2><p>Account verify ho gaya. Ab naya password chuniye.</p><label class="form-label" for="loginPasswordInput">New password</label><input class="text-input" id="loginPasswordInput" type="password" autocomplete="new-password" placeholder="At least 4 characters" value="${escapeHtml(state.loginPassword)}"><label class="form-label" for="loginConfirmInput">Confirm new password</label><input class="text-input" id="loginConfirmInput" type="password" autocomplete="new-password" placeholder="Repeat the password" value="${escapeHtml(state.loginConfirm)}">${error}<button class="btn btn-primary" data-action="login-forgot-reset">Reset password ${icon('check', 15)}</button>`;
}

function loginScreen() {
  const isCreate = state.loginMode === 'create';
  const tabs = `<div class="login-tabs" role="tablist" aria-label="Authentication"><button class="login-tab ${isCreate ? '' : 'active'}" role="tab" data-action="login-mode" data-mode="signin">Sign in</button><button class="login-tab ${isCreate ? 'active' : ''}" role="tab" data-action="login-mode" data-mode="create">Create account</button></div>`;
  const error = state.loginError ? `<div class="login-error" role="alert">${icon('info', 13)}<span>${escapeHtml(state.loginError)}</span></div>` : '';
  let installHint = '';
  try {
    if (window.__manthanInstallPrompt && localStorage.getItem('manthanInstallHintDismissed') !== '1') {
      installHint = `<div class="install-hint">${icon('home', 13)}<span><strong>Isse app ki tarah install karein</strong> — home screen pe icon, full screen, offline support.</span><button class="btn btn-soft btn-sm" data-action="install-app">Install app</button></div>`;
    }
  } catch (e) { /* optional */ }
  let panel = '';
  if (state.loginMode === 'signin') panel = `<h2>Welcome back.</h2><p>Sign in with your User ID and password to open your account.</p><label class="form-label" for="loginIdInput">User ID</label><input class="text-input" id="loginIdInput" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="e.g. priya_2026" value="${escapeHtml(state.loginId)}"><label class="form-label" for="loginPasswordInput">Password</label><input class="text-input" id="loginPasswordInput" type="password" autocomplete="current-password" placeholder="Your password" value="${escapeHtml(state.loginPassword)}"><div class="login-forgot-row"><button class="text-link" data-action="login-mode" data-mode="forgot">${icon('lock', 12)} Forgot password?</button></div>${error}<button class="btn btn-primary" data-action="login-signin">Sign in ${icon('arrowRight', 15)}</button><div class="otp-note">${icon('lock', 13)} <strong>New to Manthan Prep?</strong> <button class="text-link" data-action="login-mode" data-mode="create">Create your ID &amp; password</button> — it takes 20 seconds.</div>`;
  else if (isCreate) panel = `<h2>Create your account.</h2><p>Choose a User ID and password — only you can open this account.</p><label class="form-label" for="loginNameInput">Full name</label><input class="text-input" id="loginNameInput" autocomplete="name" placeholder="Apna poora naam" value="${escapeHtml(state.loginName)}"><label class="form-label" for="loginIdInput">User ID</label><input class="text-input" id="loginIdInput" autocomplete="username" autocapitalize="none" spellcheck="false" placeholder="Letters, numbers, dot, dash" value="${escapeHtml(state.loginId)}"><label class="form-label" for="loginPasswordInput">Password</label><input class="text-input" id="loginPasswordInput" type="password" autocomplete="new-password" placeholder="At least 4 characters" value="${escapeHtml(state.loginPassword)}"><label class="form-label" for="loginConfirmInput">Confirm password</label><input class="text-input" id="loginConfirmInput" type="password" autocomplete="new-password" placeholder="Repeat the password" value="${escapeHtml(state.loginConfirm)}"><label class="form-label" for="loginQuestionSelect">Security question (password recovery)</label><select id="loginQuestionSelect" class="text-input login-select">${securityQuestions.map((q, i) => `<option value="${i}" ${state.loginQuestion === i ? 'selected' : ''}>${escapeHtml(q)}</option>`).join('')}</select><label class="form-label" for="loginSecurityAnswer">Security answer</label><input class="text-input" id="loginSecurityAnswer" autocomplete="off" placeholder="Jawab yaad rakhein — recovery isi se hogi" value="${escapeHtml(state.loginSecurityAnswer)}">${error}<button class="btn btn-primary" data-action="login-create">Create account &amp; sign in ${icon('arrowRight', 15)}</button><div class="otp-note">${icon('user', 13)} Already have an ID? <button class="text-link" data-action="login-mode" data-mode="signin">Sign in</button></div>`;
  else panel = forgotPanel();
  return `<div class="login-screen"><button class="lang-btn login-lang" data-action="open-language-menu" aria-label="Choose language">${icon('globe', 15)}<span>${currentLanguage().native}</span></button><section class="login-visual"><div class="brand"><span class="brand-mark">M</span><div><div class="brand-name">Manthan Prep</div><div class="brand-sub">Analytical learning</div></div></div><div class="login-quote"><div class="eyebrow">For the serious aspirant</div><h1>Think clearly.<br><em>Prepare deeply.</em></h1><p>A calm, analytical workspace for the long road to public service – concepts, current affairs, practice and accountability in one place.</p></div><div class="login-feature-row"><div class="login-feature"><strong>13 study surfaces</strong>From syllabus to answer writing</div><div class="login-feature"><strong>Detailed explanations</strong>Learn beyond right or wrong</div><div class="login-feature"><strong>Peer accountability</strong>Progress together</div></div></section><section class="login-panel"><div class="login-box"><div class="brand"><span class="brand-mark">M</span><div><div class="brand-name">Manthan Prep</div><div class="brand-sub">Analytical learning</div></div></div>${tabs}${panel}${installHint}<p style="font-size:10px;color:#a0adbb;margin-top:28px;text-align:center">By continuing, you agree to Manthan Prep’s terms and privacy policy.</p></div></section></div>`;
}

function renderPhotoLayer() {
  if (state.photoModal !== 'crop') return '';
  return `<div class="modal-backdrop" data-action="close-photo-editor"><section class="photo-sheet crop-sheet" role="dialog" aria-modal="true" aria-labelledby="cropPhotoTitle"><div class="modal-header"><div><div class="eyebrow">Adjust your photo</div><h2 id="cropPhotoTitle">Crop & resize</h2></div><button class="icon-btn" data-action="close-photo-editor" aria-label="Close photo editor">${icon('close', 16)}</button></div><div class="crop-stage"><img id="cropPreview" src="${state.cropSrc}" alt="Preview of selected profile photo" style="transform:scale(${state.photoZoom})"></div><p class="crop-help">Center your profile photo inside the circle. Use the slider to zoom before saving.</p><div class="zoom-control"><span>${icon('crop', 15)}</span><input id="photoZoom" type="range" min="1" max="3" step="0.05" value="${state.photoZoom}" aria-label="Zoom photo"><span>${icon('search', 15)}</span></div><div class="crop-actions"><button class="btn btn-plain" data-action="close-photo-editor">Cancel</button><button class="btn btn-primary" data-action="save-crop">Use this photo ${icon('check', 14)}</button></div></section></div>`;
}

function readSelectedPhoto(file) {
  if (!file || !file.type || !file.type.startsWith('image/')) { toast('Please choose an image file.', 'error'); return; }
  const reader = new FileReader();
  reader.onload = event => {
    const result = event.target?.result;
    if (typeof result !== 'string' || !result.startsWith('data:image/')) {
      toast('That image could not be opened. Try another photo.', 'error');
      return;
    }
    state.cropSrc = result;
    state.photoZoom = 1;
    state.photoModal = 'crop';
    render();
  };
  reader.onerror = () => toast('That image could not be opened. Try another photo.', 'error');
  try { reader.readAsDataURL(file); } catch (error) { toast('That image could not be opened. Try another photo.', 'error'); }
}

function uploadProfilePhotoToStorage(imageDataUrl) {
  // Production integration point:
  // Firebase Storage: uploadString(ref(storage, `users/${uid}/profile.jpg`), imageDataUrl, 'data_url')
  // then update the Users profilePhotoUrl field with getDownloadURL(snapshot.ref).
  // AWS S3 can replace this function with a signed-upload request.
  return new Promise(resolve => setTimeout(() => resolve(imageDataUrl), 650));
}

function saveCroppedPhoto() {
  if (!state.cropSrc) {
    toast('Choose a photo before saving.', 'error');
    return;
  }
  const previousPhoto = state.profilePhotoData;
  const previousProfileFormUrl = state.profileForm.profile_picture_url;
  const previousRecordUrl = state.profileRecord?.profile_picture_url;
  const previousRecordUpdatedAt = state.profileRecord?.updated_at;
  const image = new Image();
  image.onload = () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 512; canvas.height = 512;
      const context = canvas.getContext('2d');
      if (!context || !image.naturalWidth || !image.naturalHeight) throw new Error('image_decode_failed');
      const width = image.naturalWidth; const height = image.naturalHeight;
      const safeZoom = Math.max(1, Math.min(3, Number(state.photoZoom) || 1));
      const cropSide = Math.min(width, height) / safeZoom;
      const sourceX = (width - cropSide) / 2; const sourceY = (height - cropSide) / 2;
      context.drawImage(image, sourceX, sourceY, cropSide, cropSide, 0, 0, 512, 512);
      const cropped = canvas.toDataURL('image/jpeg', 0.88);
      state.profilePhotoData = cropped;
      state.profileForm.profile_picture_url = cropped;
      if (state.profileRecord) {
        state.profileRecord = { ...state.profileRecord, profile_picture_url: cropped, updated_at: new Date().toISOString() };
      }
      state.photoUploading = true;
      state.photoModal = null;
      try { localStorage.setItem('manthanProfilePhoto', cropped); } catch (e) { /* storage is optional in preview */ }
      render();
      Promise.resolve().then(() => uploadProfilePhotoToStorage(cropped)).then(url => {
        if (!url) throw new Error('empty_profile_photo_url');
        state.profilePhotoData = url;
        try { localStorage.setItem('manthanProfilePhoto', url); } catch (e) { /* storage is optional in preview */ }
        const sync = window.ManthanProfileRepository?.save
          ? window.ManthanProfileRepository.save({ profile_picture_url: url })
          : Promise.resolve(null);
        return Promise.resolve(sync).catch(syncError => {
          // Local preview remains valid when a remote profile sync is offline.
          console.debug('[Profile] photo URL sync deferred', syncError);
          return null;
        }).then(record => {
          if (record) {
            applyProfileRecord(record);
            state.profileLoaded = true;
          }
          state.photoUploading = false;
          render();
          toast('Profile picture updated successfully.');
        });
      }).catch(error => {
        console.error('Profile photo upload failed', error);
        state.profilePhotoData = previousPhoto;
        state.profileForm.profile_picture_url = previousProfileFormUrl;
        if (state.profileRecord) {
          state.profileRecord = { ...state.profileRecord, profile_picture_url: previousRecordUrl || '', updated_at: previousRecordUpdatedAt || state.profileRecord.updated_at };
        }
        state.photoUploading = false;
        try {
          if (previousPhoto) localStorage.setItem('manthanProfilePhoto', previousPhoto);
          else localStorage.removeItem('manthanProfilePhoto');
        } catch (storageError) { /* storage is optional in preview */ }
        render();
        toast('Photo preview restored. Upload failed – please try again.', 'error');
      });
    } catch (error) {
      console.error('Profile photo crop failed', error);
      toast('We could not crop that image. Please try another photo.', 'error');
    }
  };
  image.onerror = () => toast('We could not open that image. Please try another photo.', 'error');
  image.src = state.cropSrc;
}

/* ---- Admin panel: users, content and stats (device data until server sync). ---- */
const ADMIN_ACCOUNT_ID = 'admin_manthan';
const ADMIN_DEFAULT_PASSWORD = 'ManthanAdmin@2026';
function isAdminId(id) {
  const key = normalizeLoginId(id);
  if (!key) return false;
  if (key === ADMIN_ACCOUNT_ID) return true;
  const users = manthanUsers();
  return Boolean(users[key] && users[key].isAdmin);
}
function ensureAdminAccount() {
  const users = manthanUsers();
  if (!users[ADMIN_ACCOUNT_ID]) {
    const salt = `${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
    users[ADMIN_ACCOUNT_ID] = { name: 'Manthan Admin', salt, hash: hashPassword(ADMIN_DEFAULT_PASSWORD, salt), secQ: securityQuestions[0], secHash: hashPassword('manthan', salt), isAdmin: true, createdAt: new Date().toISOString() };
    saveManthanUsers(users);
  }
}
function readCustomList(key) { try { const list = JSON.parse(localStorage.getItem(key) || '[]'); return Array.isArray(list) ? list : []; } catch (e) { return []; } }
function writeCustomList(key, list) { try { localStorage.setItem(key, JSON.stringify(list)); } catch (e) { /* optional */ } }
function loadCustomContent() {
  readCustomList('manthanQuizCustom').forEach(item => { if (item && item.id !== undefined && !quizDatabase.some(question => String(question.id) === String(item.id))) quizDatabase.push(item); });
  readCustomList('manthanPaheliCustom').forEach(item => { if (item && item.id !== undefined && !paheliData.some(entry => String(entry.id) === String(item.id))) paheliData.push(item); });
  readCustomList('manthanTimetableCustom').forEach(item => { if (item && item.id !== undefined && !timetableData.some(slot => String(slot.id) === String(item.id))) timetableData.push(item); });
}
try { loadCustomContent(); ensureAdminAccount(); } catch (e) { /* optional */ }

function renderAdminUsers() {
  const users = manthanUsers();
  const rows = Object.keys(users).map(id => {
    const user = users[id];
    const self = id === normalizeLoginId(state.accountId);
    return `<div class="admin-user-row"><div class="admin-user-main"><strong>${escapeHtml(user.name || id)}</strong><small>@${escapeHtml(id)} · joined ${new Date(user.createdAt || Date.now()).toLocaleDateString('en-IN')}</small></div><div class="admin-user-badges">${user.isAdmin ? '<span class="badge badge-gold">Admin</span>' : ''}${user.blocked ? '<span class="badge badge-coral">Blocked</span>' : ''}${self ? '<span class="badge badge-aqua">You</span>' : ''}</div><div class="admin-user-actions"><button class="btn btn-soft btn-sm" data-action="admin-toggle-admin" data-id="${escapeHtml(id)}" ${self ? 'disabled' : ''}>${user.isAdmin ? 'Remove admin' : 'Make admin'}</button><button class="btn btn-soft btn-sm" data-action="admin-toggle-block" data-id="${escapeHtml(id)}" ${self || user.isAdmin ? 'disabled' : ''}>${user.blocked ? 'Unblock' : 'Block'}</button><button class="btn btn-soft btn-sm admin-danger" data-action="admin-delete-user" data-id="${escapeHtml(id)}" ${self || user.isAdmin ? 'disabled' : ''}>Delete</button></div></div>`;
  }).join('');
  return `<section class="card admin-card"><div class="section-heading"><div><h2>Registered users</h2><p>${Object.keys(users).length} accounts iss browser me</p></div><span class="badge badge-aqua">${icon('users', 13)} Users</span></div>${rows}</section>`;
}

function renderAdminContent() {
  const subjects = [...new Set(quizDatabase.map(question => question.subject))];
  const customQuiz = readCustomList('manthanQuizCustom');
  const customPaheli = readCustomList('manthanPaheliCustom');
  const customSlots = readCustomList('manthanTimetableCustom');
  const optionInputs = prefix => ['A', 'B', 'C', 'D'].map(letter => `<div><label class="form-label" for="${prefix}${letter}">Option ${letter}</label><input class="text-input" id="${prefix}${letter}" placeholder="Option ${letter}"></div>`).join('');
  const customList = (items, label, action, textOf) => items.length ? `<div class="admin-custom-list"><div class="eyebrow">${label} (${items.length})</div>${items.map(item => `<div class="admin-custom-row"><strong>${escapeHtml(textOf(item))}</strong><button class="btn btn-soft btn-sm admin-danger" data-action="${action}" data-id="${escapeHtml(String(item.id))}">Delete</button></div>`).join('')}</div>` : '';
  return `
  <section class="card admin-card"><div class="section-heading"><div><h2>Add quiz question</h2><p>Bilingual — Hindi fields khali chhodoge to English use hoga.</p></div><span class="badge badge-aqua">${quizDatabase.length} in bank</span></div>
    <div class="admin-form-grid"><div><label class="form-label" for="adminQuizSubject">Subject</label><select class="text-input" id="adminQuizSubject">${subjects.map(subject => `<option value="${escapeHtml(subject)}">${escapeHtml(subject)}</option>`).join('')}</select></div><div><label class="form-label" for="adminQuizDifficulty">Difficulty</label><select class="text-input" id="adminQuizDifficulty"><option>Easy</option><option selected>Medium</option><option>Hard</option></select></div></div>
    <label class="form-label" for="adminQuizQEn">Question (English)</label><input class="text-input" id="adminQuizQEn" placeholder="e.g. Who founded the Maurya Empire?">
    <label class="form-label" for="adminQuizQHi">Question (Hindi)</label><input class="text-input" id="adminQuizQHi" placeholder="हिंदी प्रश्न (optional)">
    <div class="admin-form-grid">${optionInputs('adminQuizOptEn')}</div>
    <div class="admin-form-grid">${optionInputs('adminQuizOptHi')}</div>
    <label class="form-label" for="adminQuizCorrect">Correct option</label><select class="text-input" id="adminQuizCorrect"><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select>
    <label class="form-label" for="adminQuizExpEn">Explanation (English)</label><input class="text-input" id="adminQuizExpEn" placeholder="Why this answer is correct">
    <label class="form-label" for="adminQuizExpHi">Explanation (Hindi)</label><input class="text-input" id="adminQuizExpHi" placeholder="व्याख्या (optional)">
    <button class="btn btn-primary" data-action="admin-add-quiz">${icon('plus', 15)} Add question</button>
    ${customList(customQuiz, 'Custom questions', 'admin-delete-quiz', item => item.question && item.question.en || '')}
  </section>
  <section class="card admin-card"><div class="section-heading"><div><h2>Add paheli</h2><p>Naya bujhaaddo — Hindi me sawaal aur jawaab.</p></div><span class="badge badge-gold">${paheliData.length} riddles</span></div>
    <div class="admin-form-grid"><div><label class="form-label" for="adminPaheliCategory">Category</label><input class="text-input" id="adminPaheliCategory" placeholder="e.g. Logic"></div><div><label class="form-label" for="adminPaheliHint">Hint</label><input class="text-input" id="adminPaheliHint" placeholder="Chhota sa ishara"></div></div>
    <label class="form-label" for="adminPaheliQuestion">Question (Hindi)</label><input class="text-input" id="adminPaheliQuestion" placeholder="पहेली का सवाल">
    <label class="form-label" for="adminPaheliQuestionEn">Question (English)</label><input class="text-input" id="adminPaheliQuestionEn" placeholder="English translation (optional)">
    <div class="admin-form-grid">${optionInputs('adminPaheliOpt')}</div>
    <div class="admin-form-grid"><div><label class="form-label" for="adminPaheliAnswer">Correct answer (kisi ek option se exactly match ho)</label><input class="text-input" id="adminPaheliAnswer" placeholder="सही उत्तर"></div><div><label class="form-label" for="adminPaheliAnswerEn">Answer (English)</label><input class="text-input" id="adminPaheliAnswerEn" placeholder="English (optional)"></div></div>
    <button class="btn btn-primary" data-action="admin-add-paheli">${icon('plus', 15)} Add paheli</button>
    ${customList(customPaheli, 'Custom paheli', 'admin-delete-paheli', item => item.question || '')}
  </section>
  <section class="card admin-card"><div class="section-heading"><div><h2>Add timetable slot</h2><p>Daily schedule me naya block jodo.</p></div><span class="badge badge-slate">${timetableData.length} slots</span></div>
    <div class="admin-form-grid"><div><label class="form-label" for="adminSlotTime">Time label</label><input class="text-input" id="adminSlotTime" placeholder="e.g. 9:00 PM - 10:00 PM"></div><div><label class="form-label" for="adminSlotTag">Tag</label><input class="text-input" id="adminSlotTag" placeholder="e.g. Study"></div></div>
    <label class="form-label" for="adminSlotTitle">Title</label><input class="text-input" id="adminSlotTitle" placeholder="e.g. Evening revision">
    <label class="form-label" for="adminSlotDesc">Description</label><input class="text-input" id="adminSlotDesc" placeholder="Iss block me kya karna hai">
    <button class="btn btn-primary" data-action="admin-add-slot">${icon('plus', 15)} Add slot</button>
    ${customList(customSlots, 'Custom slots', 'admin-delete-slot', item => item.title || '')}
  </section>`;
}

function renderAdminStats() {
  const users = manthanUsers();
  const ids = Object.keys(users);
  const admins = ids.filter(id => users[id].isAdmin).length;
  const blocked = ids.filter(id => users[id].blocked).length;
  const attempts = Array.isArray(state.quizHistory) ? state.quizHistory : [];
  const avgAccuracy = attempts.length ? Math.round(attempts.reduce((sum, attempt) => sum + (Number(attempt.accuracy) || 0), 0) / attempts.length) : 0;
  const stat = (label, value, note) => `<div class="admin-stat"><strong>${value}</strong><span>${label}</span><small>${note}</small></div>`;
  return `<section class="card admin-card"><div class="section-heading"><div><h2>App stats</h2><p>Iss browser ke accounts aur content ka summary — server connect hone ke baad yahan sab users ka combined data dikhega.</p></div></div><div class="admin-stats-grid">${stat('Total users', ids.length, 'registered accounts')}${stat('Admins', admins, 'admin rights')}${stat('Blocked', blocked, 'sign-in disabled')}${stat('Quiz questions', quizDatabase.length, `${readCustomList('manthanQuizCustom').length} custom`)}${stat('Paheli riddles', paheliData.length, `${readCustomList('manthanPaheliCustom').length} custom`)}${stat('Timetable slots', timetableData.length, `${readCustomList('manthanTimetableCustom').length} custom`)}${stat('Quiz attempts', attempts.length, 'this user, this browser')}${stat('Avg accuracy', attempts.length ? `${avgAccuracy}%` : '—', 'current user')}</div></section>`;
}

function renderAdmin() {
  const tab = state.adminTab === 'content' || state.adminTab === 'stats' ? state.adminTab : 'users';
  const tabButton = (id, label) => `<button class="login-tab ${tab === id ? 'active' : ''}" role="tab" data-action="admin-tab" data-tab="${id}">${label}</button>`;
  return `<div class="admin-screen"><div class="admin-header"><div><div class="eyebrow">Control centre</div><h2>Admin Panel</h2><p>Users, content aur stats — sab ek jagah se manage karo.</p></div><span class="badge badge-gold">${icon('shield', 12)} ${escapeHtml(accountDisplayName())}</span></div><div class="login-tabs admin-tabs" role="tablist">${tabButton('users', 'Users')}${tabButton('content', 'Content')}${tabButton('stats', 'Stats')}</div>${tab === 'users' ? renderAdminUsers() : tab === 'content' ? renderAdminContent() : renderAdminStats()}</div>`;
}

function renderScreen() {
  const views = { home: renderHome, timeTable: renderTimeTable, paheli: renderPaheli, subjects: renderSubjects, subjectDetail: renderSubjectDetail, practice: renderPractice, currentAffairs: renderCurrentAffairs, tests: renderTests, twoDeckQuiz: renderTwoDeckQuiz, mock: renderMock, groups: renderGroups, groupDetail: renderGroupDetail, battle: renderBattle, revision: renderRevision, answerWriting: renderAnswerWriting, pyq: renderPyq, syllabus: renderSyllabus, profile: renderProfile, admin: () => (isAdminId(state.accountId) ? renderAdmin() : renderHome()) };
  return (views[state.screen] || renderHome)();
}

let homeProgressAnimationFrame = null;
let homeProgressAnimationToken = 0;

function cancelHomeProgressAnimation() {
  homeProgressAnimationToken += 1;
  if (homeProgressAnimationFrame !== null) {
    if (typeof window.cancelAnimationFrame === 'function') window.cancelAnimationFrame(homeProgressAnimationFrame);
    else if (typeof window.clearTimeout === 'function') window.clearTimeout(homeProgressAnimationFrame);
  }
  homeProgressAnimationFrame = null;
}

function animateHomeProgressRing() {
  if (state.screen !== 'home') return;
  const progressRing = document.querySelector('.home-progress-ring');
  const progressValue = document.querySelector('[data-home-progress-value]');
  if (!progressRing || !progressValue) return;

  cancelHomeProgressAnimation();
  const token = homeProgressAnimationToken;
  const target = Math.max(0, Math.min(100, Number(progressRing.dataset.homeProgressTarget) || 0));
  const duration = 1350;
  const startedAt = typeof window.performance?.now === 'function' ? window.performance.now() : Date.now();
  const requestFrame = typeof window.requestAnimationFrame === 'function'
    ? callback => window.requestAnimationFrame(callback)
    : callback => window.setTimeout(() => callback(Date.now()), 16);
  const easeOutCubic = progress => 1 - Math.pow(1 - progress, 3);

  progressRing.style.setProperty('--value', '0');
  progressValue.textContent = '0%';

  const step = timestamp => {
    if (token !== homeProgressAnimationToken || state.screen !== 'home') return;
    const elapsed = Math.max(0, timestamp - startedAt);
    const progress = Math.min(1, elapsed / duration);
    const current = Math.round(target * easeOutCubic(progress));
    progressRing.style.setProperty('--value', String(current));
    progressValue.textContent = `${current}%`;
    if (progress < 1) homeProgressAnimationFrame = requestFrame(step);
    else {
      progressRing.style.setProperty('--value', String(target));
      progressValue.textContent = `${target}%`;
      homeProgressAnimationFrame = null;
    }
  };
  homeProgressAnimationFrame = requestFrame(step);
}

function scheduleHomeProgressAnimation() {
  if (state.screen !== 'home') return;
  const schedule = typeof window.requestAnimationFrame === 'function'
    ? callback => window.requestAnimationFrame(callback)
    : callback => window.setTimeout(callback, 0);
  schedule(animateHomeProgressRing);
}

function render() {
  const app = document.getElementById('app');
  const shouldTransition = state.pendingPageTransition;
  state.pendingPageTransition = false;
  app.innerHTML = state.screen === 'login' ? loginScreen() : renderApp();
  if (state.screen !== 'login') { app.insertAdjacentHTML('beforeend', '<input id="profileGalleryPicker" class="file-picker" type="file" accept="image/*" aria-label="Choose profile picture from gallery">'); if (state.photoModal) app.insertAdjacentHTML('beforeend', renderPhotoLayer()); }
  app.insertAdjacentHTML('beforeend', languageSheet());
  const page = app.querySelector?.('.page');
  if (shouldTransition && page) page.classList.add(`page-transition-${state.navigationDirection}`);
  if (state.screen === 'home') {
    scheduleHomeProgressAnimation();
    if (!state.profileLoaded && !state.profileRefreshInFlight) refreshProfileForHome();
  } else cancelHomeProgressAnimation();
}

function toast(message, tone = 'normal') {
  clearTimeout(state.toastTimer);
  document.querySelectorAll('.toast').forEach(el => el.remove());
  const node = document.createElement('div');
  node.className = 'toast';
  node.innerHTML = `${icon(tone === 'error' ? 'info' : 'circleCheck', 16)}<span>${message}</span>`;
  document.body.appendChild(node);
  state.toastTimer = setTimeout(() => node.remove(), 3200);
}

function go(screen) {
  if (screen === state.screen) return;
  const historyPrevious = state.navigationHistory[state.navigationHistory.length - 2];
  const isBackNavigation = historyPrevious === screen;
  state.navigationDirection = isBackNavigation ? 'back' : 'forward';
  state.pendingPageTransition = true;

  if (state.screen === 'twoDeckQuiz' && screen !== 'twoDeckQuiz') {
    recordQuizQuestionTime();
    stopTwoDeckTimer();
  }

  if (isBackNavigation) state.navigationHistory.pop();
  else if (state.navigationHistory[state.navigationHistory.length - 1] !== screen) {
    state.navigationHistory.push(screen);
    if (state.navigationHistory.length > 30) state.navigationHistory.shift();
  }

  state.screen = screen;
  if (screen === 'home') refreshProfileForHome();
  if (screen !== 'practice') state.practiceAnswered = null;
  render();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function startMockTimer() {
  if (state.mockTimerStarted) return;
  state.mockTimerStarted = true;
  state.mockTimer = setInterval(() => {
    if (state.screen !== 'mock') return;
    state.mockSeconds = Math.max(0, state.mockSeconds - 1);
    const timer = document.querySelector('.timer-box strong');
    if (timer) timer.textContent = `${String(Math.floor(state.mockSeconds / 60)).padStart(2, '0')}:${String(state.mockSeconds % 60).padStart(2, '0')}`;
  }, 1000);
}

function handleAction(action, el) {
  const data = el?.dataset || {};
  switch (action) {
    case 'choose-profile-photo':
    case 'choose-editor-photo': document.getElementById('profileGalleryPicker')?.click(); break;
    case 'close-photo-editor': state.photoModal = null; state.cropSrc = ''; render(); break;
    case 'save-crop': saveCroppedPhoto(); break;
    case 'search': toast('Search is ready for your subjects, topics and questions.'); break;
    case 'notifications': toast('You are all caught up. Your group has a mock at 7:30 PM.'); break;
    case 'filter-subjects': toast('Subject filters will be connected to your content table.'); break;
    case 'open-timetable': ensureTimetableDay(); go('timeTable'); break;
    case 'reset-timetable': resetTimetableInteraction(); render(); toast('Your daily schedule is ready for a fresh start.'); break;
    case 'open-home-profile-editor': openProfileEditor(); break;
    case 'open-paheli':
      state.paheliIndex = Math.max(0, Math.min(paheliData.length - 1, state.paheliIndex));
      resetPaheliInteraction();
      go('paheli');
      break;
    case 'toggle-paheli-answer':
      state.paheliAnswerVisible = !state.paheliAnswerVisible;
      render();
      break;
    case 'check-paheli-answer': checkPaheliTypedAnswer(); break;
    case 'select-paheli-option': selectPaheliOption(data.index); break;
    case 'show-paheli-hint':
      state.paheliHintVisible = !state.paheliHintVisible;
      render();
      break;
    case 'next-paheli':
      state.paheliIndex = Math.min(paheliData.length - 1, state.paheliIndex + 1);
      resetPaheliInteraction();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'previous-paheli':
      state.paheliIndex = Math.max(0, state.paheliIndex - 1);
      resetPaheliInteraction();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    case 'open-paheli-index': {
      const index = Number(data.index);
      if (!Number.isInteger(index) || index < 0 || index >= paheliData.length) break;
      state.paheliIndex = index;
      resetPaheliInteraction();
      render();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      break;
    }
    case 'bookmark-paheli': {
      const paheli = currentPaheli();
      state.paheliBookmarked[paheli.id] = !state.paheliBookmarked[paheli.id];
      savePaheliBookmarks();
      render();
      toast(state.paheliBookmarked[paheli.id] ? 'Paheli saved to your favourites.' : 'Paheli removed from favourites.');
      break;
    }
    case 'share-paheli': shareCurrentPaheli(); break;
    case 'open-two-deck': openTwoDeckLobby(); break;
    case 'quiz-select-deck':
      if (state.quizPhase !== 'lobby') break;
      state.quizDeck = data.deck === 'mock' ? 'mock' : 'subject';
      state.quizIndex = 0;
      render();
      break;
    case 'quiz-select-subject':
      if (state.quizPhase !== 'lobby') break;
      state.quizSubject = data.subject || 'Polity';
      render();
      break;
    case 'quiz-start': startTwoDeckQuiz(); break;
    case 'quiz-language':
      
      if (state.quizPhase === 'playing') recordQuizQuestionTime();
      state.quizLanguage = data.language === 'hi' ? 'hi' : 'en';
      render();
      break;
    case 'quiz-answer': {
      if (state.quizPhase !== 'playing') break;
      const question = quizCurrentQuestion();
      if (!question || Number.isInteger(state.quizAnswers[question.id])) break;
      const answerIndex = Number(data.index);
      const optionCount = (question.options.en || question.options[state.quizLanguage] || []).length;
      if (!Number.isInteger(answerIndex) || answerIndex < 0 || answerIndex >= optionCount) break;
      state.quizAnswers[question.id] = answerIndex;
      render();
      break;
    }
    case 'quiz-bookmark': {
      const question = quizCurrentQuestion();
      if (!question) break;
      state.quizBookmarked[question.id] = !state.quizBookmarked[question.id];
      render();
      toast(state.quizBookmarked[question.id] ? 'Question saved for revision.' : 'Question removed from saved.');
      break;
    }
    case 'quiz-next': {
      if (state.quizPhase !== 'playing') break;
      
      recordQuizQuestionTime();
      const set = quizQuestionSet();
      state.quizIndex = Math.min(set.length - 1, state.quizIndex + 1);
      render();
      break;
    }
    case 'quiz-previous':
      if (state.quizPhase !== 'playing') break;
      
      recordQuizQuestionTime();
      state.quizIndex = Math.max(0, state.quizIndex - 1);
      render();
      break;
    case 'quiz-goto': {
      if (state.quizPhase !== 'playing') break;
      
      const targetIndex = Number(data.index);
      const maxIndex = quizQuestionSet().length - 1;
      if (!Number.isInteger(targetIndex) || targetIndex < 0 || targetIndex > maxIndex) break;
      recordQuizQuestionTime();
      state.quizIndex = targetIndex;
      render();
      break;
    }
    case 'quiz-submit': finishTwoDeckQuiz(false); break;
    case 'quiz-exit': go('tests'); toast('Quiz closed. Your in-progress answers were not submitted.'); break;
    case 'quiz-retry': startTwoDeckQuiz(); break;
    case 'set-preferred-language':
      state.preferredLanguage = data.language === 'hi' ? 'hi' : 'en';
      state.quizLanguage = state.preferredLanguage;
      try { localStorage.setItem('manthanPreferredLanguage', state.preferredLanguage); } catch (e) { /* persistence is optional in preview */ }
      render();
      toast(`Default quiz language set to ${state.preferredLanguage === 'hi' ? 'Hindi' : 'English'}.`);
      break;
    case 'open-practice':
      state.practiceIndex = data.question !== undefined ? Number(data.question) % questions.length : state.practiceIndex;
      state.practiceAnswered = null;
      go('practice');
      break;
    case 'open-subject': state.selectedSubject = data.id || 'polity'; go('subjectDetail'); break;
    case 'answer-practice':
      if (state.practiceAnswered !== null) return;
      state.practiceAnswered = Number(data.index);
      render();
      toast(state.practiceAnswered === questions[state.practiceIndex].correct ? 'Correct. Explanation unlocked.' : 'Good attempt. Read the explanation and keep going.');
      break;
    case 'toggle-bookmark': state.practiceBookmarked = !state.practiceBookmarked; render(); toast(state.practiceBookmarked ? 'Question saved to Bookmarked.' : 'Removed from Bookmarked.'); break;
    case 'next-practice': state.practiceIndex = (state.practiceIndex + 1) % questions.length; state.practiceAnswered = null; state.practiceBookmarked = false; render(); break;
    case 'refresh-affairs': toast('Current affairs refreshed from the connected content table.'); break;
    case 'affairs-date': state.affairsDate = Number(data.index); render(); break;
    case 'affairs-category': state.affairsCategory = data.category || 'All'; render(); break;
    case 'start-mock':
      state.mockIndex = 0; state.mockAnswers = {}; state.mockMarked = {}; state.mockSeconds = 42 * 60 + 18; state.mockTimerStarted = false; go('mock'); break;
    case 'answer-mock': state.mockAnswers[state.mockIndex] = Number(data.index); render(); break;
    case 'mock-next': state.mockIndex = Math.min(19, state.mockIndex + 1); render(); break;
    case 'mock-previous': state.mockIndex = Math.max(0, state.mockIndex - 1); render(); break;
    case 'mock-goto': state.mockIndex = Number(data.index); render(); break;
    case 'mock-mark': state.mockMarked[state.mockIndex] = !state.mockMarked[state.mockIndex]; render(); break;
    case 'submit-mock': state.mockTimerStarted = false; if (state.mockTimer) clearInterval(state.mockTimer); go('tests'); toast('Mock submitted. Your detailed result is ready in analytics.'); break;
    case 'start-battle':
      state.battleIndex = 0; state.battleAnswered = null; state.battleScore = 0; state.opponentScore = 0; state.battleCombo = 0; state.battlePhase = 'playing'; go('battle'); break;
    case 'answer-battle':
      if (state.battleAnswered !== null) return;
      state.battleAnswered = Number(data.index);
      if (state.battleAnswered === battleQuestions[state.battleIndex].correct) { state.battleScore += 10 + state.battleCombo * 2; state.battleCombo += 1; } else { state.battleCombo = 0; }
      state.opponentScore += state.battleIndex === 1 ? 9 : 7;
      render();
      break;
    case 'next-battle':
      if (state.battleIndex >= battleQuestions.length - 1) state.battlePhase = 'result'; else { state.battleIndex += 1; state.battleAnswered = null; }
      render(); break;
    case 'open-group': state.selectedGroup = data.id || 'civils-circle'; go('groupDetail'); break;
    case 'copy-code': toast('Group code CIVILS24 copied to clipboard.'); break;
    case 'invite-group': toast('Invite link copied – share it with your study circle.'); break;
    case 'join-group': toast('Enter a group code to join a study circle.'); break;
    case 'create-group': toast('Your new group workspace is ready to configure.'); break;
    case 'revision-tab': state.revisionTab = data.tab || 'Bookmarked'; render(); break;
    case 'revision-subject': toast('Subject filter applied to your revision desk.'); break;
    case 'toggle-model': state.modelVisible = el.checked; render(); break;
    case 'submit-answer': state.answerSubmitted = true; render(); toast('Answer submitted for self-review. Nice work showing up.'); break;
    case 'toggle-accordion': {
      const id = data.id;
      state.openSyllabus = state.openSyllabus.includes(id) ? state.openSyllabus.filter(x => x !== id) : [...state.openSyllabus, id];
      render(); break;
    }
    case 'collapse-syllabus': state.openSyllabus = state.openSyllabus.length ? [] : syllabus.map(s => s.id); render(); break;
    case 'request-pyq': toast('Request noted. We will add more papers from your connected content source.'); break;
    case 'edit-profile': openProfileEditor(); break;
    case 'save-profile': saveProfileEditor(); break;
    case 'close-profile-editor': closeProfileEditor(); break;
    case 'signout': endSession(); state.accountId = ''; state.screen = 'login'; state.loginMode = 'signin'; state.loginError = ''; state.forgotStep = 1; state.loginPassword = ''; state.loginConfirm = ''; state.photoModal = null; state.profileLoaded = false; state.profileLoading = false; state.profileRefreshInFlight = false; state.profileRecord = null; state.profileEditOpen = false; render(); toast('Signed out. See you at the next session.'); break;
    case 'login-mode': state.loginMode = data.mode === 'create' ? 'create' : (data.mode === 'forgot' ? 'forgot' : 'signin'); state.loginError = ''; state.forgotStep = 1; render(); break;
    case 'open-language-menu': state.languageMenuOpen = true; render(); break;
    case 'close-language-menu': state.languageMenuOpen = false; render(); break;
    case 'install-app': {
      const deferred = window.__manthanInstallPrompt;
      if (deferred) {
        deferred.prompt();
        if (deferred.userChoice && typeof deferred.userChoice.then === 'function') {
          deferred.userChoice.then(() => {
            window.__manthanInstallPrompt = null;
            try { localStorage.setItem('manthanInstallHintDismissed', '1'); } catch (e) { /* optional */ }
            render();
          });
        }
      }
      break;
    }
    case 'select-ui-language': {
      const code = indianLanguages.some(item => item.code === data.lang) ? data.lang : 'en';
      state.uiLanguage = code;
      try { localStorage.setItem('manthanUiLanguage', code); } catch (e) { /* optional */ }
      setTranslateCookie(code);
      state.languageMenuOpen = false;
      render();
      const lang = currentLanguage();
      if (code === 'en') toast('Language set to English.');
      else {
        ensureTranslateEngine();
        toast(`भाषा चुनी गई: ${lang.native} (${lang.name})`);
      }
      break;
    }
    case 'login-signin': {
      const id = normalizeLoginId(document.getElementById('loginIdInput')?.value ?? state.loginId);
      const password = document.getElementById('loginPasswordInput')?.value ?? state.loginPassword;
      state.loginId = id;
      const user = manthanUsers()[id];
      if (!id) { state.loginError = 'Please enter your User ID.'; render(); return; }
      if (!user) { state.loginError = 'No account found with this User ID. Create one first.'; render(); return; }
      if (user.blocked) { state.loginError = 'This account has been blocked by the admin.'; render(); return; }
      if (user.hash !== hashPassword(password, user.salt)) { state.loginError = 'Incorrect password for this User ID.'; render(); return; }
      openAccount(id, user.name);
      break;
    }
    case 'login-create': {
      const name = (document.getElementById('loginNameInput')?.value ?? state.loginName).trim();
      const id = normalizeLoginId(document.getElementById('loginIdInput')?.value ?? state.loginId);
      const password = document.getElementById('loginPasswordInput')?.value ?? state.loginPassword;
      const confirm = document.getElementById('loginConfirmInput')?.value ?? state.loginConfirm;
      state.loginName = name; state.loginId = id;
      if (name.length < 2) { state.loginError = 'Please enter your full name.'; render(); return; }
      if (!/^[a-z0-9][a-z0-9._-]{2,19}$/.test(id)) { state.loginError = 'User ID must be 3-20 characters: letters, numbers, dot, dash; starting with a letter or number.'; render(); return; }
      if (password.length < 4) { state.loginError = 'Password must be at least 4 characters long.'; render(); return; }
      if (password !== confirm) { state.loginError = 'Passwords do not match. Please retype them.'; render(); return; }
      const securityAnswer = (document.getElementById('loginSecurityAnswer')?.value ?? state.loginSecurityAnswer).trim();
      if (securityAnswer.length < 2) { state.loginError = 'Security answer is required — password recovery will use it.'; render(); return; }
      const users = manthanUsers();
      if (users[id]) { state.loginError = 'This User ID is already taken — switch to Sign in.'; render(); return; }
      const salt = `${Math.random().toString(36).slice(2, 10)}${Date.now().toString(36)}`;
      users[id] = { name, salt, hash: hashPassword(password, salt), secQ: securityQuestions[state.loginQuestion] || securityQuestions[0], secHash: hashPassword(normalizeSecurityAnswer(securityAnswer), salt), createdAt: new Date().toISOString() };
      saveManthanUsers(users);
      openAccount(id, name);
      break;
    }
    case 'login-forgot-id': {
      const id = normalizeLoginId(document.getElementById('loginIdInput')?.value ?? state.loginId);
      state.loginId = id;
      if (!id) { state.loginError = 'Please enter your User ID.'; render(); return; }
      if (!manthanUsers()[id]) { state.loginError = 'No account found with this User ID.'; render(); return; }
      state.loginSecurityAnswer = '';
      state.forgotStep = 2;
      state.loginError = '';
      render();
      break;
    }
    case 'login-forgot-verify': {
      const users = manthanUsers();
      const user = users[state.loginId];
      if (!user) { state.forgotStep = 1; state.loginError = 'Account not found. Start again.'; render(); return; }
      const verified = user.secHash
        ? user.secHash === hashPassword(normalizeSecurityAnswer(document.getElementById('loginSecurityAnswer')?.value ?? state.loginSecurityAnswer), user.salt)
        : normalizeSecurityAnswer(document.getElementById('loginNameInput')?.value ?? state.loginName) === normalizeSecurityAnswer(user.name);
      if (!verified) { state.loginError = 'Verification failed — the answer does not match our records.'; render(); return; }
      state.loginPassword = '';
      state.loginConfirm = '';
      state.forgotStep = 3;
      state.loginError = '';
      render();
      break;
    }
    case 'login-forgot-reset': {
      const users = manthanUsers();
      const user = users[state.loginId];
      if (!user) { state.forgotStep = 1; state.loginError = 'Account not found. Start again.'; render(); return; }
      const password = document.getElementById('loginPasswordInput')?.value ?? state.loginPassword;
      const confirm = document.getElementById('loginConfirmInput')?.value ?? state.loginConfirm;
      if (password.length < 4) { state.loginError = 'Password must be at least 4 characters long.'; render(); return; }
      if (password !== confirm) { state.loginError = 'Passwords do not match. Please retype them.'; render(); return; }
      user.hash = hashPassword(password, user.salt);
      saveManthanUsers(users);
      state.loginPassword = '';
      state.loginConfirm = '';
      state.loginSecurityAnswer = '';
      state.loginMode = 'signin';
      state.forgotStep = 1;
      state.loginError = '';
      render();
      toast('Password reset! You can sign in with your new password.');
      break;
    }
    case 'admin-tab': state.adminTab = data.tab || 'users'; render(); break;
    case 'admin-toggle-admin': {
      const users = manthanUsers();
      const id = normalizeLoginId(data.id);
      const user = users[id];
      if (!user || id === normalizeLoginId(state.accountId)) break;
      user.isAdmin = !user.isAdmin;
      saveManthanUsers(users);
      toast(user.isAdmin ? `${user.name} is now an admin.` : `Admin rights removed from ${user.name}.`);
      render();
      break;
    }
    case 'admin-toggle-block': {
      const users = manthanUsers();
      const id = normalizeLoginId(data.id);
      const user = users[id];
      if (!user || user.isAdmin || id === normalizeLoginId(state.accountId)) break;
      user.blocked = !user.blocked;
      saveManthanUsers(users);
      toast(user.blocked ? `${user.name} blocked — ab sign in nahi kar sakte.` : `${user.name} unblocked.`);
      render();
      break;
    }
    case 'admin-delete-user': {
      const users = manthanUsers();
      const id = normalizeLoginId(data.id);
      if (!users[id] || users[id].isAdmin || id === normalizeLoginId(state.accountId)) break;
      const name = users[id].name || id;
      delete users[id];
      saveManthanUsers(users);
      toast(`Account ${name} deleted.`);
      render();
      break;
    }
    case 'admin-add-quiz': {
      const val = fid => (document.getElementById(fid)?.value ?? '').trim();
      const subject = val('adminQuizSubject');
      const qEn = val('adminQuizQEn');
      const qHi = val('adminQuizQHi');
      const optsEn = ['A', 'B', 'C', 'D'].map(letter => val('adminQuizOptEn' + letter));
      const optsHi = ['A', 'B', 'C', 'D'].map(letter => val('adminQuizOptHi' + letter));
      const correct = Number(val('adminQuizCorrect')) || 0;
      const expEn = val('adminQuizExpEn');
      const expHi = val('adminQuizExpHi');
      if (!subject || !qEn || optsEn.some(option => !option)) { toast('Subject, English question aur chaaron English options zaroori hain.'); break; }
      const item = {
        id: `cq-${Date.now()}`, subject, difficulty: val('adminQuizDifficulty') || 'Medium',
        question: { en: qEn, hi: qHi || qEn },
        options: { en: optsEn, hi: optsHi.map((option, index) => option || optsEn[index]) },
        correct_option_index: correct,
        explanation: { en: expEn || 'Explanation will be added by the admin soon.', hi: expHi || expEn || 'व्याख्या जल्द जोड़ी जाएगी।' },
        custom: true,
      };
      quizDatabase.push(item);
      const list = readCustomList('manthanQuizCustom');
      list.push(item);
      writeCustomList('manthanQuizCustom', list);
      toast('Quiz question added.');
      render();
      break;
    }
    case 'admin-delete-quiz': {
      const id = String(data.id);
      const index = quizDatabase.findIndex(item => String(item.id) === id);
      if (index >= 0) quizDatabase.splice(index, 1);
      writeCustomList('manthanQuizCustom', readCustomList('manthanQuizCustom').filter(item => String(item.id) !== id));
      toast('Question removed.');
      render();
      break;
    }
    case 'admin-add-paheli': {
      const val = fid => (document.getElementById(fid)?.value ?? '').trim();
      const question = val('adminPaheliQuestion');
      const answer = val('adminPaheliAnswer');
      const options = ['A', 'B', 'C', 'D'].map(letter => val('adminPaheliOpt' + letter));
      if (!question || !answer || options.some(option => !option)) { toast('Hindi sawaal, sahi jawaab aur chaaron options zaroori hain.'); break; }
      if (!options.includes(answer)) { toast('Sahi jawaab chaaron options me se ek se exactly match hona chahiye.'); break; }
      const item = { id: `cp-${Date.now()}`, category: val('adminPaheliCategory') || 'General', question, questionEn: val('adminPaheliQuestionEn') || question, answer, answerEn: val('adminPaheliAnswerEn') || answer, options, hint: val('adminPaheliHint') || 'Sochke batao!' };
      paheliData.push(item);
      const list = readCustomList('manthanPaheliCustom');
      list.push(item);
      writeCustomList('manthanPaheliCustom', list);
      toast('Paheli added.');
      render();
      break;
    }
    case 'admin-delete-paheli': {
      const id = String(data.id);
      const index = paheliData.findIndex(item => String(item.id) === id);
      if (index >= 0) paheliData.splice(index, 1);
      writeCustomList('manthanPaheliCustom', readCustomList('manthanPaheliCustom').filter(item => String(item.id) !== id));
      toast('Paheli removed.');
      render();
      break;
    }
    case 'admin-add-slot': {
      const val = fid => (document.getElementById(fid)?.value ?? '').trim();
      const timeLabel = val('adminSlotTime');
      const title = val('adminSlotTitle');
      if (!timeLabel || !title) { toast('Time label aur title zaroori hai.'); break; }
      const item = { id: `ct-${Date.now()}`, start: '00:00', end: '00:00', timeLabel, icon: 'spark', title, description: val('adminSlotDesc') || title, tag: val('adminSlotTag') || 'Study' };
      timetableData.push(item);
      const list = readCustomList('manthanTimetableCustom');
      list.push(item);
      writeCustomList('manthanTimetableCustom', list);
      toast('Timetable slot added.');
      render();
      break;
    }
    case 'admin-delete-slot': {
      const id = String(data.id);
      const index = timetableData.findIndex(item => String(item.id) === id);
      if (index >= 0) timetableData.splice(index, 1);
      writeCustomList('manthanTimetableCustom', readCustomList('manthanTimetableCustom').filter(item => String(item.id) !== id));
      toast('Slot removed.');
      render();
      break;
    }
    case 'select-exam': state.setupExam = data.exam; render(); break;
    case 'finish-setup': state.screen = 'home'; render(); toast(`Welcome to Manthan Prep, ${state.setupExam} learner.`); break;
  }
}

document.addEventListener('click', event => {
  const screenTarget = event.target.closest('[data-screen]');
  const actionTarget = event.target.closest('[data-action]');
  if (actionTarget) {
    if (actionTarget.classList.contains('modal-backdrop') && event.target !== actionTarget) return;
    handleAction(actionTarget.dataset.action, actionTarget);
    return;
  }
  if (screenTarget) { go(screenTarget.dataset.screen); }
});

document.addEventListener('input', event => {
  if (event.target.id === 'paheliAnswerInput') {
    state.paheliTypedAnswer = event.target.value;
    state.paheliInputStatus = null;
    state.paheliSelectedOption = null;
    state.paheliAnswerVisible = false;
  }
  if (event.target.id === 'photoZoom') {
    state.photoZoom = Number(event.target.value);
    const preview = document.getElementById('cropPreview');
    if (preview) preview.style.transform = `scale(${state.photoZoom})`;
  }
  if (event.target.id === 'answerText') {
    state.answerText = event.target.value;
    const words = state.answerText.trim() ? state.answerText.trim().split(/\s+/).length : 0;
    const counter = document.querySelector('.word-count strong');
    if (counter) counter.textContent = words;
    const submit = document.querySelector('[data-action="submit-answer"]');
    if (submit) submit.disabled = words < 4;
  }
  if (event.target.id === 'loginIdInput') state.loginId = event.target.value;
  if (event.target.id === 'loginPasswordInput') state.loginPassword = event.target.value;
  if (event.target.id === 'loginNameInput') state.loginName = event.target.value;
  if (event.target.id === 'loginConfirmInput') state.loginConfirm = event.target.value;
  if (event.target.id === 'loginSecurityAnswer') state.loginSecurityAnswer = event.target.value;
});

document.addEventListener('keydown', event => {
  if (event.target.id === 'paheliAnswerInput' && event.key === 'Enter' && !event.isComposing) {
    event.preventDefault();
    checkPaheliTypedAnswer();
  }
  const loginInputs = ['loginIdInput', 'loginPasswordInput', 'loginNameInput', 'loginConfirmInput', 'loginSecurityAnswer'];
  if (loginInputs.includes(event.target.id) && event.key === 'Enter' && !event.isComposing) {
    event.preventDefault();
    const forgotActions = ['login-forgot-id', 'login-forgot-verify', 'login-forgot-reset'];
    const action = state.loginMode === 'create' ? 'login-create' : (state.loginMode === 'forgot' ? (forgotActions[state.forgotStep - 1] || 'login-forgot-id') : 'login-signin');
    handleAction(action, event.target);
  }
});

document.addEventListener('change', event => {
  const target = event.target;
  if (target.id === 'loginQuestionSelect') { state.loginQuestion = Number(target.value) || 0; return; }
  if (target.matches('[data-timetable-id]')) {
    ensureTimetableDay();
    const slot = timetableData.find(item => item.id === target.dataset.timetableId);
    if (slot) {
      state.timetableCompleted[slot.id] = Boolean(target.checked);
      saveTimetableProgress();
      render();
    }
    return;
  }
  if (target.id === 'profileGalleryPicker') {
    readSelectedPhoto(target.files?.[0]);
    target.value = '';
    return;
  }
  if (target.matches('[data-syllabus-subject]')) toast(target.checked ? 'Topic marked as covered.' : 'Topic moved back to your plan.');
  if (target.matches('[data-topic-subject]')) toast(target.checked ? 'Concept marked complete.' : 'Concept moved back to your plan.');
});

// Capture the browser's install prompt so the login screen can offer "Install app".
if (typeof window.addEventListener === 'function') {
  window.addEventListener('beforeinstallprompt', event => {
    event.preventDefault();
    window.__manthanInstallPrompt = event;
    render();
  });
}

// Re-trigger only the Home Page ring when the page/tab becomes visible again.
if (typeof window.addEventListener === 'function') {
  window.addEventListener('focus', () => {
    if (state.screen === 'home') {
      scheduleHomeProgressAnimation();
      refreshProfileForHome();
    }
  });
}
if (typeof document.addEventListener === 'function') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && state.screen === 'home') {
      scheduleHomeProgressAnimation();
      refreshProfileForHome();
    }
  });
}

// Only a signed-in account may open the app; everyone else lands on the sign-in page.
(function restoreSession() {
  const session = currentSession();
  const users = manthanUsers();
  if (session && users[session.userId]) {
    state.accountId = session.userId;
    if (users[session.userId].name) state.profileForm.name = users[session.userId].name;
    state.screen = 'home';
  } else {
    endSession();
    state.screen = 'login';
    state.loginMode = Object.keys(users).filter(id => id !== ADMIN_ACCOUNT_ID).length ? 'signin' : 'create';
  }
})();

// Re-apply the saved Indian language on every visit (live site translates via the engine).
if (state.uiLanguage !== 'en') ensureTranslateEngine();

render();
