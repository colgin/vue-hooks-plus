import { ref } from 'vue'
import { sleep } from '@/utils/sleep'
import useDebounce from '..'

describe('useDebounce', () => {
  it('should be defined', () => {
    expect(useDebounce).toBeDefined()
  })
  it('should useDebounce work', async () => {
    const count = ref(0)
    const debouncedCount = useDebounce(count, { wait: 200 })
    count.value++
    count.value++
    count.value++
    count.value++
    count.value++
    expect(count.value).toEqual(5)
    expect(debouncedCount.value).toEqual(0)
    await sleep(300)
    expect(debouncedCount.value).toEqual(5)
  })
})
