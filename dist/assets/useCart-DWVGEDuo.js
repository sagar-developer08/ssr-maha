import "react";
import { useDispatch, useSelector } from "react-redux";
import { e as addtoCart, g as updateItem, h as clearCart } from "../entry-server.js";
import { toast } from "react-toastify";
function useCart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.products);
  function addItemstoCart(product) {
    let UpdatedProduct = { ...product };
    UpdatedProduct.qty = (product == null ? void 0 : product.qty) ? product == null ? void 0 : product.qty : 1;
    const CheckProdcut = cartItems == null ? void 0 : cartItems.filter(
      (item) => (item == null ? void 0 : item.id) == (UpdatedProduct == null ? void 0 : UpdatedProduct.id)
    );
    if (CheckProdcut == null ? void 0 : CheckProdcut.length) {
      toast.info("Product Already in Cart", {
        toastId: `AddtoCard${product == null ? void 0 : product.id}`
      });
      console.log("Item Is Includes");
      return;
    }
    dispatch(addtoCart(product));
    console.log("Added ");
  }
  async function updateItemsCart(id2, qty) {
    let UpdatedItems = await (cartItems == null ? void 0 : cartItems.map((item) => {
      if ((item == null ? void 0 : item.id) == id2) {
        return {
          ...item,
          qty
        };
      } else {
        return { ...item };
      }
    }));
    dispatch(updateItem(UpdatedItems));
    toast.success("Product Updated", {
      toastId: `UpdateCart${id2}`
    });
  }
  async function removeItemsCart(id2) {
    let RemoveItemFromCart = await (cartItems == null ? void 0 : cartItems.filter((item) => (item == null ? void 0 : item.id) !== id2));
    dispatch(updateItem(RemoveItemFromCart));
    toast.success("Product Removed", {
      toastId: `removeItemCart${id2}`
    });
  }
  function clearItemsCart() {
    dispatch(clearCart());
    toast.success("Cart Updated", {
      toastId: `CartClear${id}`
    });
  }
  return {
    addItemstoCart,
    updateItemsCart,
    removeItemsCart,
    clearItemsCart
  };
}
export {
  useCart as u
};
