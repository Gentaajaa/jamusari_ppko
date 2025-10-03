"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"
import { useState } from "react"


const bestSellers = [
    {
        id: 1,
        name: "Rosella Freshmilk",
        description: "Perpaduan bunga rosella dengan susu full cream yang creamy dan menyehatkan.",
        price: "Rp 10.000",
        image: "/images/produk/rosella_freshmilk.png",
        recipe: [
            "Sari Rosella",
            "Susu Full Cream",
            "Es Batu",
            "Susu Kental Manis",
        ],
        benefits: [
            "Meningkatkan imun tubuh",
            "Membantu pencernaan",
            "Kaya antioksidan",
            "Menyegarkan tubuh",
            "Menjaga kesehatan tulang",
        ],
    },
    {
        id: 2,
        name: "Lemon Butterfly",
        description: "Lemon Butterfly, segarnya lemon berpadu dengan sari bunga telang yang menyejukkan.",
        price: "Rp 9.000",
        image: "/images/produk/lemon_butterfly.png",
        recipe: [
            "Sari Telang",
            "Air Dingin",
            "Es Batu",
            "Sirup Gula Tebu",
            "Perasan Lemon",
        ],
        benefits: [
            "Menyegarkan Tubuh",
            "Mengurangi Stress",
            "Melancarkan pencernaan",
            "Kaya Antioksidan",
            "Menjaga Imun Tubuh",
        ],
    },
    {
        id: 3,
        name: "Rainbow Freshmilk",
        description: "Rainbow Freshmilk, paduan susu creamy dengan rempah hangat yang menyegarkan.",
        price: "Rp 10.000",
        image: "/images/produk/rainbow_freshmilk.png",
        recipe: [
            "Ramuan Rainbow (Secang, Jahe, Cengkeh, Kapulaga dan Kayu Manis)",
            "Susu Kental Manis",
            "Susu Full Cream",
            "Es Batu",
        ],
        benefits: [
            "Menghangatkan Tubuh",
            "Meningkatkan Imun",
            "Menyehatkan Pencernaan",
            "Meredakan Pegal",
            "Menjaga Stamina",
        ],
    },
]

export default function BestSellers() {
    const [selectedProduct, setSelectedProduct] = useState<(typeof bestSellers)[0] | null>(null)

    return (
        <section className="py-16 bg-gradient-to-br from-primary/5 to-secondary/10">
            <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="text-center mb-12 max-w-sm mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-4xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        <span className="text-primary">Produk</span> Best Seller
                    </h2>
                    <p className="text-lg text-muted-foreground text-balance">
                        Nikmati koleksi jamu kekinian terpopuler dari Jamusari yang diracik dengan bahan alami pilihan,
                        menghadirkan cita rasa tradisional dengan sentuhan modern.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
                    {bestSellers.map((product) => (
                        <Dialog key={product.id}>
                            <DialogTrigger asChild>
                                <Card className="hover:scale-105 transition-transform duration-300 border-0 cursor-pointer">
                                    <CardContent className="p-6">
                                        <div className="relative mb-4 rounded-lg overflow-hidden">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={300}
                                                height={200}
                                                className="w-full h-48 object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold mb-2 text-primary">{product.name}</h3>
                                        <p className="text-muted-foreground text-sm mb-4">{product.description}</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-lg font-bold text-secondary">{product.price}</span>
                                            <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">Best Seller</span>
                                        </div>
                                    </CardContent>
                                </Card>
                            </DialogTrigger>

                            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                                <DialogHeader>
                                    <DialogTitle className="text-2xl font-bold text-primary mb-4">{product.name}</DialogTitle>
                                </DialogHeader>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {/* Product Image */}
                                    <div className="space-y-4">
                                        <div className="relative rounded-xl overflow-hidden">
                                            <Image
                                                src={product.image || "/placeholder.svg"}
                                                alt={product.name}
                                                width={400}
                                                height={300}
                                                className="w-full h-64 object-cover"
                                            />
                                        </div>
                                        <div className="p-4 rounded-xl border-1 border-primary/10 bg-yellow-jamsari/20">
                                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                                                Deskripsi
                                            </h3>
                                            <p className="text-muted-foreground mb-2">{product.description}</p>
                                        </div>

                                        <div className="p-4 rounded-xl border-1border-primary/10 bg-yellow-jamsari/20">
                                            <div className="flex flex-col gap-4 items-start">

                                                <span className="bg-primary/10 w-auto text-primary px-2 py-1 rounded-sm text-sm">
                                                    Best Seller
                                                </span>
                                                <span className="text-xl font-bold text-secondary">{product.price}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Recipe and Benefits */}
                                    <div className="space-y-6">
                                        {/* Recipe Section */}
                                        <div className="p-4 rounded-xl border-1 border-primary/10 bg-yellow-jamsari/20">
                                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                                                Resep Tradisional
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.recipe.map((ingredient, index) => (
                                                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                                                        <span className="text-secondary mr-2">•</span>
                                                        {ingredient}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        {/* Benefits Section */}
                                        <div className="p-4 rounded-xl border-1 border-primary/10 bg-yellow-jamsari/20">
                                            <h3 className="text-lg font-semibold text-primary mb-3 flex items-center">
                                                Manfaat Kesehatan
                                            </h3>
                                            <ul className="space-y-2">
                                                {product.benefits.map((benefit, index) => (
                                                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                                                        <span className="text-secondary mr-2">✓</span>
                                                        {benefit}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </DialogContent>
                        </Dialog>
                    ))}
                </div>
            </div>
        </section>
    )
}
