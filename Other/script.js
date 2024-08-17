// Пример словаря перевода (для упрощения, используем ограниченный набор данных)
const ariralToEnglish = {
    "teuz": "Such", "roæθ": "Idiot", "hesœ": "This", "ezok": "", "θæiz": "", "hero": "Think",
    "œduk": "Reoccurring", "gæno": "", "œguz": "", "ziœg": "What", "zeœd": "",
    "naru": "Fuck", "doœg": "Just", "kœæz": "About", "ugzi": "Little", "asdu": "Bitch",
    "æsuθ": "I'll", "anku": "Have", "gehœ": "Know", "lohi": "Class", "oltœ": "Navy",
    "sœœh": "Seals", "ænku": "I've", "θæœd": "Been", "gœes": "Secret", "luri": "Raids",
    "kœœs": "Over", "adœt": "Kills", "gœæg": "Sniper", "alkœ": "Entire", "neor": "Armed",
    "ækti": "Forces", "œhæs": "Target", "uθuθ": "Will", "œlku": "Wipe", "œguz": "With",
    "rotu": "Likes", "laæz": "Which", "anut": "Never", "hœœd": "Seen", "eddæ": "Before",
    "ezin": "Earth", "idru": "Mark", "œdes": "Words", "gutœ": "Away", "zælæ": "Saying",
    "deœg": "That", "tœœg": "Shit", "laœt": "Again", "haki": "Speak", "katu": "Spies",
    "ohgi": "Across", "θœœs": "Your", "leno": "Being", "hiœr": "Traced", "liut": "Now",
    "eneθ": "Better", "hœæd": "Storm", "tœœk": "Maggot", "ænuθ": "Call", "heno": "Thing",
    "onæh": "Life", "keon": "Dead", "θœki": "You're", "aduθ": "Kill", "isug": "Seven",
    "hoos": "Ways", "dete": "That's", "œdku": "Bare", "ages": "Hands", "ortœ": "Only",
    "koœl": "Combat", "nese": "Access", "lieg": "United", "zuθe": "States", "iddæ": "Marine",
    "orti": "Corps", "æluθ": "Full", "utal": "Extent", "θœku": "Face", "θoæg": "Could",
    "geoz": "Known", "ille": "Unholy", "tæœl": "Clever", "hino": "Bring", "θaœd": "Down",
    "næœd": "Upon", "giθo": "Maybe", "lœæg": "Would", "uzuk": "Held", "alnu": "Tongue",
    "agal": "Didn't", "dulæ": "Paying", "lœog": "Price", "roar": "Idiot", "æhtœ": "Fury",
    "taoz": "Drown", "inun": "Kiddo", "rœæk": "Learn", "aθku": "More", "θæiz": "Human",
    "æsat": "Fun", "daœg": "Much", "œdsi": "Worry", "esθi": "Later", "agsa": "Handle",
    "suær": "Heart", "sulæ": "We're", "usak": "Love", "idtu": "Rules", "gæθu": "From",
    "otut": "Other", "kœat": "Guy", "eθho": "Wanna", "enuθ": "Tell", "œkso": "Gotta",
    "nœku": "Make", "œgho": "Gonna", "œrku": "Give", "zeœθ": "Around", "houn": "Desert",
    "duat": "Cry", "esœg": "Hurt", "dero": "Thank(s)", "akku": "Hate", "roru": "Look",
    "godi": "Simply", "udæl": "Link", "œθhu": "Data", "læœs": "User", "ægsu": "Follow",
    "ruez": "Guided", "sœda": "Points", "hagæ": "Whole", "œgeh": "Within", "udel": "Linked",
    "nueh": "Anchor", "osaθ": "Text", "ΘelÆ": "Scare", "ΘÆes": "Human", "taÆt": "Pearl",
    "roÆl": "Look", "zuin": "Wrong", "ÆkÆg": "Fine", "riuk": "Need", "zŒos": "Check",
    "osku": "Sure", "zŒon": "Should", "zuho": "State", "rŒŒd": "Ruin", "ogku": "Wave",
    "kŒku": "Chance", "zozŒ": "Close", "ŒhŒz": "Zero", "hotŒ": "Okay", "ŒsuΘ": "Pull",
    "irÆt": "Lever", "irut": "River", "ŒddŒ": "Think", "dŒod": "This", "hiod": "Will",
    "uΘhu": "Much", "ŒdŒΘ": "Later", "Θahu": "Handle", "œlt": "Wipes"
};

// Пример словаря перевода для английского языка (для упрощения, используем ограниченный набор данных)
const englishToAriral = {
    "Such": "teuz", "Idiot": "roæθ", "This": "hesœ", "Think": "hero",
    "Reoccurring": "œduk", "What": "ziœg", "Fuck": "naru", "Just": "doœg",
    "About": "kœæz", "Little": "ugzi", "Bitch": "asdu", "I'll": "æsuθ",
    "Have": "anku", "Know": "gehœ", "Class": "lohi", "Navy": "oltœ",
    "Seals": "sœœh", "I've": "ænku", "Been": "θæœd", "Secret": "gœes",
    "Raids": "luri", "Over": "kœœs", "Kills": "adœt", "Sniper": "gœæg",
    "Entire": "alkœ", "Armed": "neor", "Forces": "ækti", "Target": "œhæs",
    "Will": "uθuθ", "Wipe": "œlku", "With": "œguz", "Likes": "rotu",
    "Which": "laæz", "Never": "anut", "Seen": "hœœd", "Before": "eddæ",
    "Earth": "ezin", "Mark": "idru", "Words": "œdes", "Away": "gutœ",
    "Saying": "zælæ", "That": "deœg", "Shit": "tœœg", "Again": "laœt",
    "Speak": "haki", "Spies": "katu", "Across": "ohgi", "Your": "θœœs",
    "Being": "leno", "Traced": "hiœr", "Now": "liut", "Better": "eneθ",
    "Storm": "hœæd", "Maggot": "tœœk", "Call": "ænuθ", "Thing": "heno",
    "Life": "onæh", "Dead": "keon", "You're": "θœki", "Kill": "aduθ",
    "Seven": "isug", "Ways": "hoos", "That's": "dete", "Bare": "œdku",
    "Hands": "ages", "Only": "ortœ", "Combat": "koœl", "Access": "nese",
    "United": "lieg", "States": "zuθe", "Marine": "iddæ", "Corps": "orti",
    "Full": "æluθ", "Extent": "utal", "Face": "θœku", "Could": "θoæg",
    "Known": "geoz", "Unholy": "ille", "Clever": "tæœl", "Bring": "hino",
    "Down": "θaœd", "Upon": "næœd", "Maybe": "giθo", "Would": "lœæg",
    "Held": "uzuk", "Tongue": "alnu", "Didn't": "agal", "Paying": "dulæ",
    "Price": "lœog", "Fury": "æhtœ", "Drown": "taoz", "Kiddo": "inun",
    "Learn": "rœæk", "More": "aθku", "Human": "θæiz", "Fun": "æsat",
    "Much": "daœg", "Worry": "œdsi", "Later": "esθi", "Handle": "agsa",
    "Heart": "suær", "We're": "sulæ", "Love": "usak", "Rules": "idtu",
    "From": "gæθu", "Other": "otut", "Guy": "kœat", "Wanna": "eθho",
    "Tell": "enuθ", "Gotta": "œkso", "Make": "nœku", "Gonna": "œgho",
    "Give": "œrku", "Around": "zeœθ", "Desert": "houn", "Cry": "duat",
    "Hurt": "esœg", "Thank(s)": "dero", "Hate": "akku", "Look": "roru",
    "Simply": "godi", "Link": "udæl", "Data": "œθhu", "User": "læœs",
    "Follow": "ægsu", "Guided": "ruez", "Points": "sœda", "Whole": "hagæ",
    "Within": "œgeh", "Linked": "udel", "Anchor": "nueh", "Text": "osaθ",
    "Scare": "ΘelÆ", "Pearl": "taÆt", "Wrong": "zuin", "Fine": "ÆkÆg",
    "Need": "riuk", "Check": "zŒos", "Sure": "osku", "Should": "zŒon",
    "State": "zuho", "Ruin": "rŒŒd", "Wave": "ogku", "Chance": "kŒku",
    "Close": "zozŒ", "Zero": "ŒhŒz", "Okay": "hotŒ", "Pull": "ŒsuΘ",
    "Lever": "irÆt", "River": "irut", "Think": "ŒddŒ", "This": "dŒod",
    "Will": "hiod", "Much": "uΘhu", "Later": "ŒdŒΘ", "Handle": "Θahu",
    "Wipes": "œlt"
};

// Функция для перевода в реальном времени
function translate() {
    const input = document.getElementById('inputText').value;
    const output = document.getElementById('outputText');
    
    if (currentLang === 'ariralToEnglish') {
        output.value = translateAriralToEnglish(input);
    } else {
        output.value = translateEnglishToAriral(input);
    }
}

// Перевод с Ariral на English
function translateAriralToEnglish(text) {
    return text.split(' ').map(word => ariralToEnglish[word.toLowerCase()] || word).join(' ');
}

// Перевод с English на Ariral
function translateEnglishToAriral(text) {
    return text.split(' ').map(word => englishToAriral[word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()] || word).join(' ');
}

// Переключение языков
function switchLanguage() {
    currentLang = currentLang === 'ariralToEnglish' ? 'englishToAriral' : 'ariralToEnglish';
    const button = document.getElementById('switchLang');
    button.textContent = currentLang === 'ariralToEnglish' ? "Switch to Ariral ↔ English" : "Switch to English ↔ Ariral";
    translate();
}

// Установка начального языка
let currentLang = 'ariralToEnglish';  // Начальное направление перевода

// Обработчик для ввода текста
document.getElementById('inputText').addEventListener('input', translate);
