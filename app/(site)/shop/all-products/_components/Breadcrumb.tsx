export default function Breadcrumbs() {
  return (
    <nav className="text-md text-gray-500 mb-8 flex items-center justify-center">
      <ul className="flex gap-2 items-center">
        <li>Home</li>
        <li>/</li>
        <li>Shop</li>
        <li>/</li>
        <li className="text-black font-medium">All Products</li>
      </ul>
    </nav>
  );
}