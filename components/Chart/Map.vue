<template>
  <div>
    <!-- z-index avoids leaflet z-index clashing | Ref.: https://stackoverflow.com/a/54635107 -->
    <l-map
      :zoom="zoom"
      :center="center"
      :options="{attributionControl: false}"
      style="height: 100%; width: 100%; z-index: 0;"
    >
      <AreaInfoCard
        :area="areaClick"
        placeholder="Click on an area to see it"
      />
      <AreaInfoCard
        :area="areaHover"
        placeholder="Hover an area to see it"
        bottom
      />
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
      zoom: 6,
      center: [51.25, 15],
      geojson: null,
      // Find a nice tile layer in https://wiki.openstreetmap.org/wiki/Tiles
      // url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
      // url: 'https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
      url: 'https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
      areaHover: null,
      areaClick: null,
      cities: []
    }
  },
  computed: {
    options () {
      return {
        onEachFeature: this.onEachFeatureFunction
      }
    },
    styleFunction () {
      return (feature) => {
        return {
          // Line around
          weight: 1.5,
          color: 'white',
          opacity: 1,
          // Fill
          fillColor: feature.properties.energy.color,
          fillOpacity: 0.66
        }
      }
    },
    onEachFeatureFunction () {
      return (feature, layer) => {
        this.cities.push(feature.properties.NAME_3)
        const price = Math.round(feature.properties.energy.prices[feature.properties.energy.prices.length - 1] * 100) / 100
        const consumption = Math.round(feature.properties.energy.consumptions[feature.properties.energy.consumptions.length - 1] * 100) / 100
        const greenShare = Math.round(feature.properties.energy.greenShares[feature.properties.energy.greenShares.length - 1] * 100)
        layer.bindTooltip(
          `<strong>${feature.properties.NAME_3}</strong><span> (${feature.properties.NAME_2})</span><br/>
           <ul>
             <li>Green Share: <strong>${greenShare}%</strong></li>
             <li>Price: <strong>${price} ct€/kWh</strong></li>
             <li>Consumption: <strong>${consumption} kWh</strong></li>
           </ul>`,
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
    this.geojson = await this.$store.dispatch('getGeoData')
    this.loading = false
  },
  methods: {
    clickFeature (feature, layer) {
      this.areaClick = feature.properties
    },
    hoverFeature (feature, layer) {
      this.areaHover = feature.properties
    }
  }
}
</script>

<style scoped>
</style>
