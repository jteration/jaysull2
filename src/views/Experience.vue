<template>
	<section id="career">
		<h1>{{ $t("pages.Experience.heading") }}</h1>
		<br />
		<h2>Omnitracs ({{ $t("pages.Experience.current") }})</h2>
		<a
			href="https://www.omnitracs.com/"
			rel="noopener noreferrer"
			target="_blank"
			>Website</a
		>
		<p>
			{{ $t("pages.Experience.title") }} -
			{{ $t("pages.Experience.seniorSoftwareEngineer") }}
		</p>
		<p>{{ $t("pages.Experience.withTheCompanyFor") }} {{ timeSpent }}</p>
		<br />
		<h2>IHS Markit</h2>
		<a
			href="https://www.ihsmarkit.com/"
			rel="noopener noreferrer"
			target="_blank"
			>Website</a
		>
		<p>
			{{ $t("pages.Experience.title") }} -
			{{ $t("pages.Experience.softwareEngineer") }}
		</p>
		<p>
			{{ $t("pages.Experience.withTheCompanyFor") }} 1
			{{ $t("pages.Experience.year") }}, 0 {{ $t("pages.Experience.months") }},
			{{ $t("pages.Experience.and") }} 0 {{ $t("pages.Experience.days") }}
		</p>
		<br />
		<h2>Fennec Industries Llc</h2>
		<p>
			{{ $t("pages.Experience.title") }} - Grand High Poobah De Doink of Web
			Development
		</p>
		<p>
			{{ $t("pages.Experience.withTheCompanyFor") }} 1
			{{ $t("pages.Experience.year") }}, 1 {{ $t("pages.Experience.month") }},
			{{ $t("pages.Experience.and") }} 0 {{ $t("pages.Experience.days") }}
		</p>
	</section>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useI18n } from "vue-i18n";

export default defineComponent({
	name: "Experience",
	setup() {
		const msInDay = 86400000;
		const start = new Date("2019-07-08T08:00:00-0700");
		const now = new Date();
		const diff = now.getTime() - start.getTime();
		const years = Math.floor(diff / (86400000 * 365));
		const diffMinusYears = diff - years * (86400000 * 365);
		const months = Math.floor(diffMinusYears / (msInDay * 30));
		const diffMinusYearsAndMonths = diffMinusYears - months * (msInDay * 30);
		const days = Math.floor(diffMinusYearsAndMonths / msInDay);

		const { t } = useI18n();

		const timeSpent = computed(() => {
			return `${years} ${
				years > 1 ? t("pages.Experience.years") : t("pages.Experience.year")
			}, ${months} ${
				months > 1 ? t("pages.Experience.months") : t("pages.Experience.month")
			}, ${t("pages.Experience.and")} ${days} ${
				days > 1 ? t("pages.Experience.days") : t("pages.Experience.day")
			}`;
		});

		return { timeSpent };
	}
});
</script>
