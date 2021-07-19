<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex v-if="user">
        <div class="text-h5 text-center mb-15 mt-8">
          <v-icon class="mr-2" large>
            mdi-leaf
          </v-icon>
          Thanks to {{ user.name.split(' ')[0] }},
        </div>
        <v-row>
          and its average use of {{ metrics.greenShare }}% of green energy
        </v-row>
        <v-row>
          <v-carousel
            v-model="co2CarouselIndex"
            height="200px"
            :show-arrows="false"
            cycle
            hide-delimiter-background
            class="ma-4"
          >
            <v-carousel-item
              v-for="item in equivalents.co2saved"
              :key="item.description"
            >
              <v-sheet
                color="green"
                height="100%"
              >
                <v-row
                  class="pt-8 pb-3"
                  align="center"
                  justify="center"
                >
                  <v-icon x-large>
                    {{ item.icon }}
                  </v-icon>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                >
                  <span class="text-h3">
                    {{ item.amount }}
                  </span>
                  <span class="text-h5 pt-4 pl-1">
                    {{ item.description }}
                  </span>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-row>
        <v-row>
          of CO2 were saved while saving money for
        </v-row>
        <v-row>
          <v-carousel
            v-model="moneyCarouselIndex"
            height="200px"
            :show-arrows="false"
            cycle
            hide-delimiter-background
            class="ma-4"
          >
            <v-carousel-item
              v-for="item in equivalents.moneySaved"
              :key="item.description"
            >
              <v-sheet
                color="orange"
                height="100%"
              >
                <v-row
                  class="pt-8 pb-3"
                  align="center"
                  justify="center"
                >
                  <v-icon x-large>
                    {{ item.icon }}
                  </v-icon>
                </v-row>
                <v-row
                  align="center"
                  justify="center"
                >
                  <span class="text-h3">
                    {{ item.amount }}
                  </span>
                  <span class="text-h5 pt-4 pl-1">
                    {{ item.description }}
                  </span>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
        </v-row>
        <v-row class="justify-center pt-5">
          <v-btn nuxt :to="{name: 'login', params: {signup: true}}" center>
            Join the mouvement
          </v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
  layout: 'mobile-empty',
  data () {
    return {
      user: null,
      co2CarouselIndex: 0,
      moneyCarouselIndex: 0
    }
  },
  head () {
    return { title: this.user ? `${this.user.name.split(' ')[0]}'s energy page` : 'Share' }
  },
  computed: {
    ...mapGetters(['equivalents', 'metrics'])
  },
  async created () {
    this.user = await this.$store.dispatch('getUser', this.$route.params.id)
  }
}
</script>

<style>

</style>
