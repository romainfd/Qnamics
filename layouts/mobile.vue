<template>
  <v-app>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-bottom-navigation v-model="page" app>
      <v-btn to="/user" value="/user" nuxt>
        <span>Home</span>
        <v-icon>mdi-home</v-icon>
      </v-btn>

      <v-btn to="/trends" value="/trends" nuxt>
        <span>Trends</span>
        <v-icon>mdi-chart-timeline-variant-shimmer</v-icon>
      </v-btn>

      <v-btn to="/profile" value="/profile" nuxt>
        <span>Profile</span>
        <v-icon>mdi-account</v-icon>
      </v-btn>

      <v-btn to="/login" value="/login" nuxt>
        <span>Logout</span>
        <v-icon>mdi-door</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
      page: '/user'
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated', 'loggedInUser'])
  },
  // Maintain navigation bar in sync with routes | Ref.: https://stackoverflow.com/a/53770410
  watch: {
    $route (to, from) {
      this.page = to.path
    }
  },
  beforeCreate () {
    if (!this.$device.isMobile) {
      this.$router.push('/')
    }
  },
  mounted () {
    this.page = this.$route.path
  }
}
</script>
