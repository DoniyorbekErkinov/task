import i18n from "@/locales/i18n";
const { locale } = i18n.global;


const Util = {
    localeKey(key = "name") {
        if (locale.value === 'ru') {
            return key + "Ru";
        }
        if (locale.value === 'en') {
            return key + "En";
        }
        if (locale.value === 'uz') {
            return key + "Uz";
        }
        return '';
    },
    toLanguage(object, prefix = 'Name', emptyValue = '') {
        if (!object) {
            return emptyValue;
        }
        const nameUz = object[`${prefix}Uz`] ?? null;
        const nameRu = object[`${prefix}Ru`] ?? null;
        const nameEn = object[`${prefix}En`] ?? null;
        switch (i18n.global.locale) {
            case 'uz':
                return nameUz ?? emptyValue;
            case 'ru':
                return nameRu ?? emptyValue;
            case 'en':
                return nameEn ?? emptyValue;
            default:
                return (nameUz ?? nameRu ?? nameEn) || emptyValue;
        }
    },
    htmlToText: (value) => {
        const div = document.createElement('div')
        div.innerHTML = value
        let text = ''
        if(div){
            text = div.textContent || div.innerText || ''
        }
        return text
    },
}
export default Util;
