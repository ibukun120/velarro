"use client";

import { useState } from "react";
import Container from "@/components/Layouts/Container"; 
import { H1, Text } from "@/components/ui/Typography/Typography";
import Button from "@/components/ui/Buttons/CommonButtons";
import AddressCard from "@/components/Sections/AccountDashboard/addresses/AddressCard";
import AddressModal from "@/components/Sections/AccountDashboard/addresses/AddressModal";
import { Address } from "@/components/Sections/AccountDashboard/addresses/address.types";
import { initialAddresses } from "@/components/Sections/AccountDashboard/addresses/address.data";

type FormEvent = React.ChangeEvent<
  HTMLInputElement | HTMLSelectElement
>;

export default function AddressPage() {
  const [addresses, setAddresses] = useState(initialAddresses);

  const [editingAddress, setEditingAddress] = useState<Address | null>(null);
  const [isAddMode, setIsAddMode] = useState(false);

  const [formData, setFormData] = useState<Omit<Address, "id">>({
    title: "",
    name: "",
    address: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    isDefault: false,
  });

  /* ================= HANDLERS ================= */

  const handleChange = (e: FormEvent) => {
    const { name, value } = e.target;

    setFormData((prev) => {
      if (name === "country") {
        return { ...prev, country: value, state: "", city: "" };
      }

      if (name === "state") {
        return { ...prev, state: value, city: "" };
      }

      return { ...prev, [name]: value };
    });
  };

const handleSetDefault = (id: number) => {
  setAddresses((prev) =>
    prev.map((a) => ({
      ...a,
      isDefault: a.id === id,
    }))
  );
};

  const handleDelete = (id: number) => {
    if (!confirm("Delete this address?")) return;
    setAddresses((prev) => prev.filter((a) => a.id !== id));
  };

  const handleEdit = (addr: Address) => {
    setEditingAddress(addr);
    setIsAddMode(false);

    // { id, ...rest } = addr; // Exclude id from formData
    const {...rest } = addr;
    setFormData(rest);
  };

  const handleAdd = () => {
    setIsAddMode(true);
    setEditingAddress({} as Address);

    setFormData({
      title: "",
      name: "",
      address: "",
      phone: "",
      city: "",
      state: "",
      zip: "",
      country: "",
      isDefault: false,
    });
  };

  const handleSave = () => {
    if (!formData.name || !formData.address) {
      alert("Please fill required fields");
      return;
    }

    if (isAddMode) {
      setAddresses((prev) => [
        ...prev,
        { ...formData, id: Date.now(), isDefault: false },
      ]);
    } else if (editingAddress) {
      setAddresses((prev) =>
        prev.map((a) =>
          a.id === editingAddress.id ? { ...a, ...formData } : a
        )
      );
    }

    setEditingAddress(null);
  };

  /* ================= UI ================= */
const defaultAddress = addresses.find((a) => a.isDefault);

const savedAddresses = addresses.filter(
  (a) => !a.isDefault
);
 return (
  <div>
    <Container>
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <H1 className="mb-2">Address</H1>

          <Text className="text-neutral-8">
            Manage your shipping and billing locations
          </Text>
        </div>

        <Button
          variant="product"
          onClick={handleAdd}
          className="flex items-center justify-center gap-2 rounded-xs"
        >
          ADD ADDRESS
        </Button>
      </div>

      {/* DEFAULT ADDRESS */}
      {defaultAddress && (
        <div className="mb-10">
          <Text className="mb-4 text-[26px] font-light text-neutral-13">
            Default Address
          </Text>

          <AddressCard
            addr={defaultAddress}
            isActive
            onEdit={() => handleEdit(defaultAddress)}
            onDelete={() => handleDelete(defaultAddress.id)}
            onSetDefault={() =>
              handleSetDefault(defaultAddress.id)
            }
          />
        </div>
      )}

      {/* SAVED ADDRESSES */}
      <div>
        <Text className="mb-4 text-[26px] font-light text-neutral-13">
          Saved Addresses
        </Text>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {savedAddresses.map((addr) => (
            <AddressCard
              key={addr.id}
              addr={addr}
              isActive={false}
              onEdit={() => handleEdit(addr)}
              onDelete={() => handleDelete(addr.id)}
              onSetDefault={() =>
                handleSetDefault(addr.id)
              }
            />
          ))}
        </div>
      </div>
    </Container>

    {/* MODAL */}
    {editingAddress !== null && (
      <AddressModal
        isAddMode={isAddMode}
        formData={formData}
        onChange={handleChange}
        onClose={() => setEditingAddress(null)}
        onSave={handleSave}
      />
    )}
  </div>
);
}