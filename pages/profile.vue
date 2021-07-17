<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex>
        <div class="text-h4 text-center mb-10 mt-3">
          <v-icon class="mr-2" large>
            mdi-account
          </v-icon>
          Profile
        </div>
        <v-row align="center">
          <v-col cols="12">
            <v-card class="my-3 py-2 px-7">
              <v-row>
                <v-col cols="6">
                  <div class="text-overline">
                    Member since
                  </div>
                  <div class="font-weight-bold" align="right">
                    {{ loggedInUser.createdAt }}
                  </div>
                </v-col>
                <v-col cols="6">
                  <div class="text-overline">
                    Member ID
                  </div>
                  <div class="font-weight-bold" align="right">
                    {{ loggedInUser.id }}
                  </div>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
        <v-card class="pa-5 my-5" color="#C5E1A5">
          <v-row>
            <v-col cols="8" style="color: #33691E;">
              <div class="text-h6" color="#33691E">
                <v-icon>
                  mdi-leaf
                </v-icon>
                Green share
              </div>
              <div class="text-caption">
                Making green energy a priority
              </div>
              <p class="text-h5 text-right mb-0">
                {{ metrics.greenShare }}
                <span class="text-body-1">%</span>
              </p>
            </v-col>
            <v-col cols="4">
              <v-img
                src="https://picsum.photos/200"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5 my-5" color="#D7CCC8">
          <v-row>
            <v-col cols="8" style="color: #3E2723;">
              <div class="text-h6">
                <v-icon color="#3E2723">
                  mdi-cloud
                </v-icon>
                CO<sub>2</sub> not emitted
              </div>
              <div class="text-caption">
                Less carbon in the atmosphere
              </div>
              <p class="text-h5 text-right mb-0">
                {{ metrics.co2Saved }}
                <span class="text-body-1">tons</span>
              </p>
            </v-col>
            <v-col cols="4" order="first">
              <v-img
                src="https://picsum.photos/201"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-card class="pa-5 my-5" color="#FFCC80">
          <v-row>
            <v-col cols="8" style="color: #BF360C;">
              <div class="text-h6">
                <v-icon color="#BF360C">
                  mdi-wallet-giftcard
                </v-icon>
                Money saved
              </div>
              <div class="text-caption">
                Less pollution & more money
              </div>
              <p class="text-h5 text-right mb-0">
                {{ metrics.moneySaved }}
                <span class="text-body-1">€</span>
              </p>
            </v-col>
            <v-col cols="4">
              <v-img
                src="https://picsum.photos/202"
              />
            </v-col>
          </v-row>
        </v-card>
        <v-row class="justify-center pt-5">
          <v-btn large rounded nuxt :to="'/user/' + loggedInUser.id">
            Share
          </v-btn>
        </v-row>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'mobile',
  computed: {
    ...mapGetters(['loggedInUser', 'metrics'])
  }
}
</script>

<style>

</style>
