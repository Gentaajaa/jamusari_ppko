import PageHero from "@/components/section/page-hero"

export default function TentangKamiPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Tentang Kami"
                subtitle="Mengenal lebih dekat tim PPKO dan perjalanan kami dalam mengembangkan program deJamuanz"
                backgroundImage="/traditional-indonesian-herbs-and-spices-background.jpg"
                supportingImage="/team-working-together-in-modern-cafe.jpg"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
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
                        <div className="relative">
                            <img
                                src="/modern-jamu-cafe-interior.jpg"
                                alt="Suasana Cafe deJamuanz"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative order-2 lg:order-1">
                            <img
                                src="/traditional-indonesian-herbs-and-spices.jpg"
                                alt="Bahan-bahan Jamu Tradisional"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                        <div className="space-y-10 order-1 lg:order-2">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Visi & <span className="text-yellow-jamsari">Misi</span>
                            </h2>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-2">Visi</h3>
                                    Menciptakan model pemberdayaan masyarakat desa yang berkelanjutan melalui integrasi kearifan lokal, inovasi teknologi,
                                    dan kewirausahaan sosial berbasis konservasi alam dengan mewujudkan Desa Guwosari sebagai desa
                                    mandiri yang mampu mengoptimalkan potensi alamnya untuk kesejahteraan masyarakat sekaligus melestarikan warisan budaya tanaman obat keluarga bagi generasi mendatang.
                                    <p className="text-lg text-muted-foreground leading-relaxed">
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
                                Tim PPKO terdiri dari para ahli yang berpengalaman dalam bidang kuliner, bisnis, dan teknologi. Kami
                                berkomitmen untuk menghadirkan inovasi terbaik dalam setiap produk dan layanan yang kami tawarkan.
                            </p>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">15+</div>
                                    <div className="text-sm text-muted-foreground">Tim Ahli</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-2xl font-bold text-primary">5+</div>
                                    <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
                                </div>
                            </div>
                        </div>
                        <div className="relative">
                            <img
                                src="/professional-team-working-together.jpg"
                                alt="Tim Profesional PPKO"
                                className="w-full h-96 object-cover rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
