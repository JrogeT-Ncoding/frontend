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
                setTimeout(() => {
                        commit('setCourses', [
                            {
                                id: 1,
                                name: 'Course 1',
                                description: 'Course 1 description',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'category 1',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 5,
                                maxCapacity: 100,
                            },
                            {
                                id: 2,
                                name: 'Vue.js',
                                description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the Vuejs team and distributed under the MIT License.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Front-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 0,
                                maxCapacity: 100,
                            },
                            {
                                id: 3,
                                name: 'React.js',
                                description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Front-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 1,
                                maxCapacity: 100,
                            },
                            {
                                id: 4,
                                name: 'Angular.js',
                                description: 'AngularJS is a JavaScript framework for building single-page applications. It is maintained by Google and a community of individual developers and companies.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Front-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 10,
                                maxCapacity: 100,
                            },
                            {
                                id: 5,
                                name: 'Node.js',
                                description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Back-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 99,
                                maxCapacity: 100,
                            },
                            {
                                id: 6,
                                name: 'PHP',
                                description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. PHP is a widely-used, free, and open source scripting language.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Back-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 1,
                                maxCapacity: 100,
                            },
                            {
                                id: 7,
                                name: 'Python',
                                description: 'Python is a programming language that lets you work quickly with human-readable code. It has more than 20 million developers worldwide, and is one of the most popular programming languages in use today.',
                                price: '$100',
                                image: 'https://picsum.photos/200/300',
                                category: 'Back-End',
                                rating: '4.5',
                                hours: '3:20hs',
                                enrolled: 422,
                                availableCapacity: 10,
                                maxCapacity: 100,
                            },
                        ])
                        resolve()
                }, 300)
            })
        },
        getMyCourses({commit}){
            return new Promise((resolve) => {
                setTimeout(() => {
                    commit('setMyCourses', [
                        {
                            id: 2,
                            name: 'Vue.js',
                            description: 'Vue.js is a progressive framework for building user interfaces. It is maintained by the Vuejs team and distributed under the MIT License.',
                            price: '$100',
                            image: 'https://vuejs.org/images/logo.png',
                            category: 'Front-End',
                            rating: '4.5',
                            hours: '3:20hs',
                            enrolled: 422,
                            availableCapacity: 0,
                            maxCapacity: 100,
                        },
                        {
                            id: 3,
                            name: 'React.js',
                            description: 'React is a JavaScript library for building user interfaces. It is maintained by Facebook and a community of individual developers and companies.',
                            price: '$100',
                            image: 'https://picsum.photos/200/300?image=10',
                            category: 'Front-End',
                            rating: '4.5',
                            hours: '3:20hs',
                            enrolled: 422,
                            availableCapacity: 1,
                            maxCapacity: 100,
                        },
                        {
                            id: 4,
                            name: 'Angular.js',
                            description: 'AngularJS is a JavaScript framework for building single-page applications. It is maintained by Google and a community of individual developers and companies.',
                            price: '$100',
                            image: 'https://picsum.photos/200/300?image=10',
                            category: 'Front-End',
                            rating: '4.5',
                            hours: '3:20hs',
                            enrolled: 422,
                            availableCapacity: 10,
                            maxCapacity: 100,
                        },
                    ])
                    resolve()
                }, 3000)
            })
        },
    }
}

export default courseModule;