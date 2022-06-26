const authModule = {
    state:{
        isAuthenticated: false,
    },
    getters: {
        isAuthenticated: state => state.isAuthenticated,
    },
    mutations:{
        setAuthenticated(state, isAuthenticated){
            state.isAuthenticated = isAuthenticated;
        }
    },
    actions:{
        authenticate({commit}){
            setTimeout(() => {
                commit('setAuthenticated', true);
            }, 1000);
        },
        unauthenticate({commit}){
            setTimeout(() => {
                commit('setAuthenticated', false);
            }, 1000);
        }
    }
}

export default authModule;