<template>
  <div>
    <input
      type="text"
      :value="message"
      @change="change"
      placeholder="请输入"
      style="width: 300px;"
    />
  </div>
</template>

<script lang="ts" setup>
  import { useCookieState } from 'vue-hooks-plus'
  const [message, setMessage] = useCookieState('useCookieStateString')

  const change = (e: any) => {
    setMessage(e.target?.value)
  }
</script>
