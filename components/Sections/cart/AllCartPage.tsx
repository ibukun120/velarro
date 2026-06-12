"use client";

import React from "react";
import Container from "@/components/Layouts/Container";
import EmptyCart from "@/components/Sections/cart/EmptyCart";
import { useCart } from "@/app/cart/hooks/useCart";
import CartContainer from "@/components/Sections/cart/CartContainer";
import YourItemsSection from "@/components/Sections/cart/YourItemsSection";
import NoInternet from "@/components/Sections/cart/NoInternet";
import Footer from "./Footer";
// import VelarroFooter from "@/components/ui/Footers/VelarroFooter";

export default function AllCartPage() {
  const [isOnline, setIsOnline] = React.useState(true);

  React.useEffect(() => {
    setIsOnline(typeof navigator !== "undefined" ? navigator.onLine : true);

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);
  const {
    items,
    savedItems,
    buyAgainItems,
    totalItems,
    subtotal,
    handleSelect,
    handleQuantityChange,
    handleDelete,
    handleSave,
    handleDeleteBuyAgain,
    handleDeleteSavedItem,
    moveBuyAgainToCart,
    handleShare,
    moveToCart,
    handleDeselectAll,
  } = useCart();

  if (!isOnline) {
    return (
      <div
        className={`bg-primary-50 flex flex-col min-h-screen mt-16`}
        style={{ fontFamily: "var(--font-family-base)" }}
      >
        <div className="flex-1">
          <NoInternet />
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div
      className={` bg-primary-50 mt-16`}
      style={{ fontFamily: "var(--font-family-base)" }}
    >
        <Container>
          {/* {items.length > 0 ? ( */}
          {false ? (
            <CartContainer
              items={items}
              totalItems={totalItems}
              subtotal={subtotal}
              onSelect={handleSelect}
              onQuantityChange={handleQuantityChange}
              onDelete={handleDelete}
              onSave={handleSave}
              onShare={handleShare}
              onDeselectAll={handleDeselectAll}
            />
          ) : (
            <EmptyCart />
          )}

          {/* Your items Section */}
          <YourItemsSection
            savedItems={savedItems}
            onDeleteSavedItem={handleDeleteSavedItem}
            onMoveToCart={moveToCart}
            buyAgainItems={buyAgainItems}
            onDeleteBuyAgain={handleDeleteBuyAgain}
            onMoveBuyAgainToCart={moveBuyAgainToCart}
          />
        </Container>
      {/* <VelarroFooter /> */}
    </div>
  );
}
