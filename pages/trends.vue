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
        <v-btn-toggle v-model="type" style="width:50%" class="mb-1" mandatory>
          <v-btn block small value="price">
            Price
          </v-btn>
          <v-btn block small value="energyMix">
            Mix
          </v-btn>
        </v-btn-toggle>
        <v-btn-toggle v-model="duration" style="width:50%" class="mb-5" mandatory>
          <v-btn block small value="today">
            Today
          </v-btn>
          <v-btn block small value="3days">
            3 days
          </v-btn>
        </v-btn-toggle>
        <ChartLine
          :data="lineData"
          :units="{ style: 'currency', currency: 'EUR', override: { suffix } }"
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
      type: 'price',
      duration: 'today'
    }
  },
  head () {
    return { title: 'Trends' }
  },
  computed: {
    ...mapGetters(['loggedInUser', 'forecast']),
    lineData () {
      return this.forecast[this.type][this.duration]
    },
    suffix () {
      return this.type === 'energyMix' ? '%' : 'ct€/kWh'
    }
  }
}
</script>

<style>

</style>
