"use client"

import { useState } from "react"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { X } from "lucide-react"

const galleryImages = [
    {
        id: 1,
        src: "/images/gallery/pelatihan_pembuatan.png",
        alt: "Pelatihan Pembuatan Jamu",
        title: "Pelatihan Pembuatan Jamu",
        description: "Pelatihan pembuatan olahan jamu modern",
        category: "workshop",
        height: "h-80",
    },
    {
        id: 2,
        src: "/images/gallery/pembuatan_olahan.png",
        alt: "Pembuatan Produk Olahan Toga",
        title: "Pembuatan Produk Olahan Toga",
        description: "Ibu-ibu pengurus Jamusari mengolah produk olahan TOGA",
        category: "community",
        height: "h-48",
    },
    {
        id: 3,
        src: "/images/gallery/pemberian_bibit.png",
        alt: "Pembagian Bibit Ke Warga",
        title: "Pemberian Bibit Ke Warga",
        description: "Tim Pelaksana dan Ormawa membagikan bibit ke warga",
        category: "community",
        height: "h-96",
    },
    {
        id: 4,
        src: "/images/gallery/after_kafe.png",
        alt: "Tim Pelaksana Menyelesaikan Kafe",
        title: "Tim Pelaksana Menyelesaikan Kafe",
        description: "Tim pelaksana berhasil menyelesaikan kafe Jamusari",
        category: "cafe",
        height: "h-64",
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
                                            ? "Pelatihan"
                                            : image.category === "cafe"
                                                ? "Jamusari"
                                                : image.category === "community"
                                                    ? "Kegiatan"
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
