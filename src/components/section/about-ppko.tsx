export default function AboutPPKO() {
    return (
        <section className="py-16 bg-background">
            <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Apa itu <span className="text-yellow-jamsari">Jamusari</span>?
                    </h2>
                    <p className="text-lg text-muted-foreground text-balance mb-8">
                        Jamusari adalah program pemberdayaan masyarakat Desa Guwosari yang menggabungkan edukasi, konservasi, dan inovasi produk berbasis Tanaman Obat Keluarga (TOGA).
                        Melalui Kafe Jamusari, digitalisasi pemasaran, serta inovasi produk jamu kekinian, kami menghadirkan pengalaman sehat, lezat, dan penuh kearifan lokal.
                    </p>

                    <div className="grid md:grid-cols-2 gap-18 mt-24">
                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:bg-green-100 transition-all duration-300 text-left">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">Program Jamusari</h3>
                            <p className="text-muted-foreground">
                                Jamusari adalah program PPK Ormawa HMIF Universitas Islam Indonesia yang menghadirkan konsep kafe jamu kekinian. Program ini menggabungkan kearifan lokal Indonesia dengan sentuhan modern untuk
                                menciptakan pengalaman minum jamu yang menyenangkan, sehat, dan relevan bagi generasi masa kini.
                            </p>
                        </div>

                        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-8 shadow-lg hover:bg-green-100 transition-all duration-300 text-left">
                            <h3 className="text-2xl font-semibold mb-4 text-primary">Visi & Misi</h3>
                            <p className="text-muted-foreground">
                                Kafe Jamusari hadir dengan visi menjadi kafe jamu modern yang sehat, nyaman, dan berkesan. Kami menyediakan jamu berkualitas dengan cita rasa kekinian, didukung pelayanan ramah dan cepat.
                                Suasana hangat dan bersih kami ciptakan agar setiap pengunjung merasa betah menikmati warisan jamu tradisional dengan nuansa baru.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
