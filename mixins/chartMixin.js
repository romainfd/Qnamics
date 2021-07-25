const cgartMixin = {
  methods: {
    labelFunction (units, chartType) {
      return (tooltipItem, data) => {
        let label = ''
        // get the concerned dataset
        const dataset = data.datasets[tooltipItem.datasetIndex]
        const datasetLabel = dataset.label

        // get the current item value
        let value = dataset.data[tooltipItem.index]
        // convert value in units
        if (units) {
          if (units.style === 'percent') {
            value /= 100
          }
          value = new Intl.NumberFormat('de-DE', units).format(value)
          if (units.override) {
            if (units.override.suffix) {
              // Replace unit
              value = value.split(' ')[0] + ' ' + units.override.suffix
            }
          }
        }

        // Collect value label
        const valueLabel = data.labels[tooltipItem.index]

        if (chartType === 'line' || chartType === 'bar') {
          if (datasetLabel) {
            label = `${datasetLabel}: `
          }
        } else if (chartType === 'doughnut') {
          if (datasetLabel && valueLabel) {
            label = `${datasetLabel}: (${valueLabel})`
          } else if (datasetLabel) {
            label = `${datasetLabel}: `
          } else if (valueLabel) {
            label = `${valueLabel}: `
          }
        }

        return label + value
      }
    }
  }
}

module.exports = cgartMixin
