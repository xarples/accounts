<script lang="ts">
import { defineComponent, useAsync, useRouter } from '@nuxtjs/composition-api'
import { useClients } from '~/components/clients/hooks'

export default defineComponent({
  setup() {
    const router = useRouter()
    const clients = useAsync(useClients, 'clients')
    const applicationTypes = {
      web: 'Web Application'
    }

    return {
      clients,
      applicationTypes,
      handleClick(id: string) {
        router.push(`/applications/${id}`)
      }
    }
  }
})
</script>

<template>
  <main>
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
      <b-row
        class="mt-4 mb-4"
        align-h="between"
        align-v="center"
        v-if="!clients.length"
      >
        <b-col sm="auto">
          <h2>No Applications to show</h2>
        </b-col>
      </b-row>
      <b-row class="mb-4" v-if="clients.length">
        <b-col
          class="mb-4"
          cols="12"
          v-for="client in clients"
          :key="client.client_id"
          @click="handleClick(client.client_id)"
        >
          <b-list-group>
            <b-list-group-item href="#" class="flex-column align-items-start">
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{{ client.client_name }}</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-1">
                {{ client.client_description }}
              </p>
              <small class="text-muted"
                >Client ID: {{ client.client_id }}</small
              >
            </b-list-group-item>
          </b-list-group>
        </b-col>
      </b-row>
    </b-container>
  </main>

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