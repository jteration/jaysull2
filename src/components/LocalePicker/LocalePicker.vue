<template>
	<div>
		<label for="localeSelect">{{
			$t("components.LocalePicker.localeLabel")
		}}</label>
		<select id="localeSelect" :value="locale" @change="localeSelection">
			<option v-for="loc in locales" :key="loc" :value="loc">
				{{ $t(`locales.${loc}`) }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from "vue";

export default defineComponent({
	name: "LocalePicker",
	setup() {
		const locales: Ref<string[]> = ref(["en", "es"]);
		const locale: Ref<string> = ref("en");

		return { locale, locales };
	},
	mounted() {
		this.locales = this.$i18n.availableLocales;
		const locale = localStorage.getItem("LocalePicker.locale");

		if (locale) {
			this.setLocale(locale);
		} else {
			this.locale = this.$i18n.locale;
		}
	},
	methods: {
		localeSelection(e: Event) {
			const currentTarget = e.currentTarget as HTMLSelectElement;

			if (this.locales.includes(currentTarget.value)) {
				this.setLocale(currentTarget.value);
			}
		},
		setLocale(locale: string) {
			if (this.$root) {
				this.locale = locale;
				this.$root.$i18n.locale = locale;
				document.documentElement.lang = locale;
				localStorage.setItem("LocalePicker.locale", locale);
			}
		}
	}
});
</script>
