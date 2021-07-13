<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex class="login-form text-center">
        <div class="text-h4 my-10">
          <v-icon class="mr-2" large>
            mdi-leaf
          </v-icon> My Q.ON
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
              />
              <v-checkbox
                v-if="options.isLoggingIn"
                v-model="options.shouldStayLoggedIn"
                label="Stay logged in?"
              />
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
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  layout: 'mobile-empty',
  data () {
    return {
      user: {
        email: null,
        password: null,
        name: null
      },
      rules: {
        required: v => !!v || 'This field is required'
      },
      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: true
      }
    }
  },
  methods: {
    async login () {
      if (!this.$refs.form.validate()) { return }
      const loggedIn = await this.$store.dispatch('logInUser', this.user.email)
      if (loggedIn) {
        await this.$router.push('/user')
      } else {
        this.$refs.form.reset()
      }
    }
  }
}
</script>
