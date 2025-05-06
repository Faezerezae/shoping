export type TDiscounts = IGetDiscounts[]

export interface IGetDiscounts {
  id: number
  code: string
  percentage: number
}
