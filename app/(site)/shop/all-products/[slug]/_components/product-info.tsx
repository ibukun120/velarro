'use client'

import { useState } from "react";
import { Product, ProductVariant } from "@/types/product";
import { Minus, Plus } from "lucide-react";
import { useCartStore } from "@/store/cart.store";
import { useCartUIStore } from "@/store/cart-ui.store";

type Props = {
    product: Product;
};

export default function ProductInfo({ product }: Props) {
    const openCart = useCartUIStore((s) => s.openCart);
    const [quantity, setQuantity] = useState(1);
    const [selectedVariant, setSelectedVariant] =
    useState<ProductVariant | undefined>(product.variants?.[0]);

    return (
        <div className="pt-16 text-center">
            {/* Brand */}
            <p className="text-md uppercase tracking-widest text-[#333333] mb-2">
                {product.brand}
            </p>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-none uppercase text-[#333333] mb-4">
                {product.title}
            </h1>

            {/* Main Price */}
            <div className="flex justify-center md:justify-center mb-6">
                <button className="border flex flex-col text-sm border-[#C59949] bg-[#C59949]/10 px-8 py-2 uppercase tracking-widest hover:border-black">
                    <span className="font-normal text-gray-500">
                        {selectedVariant?.label ?? "Single"}
                    </span>
                    <span className="text-lg">${selectedVariant?.price.toFixed(2)}</span>
                </button>
            </div>

            {/* Variant Selection */}
            {product.variants && (
                <div className="mb-6">
                    <div className="flex flex-wrap justify-center gap-3">
                        {product.variants.map((variant, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedVariant(variant)}
                                className={`w-auto border flex md:flex-col flex-row gap-4 md:gap-0 px-4 py-2 text-sm transition
                  ${selectedVariant === variant ? "border-black" : "border-[#C59949]"} hover:border-black`}
                            >
                                <span className="text-gray-500">{variant.label}</span>
                                <span className="font-medium">₹{variant.price.toFixed(2)}</span>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {/* Specs */}
            <div className="flex flex-wrap justify-center gap-4 mb-6 text-xs uppercase text-gray-600">
                <span>Format: {product.format}</span>
                <span>Ring Gauge: {product.ringGauge}</span>
                <span>Length: {product.lengthIn} in / {product.lengthCm} cm</span>
                <span>Diameter: {product.diameterCm} cm</span>
                <span>Duration: {product.duration}</span>
                <span>Intensity: {product.intensity}/5</span>
                <span>Body: {product.body}/5</span>
            </div>

            {/* Taste Notes, Pairings, Origin */}

            <div className="mb-6">
                <h3>Taste Notes:</h3>
                <ul className="flex items-center justify-center">
                    {product.tasteNotes?.map((note, i) => (
                        <li className="px-3 mb-4" key={i}>{note}</li>
                    )) || <li>N/A</li>}
                </ul>

                <h3>Pairings:</h3>
                <ul className="flex items-center justify-center">
                    {product.pairings?.map((pair, i) => (
                        <li className="px-3" key={i}>{pair}</li>
                    )) || <li>N/A</li>}
                </ul>

                <h3 className="mt-3">For:</h3>
                <ul className="flex items-center justify-center">
                    {product.for?.map((f, i) => (
                        <li className="px-3" key={i}>{f}</li>
                    )) || <li>N/A</li>}
                </ul>

                <h3 className="mt-3">Origin:</h3>
                <p>{product.origin}</p>
            </div>


            {/* Quantity & Add to Cart */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center justify-between border w-48 md:w-52 border-gray-300 rounded-md px-4 py-2 uppercase text-sm tracking-widest">
                    <button
                        type="button"
                        onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        className="disabled:opacity-40"
                        disabled={quantity === 1}
                    >
                        <Minus size={18} />
                    </button>

                    <span className="font-bold">{quantity}</span>

                    <button
                        type="button"
                        onClick={() => setQuantity((q) => q + 1)}
                    >
                        <Plus size={18} />
                    </button>
                </div>

                {/* Add to Cart Button */}
                <button
                    type="button"
                    onClick={() => {
                        if (!selectedVariant) return;

                        useCartStore.getState().addItem(
                            {
                                ...product,
                                selectedVariant,
                            },
                            quantity
                        );
                        openCart();
                    }}

                    className="w-52 bg-[#C59949] text-black py-2 uppercase text-md tracking-widest hover:opacity-90 transition hover:bg-[#333333] hover:text-neutral-1 rounded-sm"
                >
                    Add to cart
                </button>
            </div>

            {/* Shipping Info */}
            <p className="mt-3 text-[#333333] text-sm">
                Get free shipping when you spend $500 or more!
            </p>
        </div>
    );
}
