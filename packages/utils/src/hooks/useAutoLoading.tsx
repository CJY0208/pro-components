import { useDebounce, useMemoizedFn, useSafeState } from 'ahooks'
import { run } from '@cjy0208/tools'

export interface UseAutoLoadingConfig {
  loading?: any
  action?: (...args: any) => any
}

export default function useAutoLoading({ loading: propLoading, action }: UseAutoLoadingConfig = {}) {
  const [loading, setLoading] = useSafeState(false)
  const debouncedLoading = useDebounce(loading, {
    wait: 100,
  })

  const onAction = useMemoizedFn(async (...args: any[]) => {
    setLoading(true)
    try {
      await run(action, undefined, ...args)
    } catch (err) {
      console.error(err)
    }
    setLoading(false)
  })

  return {
    loading: propLoading ?? (loading === false ? loading : debouncedLoading),
    onAction,
  }
}
