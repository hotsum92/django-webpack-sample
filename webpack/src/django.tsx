interface Data {
  app: string
  array: number[]
}

export const getData = () => {
  const elem = document.getElementById("json-data")!
  return JSON.parse(elem.textContent!) as Data
}
