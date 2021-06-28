<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    return {}
  }
})
</script>

<template>
  <b-container class="bv-example-row">
    <b-row class="mb-4" align-h="end" align-v="center">
      <!-- <b-col sm="auto">
        <h1>Applications</h1>
      </b-col> -->
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
    <b-card>
      <h2>Applications</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <b-row class="mb-4" v-for="i in 4" :key="i">
        <b-col>
          <b-card
            title="Card title"
            sub-title="Some quick example text."
            img-src="https://picsum.photos/150/150/?image=25"
            img-left
          >
            <b-card-text>
              Some quick example text to build on the <em>card title</em> and
              make up the bulk of the card's content.
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </b-card>
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