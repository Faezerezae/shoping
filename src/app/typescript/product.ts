export interface IProductList {
  data: IGetProduct[]
  first: number | null;
  items: number | null;
  last: number | null;
  next: number | null;
  pages: number;
  prev: number | null;
}

export interface IGetProduct {
  id: string
  title: string
  price: number
  image: string
  description?: string
}
