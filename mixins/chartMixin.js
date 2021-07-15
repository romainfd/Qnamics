const cgartMixin = {
  methods: {
    labelFunction (units) {
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
        }

        // Collect value label
        const valueLabel = data.labels[tooltipItem.index]

        if (datasetLabel && valueLabel) {
          label = `${datasetLabel} (${valueLabel}): `
        } else if (datasetLabel) {
          label = `${datasetLabel}: `
        } else if (valueLabel) {
          label = `${valueLabel}: `
        }

        return label + value
      }
    }
  }
}

module.exports = cgartMixin
