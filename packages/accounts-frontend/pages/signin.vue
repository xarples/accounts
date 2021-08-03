<script lang="ts">
import { defineComponent, useRoute, useRouter } from '@nuxtjs/composition-api'
import { useSignIn } from '~/components/users/hooks'

export default defineComponent({
  setup() {
    const router = useRouter()

    return {
      async handleSubmit(e: Event) {
        try {
          const form = new FormData(e.target as HTMLFormElement)
          const email = form.get('email') as string
          const password = form.get('password') as string

          await useSignIn({ email, password })

          if (window.location.search) {
            const search = window.location.search.replace('?redirect_to=', '')
            const redirectTo = decodeURIComponent(search)

            // router.replace(redirectTo)
            window.location.replace(redirectTo)

            return
          }

          router.replace('/')
        } catch (error) {
          alert(error.message)
        }
      }
    }
  }
})
</script>

<template>
  <b-container fluid class="h-100">
    <b-row class="h-100" align-v="center" align-h="center">
      <b-col sm="12" md="4">
        <h1 class="display-4 font-weight-bold">Hello,</h1>
        <h1 class="display-4 font-weight-bold">Welcome back</h1>
        <p>
          To keep conected with us please login with your personal info To keep
          conected with us please.
        </p>
        <b-form @submit.prevent="handleSubmit">
          <b-form-group label="Email address:" label-for="email">
            <b-form-input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
              required
              size="lg"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="mb-5" label="Password:" label-for="password">
            <b-form-input
              id="password"
              name="password"
              type="password"
              placeholder="Enter password"
              required
              size="lg"
            ></b-form-input>
          </b-form-group>
          <b-button type="submit" class="mb-4" block variant="primary" size="lg"
            >Sign in</b-button
          >
          <p class="text-center">
            Don't have an account?
            <b-link href="/signup">Sign up</b-link>
          </p>
          <p class="text-center">
            <b-link href="#foo">Forgot your password?</b-link>
          </p>
        </b-form>
      </b-col>
      <!-- <b-col
        :style="{
          background:
            'url(https://dashboard.sleeknote.com/static/images/Login-Illustration-1.svg)'
        }"
        class="h-100"
        cols="6"
      ></b-col> -->
    </b-row>
  </b-container>
</template>