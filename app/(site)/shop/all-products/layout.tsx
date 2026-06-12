export default function AllProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
     <section className="max-w-[1440px] mx-auto px-4 lg:px-8">
      {children}
    </section>
  );
}