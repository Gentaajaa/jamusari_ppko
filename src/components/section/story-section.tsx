import Image from "next/image"

export default function StorySection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Cerita <span className="text-primary">Kami</span>
                            </h2>
                            <div className="space-y-4 text-muted-foreground">
                                <p>
                                    Program Pemberdayaan Kafe Organik (PPKO) lahir dari keprihatinan terhadap semakin terkikisnya tradisi
                                    minum jamu di kalangan generasi muda. Kami melihat potensi besar dalam menggabungkan kearifan lokal
                                    dengan inovasi modern.
                                </p>
                                <p>
                                    Berawal dari sebuah ide sederhana untuk melestarikan budaya Indonesia, PPKO berkembang menjadi program
                                    komprehensif yang tidak hanya fokus pada produk, tetapi juga pemberdayaan masyarakat dan pelestarian
                                    lingkungan.
                                </p>
                                <p>
                                    deJamuanz sebagai sub-program unggulan kami hadir dengan konsep café yang nyaman, produk berkualitas
                                    tinggi, dan pelayanan yang ramah. Kami berkomitmen untuk terus berinovasi sambil tetap menjaga
                                    keaslian resep tradisional.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <Image
                                src="/placeholder.svg?height=400&width=500&text=Tim+PPKO+Bekerja"
                                alt="Tim PPKO sedang bekerja"
                                width={500}
                                height={400}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
