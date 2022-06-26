import axios from "axios";

const authModule = {
    state:{
        isAuthenticated: false,
        user: {},
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
        user: state => state.user,
    },
    mutations:{
        setAuthenticated(state, isAuthenticated){
            state.isAuthenticated = isAuthenticated;
        },
        setUser(state, user){
            let date = new Date(user.birthDate)
            user.birthDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();
            state.user = user;
        }
    },
    actions:{
        login({commit}, user){
            axios.post('http://localhost:8080/api/auth/login', user)
                .then((response) => {
                    commit('setUser', response.data.data);
                    commit('setAuthenticated', true);
                })
        },
        register({commit}){
            axios.post('http://localhost:8080/api/auth/register')
                .then(() => {
                    commit('setAuthenticated', true);
                })
        },
        logout({commit}){
            commit('setAuthenticated', false);
        },
        updateUser({commit, state}, user){
            user = {...state.user, ...user};
            axios.put('http://localhost:8080/api/users/' + user.id, user)
                .then((response) => {
                    commit('setUser', response.data.data);
                })
        }
    }
}

export default authModule;