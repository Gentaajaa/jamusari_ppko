"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import Image from "next/image"

const products = [
    {
        id: 1,
        name: "Rosella Freshmilk",
        description: "Minuman tradisional dengan kunyit segar dan asam jawa yang menyegarkan",
        price: "Rp 10.000",
        category: "traditional",
        image: "/images/produk/rosella_freshmilk.png",
        badge: "Best Seller",
        recipe: [
            "200g kunyit segar, parut halus",
            "100g asam jawa, ambil airnya",
            "100g gula merah",
            "1 liter air",
            "Sejumput garam",
        ],
        benefits: [
            "Meningkatkan sistem kekebalan tubuh",
            "Membantu pencernaan",
            "Anti-inflamasi alami",
            "Detoksifikasi tubuh",
            "Menjaga kesehatan kulit",
        ],
    },
    {
        id: 2,
        name: "Rosella Sparkling",
        description: "Kombinasi beras dan kencur untuk stamina dan kesehatan tubuh",
        price: "Rp 9.000",
        category: "traditional",
        image: "/images/produk/rosella_sparkling.png",
        badge: "Popular",
        recipe: [
            "100g beras putih, rendam 2 jam",
            "50g kencur segar",
            "100g gula merah",
            "1 liter air",
            "Daun pandan secukupnya",
        ],
        benefits: [
            "Meningkatkan stamina dan energi",
            "Memperbaiki nafsu makan",
            "Melancarkan pencernaan",
            "Mengurangi masuk angin",
            "Menjaga kesehatan lambung",
        ],
    },
    {
        id: 3,
        name: "Purple Sparkling",
        description: "Campuran jahe hangat dengan rempah-rempah pilihan untuk menghangatkan tubuh",
        price: "Rp 8.000",
        category: "traditional",
        image: "/images/produk/purple_sparkling.png",
        badge: "Best Seller",
        recipe: ["100g jahe merah segar", "50g kayu manis", "25g cengkeh", "100g gula aren", "1 liter air"],
        benefits: [
            "Menghangatkan tubuh",
            "Meningkatkan metabolisme",
            "Meredakan batuk dan pilek",
            "Anti-oksidan tinggi",
            "Mengurangi mual dan masuk angin",
        ],
    },
    {
        id: 4,
        name: "Rainbow Sparkling",
        description: "Perpaduan jamu tradisional dengan konsep smoothie modern yang segar",
        price: "Rp 8.000",
        category: "modern",
        image: "/images/produk/rainbow_sparkling.png",
        badge: "New",
        recipe: [
            "100g bayam segar",
            "50g daun katuk",
            "25g jahe muda",
            "100ml santan kelapa",
            "50g madu murni",
            "Es batu secukupnya",
        ],
        benefits: [
            "Kaya akan zat besi dan folat",
            "Meningkatkan produksi ASI",
            "Detoksifikasi alami",
            "Meningkatkan energi",
            "Menjaga kesehatan pencernaan",
        ],
    },
    {
        id: 5,
        name: "Lemon Butterfly",
        description: "Temulawak berkualitas tinggi dengan madu asli untuk kesehatan liver",
        price: "Rp 9.000",
        category: "traditional",
        image: "/images/produk/lemon_butterfly.png",
        badge: "",
        recipe: ["150g temulawak segar, parut", "100ml madu murni", "1 liter air", "Sejumput garam", "Perasan jeruk nipis"],
        benefits: [
            "Menjaga kesehatan liver",
            "Meningkatkan nafsu makan",
            "Anti-inflamasi",
            "Meningkatkan daya tahan tubuh",
            "Membantu pencernaan lemak",
        ],
    },
    {
        id: 6,
        name: "Rainbow Freshmilk",
        description: "Inovasi jamu dengan sensasi sparkling yang menyegarkan",
        price: "Rp 10.000",
        category: "modern",
        image: "/images/produk/rainbow_freshmilk.png",
        badge: "Premium",
        recipe: ["Ekstrak kunyit asam", "Air soda premium", "Madu organik", "Perasan lemon segar", "Mint leaves"],
        benefits: [
            "Menyegarkan dan menghidrasi",
            "Rendah kalori",
            "Kaya antioksidan",
            "Meningkatkan metabolisme",
            "Memberikan sensasi unik",
        ],
    },
    {
        id: 7,
        name: "Purple Freshmilk",
        description: "Ekstrak sirih merah untuk kesehatan reproduksi dan antioksidan",
        price: "Rp 10.000",
        category: "traditional",
        image: "/images/produk/purple_freshmilk.png",
        badge: "",
        recipe: ["10 lembar daun sirih merah", "50g gula aren", "1 liter air", "Sejumput garam"],
        benefits: [
            "Menjaga kesehatan reproduksi wanita",
            "Anti-bakteri dan anti-jamur",
            "Kaya antioksidan",
            "Meningkatkan daya tahan tubuh",
            "Menjaga kesehatan mulut",
        ],
    },
]

export default function ProductGrid() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {products.map((product) => (
                        <Dialog key={product.id}>
                            <DialogTrigger asChild>
                                <Card className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                                    <CardContent className="p-0">
                                        <div className="relative">
                                            <Image
                                                src={product.image}
                                                alt={product.name}
                                                width={300}
                                                height={250}
                                                className="w-full h-60 object-cover rounded-t-xl"
                                            />
                                            {product.badge && (
                                                <Badge
                                                    className={`absolute top-2 right-2 ${product.badge === "Best Seller"
                                                        ? "bg-primary"
                                                        : product.badge === "Premium"
                                                            ? "bg-secondary"
                                                            : product.badge === "New"
                                                                ? "bg-blue-500"
                                                                : product.badge === "Limited"
                                                                    ? "bg-orange-500"
                                                                    : "bg-gray-500"
                                                        }`}
                                                >
                                                    {product.badge}
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="p-4">
                                            <h3 className="text-lg font-semibold mb-2 text-primary">{product.name}</h3>
                                            <p className="text-muted-foreground text-sm mb-3 line-clamp-2">{product.description}</p>
                                            <div className="flex justify-between items-center">
                                                <span className="text-lg font-bold text-secondary">{product.price}</span>
                                                <span className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-full capitalize">
                                                    {product.category === "traditional"
                                                        ? "Tradisional"
                                                        : product.category === "modern"
                                                            ? "Modern"
                                                            : product.category === "seasonal"
                                                                ? "Musiman"
                                                                : "Premium"}
                                                </span>
                                            </div>
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

                                        <div className="p-4 rounded-xl border-1 border-primary/10 bg-yellow-jamsari/20">
                                            <div className="flex flex-col gap-4 items-start">
                                                {product.badge && (
                                                    <span className="bg-primary/10 w-auto text-primary px-2 py-1 rounded-sm text-sm">
                                                        {product.badge}
                                                    </span>
                                                )}
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
