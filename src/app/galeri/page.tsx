import GalleryGrid from "@/components/section/gallery-grid"
import GalleryCategories from "@/components/section/gallery-categories"
import PageHero from "@/components/section/page-hero"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


export default function GaleriPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Galeri Jamusari"
                subtitle="Dokumentasi perjalanan program PPKO dan aktivitas deJamuanz dalam memberdayakan masyarakat"
                backgroundImage="/images/hero_gallery.png"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Momen <span className="text-primary">Berharga</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Setiap foto dalam galeri ini menceritakan perjalanan kami dalam mengembangkan Jamusari. Dari
                                pelatihan pembuatan jamu tradisional hingga momen-momen kebersamaan di Jamusari, semua terekam
                                dengan indah.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Kami bangga dapat berbagi cerita inspiratif tentang bagaimana tradisi dan modernitas dapat berpadu
                                harmonis dalam setiap aktivitas yang kami lakukan.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="">
                                <Image
                                    src="/images/hero_side_gallery.png"
                                    alt="Jamusari"
                                    width={600}
                                    height={600}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <GalleryCategories />
            <GalleryGrid />
        </div>
    )
}
