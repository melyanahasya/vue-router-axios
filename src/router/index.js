// import { createRouter, createWebHistory, RouterLink } from "vue-router";
import PesawaT from "../view/Pesawat.vue";
import MotoR from "../view/Motor.vue";
import MobiL from "../view/Mobil.vue";
import KapaL from "../view/Kapal.vue";
import BuS from "../view/Bus.vue";
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = [
    {
        path: "/",
        name: "pesawat",
        component: PesawaT,
    },
    {
        path: "/motor",
        name: "motor",
        component: MotoR,
    },
    {
        path: "/mobil",
        name: "mobil",
        component: MobiL,
    },
    {
        path: "/kapal",
        name: "kapal",
        component: KapaL,
    },
    {
        path: "/bus",
        name: "bus",
        component: BuS,
    },

];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

const router = new Router({
    routes,
    mode: "history",
});

export default router;