type Props = {
  closeDropdown: () => void;
};

export default function DiscoverDropDown({ closeDropdown }: Props) {
  return (
    <div className="h-full p-6 flex flex-col md:flex-row gap-6">
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2">Discover Section 1</h3>
        <p className="text-gray-600">Content for Discover goes here.</p>
      </div>
      <div className="flex-1" onClick={closeDropdown}>
        <h3 className="text-lg font-semibold mb-2">Discover Section 2</h3>
        <p className="text-gray-600">More content for Discover here.</p>
      </div>
    </div>
  );
}
