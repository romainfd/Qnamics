<template>
  <div>
    <v-card v-if="area" class="infoCard pb-5 px-2" :class="[bottom ? 'bottomInfoCard' : 'topInfoCard']">
      <v-row
        align="center"
        justify="center"
      >
        <v-col cols="8">
          <v-card-title>
            {{ area.NAME_3 }}
          </v-card-title>
          <v-card-subtitle>
            {{ area.NAME_2 }}
            <span v-if="area.NAME_2 !== area.NAME_1">
              ({{ area.NAME_1 }})
            </span>
          </v-card-subtitle>
        </v-col>
        <v-col cols="4">
          <v-btn :to="'/admin/area/' + area.NAME_3">
            <v-icon left>
              mdi-magnify-plus-outline
            </v-icon>
            More
          </v-btn>
        </v-col>
      </v-row>
      <ChartLine
        :data="lineData(area.energy.keys, area.energy.prices)"
        :units="{ style: 'currency', currency: 'EUR', override: { suffix: 'ct€/kWh' } }"
        style="width: 100% !important; height: 15vh !important;"
        :line-at-index="[{
          pointIndex: (new Date()).getHours(),
          pointText: 'Now'
        }]"
      />
      <ChartLine
        :data="lineData(area.energy.keys, area.energy.consumptions)"
        :units="{style: 'currency', currency: 'EUR', override: { suffix: 'kWh' } }"
        style="width: 100% !important; height: 15vh !important;"
        :line-at-index="[{
          pointIndex: (new Date()).getHours(),
          pointText: 'Now'
        }]"
      />
    </v-card>
    <v-card v-else class="infoCard" :class="[bottom ? 'bottomInfoCard' : 'topInfoCard']">
      <v-card-subtitle>
        {{ placeholder }}
      </v-card-subtitle>
    </v-card>
  </div>
</template>

<script>
export default {
  props: {
    area: {
      type: Object,
      default: null
    },
    placeholder: {
      type: String,
      required: true
    },
    bottom: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    lineData (keys, values) {
      return {
        labels: keys,
        datasets: [
          {
            data: values,
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

<style scoped>
.infoCard {
  position: absolute;
  width: 400px;
  max-height: 45vh;
  z-index: 2000;  /* Leaflet up to 1100 | Ref.: https://stackoverflow.com/a/54635107 */
  right: 10px;
}

.topInfoCard {
  top: 10px;
}

.bottomInfoCard {
  bottom: 10px;
}
</style>
