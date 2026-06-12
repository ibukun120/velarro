
export default function ProductPageBg() {
    return (
        <div className='lg:mb-[250px] md:mb-[400px] mb-[260px] text-neutral-1'>
            <div
                className="absolute top-0 left-0 right-0 h-[80vh] bg-cover bg-center"
                style={{ backgroundImage: "url('/images/all-prod-bg.avif')" }}
            />

            {/* Overlay */}
            <div className="absolute top-0 left-0 right-0 h-[80vh] bg-linear-to-b from-black/80 via-black/20 to-black/50" />

            {/* Content */}
            <div className="relative z-10 pt-[35vh] text-center">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider md:tracking-[0.2em]">
                    Shop | All Products
                </h1>
                <p className="mt-4 text-lg md:text-2xl tracking-wide md:tracking-[0.05em]">
                    Shop All Cigars & Luxury Accessories – Premium Selection
                </p>
            </div>
        </div>
    )
}
