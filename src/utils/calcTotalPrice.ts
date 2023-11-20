import { CartItem } from "../redux/slices/cartSlice";

export const calcTotalPrice = (items: CartItem[]) => {
  return items.reduce((acc, obj) => {
    return obj.price * obj.count + acc;
  }, 0);
};
