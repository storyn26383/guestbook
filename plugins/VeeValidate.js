import Vue from 'vue'
import VeeValidate from 'vee-validate'

Vue.use(VeeValidate, {
  events: 'blur'
})

Vue.mixin({
  methods: {
    validate () {
      return new Promise((resolve, reject) => {
        this.$validator.validateAll().then(result => {
          if (!result) {
            return reject(new Error('Validation Failure.'))
          }

          resolve()
        })
      })
    }
  }
})
