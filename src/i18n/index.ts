import { createI18n } from "vue-i18n";
import messages from "./messages.json";

export default createI18n({
	locale: "en", // set locale
	fallbackLocale: "en", // set fallback locale
	messages
});
