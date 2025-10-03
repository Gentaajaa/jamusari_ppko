import PageHero from "@/components/section/page-hero"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


export default function TentangKamiPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Tentang Kami"
                subtitle="Mengenal lebih dekat tim PPKO dan perjalanan kami dalam mengembangkan program deJamuanz"
                backgroundImage="/images/hero_aboutus.png"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-1 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Perjalanan <span className="text-primary">Jamusari</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Jamusari lahir dari semangat mahasiswa HMIF UII bersama masyarakat Desa Guwosari untuk mengembangkan potensi Tanaman Obat Keluarga (TOGA).
                                Berawal dari ide kafe jamu modern berbasis konservasi, Jamusari menghadirkan inovasi jamu dengan sentuhan kekinian.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Jamusari hadir sebagai wujud nyata dari komitmen kami untuk menciptakan ruang yang nyaman bagi
                                masyarakat untuk menikmati jamu dengan cara yang modern dan menyenangkan.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative">
                            <Image
                                src="/images/about_us/profilisasi_02.png"
                                alt="Visi Misi"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="space-y-10 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Visi & <span className="text-yellow-jamsari">Misi</span>
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">Visi</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Menciptakan model pemberdayaan masyarakat desa yang berkelanjutan melalui integrasi kearifan lokal, inovasi teknologi,
                                        dan kewirausahaan sosial berbasis konservasi alam dengan mewujudkan Desa Guwosari sebagai desa
                                        mandiri yang mampu mengoptimalkan potensi alamnya untuk kesejahteraan masyarakat sekaligus melestarikan warisan budaya
                                        tanaman obat keluarga bagi generasi mendatang.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">Misi</h3>
                                    <p className="text-lg text-muted-foreground leading-relaxed">
                                        Mengoptimalkan 89,5% lahan desa untuk budidaya TOGA berkelanjutan, menghadirkan Kafe JAMUAN sebagai pusat edukasi dan konservasi, mengembangkan produk jamu modern
                                        dengan branding menarik, membangun sistem pemasaran digital, serta memberdayakan masyarakat melalui kelompok mandiri dengan pendampingan berkelanjutan.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Tim <span className="text-primary">Kami</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Jamusari digerakkan oleh kolaborasi antara mahasiswa HMIF UII, Kelompok Wanita Tani, dan masyarakat
                                Desa Guwosari. Kami percaya bahwa jamu bukan hanya warisan budaya, tetapi juga peluang untuk inovasi
                                dan pemberdayaan.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Dengan semangat kebersamaan, tim kami meracik jamu tradisional menjadi minuman modern yang sehat, lezat,
                                dan menarik bagi semua generasi. Setiap anggota berperan penting, mulai dari riset dan pengembangan produk,
                                budidaya TOGA, hingga pengelolaan kafe jamu. Semua bersatu untuk menghadirkan pengalaman terbaik bagi pelanggan
                                sekaligus menjaga kelestarian tanaman obat keluarga.
                            </p>
                            <div className="grid grid-cols-2 py-8">
                                <div className="text-start">
                                    <div className="text-4xl font-bold text-primary">15</div>
                                    <div className="text-xl">Anggota Tim</div>
                                </div>
                                <div className="text-start">
                                    <div className="text-4xl font-bold text-primary">10+</div>
                                    <div className="text-xl">Inovasi Produk</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/images/about_us/profilisasi_01.png"
                                alt="Tim PPKO"
                                width={600}
                                height={600}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
