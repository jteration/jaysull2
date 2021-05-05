import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Experience from "../views/Experience.vue";

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
	// {
	//   path: "/contact",
	//   name: "Contact",
	//   component: Contact,
	// },

	// {
	//   path: "/things",
	//   name: "Things",
	//   component: Things,
	// },
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
