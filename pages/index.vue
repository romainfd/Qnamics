<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card class="logo py-4 d-flex justify-center">
        <v-card-title>
          Welcome on Q.ON platform
        </v-card-title>
        <v-card-actions>
          <v-btn nuxt to="/login">
            <v-icon left>
              mdi-login
            </v-icon> Login
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: 'mobile-empty',
  beforeCreate () {
    this.$router.push('/login')
  }
}
</script>
