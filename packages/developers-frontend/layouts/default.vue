<script lang="ts">
import { defineComponent, onMounted } from '@nuxtjs/composition-api'

export default defineComponent({
  setup() {
    function messageHandler(evt: MessageEvent<any>) {
      if (evt.origin != 'http://localhost:5000' || !evt.data.type) return

      if (evt.data.type === 'authorization_response') {
        ;(evt.source as Window).close()

        if (evt.data.error) {
          // TODO: handle the error
        }

        const params = new URLSearchParams({
          code: evt.data.response.code
        })

        if (evt.data.response.state) {
          params.set('state', evt.data.response.state)
        }

        window.removeEventListener('message', messageHandler, false)

        window.location.replace(`/callback?${params.toString()}`)
      }
    }

    onMounted(() => {
      window.addEventListener('message', messageHandler, false)
    })
    return {
      handleSignIn() {
        window.open(
          '/signin',
          '_new',
          'location=yes,height=570,width=520,scrollbars=yes,status=yes'
        )
      }
    }
  }
})
</script>


<template>
  <main>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-button size="sm" class="my-2 my-sm-0" @click="handleSignIn"
              >Sign In</b-button
            >
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <Nuxt />
  </main>
</template>