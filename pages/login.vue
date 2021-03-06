<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex class="login-form text-center" style="max-width: 450px;">
        <div class="text-h4 my-10">
          <v-icon class="mr-2" large>
            mdi-leaf
          </v-icon> My Qnamics
        </div>
        <v-card class="my-5">
          <v-card-text>
            <div class="subheading">
              <template v-if="options.isLoggingIn">
                Log in to your green energy portal
              </template>
              <template v-else>
                Create a new account
              </template>
            </div>
            <v-form ref="form">
              <v-text-field
                v-if="!options.isLoggingIn"
                v-model="user.name"
                :rules="[rules.required]"
                prepend-icon="mdi-account"
                label="Name"
              />
              <v-text-field
                v-model="user.email"
                :rules="[rules.required]"
                prepend-icon="mdi-email"
                label="Email"
                type="email"
              />
              <v-text-field
                v-model="user.password"
                :rules="[rules.required]"
                prepend-icon="mdi-lock"
                label="Password"
                type="password"
                autocomplete="on"
              />
              <v-checkbox
                v-if="options.isLoggingIn"
                v-model="options.shouldStayLoggedIn"
                label="Stay logged in?"
              />
              <v-alert
                v-if="showAlert"
                border="left"
                dense
                elevation="3"
                outlined
                type="error"
              >
                The user interface is only accessible on mobile
              </v-alert>
              <v-btn
                v-if="options.isLoggingIn"
                block
                type="submit"
                @click.prevent="login"
              >
                Sign in
              </v-btn>
              <v-btn
                v-else
                block="block"
                type="submit"
                @click.prevent="options.isLoggingIn = true"
              >
                Sign up
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
        <div v-if="options.isLoggingIn">
          Don't have an account?
          <v-btn @click="options.isLoggingIn = false">
            Sign up
          </v-btn>
        </div>
        <div v-else>
          Already have an account?
          <v-btn @click="options.isLoggingIn = true">
            Sign in
          </v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'empty',
  data () {
    return {
      showAlert: false,
      user: {
        email: null,
        password: null,
        name: null
      },
      rules: {
        required: v => !!v || 'This field is required'
      },
      options: {
        isLoggingIn: !this.$route.params.signup,
        shouldStayLoggedIn: true
      }
    }
  },
  head () {
    return { title: this.options.isLoggingIn ? 'Sign in' : 'Sign up' }
  },
  methods: {
    async login () {
      if (!this.$refs.form.validate()) { return }
      const loggedInUser = await this.$store.dispatch('logInUser', this.user.email)
      if (loggedInUser) {
        if (!loggedInUser.admin && !this.$device.isMobile) {
          // User interface not accessible outside of mobile
          this.showAlert = true
          this.$refs.form.reset()
        } else {
          await this.$router.push(loggedInUser.admin ? '/admin/dashboard' : '/user')
        }
      } else {
        this.$refs.form.reset()
      }
    }
  }
}
</script>
