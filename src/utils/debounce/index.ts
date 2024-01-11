// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FuncType = (...args: any[]) => void

function debounce(func: FuncType, delay: number): FuncType {
  let timeoutId: NodeJS.Timeout

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function (this: any, ...args: any[]) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const context = this

    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

export default debounce
