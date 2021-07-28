import { ResponseError } from "superagent"

import { BidDataType } from "types"

export const BidsStore = {
  items: [] as BidDataType["items"],
  total: 0,
  data: null as null | string,

  createData(value: string) {
    this.data = value
  },

  getSuccess({ items, total }: BidDataType) {
    this.items = items
    this.total = total
    this.data = null
  },

  fail(e: ResponseError) {
    this.data = null
    console.log(e.status)
  },
}
