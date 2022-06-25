<template>
  <div class="container-fluid">
    <div class="row">
      <h5>
        <strong>Available Courses</strong>
      </h5>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6" v-for="(course) in courses" v-bind:key="course">
        <AppCourse :course="course"/>
      </div>
    </div>
  </div>
</template>

<script>
import AppCourse from './Course.vue'

export default {
  name: 'AvailableCourses',
  components: {
    AppCourse
  },
  data() {
    return {
      courses: [
        {
          id: 1,
          name: 'Java Advanced',
          description: 'Java Advanced is a course that will teach you how to build a complete application using Java.',
          price: '$100',
          image: 'https://picsum.photos/200/300?image=10',
          category: 'Java',
          rating: '4.5',
          hours: '3:20hs',
          enrolled: 422,
        },
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
        },
        {
          id: 5,
          name: 'Node.js',
          description: 'Node.js is a JavaScript runtime built on Chrome\'s V8 JavaScript engine. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient.',
          price: '$100',
          image: 'https://picsum.photos/200/300?image=10',
          category: 'Back-End',
          rating: '4.5',
          hours: '3:20hs',
          enrolled: 422,
        },
        {
          id: 6,
          name: 'PHP',
          description: 'PHP is a server-side scripting language designed for web development but also used as a general-purpose programming language. PHP is a widely-used, free, and open source scripting language.',
          price: '$100',
          image: 'https://picsum.photos/200/300?image=10',
          category: 'Back-End',
          rating: '4.5',
          hours: '3:20hs',
          enrolled: 422,
        },
        {
          id: 7,
          name: 'Python',
          description: 'Python is a programming language that lets you work quickly with human-readable code. It has more than 20 million developers worldwide, and is one of the most popular programming languages in use today.',
          price: '$100',
          image: 'https://picsum.photos/200/300?image=10',
          category: 'Back-End',
          rating: '4.5',
          hours: '3:20hs',
          enrolled: 422,
        },
      ]
    }
  }


}
</script>