<script>
import { Line } from 'vue-chartjs'
const chartMixin = require('~/mixins/chartMixin')

export default {
  extends: Line,
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
        ...(this.units && {
          tooltips: {
            callbacks: {
              label: this.labelFunction(this.units)
            }
          }
        })
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
