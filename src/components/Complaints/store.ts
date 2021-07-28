import { ResponseError } from "superagent"

import { ComplaintDataType } from "types"

export const ComplaintsStore = {
  items: [] as ComplaintDataType["items"],
  total: 0,
  data: null as null | string,

  createData(value: string) {
    this.data = value
  },

  getSuccess({ items, total }: ComplaintDataType) {
    this.items = items
    this.total = total
    this.data = null
  },

  fail(e: ResponseError) {
    this.data = null
    console.log(e.status)
  },
}
