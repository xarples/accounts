<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import { useClients } from '~/components/clients/hooks'

export default defineComponent({
  setup() {
    const clients = useAsync(useClients, 'clients')
    const applicationTypes = {
      web: 'Web Application'
    }

    return {
      clients,
      applicationTypes
    }
  }
})
</script>

<template>
  <b-container class="bv-example-row">
    <b-row class="mt-4 mb-4" align-h="between" align-v="center">
      <b-col sm="auto">
        <h2>Applications</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </b-col>
      <b-col sm="auto">
        <b-form inline>
          <b-form-input
            id="input-1"
            class="mb-2 mr-sm-2 mb-sm-0"
            type="text"
            placeholder="Search"
          />
          <b-button variant="primary">Create App</b-button>
        </b-form>
      </b-col>
    </b-row>
    <b-row class="mb-4">
      <b-col
        class="mb-4"
        cols="12"
        v-for="client in clients"
        :key="client.client_id"
      >
        <b-list-group>
          <b-list-group-item href="#" class="flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">{{ client.name }}</h5>
              <small class="text-muted">3 days ago</small>
            </div>
            <p class="mb-1">
              {{ client.description }}
            </p>
            <small class="text-muted">Client ID: {{ client.client_id }}</small>
          </b-list-group-item>
        </b-list-group>

        <!-- <b-card
          class="shadow-sm"
          :title="client.name"
          :sub-title="client.description"
        >
          <b-card-text>
            <p>{{ applicationTypes[client.type] }}</p>
            <p>Client ID: {{ client.client_id }}</p>
            <p>{{ client.created_at }}</p>
          </b-card-text>
        </b-card> -->
      </b-col>
    </b-row>
  </b-container>
  <!-- <div>
    <b-button variant="primary">Create App</b-button>
    <div>
      <b-card title="Card title" sub-title="Some quick example text.">
        <b-card-text>
          Some quick example text to build on the <em>card title</em> and make
          up the bulk of the card's content.
        </b-card-text>
      </b-card>
    </div>
  </div> -->
</template>