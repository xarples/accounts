<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'

export default defineComponent({})
</script>

<template>
  <b-container fluid class="h-100">
    <b-row class="h-100" align-v="center" align-h="between">
      <b-col cols="4" offset="1">
        <h1 class="display-4 font-weight-bold">Hello,</h1>
        <h1 class="display-4 font-weight-bold">Welcome back</h1>
        <p>
          To keep conected with us please login with your personal info To keep
          conected with us please.
        </p>
        <b-form>
          <b-row>
            <b-col>
              <b-form-group label="First name:" label-for="firstName">
                <b-form-input
                  id="firstName"
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
              type="email"
              placeholder="Enter email"
              required
              size="lg"
            ></b-form-input>
          </b-form-group>
          <b-form-group class="mb-5" label="Password:" label-for="password">
            <b-form-input
              id="password"
              type="password"
              placeholder="Enter password"
              required
              size="lg"
            ></b-form-input>
          </b-form-group>
          <b-button class="mb-4" block variant="primary" size="lg"
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
      <b-col
        :style="{
          background:
            'url(https://dashboard.sleeknote.com/static/images/Login-Illustration-1.svg)'
        }"
        class="h-100"
        cols="6"
      ></b-col>
    </b-row>
  </b-container>
</template>