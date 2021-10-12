import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
    // 公共路由
export const constantRoutes = [{
        path: '/index',
        component: (resolve) => require(['@/views/index'], resolve),
    }, {
        path: '/redirect/:path(.*)',
        component: (resolve) => require(['@/views/redirect'], resolve)
    },
    {
        path: '/login',
        component: (resolve) => require(['@/views/login'], resolve),
        hidden: true
    }, { path: '*', redirect: '/index' }
]

export default new Router({
    // mode: 'history', // 去掉url中的#
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
})