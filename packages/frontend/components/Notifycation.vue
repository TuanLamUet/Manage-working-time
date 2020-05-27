<template>
  <v-app>
    <v-alert type="error">
      {{ message }}
    </v-alert>
  </v-app>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    message: {
      type: String
    }
  }
}
</script>
