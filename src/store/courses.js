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
        getAvailableCourses({commit}){
            return new Promise((resolve) => {
                axios.get('http://localhost:8080/api/courses/available')
                    .then(response => {
                        setTimeout(() => {
                            commit('setCourses', response.data.data)
                            resolve()
                        }, 1000)
                    }
                )
            })
        },
        getMyCourses({commit}){
            return new Promise((resolve) => {
                axios.get('http://localhost:8080/api/users/19/courses')
                    .then(response => {
                            setTimeout(() => {
                                commit('setMyCourses', response.data.data)
                                resolve()
                            }, 1000)
                        }
                    )
            })
        },
    }
}

export default courseModule;