<script lang="ts">
import {
  defineComponent,
  reactive,
  ref,
  useAsync,
  useRoute
} from '@nuxtjs/composition-api'
import { useClient } from '~/components/clients/hooks'
import { useUpdateClient } from '~/components/clients/hooks/useUpdateClient'

export default defineComponent({
  setup() {
    const route = useRoute()
    const client = useAsync(
      () => useClient({ id: route.value.params.id }),
      'client'
    )

    return {
      client,
      handleUpdate() {
        useUpdateClient(client.value)
      }
    }
  }
})
</script>

<template>
  <main>
    <b-container v-if="!client">
      <b-row>
        <b-col>
          <p>Loading...</p>
        </b-col>
      </b-row>
    </b-container>
    <b-container v-if="client">
      <b-row align-h="between" align-v="center">
        <b-col class="mt-4">
          <nuxt-link to="/applications">
            <p>Go Back to Applications</p>
          </nuxt-link>
        </b-col>
      </b-row>
      <b-row align-h="between" align-v="center">
        <b-col sm="auto">
          <h1 class="font-weight-bold">{{ client.client_name }}</h1>
          <p>{{ client.client_description }}</p>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <span>Client ID: {{ client.client_id }}</span>
          <p>Client Secret: {{ client.client_secret }}</p>
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
                v-model="client.client_name"
              ></b-form-input>
            </b-form-group>

            <b-form-group label="Description:" label-for="description">
              <b-form-textarea
                id="description"
                placeholder="Enter an application description"
                rows="3"
                max-rows="6"
                v-model="client.client_description"
              ></b-form-textarea>
            </b-form-group>

            <b-form-group label="Redirect URIs:" label-for="redirect_uris">
              <b-form-tags
                input-id="redirect_uris"
                placeholder="Enter a redirect URI"
                v-model="client.redirect_uris"
              ></b-form-tags>
            </b-form-group>
            <b-button variant="primary" @click="handleUpdate">Update</b-button>
            <b-button variant="light">Cancel</b-button>
          </b-form>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>