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
        tooltips: {
          ...(this.units && {
            callbacks: {
              label: this.labelFunction(this.units, 'bar')
            }
          }),
          // to display all the labels
          mode: 'nearest',
          axis: 'x',
          intersect: false
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
