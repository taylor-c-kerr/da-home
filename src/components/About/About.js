const about = {
  message: `Ed Linero and Taylor Kerr are just a couple down to earth dudes who like to code software.  
  In January 2020, they joined forces to learn as many topics in software engineering as possible.  
  Topics like serverless, Vue.js, AWS CodeBuild, AWS CodePipeline have been or are being explored.  
  Taylor and Ed work primarily in Javascript, but they want to branch out to other programming languages 
  such as Python and Go.  Their current project (as of January 2020) is to develop a serverless backend 
  in Node.js and a static Vue.js frontent and then to develop a solution to deploy these projects to be 
  hosted on AWS.`
}

export default {
  components: {},
  methods: {},
  props: {
    value: {
      type: String,
      default: '',
    }
  },
  
  data() {
    return {
      message: about.message,
    }
  },
}
