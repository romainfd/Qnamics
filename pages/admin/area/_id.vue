<template>
  <div>
    <v-card v-if="area" class="mt-3 pt-3">
      <v-row
        align="center"
        justify="center"
        class="px-15"
      >
        <!-- Center inside col | Ref.: https://stackoverflow.com/a/58488924 -->
        <v-col cols="1" class="d-flex justify-end">
          <v-btn to="/admin/map">
            <v-icon left>
              mdi-arrow-left
            </v-icon>
            Back
          </v-btn>
        </v-col>
        <v-col class="pa-0">
          <v-card-title>
            {{ area.NAME_3 }}
          </v-card-title>
          <v-card-subtitle>
            {{ area.NAME_2 }}
          </v-card-subtitle>
        </v-col>
      </v-row>
      <v-row style="height: 50%;" class="py-5 mx-3">
        <v-col v-for="card in area.cards" :key="card.label" cols="6">
          <SparklineCard
            class="pb-3"
            :data="card"
            :options="{
              height: '15vh',
              hideXLabels: false
            }"
          />
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="3" class="pl-15 mt-n5">
          <ChartDoughnut
            :data="doughnutData"
            central-text="Energy mix"
            :units="{ style: 'percent' }"
          />
        </v-col>
        <v-col cols="9">
          <ChartLine
            class="px-5 pb-3"
            :data="lineData"
            :units="{ style: 'currency', currency: 'EUR', override: { suffix: '%' } }"
            :style="'width: 100% !important; height: 25vh !important;'"
            :line-at-index="[{
              pointIndex: (new Date()).getHours(),
              pointText: 'Now'
            }]"
          />
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>
export default {
  layout: 'laptop',
  data () {
    return {
      area: null
    }
  },
  head () {
    return { title: this.area ? `${this.area.NAME_3}'s energy page` : 'Area details' }
  },
  computed: {
    doughnutData () {
      return {
        labels: this.area.energyMix.keys,
        datasets: [
          {
            data: this.area.energyMix.values,
            backgroundColor: this.area.energyMix.colors
          }
        ]
      }
    },
    lineData () {
      return {
        labels: this.area.energyMix.datasets.keys,
        datasets: this.area.energyMix.datasets.values
      }
    }
  },
  async created () {
    this.area = await this.$store.dispatch('getAreaData', this.$route.params.id)
  }
}

</script>
