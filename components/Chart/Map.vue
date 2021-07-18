<template>
  <div>
    <!-- z-index avoids leaflet z-index clashing | Ref.: https://stackoverflow.com/a/54635107 -->
    <l-map
      :zoom="zoom"
      :center="center"
      :options="{attributionControl: false}"
      style="height: 600px; width: 100%; z-index: 0;"
    >
      <v-card class="infoCard hoverRegionInfoCard">
        Area: {{ areaHover }}
      </v-card>
      <v-card class="infoCard clickRegionInfoCard">
        Area: {{ areaClick }}
      </v-card>
      <l-tile-layer
        :url="url"
      />
      <l-geo-json
        :geojson="geojson"
        :options="options"
        :options-style="styleFunction"
      />
      <!-- <l-marker :lat-lng="latLng(51, 10.5)" /> -->
    </l-map>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      zoom: 5.5,
      center: [51.25, 10.5],
      geojson: null,
      // Find a nice tile layer in https://wiki.openstreetmap.org/wiki/Tiles
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      // url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      areaHover: null,
      areaClick: null
    }
  },
  computed: {
    options () {
      return {
        onEachFeature: this.onEachFeatureFunction
      }
    },
    styleFunction () {
      return () => {
        return {
          // Line around
          weight: 1.5,
          color: 'white',
          opacity: 1,
          // Fill
          fillColor: colors[parseInt(colors.length * Math.random())],
          fillOpacity: 0.66
        }
      }
    },
    onEachFeatureFunction () {
      return (feature, layer) => {
        layer.bindTooltip(
          `<div>City: ${feature.properties.NAME_3}</div><div>Region: ${feature.properties.NAME_2}</div>`,
          {
            permanent: false,
            sticky: true
          }
        )
        layer.on({
          mouseover: () => this.hoverFeature(feature, layer),
          click: () => this.clickFeature(feature, layer)
        })
      }
    }
  },
  async created () {
    this.loading = true
    const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/4_kreise/4_niedrig.geo.json')
    // const response = await fetch('https://raw.githubusercontent.com/isellsoap/deutschlandGeoJSON/main/3_regierungsbezirke/4_niedrig.geo.json')
    const data = await response.json()
    this.geojson = data
    this.loading = false
  },
  methods: {
    clickFeature (feature, layer) {
      this.areaClick = feature.properties.NAME_3
    },
    hoverFeature (feature, layer) {
      this.areaHover = feature.properties.NAME_3
    }
  }
}

const colors = [
  '#C5E1A5', '#AED581', '#9CCC65',
  '#FFAB91', '#FF8A65', '#FF7043'
]
</script>

<style scoped>
.infoCard {
  position: absolute;
  width: 250px;
  z-index: 2000;  /* Leaflet up to 1100 | Ref.: https://stackoverflow.com/a/54635107 */
  right: 10px;
}

.hoverRegionInfoCard {
  top: 10px;
}

.clickRegionInfoCard {
  bottom: 10px;
}

</style>
