"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
    { id: "all", name: "Semua Foto" },
    { id: "workshop", name: "Pelatihan" },
    { id: "cafe", name: "Jamusari" },
    { id: "community", name: "Kegiatan" },
    { id: "products", name: "Produk" },
]

export default function GalleryCategories() {
    const [activeCategory, setActiveCategory] = useState("all")

    return (
        <section className="py-8 bg-background border-b">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-2">
                    {categories.map((category) => (
                        <Button
                            key={category.id}
                            variant={activeCategory === category.id ? "default" : "outline"}
                            onClick={() => setActiveCategory(category.id)}
                            className="mb-2"
                        >
                            {category.name}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    )
}
