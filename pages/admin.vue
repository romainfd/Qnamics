<template>
  <!-- Client-only & lazy loading required to avoid SSR | Ref.: https://stackoverflow.com/a/65144127 -->
  <client-only>
    <lazyChartMap />
  </client-only>
</template>

<script>
export default {
  layout: 'laptop'
}
</script>
