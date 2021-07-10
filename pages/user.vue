<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex class="login-form text-center">
        <div class="display-1 my-10">
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
  layout: 'mobile',
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
  methods: { }
}
</script>
