type GetSamePropertiesKey<T extends Record<string, any>, V extends Record<string, any>> = Extract<keyof T, keyof V> &
  Extract<keyof V, keyof T>

type MergeArray<AL extends any[], BL extends any[]> = AL extends any[]
  ? BL extends any[]
    ? Merge<AL[0], BL[0]>[]
    : AL
  : AL | BL

type MergeSameProperties<T extends Record<string, any>, V extends Record<string, any>> = {
  [key in GetSamePropertiesKey<T, V>]?: [T] extends [T?]
    ? [V] extends [V?]
      ? MergeArray<T[key], V[key]>
      : T[key] | V[key]
    : T[key] | V[key]
}

type GetDiffPropertiesKey<T extends Record<string, any>, V extends Record<string, any>> =
  | Exclude<keyof T, keyof V>
  | Exclude<keyof V, keyof T>
type MergeDiffProperties<T extends Record<string, any>, V extends Record<string, any>> = {
  [key in GetDiffPropertiesKey<T, V>]?: (T & V)[key]
}
export type Merge<T extends Record<string, any>, V extends Record<string, any>> = MergeSameProperties<T, V> &
  MergeDiffProperties<T, V>

export type MergeMultiple<T extends any[], P = {}> = T extends []
  ? P
  : T extends [infer B, ...(infer C)] // @ts-ignore
  ? MergeMultiple<C, Merge<B, P>>
  : {}
