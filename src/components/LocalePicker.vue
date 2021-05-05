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
import { defineComponent } from "vue";

export default defineComponent({
	name: "LocalePicker",
	data() {
		return {
			locales: this.$i18n.availableLocales
		};
	},
	computed: {
		locale() {
			return this.$i18n.locale;
		}
	},
	mounted() {
		const locale = localStorage.getItem("LocalePicker.locale");

		if (locale) {
			this.setLocale(locale);
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
				this.$root.$i18n.locale = locale;
			}

			document.documentElement.lang = locale;
			localStorage.setItem("LocalePicker.locale", locale);
		}
	}
});
</script>
