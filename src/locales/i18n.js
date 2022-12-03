import { createI18n } from 'vue-i18n'
import { locale as uz } from "./uz.js";
import { locale as ru } from "./ru.js";
import { locale as en } from "./en.js";

let messages = {};
messages = { ...messages, uz, ru, en };

const lang = localStorage.getItem("language") || "uz";

const i18n = createI18n({
    legacy: false,
    locale: lang,
    messages: messages,
    missing: (locale, message, messages) => {
        const messageMap = message.split('.');
        let outMessage = uz;
        let outLtMessage = uz;
        switch (locale) {
            case 'en':
                outMessage = en;
                break;
            case 'ru':
                outMessage = ru;
                break;
            case 'uz':
                outMessage = uz;
                break;
        }
        for (const x of messageMap) {
            outMessage = outMessage[x] ?? '';
            outLtMessage = outLtMessage[x] ?? '';
        }
        return outMessage || message;
    },
    silentTranslationWarn: true
});

export default i18n;
