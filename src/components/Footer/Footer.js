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
      message: `© ${new Date().getFullYear()} Brandvarg`
    }
  }
}
