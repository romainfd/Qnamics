<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex v-if="user">
        <div class="text-h5 text-center mb-10 mt-3">
          <v-icon class="mr-2" large>
            mdi-leaf
          </v-icon>
          Thanks to {{ user.name.split(' ')[0] }},
        </div>
        <v-row>
          and its average use of {{ user.metrics.greenShare }}% of green energy
        </v-row>
        <v-row>
          10 Berlin - New-York flights of CO<sub>2</sub> were saved
        </v-row>
        <v-row>
          while saving money for 121kg of fruits
        </v-row>
        <v-btn nuxt to="/login">
          Join the mouvement
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  layout: 'mobile-empty',
  data () {
    return {
      user: null
    }
  },
  async created () {
    this.user = await this.$store.dispatch('getUser', this.$route.params.id)
  }
}
</script>

<style>

</style>
