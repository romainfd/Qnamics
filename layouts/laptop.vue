<template>
  <v-app>
    <v-main>
      <v-container style="height: 100%;" fluid>
        <Nuxt style="height: 100%;" />
      </v-container>
    </v-main>
    <v-bottom-navigation v-model="page" app>
      <v-btn to="/admin/dashboard" value="/admin/dashboard" nuxt>
        <span>Trends</span>
        <v-icon>mdi-chart-timeline-variant-shimmer</v-icon>
      </v-btn>

      <v-btn to="/admin/map" value="/admin/map" nuxt>
        <span>Map</span>
        <v-icon>mdi-map</v-icon>
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
  mounted () {
    this.page = this.$route.path
  }
}
</script>
