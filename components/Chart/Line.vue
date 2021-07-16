<script>
import { Line } from 'vue-chartjs'
import { Chart } from 'chart.js'
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
    },
    lineAtIndex: {
      type: Array,
      default: () => []
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
        }),
        lineAtIndex: this.lineAtIndex
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

// Drawing a vertical line for current hour | Ref.: https://stackoverflow.com/a/43092029
const verticalLinePlugin = {
  getLinePosition (chart, pointIndex) {
    const meta = chart.getDatasetMeta(0) // first dataset is used to discover X coordinate of a point
    const data = meta.data
    return data[pointIndex]._model.x
  },
  renderVerticalLine (chartInstance, pointIndex, pointText) {
    const lineLeftOffset = this.getLinePosition(chartInstance, pointIndex)
    const scale = chartInstance.scales['y-axis-0']
    const context = chartInstance.chart.ctx

    // render vertical line
    context.beginPath()
    context.strokeStyle = '#ff8c00'
    context.moveTo(lineLeftOffset, scale.top)
    context.lineTo(lineLeftOffset, scale.bottom)
    context.stroke()

    // write label
    context.fillStyle = '#ff8c00'
    context.textAlign = 'left'
    context.fillText(pointText, 3 + lineLeftOffset, (scale.bottom - scale.top) / 2 + scale.top)
  },

  afterDatasetsDraw (chart, easing) {
    // Adding a custom '.options' to make it work for the vue wrapper
    if (chart.config.options.lineAtIndex) {
      chart.config.options.lineAtIndex.forEach(({ pointIndex, pointText }) => this.renderVerticalLine(chart, pointIndex, pointText))
    }
  }
}

Chart.plugins.register(verticalLinePlugin)
</script>
