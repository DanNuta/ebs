import { ICard } from './card';
import { Product } from './products';

export interface IContext {
  card: ICard[] | [];
  addProduct: (data: Product) => void;
  removeItem: (data: Product) => void;
  changeQty: (sign: string, data: Product) => void;
}
