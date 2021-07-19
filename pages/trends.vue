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
        <v-btn-toggle v-model="duration" style="width:50%" class="mb-5">
          <v-btn block small value="today">
            Today
          </v-btn>
          <v-btn block small value="3days">
            3 days
          </v-btn>
        </v-btn-toggle>
        <ChartLine
          :data="lineData"
          :units="{ style: 'currency', currency: 'EUR', override: { suffix: 'ct€/kWh' } }"
          style="width: 100% !important; height: 72vh !important;"
          :line-at-index="[{
            pointIndex: (new Date()).getHours(),
            pointText: 'Now'
          }]"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'mobile',
  data () {
    return {
      duration: 'today'
    }
  },
  head () {
    return { title: 'Trends' }
  },
  computed: {
    ...mapGetters(['loggedInUser', 'forecast']),
    lineData () {
      return {
        labels: this.forecast[this.duration].keys,
        datasets: [
          {
            data: this.forecast[this.duration].values,
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
