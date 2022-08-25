import Vue from "vue";
import VueRouter from "vue-router";
import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
// import HomeView from "@/pages/HomeView.vue";
import DashBoard from "@/pages/DashBoard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Icons from "@/pages/Icons.vue";
import TableList from "@/pages/TableList.vue";
import Typography from "@/pages/Typography.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import UpgradeToPRO from "@/pages/UpgradeToPRO.vue";
Vue.use(VueRouter);

const routes = [{
        path: "/",
        component: DashboardLayout,
        // redirenct: "/dashboard",
        redirect: "/dashboard",
        children: [{
                path: "/Dashboard",
                name: "DASHBOARD",
                component: DashBoard,
            },
            {
                path: "/User",
                name: "USERPROFILE",
                component: UserProfile,
            },
            {
                path: "/Table",
                name: "TABLELIST",
                component: TableList,
            },
            {
                path: "/Typography",
                name: "TYPOGRAPHY",
                component: Typography,
            },
            {
                path: "/Icons",
                name: "ICONS",
                component: Icons,
            },
            {
                path: "/Maps",
                name: "MAPS",
                meta: {
                    hideFooter: true,
                },
                component: Maps,
            },
            {
                path: "/Notifications",
                name: "NOTIFICATIONS",
                component: Notifications,
            },
            {
                path: "/Upgrade",
                name: "UPGRADETOPRO",
                component: UpgradeToPRO,
            },
        ]
    },

];




// const routes = [{
//         path: "/",
//         name: "homeview",
//         component: HomeView,
//     },
//     {
//         path: "/DashboardLayout",
//         name: "DashboardLayout",
//         component: DashboardLayout,
//     },
//     {
//         path: "/Dashboard",
//         name: "DASHBOARD",
//         component: DashBoard,
//     },
//     {
//         path: "/User",
//         name: "USERPROFILE",
//         component: UserProfile,
//     },
//     {
//         path: "/Table",
//         name: "TABLELIST",
//         component: TableList,
//     },
//     {
//         path: "/Typography",
//         name: "TYPOGRAPHY",
//         component: Typography,
//     },
//     {
//         path: "/Icons",
//         name: "ICONS",
//         component: Icons,
//     },
//     {
//         path: "/Maps",
//         name: "MAPS",
//         meta: {
//             hideFooter: true,
//         },
//         component: Maps,
//     },
//     {
//         path: "/Notifications",
//         name: "NOTIFICATIONS",
//         component: Notifications,
//     },
//     {
//         path: "/Upgrade",
//         name: "UPGRADETOPRO",
//         component: UpgradeToPRO,
//     },

// ];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;