import { mapGetters } from 'vuex'
import { Message } from 'common/js/popup'
export const commonInfoMixin = {
  created() {
    this.$message = Message
  },
  data() {
    return {
      isLoading: false,
      action: ''
    }
  },
  computed: {
    ...mapGetters([
      'isRequesting'
    ])
  },
  methods: {
    showLoading() {
      this.isLoading = true
    },
    hideLoading() {
      this.isLoading = false
    },
    setAction(action) {
      this.action = action
    }
  }
}