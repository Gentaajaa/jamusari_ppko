"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const galleryImages = [
    {
        id: 1,
        src: "/placeholder.svg?height=500&width=400&text=Workshop+Pembuatan+Jamu",
        alt: "Workshop Pembuatan Jamu",
        title: "Workshop Pembuatan Jamu",
        description: "Pelatihan pembuatan jamu tradisional untuk masyarakat lokal",
        category: "workshop",
        height: "h-80",
    },
    {
        id: 2,
        src: "/placeholder.svg?height=300&width=400&text=Café+deJamuanz+Interior",
        alt: "Interior Café deJamuanz",
        title: "Interior Café deJamuanz",
        description: "Suasana nyaman dan modern di dalam café deJamuanz",
        category: "cafe",
        height: "h-48",
    },
    {
        id: 3,
        src: "/placeholder.svg?height=600&width=400&text=Tim+PPKO+Bersama+Komunitas",
        alt: "Tim PPKO bersama komunitas",
        title: "Kegiatan Bersama Komunitas",
        description: "Tim PPKO berinteraksi dengan komunitas lokal",
        category: "community",
        height: "h-96",
    },
    {
        id: 4,
        src: "/placeholder.svg?height=400&width=400&text=Produk+Jamu+Kekinian",
        alt: "Produk jamu kekinian",
        title: "Koleksi Produk Jamu",
        description: "Berbagai varian jamu kekinian dari deJamuanz",
        category: "products",
        height: "h-64",
    },
    {
        id: 5,
        src: "/placeholder.svg?height=350&width=400&text=Event+Launching+deJamuanz",
        alt: "Event launching deJamuanz",
        title: "Launching deJamuanz",
        description: "Acara peluncuran program deJamuanz",
        category: "events",
        height: "h-56",
    },
    {
        id: 6,
        src: "/placeholder.svg?height=450&width=400&text=Proses+Pembuatan+Jamu",
        alt: "Proses pembuatan jamu",
        title: "Proses Pembuatan Jamu",
        description: "Dokumentasi proses pembuatan jamu secara tradisional",
        category: "workshop",
        height: "h-72",
    },
    {
        id: 7,
        src: "/placeholder.svg?height=320&width=400&text=Exterior+Café+deJamuanz",
        alt: "Exterior café deJamuanz",
        title: "Tampak Luar Café",
        description: "Desain exterior café deJamuanz yang menarik",
        category: "cafe",
        height: "h-52",
    },
    {
        id: 8,
        src: "/placeholder.svg?height=550&width=400&text=Diskusi+Komunitas+PPKO",
        alt: "Diskusi komunitas PPKO",
        title: "Diskusi Komunitas",
        description: "Sesi diskusi dan sharing pengalaman dengan komunitas",
        category: "community",
        height: "h-88",
    },
    {
        id: 9,
        src: "/placeholder.svg?height=280&width=400&text=Packaging+Produk+Premium",
        alt: "Packaging produk premium",
        title: "Packaging Premium",
        description: "Desain kemasan produk premium deJamuanz",
        category: "products",
        height: "h-44",
    },
    {
        id: 10,
        src: "/placeholder.svg?height=480&width=400&text=Seminar+Kesehatan+Herbal",
        alt: "Seminar kesehatan herbal",
        title: "Seminar Kesehatan Herbal",
        description: "Acara edukasi tentang manfaat jamu untuk kesehatan",
        category: "events",
        height: "h-76",
    },
    {
        id: 11,
        src: "/placeholder.svg?height=380&width=400&text=Pelatihan+Barista+Jamu",
        alt: "Pelatihan barista jamu",
        title: "Pelatihan Barista Jamu",
        description: "Workshop khusus untuk menjadi barista jamu profesional",
        category: "workshop",
        height: "h-60",
    },
    {
        id: 12,
        src: "/placeholder.svg?height=340&width=400&text=Menu+Board+deJamuanz",
        alt: "Menu board deJamuanz",
        title: "Menu Board Café",
        description: "Papan menu dengan berbagai pilihan jamu kekinian",
        category: "cafe",
        height: "h-54",
    },
]

export default function GalleryGrid() {
    const [selectedImage, setSelectedImage] = useState<(typeof galleryImages)[0] | null>(null)

    return (
        <>
            <section className="py-16 bg-background">
                <div className="container mx-auto px-4">
                    <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 max-w-7xl mx-auto">
                        {galleryImages.map((image) => (
                            <div
                                key={image.id}
                                className="group cursor-pointer overflow-hidden rounded-lg mb-4 break-inside-avoid relative hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                                onClick={() => setSelectedImage(image)}
                            >
                                <div className="relative">
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        width={400}
                                        height={400}
                                        className={`w-full ${image.height} object-cover transition-transform duration-300 group-hover:scale-110`}
                                    />

                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                                        <div className="p-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                            <h3 className="font-semibold text-lg mb-1">{image.title}</h3>
                                            <p className="text-sm text-white/90 line-clamp-2">{image.description}</p>
                                        </div>
                                    </div>

                                    <Badge className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm text-white border-0 opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                                        {image.category === "workshop"
                                            ? "Workshop"
                                            : image.category === "cafe"
                                                ? "Café"
                                                : image.category === "community"
                                                    ? "Komunitas"
                                                    : image.category === "products"
                                                        ? "Produk"
                                                        : "Event"}
                                    </Badge>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Modal for enlarged image */}
            {selectedImage && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
                    <div className="relative max-w-4xl max-h-[90vh] bg-background rounded-lg overflow-hidden shadow-2xl">
                        <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-4 right-4 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors backdrop-blur-sm"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <Image
                            src={selectedImage.src || "/placeholder.svg"}
                            alt={selectedImage.alt}
                            width={800}
                            height={600}
                            className="w-full h-auto max-h-[60vh] object-contain"
                        />
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-primary mb-2">{selectedImage.title}</h3>
                            <p className="text-muted-foreground">{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
