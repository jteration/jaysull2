<template>
  <div>
    <label for="localeSelect">{{ $t("components.LocalePicker.localeLabel") }}</label>
    <select id="localeSelect" :value="locale" @change="localeSelection">
      <option v-for="loc in locales" :key="loc" :value="loc">
        {{ $t(`locales.${loc}`) }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
  name: "LocalePicker",
  setup() {
    const i18n = useI18n();
    const locales = i18n.availableLocales;
    const locale = ref(i18n.locale);
    const storedLocale = localStorage.getItem("LocalePicker.locale");

    if (storedLocale) {
      setLocale(storedLocale);
    }

    function setLocale(newLocale: string) {
      i18n.locale.value = newLocale;
      document.documentElement.lang = newLocale;
      localStorage.setItem("LocalePicker.locale", newLocale);
    }

    function localeSelection(e: Event) {
      const currentTarget = e.currentTarget as HTMLSelectElement;

      if (locales.includes(currentTarget.value)) {
        setLocale(currentTarget.value);
      }
    }

    return { locale, locales, setLocale, localeSelection };
  }
});
</script>
