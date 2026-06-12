import NavbarPage from "../components/navbar/NavbarPage";


export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <NavbarPage />
      {children}
    </>
  );
}
