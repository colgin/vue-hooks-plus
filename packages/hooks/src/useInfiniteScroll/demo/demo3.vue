<template>
  <div>
    <vhp-button @click="() => reload()" style="margin-bottom: 8px;"> 重置 </vhp-button>
    <div style="margin-bottom: 16px;">变化就会重置：<input type="text" v-model="text"></div>
    <p v-if="loading" />
    <div v-for="item in data?.list" :key="item" class="item"> {{ item }}行</div>
    <div style="margin-top: 8px;">
      <vhp-button
        v-if="data?.nextId"
        type="button"
        @click="() => loadMore()"
        :disabled="loadingMore"
      >
        {{ loadingMore ? 'Loading more...' : 'Click to load more' }}
      </vhp-button>
      <p v-else> <span v-if="!data?.nextId">No more data</span> </p>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import { useInfiniteScroll } from '../../index'

  interface Result {
    list: string[]
    nextId: string | undefined
  }

  const resultData = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13']

  function getLoadMoreList(nextId: string | undefined, limit: number): Promise<Result> {
    let start = 0
    if (nextId) {
      start = resultData.findIndex(i => i === nextId)
    }
    const end = start + limit
    const list = resultData.slice(start, end)
    const nId = resultData.length >= end ? resultData[end] : undefined
    return new Promise(resolve => {
      setTimeout(() => {
        resolve({
          list,
          nextId: nId,
        })
      }, 1000)
    })
  }

  const text = ref('')
  const { data, loading, loadMore, loadingMore, reload } = useInfiniteScroll(
    d => getLoadMoreList(d?.nextId, 4),
    {
      reloadDeps: [text],
    },
  )
</script>

<style scoped lang="less">
  .item {
    padding: 12px;
    border: 1px solid #f5f5f5;
    text-align: center;
  }
</style>
