<template>
	<div class="themes">
		<label for="themeSelect">{{
			$t("components.ThemePicker.themeLabel")
		}}</label>
		<select id="themeSelect" :value="theme" @change="handleThemeChange">
			<option v-for="theme in themes" :key="theme" :value="theme">
				{{ $t(`components.ThemePicker.${theme}`) }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useStore, MutationTypes } from "@/store";

export default defineComponent({
	name: "ThemePicker",
	setup() {
		const store = useStore();
		const themes = computed(() => store.state.ui.themes);
		const theme = computed(() => store.state.ui.theme);

		function handleThemeChange(e: Event) {
			const currentTarget = e.currentTarget as HTMLSelectElement;

			store.commit(MutationTypes.UI.SetTheme, currentTarget.value);
		}

		return { themes, theme, handleThemeChange };
	}
});
</script>
