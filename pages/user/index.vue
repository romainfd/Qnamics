<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <div class="text-h4 text-center mb-10 mt-3">
          <v-icon class="mr-2" large>
            mdi-leaf
          </v-icon>Hello {{ loggedInUser.name.split(' ')[0] }}
        </div>
        <v-row align="center">
          <v-col cols="7">
            <div class="text-h6">
              Current Price
            </div>
            <span class="text-h5">{{ currentData.price }}</span>
            <span class="text-body-1">ct€/kWh</span>
          </v-col>
          <v-col cols="5">
            <ChartDoughnut
              :data="doughnutData"
              :central-text="currentData.greenShare + '%'"
              :units="chartUnits"
            />
          </v-col>
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
          <ChartBar :data="barData" style="width: 100% !important; height: 200px !important;" />
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
      return {
        labels: this.consumptions[this.aggregateWindow].keys,
        datasets: [
          {
            label: 'Non-renewable',
            data: this.consumptions[this.aggregateWindow].nonRenewable,
            backgroundColor: '#f87979'
          },
          {
            label: 'Renewable',
            data: this.consumptions[this.aggregateWindow].renewable,
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
