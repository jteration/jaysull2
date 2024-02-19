<template>
  <section id="links">
    <h1>{{ $t("pages.Links.pageTitle") }}</h1>
    <div class="youtube-links">
      <h2>{{ $t("pages.Links.youtube") }}</h2>
      <div class="youtube-category" v-for="category in youtubeChannels" :key="category.category">
        <h3>{{ $t(`pages.Links.${category.category}`) }}</h3>
        <div class="youtube-link" v-for="channel in category.channels" :key="channel.channel">
          <a :href="channel.channel" rel="noopener noreferrer" target="_blank">{{ channel.channel }}</a>
          <div class="description">{{ $t(channel.description) }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LinksPage",
  setup() {
    const youtubeChannels = [
      {
        category: "cooking",
        channels: [
          {
            channel: "https://www.youtube.com/@jameshoffmann",
            description: "pages.Links.descriptions.jamesHoffman"
          },
          {
            channel: "https://www.youtube.com/@FrenchGuyCooking",
            description: "pages.Links.descriptions.alex"
          },
          {
            channel: "https://www.youtube.com/@townsends",
            description: "pages.Links.descriptions.townsends"
          },
          {
            channel: "https://www.youtube.com/@aragusea",
            description: "pages.Links.descriptions.ragusea"
          },
          {
            channel: "https://www.youtube.com/@Steve1989MRE",
            description: "pages.Links.descriptions.steve"
          },
          {
            channel: "https://www.youtube.com/@ChilliChump",
            description: "pages.Links.descriptions.chilliChump"
          }
        ]
      },
      {
        category: "scienceAndTech",
        channels: [
          {
            channel: "https://www.youtube.com/@Asianometry",
            description: "pages.Links.descriptions.asianometry"
          },
          {
            channel: "https://www.youtube.com/@tested",
            description: "pages.Links.descriptions.tested"
          },
          {
            channel: "https://www.youtube.com/@GamersNexus",
            description: "pages.Links.descriptions.gamersNexus"
          },
          {
            channel: "https://www.youtube.com/@thelimitingfactor",
            description: "pages.Links.descriptions.limitingFactor"
          },
          {
            channel: "https://www.youtube.com/@pbsspacetime",
            description: "pages.Links.descriptions.pbsSpacetime"
          },
          {
            channel: "https://www.youtube.com/@PracticalEngineeringChannel",
            description: "pages.Links.descriptions.practicalEngineering"
          },
          {
            channel: "https://www.youtube.com/@theCodyReeder",
            description: "pages.Links.descriptions.codysLab"
          },
          {
            channel: "https://www.youtube.com/@ScienceAsylum",
            description: "pages.Links.descriptions.scienceAsylum"
          },
          {
            channel: "https://www.youtube.com/@whatdamath",
            description: "pages.Links.descriptions.anton"
          },
          {
            channel: "https://www.youtube.com/@smartereveryday",
            description: "pages.Links.descriptions.smarter"
          },
          {
            channel: "https://www.youtube.com/@FranLab",
            description: "pages.Links.descriptions.franLab"
          },
          {
            channel: "https://www.youtube.com/@TechIngredients",
            description: "pages.Links.descriptions.techIngredients"
          },
          {
            channel: "https://www.youtube.com/@JeffGeerling",
            description: "pages.Links.descriptions.jeffGeerling"
          },
          {
            channel: "https://www.youtube.com/@NileRed",
            description: "pages.Links.descriptions.nileRed"
          },
          {
            channel: "https://www.youtube.com/@Mathologer",
            description: "pages.Links.descriptions.mathologer"
          },
          {
            channel: "https://www.youtube.com/@Bisqwit",
            description: "pages.Links.descriptions.bisqwit"
          },
          {
            channel: "https://www.youtube.com/@ClimateTown",
            description: "pages.Links.descriptions.climateTown"
          },
          {
            channel: "https://www.youtube.com/@TechnologyConnections",
            description: "pages.Links.descriptions.technologyConnections"
          },
          {
            channel: "https://www.youtube.com/@HuygensOptics",
            description: "pages.Links.descriptions.huygensOptics"
          },
          {
            channel: "https://www.youtube.com/@BreakingTaps",
            description: "pages.Links.descriptions.breakingTaps"
          },
          {
            channel: "https://www.youtube.com/@AlphaPhoenixChannel",
            description: "pages.Links.descriptions.alphaPhoenixChannel"
          },
          {
            channel: "https://www.youtube.com/@Ididathing",
            description: "pages.Links.descriptions.iDidAThing"
          },
          {
            channel: "https://www.youtube.com/@periodicvideos",
            description: "pages.Links.descriptions.periodicVideos"
          },
          {
            channel: "https://www.youtube.com/@AtomicFrontier",
            description: "pages.Links.descriptions.atomicFrontier"
          },
          {
            channel: "https://www.youtube.com/@ModernKnight",
            description: "pages.Links.descriptions.modernKnight"
          },
          {
            channel: "https://www.youtube.com/@AppliedScience",
            description: "pages.Links.descriptions.appliedScience"
          },
          {
            channel: "https://www.youtube.com/@CaptainDisillusion",
            description: "pages.Links.descriptions.captainDisillusion"
          },
          {
            channel: "https://www.youtube.com/@HandToolRescue",
            description: "pages.Links.descriptions.handToolRescue"
          }
        ]
      }
    ];

    return { youtubeChannels };
  }
});
</script>

<style lang="scss">
#links {
  .youtube-links {
    .youtube-link {
      margin-bottom: 6px;

      .description {
        margin-top: 3px;
        width: 66%;
      }
    }
  }
}
</style>
