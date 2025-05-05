export type TProduct = IGetProduct[]

export interface IGetProduct {
  id: string
  title: string
  price: number
  image: string
  description?: string
}
