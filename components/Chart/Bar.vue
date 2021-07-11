<script>
import { Bar } from 'vue-chartjs'
const chartMixin = require('~/mixins/chartMixin')

export default {
  extends: Bar,
  mixins: [chartMixin],
  props: {
    legend: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: null
    },
    data: {
      type: Object,
      required: true
    },
    units: {
      type: Object,
      default: null
    }
  },
  computed: {
    options () {
      return {
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: this.legend,
          position: 'top'
        },
        title: {
          display: !!this.title,
          text: this.title
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        },
        ...(this.centralText && {
          elements: {
            center: {
              text: this.centralText,
              color: '#34c369', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20, // Default is 20 (as a percentage)
              minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
          }
        }),
        tooltips: {
          callbacks: {
            label: this.labelFunction(this.units)
          }
        }
      }
    }
  },
  watch: {
    data () {
      // Update graph when data changes
      this.renderChart(this.data, this.options)
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  }
}
</script>
