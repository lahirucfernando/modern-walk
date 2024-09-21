<template>
  <v-layout class="rounded rounded-md">
    <v-app-bar>
      <v-toolbar-title class="text-center title-style">
        <router-link to="/home" class="text-decoration-none">
          Modern Walk
        </router-link>
      </v-toolbar-title>
    </v-app-bar>

    <v-main class="d-flex align-center justify-center">
      <router-view />
    </v-main>
  </v-layout>
</template>

<script setup></script>

<style scoped lang="scss">
.title-style {
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: 700;
  text-align: center;
}
</style>
