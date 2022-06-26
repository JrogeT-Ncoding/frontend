import {createStore} from "vuex";
import courseModule from "@/store/courses";
import authModule from "@/store/auth";

const store = createStore({
    modules: {
        courses: courseModule,
        auth: authModule,
    }
})

export default store;