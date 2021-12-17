<template>
	<section id="career">
		<h1>{{ $t("pages.Experience.heading") }}</h1>
		<br />
		<h2>Red Violet ({{ $t("pages.Experience.current") }})</h2>
		<a
			href="https://www.redviolet.com/"
			rel="noopener noreferrer"
			target="_blank"
			>Website</a
		>
		<p>
			{{ $t("pages.Experience.title") }} -
			{{ $t("pages.Experience.fullstackSoftwareDevelopmentEngineer") }}
		</p>
		<p>{{ $t("pages.Experience.withTheCompanyFor") }} {{ timeSpent }}</p>
		<br />
		<h2>Omnitracs</h2>
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
		<p>
			{{ $t("pages.Experience.withTheCompanyFor") }} 2
			{{ $t("pages.Experience.years") }}, 5 {{ $t("pages.Experience.months") }},
			{{ $t("pages.Experience.and") }} 9 {{ $t("pages.Experience.days") }}
		</p>
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
import { defineComponent } from "vue";
import { useI18n } from "vue-i18n";
import { getTimeSpent } from "@/utils/time-spent";

export default defineComponent({
	name: "Experience",
	setup() {
		const start = new Date("2021-12-13T08:00:00-0600");
		const { t } = useI18n();
		const timeSpent = getTimeSpent(start, t);

		return { timeSpent };
	}
});
</script>
