<template>
	<div style="margin-top: 16px;"><input type="text" v-model="text" /></div>
	<div style="margin-top: 16px;">读取值：{{ data }}</div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import { useRequest } from 'vue-hooks-plus'

function getUsername(): Promise<string> {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(`${String(Date.now())}`)
		}, 1000)
	})
}

const text = ref('')

const { data, run } = useRequest(() => getUsername(), {
	throttleWait: 300,
	manual: true,
})

watch(text, () => {
	run()
})
</script>

<style scoped lang="less"></style>
