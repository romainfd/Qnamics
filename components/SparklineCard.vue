<template>
  <v-card :color="data.color">
    <v-row class="px-5 mb-n8">
      <v-col cols="8">
        <p class="text-h6">
          {{ data.label }}
        </p>
      </v-col>
      <v-col cols="4" class="text-right">
        <span class="text-h5">{{ data.value }}</span>
        <span class="text-h6">{{ data.unit }}</span>
      </v-col>
    </v-row>
    <v-row class="pt-0">
      <ChartLine
        class="px-5 pb-3"
        :data="lineData"
        :units="{ style: 'currency', currency: 'EUR', override: { suffix: data.unit } }"
        :style="'width: 100% !important; height:' + options.height + ' !important;'"
        :line-at-index="[{
          pointIndex: (new Date()).getHours(),
          pointText: 'Now'
        }]"
        :hide-x-labels="options.hideXLabels"
        stacked
      />
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      default: () => {
        return {
          height: '30vh',
          hideXLabels: false
        }
      }
    }
  },
  computed: {
    lineData () {
      return {
        labels: this.data.keys,
        datasets: [
          {
            data: this.data.values,
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
