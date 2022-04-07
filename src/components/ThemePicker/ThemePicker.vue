<template>
	<div class="themes">
		<label for="themeSelect">{{
			$t("components.ThemePicker.themeLabel")
		}}</label>
		<select id="themeSelect" :value="uiStore.theme" @change="handleThemeChange">
			<option v-for="theme in uiStore.themes" :key="theme" :value="theme">
				{{ $t(`components.ThemePicker.${theme}`) }}
			</option>
		</select>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useUiStore } from "@/store/ui";

export default defineComponent({
	name: "ThemePicker",
	setup() {
		const uiStore = useUiStore();

		function handleThemeChange(e: Event) {
			const currentTarget = e.currentTarget as HTMLSelectElement;
			uiStore.setTheme(currentTarget.value);
		}

		return { uiStore, handleThemeChange };
	}
});
</script>
