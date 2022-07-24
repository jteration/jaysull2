<template>
  <section id="blog">
    <h1>{{ $t("pages.Blog.pageTitle") }}</h1>
    <div id="blog-content">
      <nav id="blog-nav">
        <h2>Articles</h2>
        <ol>
          <li><router-link to="/blog/July4th2022">July4th2022</router-link></li>
          <li><router-link to="/blog/July5th2022">July5th2022</router-link></li>
          <li>
            <router-link to="/blog/things">{{ $t("pages.Things.pageTitle") }}</router-link>
          </li>
        </ol>
      </nav>
      <article id="blog-article">
        <router-view></router-view>
      </article>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BlogPage"
});
</script>

<style scoped lang="scss">
#blog {
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  #blog-content {
    height: calc(100% - 80px);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    #blog-nav {
      height: 100%;
      width: clamp(200px, 20%, 300px);
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;

      ol {
        padding-left: 24px;

        li {
          margin-bottom: 5px;
        }
      }
    }

    #blog-article {
      height: 100%;
      width: 100%;
      overflow-y: scroll;
      padding-right: 64px;
    }
  }
}
</style>
