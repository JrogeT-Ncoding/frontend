import axios from "axios";

const courseModule = {
    state:{
        courses: [],
        myCourses: [],
        courseToEnroll: {},
    },
    getters: {
        allCourses(state) {
            return state.courses
        },
        myCourses(state) {
            return state.myCourses
        },
        availableCourses(state) {
            return state.courses.filter(course => {
                let isMyCourse = state.myCourses.find(myCourse => myCourse.id === course.id) !== undefined
                let isAvailable = course.availableCapacity > 0
                return !isMyCourse && isAvailable
            })
        },
        getCourseById: state => id => {
            return state.courses.find(course => course.id === id)
        },
        allowToViewDetails: state => courseId => {
            return state.myCourses.find(course => course.id === courseId) !== undefined
        },
        allowToEnroll: (state, getters) => courseId => {
            if(getters.allowToViewDetails(courseId)) {
                return false
            }
            const course = state.courses.find(course => course.id === courseId)
            return course.availableCapacity > 0
        },
        courseToEnroll(state) {
            return state.courseToEnroll
        }
    },
    // mutations are not async
    mutations:{
        setCourses (state, courses) {
            state.courses = courses
        },
        setMyCourses (state, courses) {
            state.myCourses = courses
        },
        startEnrollment (state, course) {
            state.courseToEnroll = course
        }
    },
    // actions are async
    actions:{
        getAvailableCourses({commit, state, dispatch}) {
            return new Promise((resolve) => {
                if(state.courses.length > 0) {
                    resolve()
                }
                axios.get('http://localhost:8080/api/courses/available')
                    .then(response => {
                        console.log("aslkñdfjd")
                        commit('setCourses', response.data.data)
                        dispatch('getMyCourses')
                        resolve()
                    })
            })
        },
        getMyCourses({commit, state, rootState}){
            return new Promise((resolve) => {
                if(state.myCourses.length > 0) {
                    resolve()
                }
                axios.get(`http://localhost:8080/api/users/${rootState.auth.user.id}/courses`)
                    .then(response => {
                        commit('setMyCourses', response.data.data)
                        console.log("ajlsdfkj")
                        resolve()
                    })
            })
        },
        enroll({rootState}, courseId) {
            let data = {
                user: {
                    id: rootState.auth.user.id
                },
                course: {
                    id: courseId
                }
            }
            return new Promise((resolve) => {
                axios.post(`http://localhost:8080/api/users/${rootState.auth.user.id}/enrollments`,data)
                    .then(() => {
                        resolve()
                    })
            })
        }
    }
}

export default courseModule;