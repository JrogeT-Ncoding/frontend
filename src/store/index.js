import {createStore} from "vuex";
import courseModule from "@/store/courses";
import authModule from "@/store/auth";

const store = createStore({
    modules: {
        courses: courseModule,
        auth: authModule,
    },
    mutations: {
        initialiseStore(state) {
            if(localStorage.getItem('store')) {
                this.replaceState(
                    Object.assign(state, JSON.parse(localStorage.getItem('store')))
                );
            }
        }
    }
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state));
});

export default store;