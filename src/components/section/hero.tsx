import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 pt-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
                    {/* Left side - Text content */}
                    <div className="space-y-6">
                        <h1 className="text-4xl md:text-6xl font-bold text-balance">
                            Selamat Datang di <span className="text-primary underline decoration-4 underline-offset-3">Jamusari</span>
                        </h1>
                        <p className="text-xl md:text-2xl text-muted-foreground text-balance">
                            Jamu Sehat Asli Guwosari – Sebuah inisiatif untuk menghadirkan edukasi, konservasi, dan inovasi TOGA yang memberdayakan masyarakat sekaligus melestarikan warisan minuman tradisional Indonesia.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="text-lg px-8">
                                <Link href="/produk">Lihat Produk</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="text-lg px-8 bg-transparent">
                                <Link href="/tentang-kami">Tentang Kami</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right side - Image */}
                    <div className="relative">
                        <div className="">
                            <Image
                                src="/images/hero_beranda.png"
                                alt="Jamusari"
                                width={600}
                                height={600}
                                className="animate-float"
                            />
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-24 -right-10 w-24 h-24 bg-primary/20 rounded-full blur-xl"></div>
                        <div className="absolute -bottom-42 -left-4 w-32 h-32 bg-secondary/20 rounded-full blur-xl"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}
