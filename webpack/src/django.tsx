interface Data {
  app: string
  array: number[]
}

export const getData = () => {
  const elem = document.getElementById("json-data")!
  return JSON.parse(elem.textContent!) as Data
}

interface Memo {
  value: string
}

export const getMemo = () => {
  const elem = document.getElementById("json-data")!
  return JSON.parse(elem.textContent!) as Memo
}
