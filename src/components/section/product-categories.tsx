"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const categories = [
    { id: "all", name: "Semua Produk" },
    { id: "traditional", name: "Best Seller" },
    { id: "Milk Base", name: "Milk base" },
    { id: "Sparkling Base", name: "Sparkling Base" },
]

export default function ProductCategories() {
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
