/* ============================================================
   Brahmavidhya Astrology — Main Script (Vinu Shankar)
   ============================================================ */

/* ---------- 1. DOSHA CARDS DATA ---------- */
const doshaData = [
  {
    icon: "🏠",
    en: { t: "Vastu Dosha Nivarti", d: "Remedies for Vastu (building/land) defects as per Jyotisha Vidhi." },
    ml: { t: "വാസ്തു ദോഷ നിവാരണം", d: "ജ്യോതിഷ വിധി പ്രകാരം വാസ്തു ദോഷ പരിഹാരം." },
    ta: { t: "வாஸ்து தோஷ நிவர்த்தி", d: "ஜோதிட விதிப்படி வாஸ்து தோஷ பரிகாரம்." }
  },
  {
    icon: "🪐",
    en: { t: "Graha Dosham Nivarti", d: "Remedies for planetary afflictions and doshas." },
    ml: { t: "ഗ്രഹ ദോഷ നിവാരണം", d: "ഗ്രഹ ദോഷങ്ങൾക്ക് പരിഹാരം." },
    ta: { t: "கிரக தோஷ நிவர்த்தி", d: "கிரக தோஷங்களுக்கு பரிகாரம்." }
  },
  {
    icon: "🌍",
    en: { t: "Bhumi Dosham Nivarti", d: "Remedies for land-related doshas." },
    ml: { t: "ഭൂമി ദോഷ നിവാരണം", d: "ഭൂമി ദോഷങ്ങൾക്ക് പരിഹാരം." },
    ta: { t: "பூமி தோஷ நிவர்த்தி", d: "பூமி தொடர்பான தோஷ பரிகாரம்." }
  },
  {
    icon: "👶",
    en: { t: "Santhana Soubhagya Dosham Nivarti", d: "Remedies for progeny and family welfare doshas." },
    ml: { t: "സന്താന സൗഭാഗ്യ ദോഷ നിവാരണം", d: "സന്താന സൗഭാഗ്യ ദോഷ പരിഹാരം." },
    ta: { t: "சந்தான சௌபாக்கிய தோஷ நிவர்த்தி", d: "சந்தான சௌபாக்கிய தோஷ பரிகாரம்." }
  },
  {
    icon: "💍",
    en: { t: "Mangalya Dosham Nivarti", d: "Remedies for marriage-related (Mangalya) doshas." },
    ml: { t: "മാംഗല്യ ദോഷ നിവാരണം", d: "വിവാഹ മാംഗല്യ ദോഷ പരിഹാരം." },
    ta: { t: "மாங்கல்ய தோஷ நிவர்த்தி", d: "திருமண மாங்கல்ய தோஷ பரிகாரம்." }
  },
  {
    icon: "🔱",
    en: { t: "Mantrika Yantrika Sthapana Dosham Nivarti", d: "Remedies for mantra/yantra installation doshas." },
    ml: { t: "മാന്ത്രിക യന്ത്രിക സ്ഥാപന ദോഷ നിവാരണം", d: "മാന്ത്രിക യന്ത്രിക സ്ഥാപന ദോഷ പരിഹാരം." },
    ta: { t: "மந்திர யந்திர ஸ்தாபன தோஷ நிவர்த்தி", d: "மந்திர யந்திர நிறுவல் தோஷ பரிகாரம்." }
  },
  {
    icon: "📚",
    en: { t: "Vidhya Tadasa Karya Dosham Nivarti", d: "Remedies for education and career obstacles." },
    ml: { t: "വിദ്യാ തടസ്സ കാര്യ ദോഷ നിവാരണം", d: "വിദ്യാഭ്യാസ-ജോലി തടസ്സ ദോഷ പരിഹാരം." },
    ta: { t: "வித்யா தடை காரிய தோஷ நிவர்த்தி", d: "கல்வி-வேலை தடை தோஷ பரிகாரம்." }
  },
  {
    icon: "♻️",
    en: { t: "Iha Janma Purva Janma Papa Karma Dosham Nivarti", d: "Remedies for sins of this and previous births." },
    ml: { t: "ഇഹ ജന്മ പൂർവ ജന്മ പാപ കർമ ദോഷ നിവാരണം", d: "ഇഹ ജന്മ-പൂർവ ജന്മ പാപ കർമ ദോഷ പരിഹാരം." },
    ta: { t: "இஹ ஜன்ம பூர்வ ஜன்ம பாப கர்ம தோஷ நிவர்த்தி", d: "இந்த ஜென்ம-முன் ஜென்ம பாப கர்ம தோஷ பரிகாரம்." }
  },
  {
    icon: "🛡️",
    en: { t: "Sakala Abhichara Karma Verpaad Dosha Nivarti", d: "Remedies for all kinds of abhichara (black magic) doshas." },
    ml: { t: "സകല അഭിചാര കർമ വേർപാട് ദോഷ നിവാരണം", d: "എല്ലാ അഭിചാര കർമ ദോഷങ്ങൾക്കും പരിഹാരം." },
    ta: { t: "சகல அபிசார கர்ம வேர்ப்பாடு தோஷ நிவர்த்தி", d: "அனைத்து அபிசார கர்ம தோஷ பரிகாரம்." }
  }
];

/* ---------- 2. TRANSLATIONS ---------- */
const translations = {
  en: {
    nav_about: "About", nav_contact: "Contact", join_group: "Join Group",
    hero_title: "Brahmavidhya Astrology", hero_sub: "Vinu Shankar", hero_tag: "Sri VanaDurga Upasakan",
    call_now: "Call Now", consult: "Book Consultation",
    about_title: "About",
    about_intro: "Vinu Shankar, Sri VanaDurga Upasakan, performs Pariharam (remedies) through Jyotisha Vidhi (astrological methods) with the blessings of Shiva Shakti Sri VanaDurga for Sarwam Mangala Prapti.",
    contact_title: "Contact",
    form_name: "Name", form_mobile: "Mobile Number",
    form_note: "Note (What do you want to discuss?)",
    form_submit: "Submit",
    form_hint: "Your details will be sent to the astrologer on WhatsApp.",
    label_phone: "Phone:", label_email: "Email:", label_address: "Address:", label_group: "WhatsApp Group:",
    wa_msg: "New Consultation Request%0A%0AName: ",
    wa_mobile: "%0AMobile: ", wa_note: "%0ATopic: ",
    alert_fill: "Please fill all fields."
  },
  ml: {
    nav_about: "കുറിച്ച്", nav_contact: "ബന്ധപ്പെടുക", join_group: "ഗ്രൂപ്പിൽ ചേരുക",
    hero_title: "ബ്രഹ്മവിദ്യ ജ്യോതിഷം", hero_sub: "വിനു ശങ്കർ", hero_tag: "ശ്രീ വനദുർഗ ഉപാസകൻ",
    call_now: "വിളിക്കുക", consult: "കൺസൾട്ടേഷൻ ബുക്ക് ചെയ്യുക",
    about_title: "കുറിച്ച്",
    about_intro: "ജ്യോതിഷ വിധി പ്രകാരം സമസ്ത ദോഷ നിവാരണത്തിനായി ശിവ ശക്തി ശ്രീ വനദുർഗയുടെ അനുഗ്രഹത്തോടെ സർവ്വം മംഗല പ്രാപ്തിയോടെ വിനു ശങ്കർ പരിഹാരം ചെയ്യുന്നു.",
    contact_title: "ബന്ധപ്പെടുക",
    form_name: "പേര്", form_mobile: "മൊബൈൽ നമ്പർ",
    form_note: "കുറിപ്പ് (എന്തിനെക്കുറിച്ചാണ് സംസാരിക്കേണ്ടത്?)",
    form_submit: "സമർപ്പിക്കുക",
    form_hint: "നിങ്ങളുടെ വിവരങ്ങൾ ജ്യോതിഷിയുടെ വാട്ട്‌സ്ആപ്പിലേക്ക് അയക്കും.",
    label_phone: "ഫോൺ:", label_email: "ഇമെയിൽ:", label_address: "വിലാസം:", label_group: "വാട്ട്‌സ്ആപ്പ് ഗ്രൂപ്പ്:",
    wa_msg: "പുതിയ കൺസൾട്ടേഷൻ അഭ്യർത്ഥന%0A%0Aപേര്: ",
    wa_mobile: "%0AMൊബൈൽ: ", wa_note: "%0Aവിഷയം: ",
    alert_fill: "എല്ലാ ഫീൽഡുകളും പൂരിപ്പിക്കുക."
  },
  ta: {
    nav_about: "பற்றி", nav_contact: "தொடர்பு", join_group: "குழுவில் சேர",
    hero_title: "பிரம்மவித்யா ஜோதிடம்", hero_sub: "வினு சங்கர்", hero_tag: "ஸ்ரீ வனதுர்கா உபாசகர்",
    call_now: "அழைக்க", consult: "ஆலோசனை பதிவு",
    about_title: "பற்றி",
    about_intro: "ஜோதிட விதிப்படி அனைத்து தோஷ நிவர்த்திக்காக சிவ சக்தி ஸ்ரீ வனதுர்காவின் ஆசியுடன் வினு சங்கர் பரிகாரம் செய்கிறார்.",
    contact_title: "தொடர்பு",
    form_name: "பெயர்", form_mobile: "மொபைல் எண்",
    form_note: "குறிப்பு (எதைப் பற்றி பேச வேண்டும்?)",
    form_submit: "சமர்ப்பிக்க",
    form_hint: "உங்கள் விவரங்கள் ஜோதிடரின் வாட்ஸ்அப்பிற்கு அனுப்பப்படும்.",
    label_phone: "தொலைபேசி:", label_email: "மின்னஞ்சல்:", label_address: "முகவரி:", label_group: "வாட்ஸ்அப் குழு:",
    wa_msg: "புதிய ஆலோசனை கோரிக்கை%0A%0Aபெயர்: ",
    wa_mobile: "%0AMொபைல்: ", wa_note: "%0Aதலைப்பு: ",
    alert_fill: "அனைத்து புலங்களையும் நிரப்பவும்."
  }
};

/* ---------- 3. RENDER DOSHA CARDS ---------- */
const doshaGrid = document.getElementById("doshaGrid");

function renderDoshaCards(lang){
  doshaGrid.innerHTML = "";
  doshaData.forEach((item, i) => {
    const data = item[lang] || item.en;
    const card = document.createElement("div");
    card.className = "dosha-card";
    card.innerHTML = `
      <div class="dosha-icon">${item.icon}</div>
      <div class="dosha-text">
        <h3>${data.t}</h3>
        <p>${data.d}</p>
      </div>
    `;
    doshaGrid.appendChild(card);
    setTimeout(() => card.classList.add("show"), 60 * i);
  });
}

/* ---------- 4. APPLY TRANSLATIONS ---------- */
function applyLanguage(lang){
  const t = translations[lang] || translations.en;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key]) el.textContent = t[key];
  });
  renderDoshaCards(lang);
  document.documentElement.lang = lang;
  localStorage.setItem("bv_lang", lang);
}

/* ---------- 5. LANGUAGE SWITCHER ---------- */
const langBtn = document.getElementById("langBtn");
const langMenu = document.getElementById("langMenu");
const langLabel = document.getElementById("langLabel");
const langNames = { en: "English", ml: "മലയാളം", ta: "தமிழ்" };

langBtn.addEventListener("click", (e) => {
  e.stopPropagation();
  const open = langMenu.classList.toggle("open");
  langBtn.setAttribute("aria-expanded", open);
});

langMenu.querySelectorAll("li").forEach(li => {
  li.addEventListener("click", () => {
    const lang = li.getAttribute("data-lang");
    langLabel.textContent = langNames[lang];
    applyLanguage(lang);
    langMenu.classList.remove("open");
    langBtn.setAttribute("aria-expanded", "false");
  });
});

document.addEventListener("click", () => {
  langMenu.classList.remove("open");
  langBtn.setAttribute("aria-expanded", "false");
});

/* ---------- 6. CONTACT FORM → WHATSAPP ---------- */
const form = document.getElementById("contactForm");
const WA_NUMBER = "917592857909";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const lang = localStorage.getItem("bv_lang") || "en";
  const t = translations[lang] || translations.en;

  const name = document.getElementById("name").value.trim();
  const mobile = document.getElementById("mobile").value.trim();
  const note = document.getElementById("note").value.trim();

  if (!name || !mobile || !note){
    alert(t.alert_fill);
    return;
  }

  const message =
    t.wa_msg + encodeURIComponent(name) +
    t.wa_mobile + encodeURIComponent(mobile) +
    t.wa_note + encodeURIComponent(note);

  window.open(`https://wa.me/${WA_NUMBER}?text=${message}`, "_blank");
  form.reset();
});

/* ---------- 7. SCROLL REVEAL ---------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add("show");
  });
}, { threshold: 0.12 });

function observeCards(){
  document.querySelectorAll(".dosha-card").forEach(c => observer.observe(c));
}

/* ---------- 8. MOBILE MENU TOGGLE ---------- */
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav){
  menuToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    const open = mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active", open);
    menuToggle.setAttribute("aria-expanded", open);
  });

  mainNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (e) => {
    if (!mainNav.contains(e.target) && !menuToggle.contains(e.target)){
      mainNav.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

/* ---------- 9. INIT ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("bv_lang") || "en";
  langLabel.textContent = langNames[savedLang];
  applyLanguage(savedLang);
  setTimeout(observeCards, 200);
});
