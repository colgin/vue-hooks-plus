<template>
  <div>
    <p :style="darkMode ? theme.dark : theme.light">
      {{ darkMode ? 'dark' : 'light' }}
    </p>
    <div>
      <vhp-button @click="() => setDarkMode(true)">dark</vhp-button>
      <vhp-button style="margin-left: 16px;" @click="() => setDarkMode(false)">
        light
      </vhp-button>
      <vhp-button style="margin-left: 16px;" @click="() => setDarkMode(undefined)">
        跟随系统
      </vhp-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { useDarkMode } from 'vue-hooks-plus'

  const [darkMode, setDarkMode] = useDarkMode()

  const theme = {
    dark: {
      backgroundColor: '#000',
      color: 'white',
    },
    light: {
      backgroundColor: '#fff',
      color: 'black',
    },
  }
</script>

<style scoped lang="less"></style>
