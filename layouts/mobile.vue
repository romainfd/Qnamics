<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation v-model="page" app>
      <v-btn value="user">
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn value="trends">
        <span>Trends</span>
        <v-icon>mdi-chart-timeline-variant-shimmer</v-icon>
      </v-btn>

      <v-btn value="profile">
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      page: 'user'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  watch: {
    page () {
      this.$router.push(this.page)
    }
  }
}
</script>
