<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    const redirectUris = ref<string[]>([])

    return {
      redirectUris
    }
  }
})
</script>

<template>
  <b-container>
    <b-row align-h="between" align-v="center">
      <b-col sm="auto">
        <h1 class="font-weight-bold">Test Application</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </b-col>
      <!-- <b-col sm="auto">
        <b-button variant="primary">Update</b-button>
        <b-button variant="light">Cancel</b-button>
      </b-col> -->
    </b-row>
    <b-row>
      <b-col>
        <span>Client ID: 18a6bfabe1464c8f8ab3dc7b815d5871</span>
        <p>Client Secret: 18a6bfabe1464c8f8ab3dc7b815d5871</p>
      </b-col>
    </b-row>
    <b-row>
      <b-col>
        <b-form>
          <b-form-group label="Name:" label-for="name">
            <b-form-input
              id="name"
              type="text"
              placeholder="Enter an application name"
              required
            ></b-form-input>
          </b-form-group>

          <b-form-group label="Description:" label-for="description">
            <b-form-textarea
              id="description"
              placeholder="Enter an application description"
              rows="3"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>

          <b-form-group label="Redirect URIs:" label-for="redirectUris">
            <b-form-tags
              input-id="redirectUris"
              placeholder="Enter a redirect URI"
              v-model="redirectUris"
            ></b-form-tags>
          </b-form-group>
          <b-button variant="primary">Update</b-button>
          <b-button variant="light">Cancel</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>