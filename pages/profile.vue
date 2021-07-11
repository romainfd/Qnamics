<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <div class="text-h4 text-center mb-10 mt-3">
          Profile
        </div>
        <v-row align="center" justify="center">
          <v-avatar
            size="56"
            color="grey"
          >
            <v-icon x-large>
              mdi-account
            </v-icon>
          </v-avatar>
        </v-row>
        <v-row align="center">
          <v-col cols="12">
            <div class="text-h6">
              Daily report
            </div>
            <v-card class="my-3 py-2 px-7">
              <v-row>
                <v-col cols="6">
                  <div class="text-overline">
                    Total Amount
                  </div>
                  <span class="font-weight-bold">
                    {{ dailyData.totalAmount }}
                  </span>
                  <span>kWh</span>
                </v-col>
                <v-col cols="6">
                  <div class="text-overline">
                    Average price
                  </div>
                  <span class="font-weight-bold">
                    {{ dailyData.averagePrice }}
                  </span>
                  <span>ct€/kWh</span>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <div class="text-h6">
              Recent consumptions
            </div>
            <v-btn-toggle v-model="aggregateWindow" style="width: 33%">
              <v-btn block small value="week">
                Week
              </v-btn>
              <v-btn block small value="month">
                Month
              </v-btn>
              <v-btn block small value="year">
                Year
              </v-btn>
            </v-btn-toggle>
            <div class="text-overline">
              Total
            </div>
            <span class="font-weight-bold">
              {{ consumptions[aggregateWindow].total }}
            </span>
            <span>kWh</span>
          </v-col>
          <ChartBar class="barchartContainer" :data="barData" style="width: 100% !important; height: 200px !important;" />
        </v-row>
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
      aggregateWindow: 'week',
      chartUnits: {
        style: 'percent'
      }
    }
  },
  computed: {
    ...mapGetters(['loggedInUser', 'currentData', 'dailyData', 'consumptions']),
    doughnutData () {
      return {
        labels: ['Non-renewable', 'Renewable'],
        datasets: [
          {
            data: [100 - this.currentData.greenShare, this.currentData.greenShare],
            backgroundColor: ['#f87979', '#34c369']
          }
        ]
      }
    },
    barData () {
      console.log(this.aggregateWindow)
      return {
        labels: this.consumptions[this.aggregateWindow].keys,
        datasets: [
          {
            label: 'Non-renewable',
            data: this.consumptions[this.aggregateWindow].values,
            backgroundColor: '#f87979'
          },
          {
            label: 'Renewable',
            data: this.consumptions[this.aggregateWindow].values,
            backgroundColor: '#34c369'
          }
        ]
      }
    }
  }
}
</script>

<style>

</style>
