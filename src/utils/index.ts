export const money = new Intl.NumberFormat("ru-Ru", {
  style: "currency",
  currency: "RUB",
})

export enum Keys {
  Token = "token",
  Type = "type",
  DateCreate = "Дата создания",
  DateComplite = "Срок исполнения",
  Price = "Стоимость",
}
