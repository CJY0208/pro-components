/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-for-in-array */
import React, { createContext, useState, useContext, useMemo, useEffect, useRef } from 'react'
import { EventBus, random } from '@cjy0208/tools'

export type SharedHook<T extends any = any, P extends any = any> = (hookArg: P) => T

type Deps<T> = (sharedHook: T) => unknown[]
export interface UseSharedHook<T> {
  (depsFn?: Deps<T>): T
  Provider: React.FC
}

export interface CreateSharedHookOptions<P> {
  initialState?: P
  context?: any
}

let sharedHookIdCounter = 0

export function createSharedContext() {
  const ctx = createContext<any>(undefined)
  const { Provider, Consumer } = ctx
  const hooks = new Map<any, any>()

  function SharedHookProvider({ value, children, filter = () => true }: any) {
    const eventBusRef = useRef<any>({})
    return (
      <Provider
        value={{
          eventBusRef,
          hooks,
          currentValue: value,
        }}
      >
        {[
          // @ts-ignore
          ...hooks.values(),
        ]
          .filter(filter)
          .map(sharedHook => (
            <sharedHook.Executor
              key={sharedHook?.id}
              onUploadEventBus={(eventBus: any) => {
                eventBusRef.current[sharedHook?.id] = eventBus
              }}
            />
          ))}
        {children}
      </Provider>
    )
  }

  return {
    register: (sharedHook: any) => {
      hooks.set(sharedHook?.id, sharedHook)
    },
    hooks,
    Provider: SharedHookProvider,
    Consumer,
    reactContext: ctx,
  }
}

function useSharedHookState(ctx: any, sharedHookId: any, depsFn?: any) {
  const { eventBusRef } = useContext(ctx.reactContext) ?? {}
  const eventBus = eventBusRef?.current?.[sharedHookId]
  const [state, setState] = useState(eventBus?.currentState)
  const depsFnRef = useRef(depsFn)
  depsFnRef.current = depsFn
  const depsRef = useRef([])

  useEffect(() => {
    if (!eventBus) {
      return
    }
    // https://github.com/umijs/hox/blob/d0f55822800a636161e9df5368f032b83a770a1b/src/create-sharedHook.tsx
    const listener = (nextState: any) => {
      if (!depsFnRef.current) {
        setState(nextState)
        return
      }

      const oldDeps = depsRef.current
      const newDeps = depsFnRef.current(nextState)
      if (compare(oldDeps, newDeps)) {
        setState(nextState)
      }
      depsRef.current = newDeps
    }
    eventBus.on('update', listener)

    return () => eventBus.off('update', listener)
  }, [eventBus])

  return state
}

export default function createSharedHook<T, P>(
  useCustomizedHook: SharedHook<T, P>,
  options?: CreateSharedHookOptions<P>,
) {
  const ctx = options?.context ?? createSharedContext()

  const sharedHookId = `sharedHook:${random(0, 99999)}:${sharedHookIdCounter++}`

  function Executor({ onUploadEventBus = (eventBus: any) => null }) {
    const hookState = useCustomizedHook(options?.initialState as any)
    const eventBus = useMemo(() => {
      const eventBus = new EventBus()

      onUploadEventBus(eventBus)

      return eventBus
    }, [])

    // @ts-ignore
    eventBus['currentState' as any] = hookState

    useEffect(() => {
      eventBus.emit('update', hookState)
    }, [hookState])

    return null
  }

  Object.defineProperty(Executor, 'name', {
    value: useCustomizedHook.name || Executor.name,
  })

  const useSharedHook: UseSharedHook<T> = depsFn => {
    const state = useSharedHookState(ctx, sharedHookId, depsFn)

    return state
  }

  ctx.register({
    id: sharedHookId,
    Executor,
    hook: useSharedHook,
  })

  useSharedHook.Provider = ctx.Provider
  return useSharedHook
}

// 对比 deps 变化
function compare(oldDeps: any[], newDeps: any[]) {
  if (oldDeps.length !== newDeps.length) {
    return true
  }
  for (const index in newDeps) {
    if (oldDeps[index] !== newDeps[index]) {
      return true
    }
  }
  return false
}
