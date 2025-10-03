import AnnouncementList from "@/components/section/announcement-list"
import AnnouncementSidebar from "@/components/section/announcement-sidebar"
import PageHero from "@/components/section/page-hero"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


export default function PengumumanPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Pengumuman Jamusari"
                subtitle="Informasi terbaru dan pengumuman penting seputar PPKO HMIF dan Jamusari"
                backgroundImage="/images/hero_produk.png"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                        <div className="relative">
                            <Image
                                src="/images/produk/pelatihan_jamu.png"
                                alt="Berbagai Minuman Jamu"
                                width={600}
                                height={600}
                            />
                        </div>
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-balance">
                                Informasi <span className="text-primary">Terkini</span>
                            </h2>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Tetap terhubung dengan perkembangan terbaru Jamusari melalui pengumuman resmi yang kami
                                publikasikan. Dari jadwal pelatihan, event khusus, hingga peluang kerjasama, semua informasi penting
                                tersedia di sini.
                            </p>
                            <p className="text-lg text-muted-foreground leading-relaxed">
                                Kami berkomitmen untuk selalu memberikan informasi yang akurat dan tepat waktu kepada seluruh komunitas
                                PPKO dan mitra deJamuanz.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-background">
                <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                    <div className="max-w-sm mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-6xl">
                        {/* Desktop: Two-grid layout, Mobile: Stacked layout */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {/* Left Grid - Announcement List (70% width on desktop) */}
                            <div className="lg:col-span-2 order-2 lg:order-1">
                                <AnnouncementList />
                            </div>

                            {/* Right Grid - Sidebar (30% width on desktop) */}
                            <div className="lg:col-span-1 order-1 lg:order-2">
                                <AnnouncementSidebar />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
