/**
 * Promise or not
 */
export type Awaitable<T> = T | PromiseLike<T>
/**
 * null undefind or the given type
 */
export type Nullable<T> = T | null | undefined
/**
 * the given type array or not
 */
export type Arrayable<T> = T | Array<T>
/**
 * function return the given type
 */
// eslint-disable-next-line @typescript-eslint/no-invalid-void-type
export type Fn<T = void> = () => T
