interface Data {
  app: string
  array: number[]
}

export const getData = () => {
  const data = `"{{ data | safe }}"`.slice(1).slice(0, -1)
  return JSON.parse(data) as Data
}
