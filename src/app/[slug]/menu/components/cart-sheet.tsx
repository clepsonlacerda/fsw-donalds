import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useContext } from "react";
import { CartContext } from "../contect/cart";
import CartProductItem from "../[productId]/components/cart-product-item";

const CartSheet = () => {

  const { isOpen, toggleCart, products } = useContext(CartContext);
  

  return ( 
    <Sheet open={isOpen} onOpenChange={toggleCart}>
        <SheetContent className="w-[80%]">
          <SheetHeader>
            <SheetTitle className="text-left">Sacola</SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
          <div className="py-5">
          {products.map((product) => (
            <CartProductItem key={product.id} product={product} />
          ))}
          </div>
        </SheetContent>
      </Sheet>
   );
}
 
export default CartSheet;