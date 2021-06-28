<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useCreateUser } from '~/components/users/hooks'

export default defineComponent({
  setup() {
    return {
      async handleSubmit(e: Event) {
        const form = new FormData(e.target as HTMLFormElement)

        await useCreateUser({
          firstName: form.get('firstName') as string,
          lastName: form.get('lastName') as string,
          email: form.get('email') as string,
          password: form.get('password') as string
        })
      }
    }
  }
})
</script>

<template>
  <b-container fluid class="h-100">
    <b-row class="h-100" align-v="center" align-h="center">
      <b-col md="4">
        <h1 class="display-4 font-weight-bold">Hello,</h1>
        <h1 class="display-4 font-weight-bold">Welcome back</h1>
        <p>
          To keep conected with us please login with your personal info To keep
          conected with us please.
        </p>
        <b-form @submit.prevent="handleSubmit">
          <b-row>
            <b-col>
              <b-form-group label="First name:" label-for="firstName">
                <b-form-input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter first name"
                  required
                  size="lg"
                ></b-form-input>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group label="Last name:" label-for="lastName">
                <b-form-input
                  id="lastName"
                  name="lastName"
                  type="text"
                  placeholder="Enter last name"
                  required
                  size="lg"
                ></b-form-input>
              </b-form-group>
            </b-col>
          </b-row>

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
            >Sign up</b-button
          >
          <p class="text-center">
            Have an account?
            <b-link href="/signin">Sign in</b-link>
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