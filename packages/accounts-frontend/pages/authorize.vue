<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  layout: 'authenticated'
})
</script>

<template>
  <b-container fluid class="h-100">
    <b-row class="h-100" align-h="center">
      <b-col sm="9" md="5" xl="3">
        <h3 class="font-weight-bold">Test Application</h3>
        <p class="font-weight-bold">
          You agree that Test Application will be able to:
        </p>
        <hr />
        <div>
          <h6 class="font-weight-bold">View your Spotify account data</h6>
          <p>
            Your name and username, your profile picture, how many followers you
            have on Spotify and your public playlists
          </p>
        </div>
        <hr />
        <p>
          You can remove this access at any time at spotify.com/account.
          <b-link href="#foo">accounts.xarples.com.</b-link>
        </p>
        <p>
          For more information about how Test Application can use your personal
          data, please see test's privacy policy.
        </p>

        <div class="mb-4">
          <b-avatar
            src="https://placekitten.com/300/300"
            size="4rem"
          ></b-avatar>
          <span>
            Logged in as Guillermo Lopez
            <b-link href="#foo">Not you?</b-link>
          </span>
        </div>

        <b-form>
          <b-button class="mb-4" block variant="primary" size="lg"
            >Allow</b-button
          >
          <b-button class="mb-4" block variant="light" size="lg"
            >Cancel</b-button
          >
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>