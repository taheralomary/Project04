
const languageButton = document.getElementById("languageToggle");

const translations = {
    en: {
        pageTitle: "Taher Al-Omari | Portfolio",
        languageButton: "العربية",
        languageButtonLabel: "Switch to Arabic",

        navAbout: "About",
        navSkills: "Skills",
        navProjects: "Projects",
        navHobbies: "Hobbies",
        navContact: "Contact",

        heroEyebrow: "CYBERSECURITY PORTFOLIO",
        heroTitle: "Hello, I'm Taher.",
        heroDescription:
            "Cybersecurity graduate interested in security operations, threat detection, and web development.",
        heroButton: "Explore My Projects",

        aboutEyebrow: "01 · ABOUT ME",
        aboutTitle: "A little about me.",
        aboutSubtitle: "Cybersecurity Graduate",
        aboutText:
            "I graduated with a degree in Cybersecurity from Zarqa University. I have practical experience with SIEM tools, security monitoring, and investigating security alerts. I also enjoy building projects that combine security and technology.",
        profileAlt: "Portrait of Taher",

        skillsEyebrow: "02 · SKILLS",
        skillsTitle: "Tools I work with.",
        skillCyber: "Cybersecurity",
        skillNetworking: "Networking",
        skillProgramming: "Programming",
        skillWeb: "Web Development",

        projectsEyebrow: "03 · PROJECT SHOWCASE",
        projectsTitle: "Projects I've built.",
        project1Title: "Access Guard",
        project1Text:
            "A file integrity monitoring system built with C#, ASP.NET Core MVC, and SQL Server, using SHA-256 hashing and AES-256 encryption.",
        project2Title: "Wazuh SIEM Home Lab",
        project2Text:
            "A security monitoring lab for collecting endpoint logs, monitoring alerts, and investigating activity across Windows and Linux.",
        project3Title: "Advanced SOC Home Lab",
        project3Text:
            "A hands-on environment for practicing log analysis, threat detection, security alert monitoring, and incident investigation.",

        hobbiesEyebrow: "04 · HOBBIES",
        hobbiesTitle: "Things I enjoy.",
        hobby1: "Learning new technologies",
        hobby2: "Cybersecurity challenges",
        hobby3: "Fitness and working out",
        hobby4: "Building personal projects",

        contactEyebrow: "05 · CONTACT",
        contactTitle: "Let's connect.",
        contactText:
            "Have a question or an opportunity? Feel free to reach out.",
        contactButton: "Send Me an Email",

        footerText:
            "© 2026 Taher Al-Omari. Built with HTML, CSS, and JavaScript."
    },

    ar: {
        pageTitle: "طاهر العمري | الملف الشخصي",
        languageButton: "English",
        languageButtonLabel: "التبديل إلى الإنجليزية",

        navAbout: "نبذة عني",
        navSkills: "المهارات",
        navProjects: "المشاريع",
        navHobbies: "الهوايات",
        navContact: "تواصل معي",

        heroEyebrow: "معرض أعمال الأمن السيبراني",
        heroTitle: "مرحباً، أنا طاهر.",
        heroDescription:
            "خريج أمن سيبراني مهتم بالعمليات الأمنية واكتشاف التهديدات وتطوير الويب.",
        heroButton: "استكشف مشاريعي",

        aboutEyebrow: "01 · نبذة عني",
        aboutTitle: "تعرف عليّ.",
        aboutSubtitle: "خريج أمن سيبراني",
        aboutText:
            "تخرجت في تخصص الأمن السيبراني من جامعة الزرقاء. لدي خبرة عملية في أدوات إدارة المعلومات والأحداث الأمنية (SIEM)، ومراقبة الأنظمة الأمنية، والتحقيق في التنبيهات الأمنية. كما أستمتع ببناء مشاريع تجمع بين الأمن والتكنولوجيا.",
        profileAlt: "صورة شخصية لطاهر",

        skillsEyebrow: "02 · المهارات",
        skillsTitle: "الأدوات والتقنيات التي أستخدمها.",
        skillCyber: "الأمن السيبراني",
        skillNetworking: "الشبكات",
        skillProgramming: "البرمجة",
        skillWeb: "تطوير الويب",

        projectsEyebrow: "03 · معرض المشاريع",
        projectsTitle: "المشاريع التي أنجزتها.",
        project1Title: "أكسس غارد (Access Guard)",
        project1Text:
            "نظام لمراقبة سلامة الملفات، تم تطويره باستخدام C# وASP.NET Core MVC وSQL Server، مع استخدام خوارزمية SHA-256 للتحقق من سلامة الملفات وتشفير AES-256.",
        project2Title: "مختبر Wazuh SIEM",
        project2Text:
            "مختبر لمراقبة الأمن السيبراني وجمع سجلات الأجهزة ومتابعة التنبيهات والتحقيق في الأنشطة على أنظمة Windows وLinux.",
        project3Title: "مختبر عمليات أمنية متقدم (SOC)",
        project3Text:
            "بيئة عملية للتدرب على تحليل السجلات واكتشاف التهديدات ومراقبة التنبيهات الأمنية والتحقيق في الحوادث.",

        hobbiesEyebrow: "04 · الهوايات",
        hobbiesTitle: "الأشياء التي أستمتع بها.",
        hobby1: "تعلم التقنيات الجديدة",
        hobby2: "تحديات الأمن السيبراني",
        hobby3: "اللياقة البدنية والتمارين الرياضية",
        hobby4: "تطوير المشاريع الشخصية",

        contactEyebrow: "05 · التواصل",
        contactTitle: "لنتواصل معاً.",
        contactText:
            "هل لديك سؤال أو فرصة؟ يسعدني أن تتواصل معي.",
        contactButton: "راسلني عبر البريد الإلكتروني",

        footerText:
            "© 2026 طاهر العمري. تم إنشاء الموقع باستخدام HTML وCSS وJavaScript."
    }
};

let currentLanguage = "en";

function changeLanguage(language) {
    const text = translations[language];

    // Update the page's language and reading direction.
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

    // Update all translated elements.
    document.querySelectorAll("[data-i18n]").forEach(function (element) {
        const key = element.dataset.i18n;

        if (text[key] !== undefined) {
            element.textContent = text[key];
        }
    });

    // Update translated image descriptions.
    document.querySelectorAll("[data-i18n-alt]").forEach(function (element) {
        const key = element.dataset.i18nAlt;

        if (text[key] !== undefined) {
            element.alt = text[key];
        }
    });

    // Update the browser tab title.
    document.title = text.pageTitle;

    // Update the language button.
    languageButton.textContent = text.languageButton;
    languageButton.setAttribute(
        "aria-label",
        text.languageButtonLabel
    );

    currentLanguage = language;
}

languageButton.addEventListener("click", function () {
    const nextLanguage = currentLanguage === "en" ? "ar" : "en";

    changeLanguage(nextLanguage);
});
