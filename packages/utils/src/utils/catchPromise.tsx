const catchPromise = async (promise: Promise<any>) => {
  try {
    const value = await promise
    return [undefined, value]
  } catch (err) {
    return [err, undefined]
  }
}

export default catchPromise
