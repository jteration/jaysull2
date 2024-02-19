import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Experience from "@/views/Experience.vue";
import Contact from "@/views/Contact.vue";
import Things from "@/views/Things.vue";
import Links from "@/views/Links.vue";
import Blog from "@/views/Blog.vue";
import July4th2022 from "@/components/BlogPosts/July4th2022.vue";
import July5th2022 from "@/components/BlogPosts/July5th2022.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact
  },
  {
    path: "/things",
    name: "Things",
    component: Things
  },
  {
    path: "/links",
    name: "Links",
    component: Links
  },
  {
    path: "/blog",
    name: "Blog",
    component: Blog,
    children: [
      {
        path: "",
        name: "BlogDefault",
        component: July4th2022
      },
      {
        path: "July4th2022",
        component: July4th2022
      },
      {
        path: "July5th2022",
        component: July5th2022
      },
      {
        path: ":pathMatch(.*)*",
        redirect: { name: "Blog" }
      }
    ]
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "Home" }
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
