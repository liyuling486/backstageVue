import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        menus: [
            {
                menuId: '1',
                name: '数据对比',
                subMenus: [
                    {
                        menuId: '1-1',
                        name: '分析页',
                        menuUrl: '/analysis'
                    },
                    {
                        menuId: '1-2',
                        name: '工作台',
                        menuUrl: '/work'
                    }
                ]
            }
        ]
    }
})