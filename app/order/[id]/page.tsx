// import OrderDetail from "@/components/OrderDetail";

import OrderDetail from "@/components/Sections/order/OrderDetail";

// import OrderDetail from "@/app/components/OrderDetail";

export default function Page({ params }: { params: { id: string } }) {
  return <OrderDetail orderId={params.id} />;
}
