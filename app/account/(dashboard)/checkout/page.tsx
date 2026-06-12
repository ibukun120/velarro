'use client'

import dynamic from 'next/dynamic';

const CheckOutPageClient = dynamic(
  () => import('./_component/checkout-page-client'),
  { ssr: false }
);

export default function Page() {
  return <CheckOutPageClient />;
}
