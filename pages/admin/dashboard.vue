<template>
  <div>
    <v-row style="height: 100%;" class="my-10 mx-3 pb-5">
      <v-col v-for="card in adminCards" :key="card.label" cols="6">
        <SparklineCard :data="card" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'laptop',
  data () {
    return {
    }
  },
  head () {
    return { title: 'Dashboard' }
  },
  computed: {
    ...mapGetters(['adminCards'])
  }
}
</script>
