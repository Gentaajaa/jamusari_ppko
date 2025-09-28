import ProductGrid from "@/components/section/product-grid"
import ProductCategories from "@/components/section/product-categories"
import PageHero from "@/components/section/page-hero"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


export default function ProdukPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Produk Jamusari"
                subtitle="Koleksi lengkap jamu kekinian dengan cita rasa autentik dan khasiat yang terjaga"
                backgroundImage="/images/hero_produk.png"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative">
                            <Image
                                src="/images/produk/pelatihan_jamu.png"
                                alt="Berbagai Minuman Jamu"
                                className="w-full object-cover border-4 border-yellow-jamsari rounded-4xl shadow-lg"
                                width={300}
                                height={300}
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Jamu <span className="text-primary">Kekinian</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Setiap produk Jamusari dibuat dengan modifikasi agar lebih kekinian, semua
                                dikemas dengan sentuhan modern yang sesuai dengan selera masa kini. Kami menggunakan bahan-bahan alami
                                pilihan yang berkualitas tinggi.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Di Jamusari, kami menghadirkan jamu dengan kreasi modern mulai dari varian milk base yang creamy hingga sparkling soda base yang segar, memberikan
                                pengalaman sehat sekaligus menyenangkan di setiap tegukan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <ProductCategories />
            <ProductGrid />
        </div>
    )
}
