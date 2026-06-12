"use client";

import CancelledView from "@/components/Sections/AccountDashboard/orders/orderStatus/CancelledView";
import DeliveredView from "@/components/Sections/AccountDashboard/orders/orderStatus/DeliveredView";
import InprogressView from "@/components/Sections/AccountDashboard/orders/orderStatus/InprogressView";
import { useParams } from "next/navigation";



export default function OrderDetailsPage() {
  const params = useParams();

  const status = params.status as string;

  return (
    <>
      {status === "delivered" && <DeliveredView />}

      {status === "inprogress" && <InprogressView />}

      {status === "cancelled" && <CancelledView />}
    </>
  );
}