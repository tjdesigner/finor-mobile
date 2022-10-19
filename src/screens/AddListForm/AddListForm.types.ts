export interface IMoviment {
  id: string
  nameList: string
  entries: IEntriesOutputs[]
  outputs: IEntriesOutputs[]
}

export interface IEntriesOutputs {
  itemName: string
  price: number
}

export interface IMovimentsList {
  value: IMoviment[]
}
