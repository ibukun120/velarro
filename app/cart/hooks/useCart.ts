import { useState, useMemo } from "react";
import { CartItemType, SavedItemType } from "@/types/cart";
// import { mockCartItems, savedItems } from "@/lib/cartData";
import { mockCartItems, savedItems, buyAgainItems as mockBuyAgainItems } from "@/lib/cartData";

export function useCart() {
  const [items, setItems] = useState<CartItemType[]>(mockCartItems);
  const [SavedItems, setSavedItems] = useState<SavedItemType[]>(savedItems);
  const [buyAgainItemsList, setBuyAgainItemsList] = useState(mockBuyAgainItems);

  const handleSelect = (id: string) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item,
      ),
    );
  };

  const handleQuantityChange = (id: string, amount: number) => {
    setItems(
      items.map((item) => {
        if (item.id === id) {
          const newQuantity = Math.max(1, item.quantity + amount);
          return { ...item, quantity: newQuantity };
        }
        return item;
      }),
    );
  };

  const handleDelete = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const handleSave = (id: string) => {
    const itemToSave = items.find((item) => item.id === id);
    if (itemToSave) {
      setItems(items.filter((item) => item.id !== id));
      const newSavedItem: SavedItemType = {
        id: itemToSave.id,
        title: itemToSave.title,
        specs: itemToSave.size || "",
        intensity: 0,
        description: itemToSave.notes || "",
        salesText: "",
        price: itemToSave.price,
        image: itemToSave.image,
      };
      setSavedItems([...SavedItems, newSavedItem]);
    }
  };

  const handleDeleteSavedItem = (id: string) => {
    setSavedItems(SavedItems.filter((item) => item.id !== id));
  };

  const handleDeleteBuyAgain = (id: string) => {
    setBuyAgainItemsList(buyAgainItemsList.filter((item) => item.id !== id));
  };

  const moveToCart = (id: string) => {
    const itemToMove = SavedItems.find((item) => item.id === id);
    if (itemToMove) {
      setSavedItems(SavedItems.filter((item) => item.id !== id));
      
      const newCartItem: CartItemType = {
        id: `saved-${itemToMove.id}`,
        title: itemToMove.title,
        image: itemToMove.image || "",
        size: itemToMove.specs,
        notes: itemToMove.description,
        deliveryDate: "30th March",
        inStock: true,
        price: itemToMove.price,
        quantity: 1,
        selected: false,
      };
      
      setItems([...items, newCartItem]);
    }
  };

  const moveBuyAgainToCart = (id: string) => {
    const itemToMove = buyAgainItemsList.find((item) => item.id === id);
    if (itemToMove) {
      setBuyAgainItemsList(buyAgainItemsList.filter((item) => item.id !== id));

      const newCartItem: CartItemType = {
        id: `buyagain-${itemToMove.id}`,
        title: itemToMove.title,
        image: (itemToMove).image || "",
        size: itemToMove.size || "",
        notes: itemToMove.notes || "",
        deliveryDate: "30th March",
        inStock: true,
        price: itemToMove.price,
        quantity: 1,
        selected: false,
      };

      setItems([...items, newCartItem]);
    }
  };

  const handleShare = (id: string) => {
    console.log("Shared item", id);
  };

  const handleDeselectAll = () => {
    setItems(items.map((item) => ({ ...item, selected: false })));
  };

  const selectedCount = useMemo(
    () => items.filter((i) => i.selected).length,
    [items],
  );

  const totalItems = items.length;

  const subtotal = useMemo(
    () => items.reduce((acc, item) => acc + item.price * item.quantity, 0),
    [items],
  );

  return {
    items,
    savedItems: SavedItems,
    buyAgainItems: buyAgainItemsList,
    selectedCount,
    totalItems,
    subtotal,
    handleSelect,
    handleQuantityChange,
    handleDelete,
    handleSave,
    handleDeleteSavedItem,
    handleDeleteBuyAgain,
    moveBuyAgainToCart,
    moveToCart,
    handleShare,
    handleDeselectAll,
  };
}
