<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex style="height: 100%">
        <div class="text-h4 text-center mb-10 mt-3">
          <v-icon class="mr-2" large>
            mdi-chart-timeline-variant-shimmer
          </v-icon>
          Trends
        </div>
        <ChartLine
          :data="lineData"
          :units="{ style: 'currency', currency: 'EUR' }"
          style="width: 100% !important; height: 72vh !important;"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'mobile',
  computed: {
    ...mapGetters(['loggedInUser', 'forecast']),
    lineData () {
      return {
        labels: this.forecast.keys,
        datasets: [
          {
            data: this.forecast.values,
            backgroundColor: '#34c369',
            fill: false,
            borderColor: '#4BC0C0',
            tension: 0.1
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
