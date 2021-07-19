<script lang="ts">
import { defineComponent, reactive, ref } from '@nuxtjs/composition-api'
import { useCreateClient } from '~/components/clients/hooks'

export default defineComponent({
  setup() {
    const clientName = ref('')
    const clientDescription = ref('')
    const redirectUris = ref<string[]>([])
    const applicationType = reactive({
      selected: null,
      options: [
        { value: null, text: 'Application Type' },
        { value: 'web', text: 'Web Application' },
        { value: 'ios', text: 'IOS', disabled: true },
        { value: 'android', text: 'Android', disabled: true }
      ]
    })

    return {
      clientName,
      clientDescription,
      applicationType,
      redirectUris,
      handleSubmit() {
        useCreateClient({
          clientName: clientName.value,
          clientDescription: clientDescription.value,
          applicationType: applicationType.selected!,
          redirectUris: redirectUris.value
        })
      }
    }
  }
})
</script>

<template>
  <b-container>
    <b-row align-h="between" align-v="center">
      <b-col sm="auto">
        <h1 class="font-weight-bold">Create Application</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
      </b-col>
      <!-- <b-col sm="auto">
        <b-button variant="primary">Create</b-button>
        <b-button variant="light">Cancel</b-button>
      </b-col> -->
    </b-row>
    <b-row>
      <b-col>
        <b-form @submit.prevent="handleSubmit">
          <b-form-group label="Application Type:" label-for="applicationType">
            <b-form-select
              id="applicationType"
              :options="applicationType.options"
              v-model="applicationType.selected"
              required
            ></b-form-select>
          </b-form-group>
          <b-form-group label="Name:" label-for="name">
            <b-form-input
              v-model="clientName"
              id="name"
              type="text"
              placeholder="Enter an application name"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group label="Description:" label-for="description">
            <b-form-textarea
              v-model="clientDescription"
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
          <b-button type="submit" variant="primary">Create</b-button>
          <b-button variant="light">Cancel</b-button>
        </b-form>
      </b-col>
    </b-row>
  </b-container>
</template>