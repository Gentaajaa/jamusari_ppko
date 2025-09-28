import PageHero from "@/components/section/page-hero"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"

const articles = [
    {
        id: 1,
        title: "Manfaat Jamu Kunyit Asam untuk Kesehatan Wanita",
        excerpt:
            "Jamu kunyit asam telah lama dikenal sebagai minuman tradisional yang memiliki banyak manfaat untuk kesehatan wanita. Artikel ini membahas kandungan nutrisi dan khasiatnya secara mendalam, termasuk cara konsumsi yang tepat dan efek samping yang perlu diperhatikan.",
        image: "/placeholder.svg?height=300&width=400&text=Artikel+Kunyit+Asam",
        author: "Dr. Sari Wijaya",
        date: "15 Januari 2024",
        readTime: "5 menit",
        category: "Kesehatan",
    },
    {
        id: 2,
        title: "Inovasi deJamuanz: Menggabungkan Tradisi dengan Modernitas",
        excerpt:
            "Program deJamuanz hadir dengan konsep inovatif yang memadukan kearifan lokal dengan teknologi modern. Simak bagaimana kami mengembangkan produk jamu kekinian yang tetap autentik dan berkualitas tinggi untuk generasi masa kini.",
        image: "/placeholder.svg?height=300&width=400&text=Inovasi+deJamuanz",
        author: "Ahmad Rizki",
        date: "12 Januari 2024",
        readTime: "7 menit",
        category: "Inovasi",
    },
    {
        id: 3,
        title: "Resep Jamu Beras Kencur yang Mudah Dibuat di Rumah",
        excerpt:
            "Ingin membuat jamu beras kencur sendiri di rumah? Artikel ini memberikan panduan lengkap mulai dari pemilihan bahan hingga cara penyajian yang tepat untuk mendapatkan khasiat optimal. Dilengkapi dengan tips penyimpanan dan variasi rasa.",
        image: "/placeholder.svg?height=300&width=400&text=Resep+Beras+Kencur",
        author: "Maya Kusuma",
        date: "10 Januari 2024",
        readTime: "6 menit",
        category: "Resep",
    },
    {
        id: 4,
        title: "Dampak Positif PPKO terhadap Ekonomi Masyarakat Lokal",
        excerpt:
            "Program PPKO tidak hanya fokus pada produk, tetapi juga pemberdayaan ekonomi masyarakat. Lihat bagaimana program ini memberikan dampak positif bagi komunitas lokal melalui pelatihan, kemitraan, dan pengembangan usaha mikro.",
        image: "/placeholder.svg?height=300&width=400&text=Dampak+Ekonomi+PPKO",
        author: "Budi Santoso",
        date: "8 Januari 2024",
        readTime: "8 menit",
        category: "Sosial",
    },
    {
        id: 5,
        title: "Tren Jamu Kekinian di Kalangan Milenial",
        excerpt:
            "Jamu kini semakin populer di kalangan generasi milenial. Artikel ini menganalisis tren konsumsi jamu modern dan faktor-faktor yang mempengaruhi popularitasnya, termasuk peran media sosial dan gaya hidup sehat.",
        image: "/placeholder.svg?height=300&width=400&text=Tren+Jamu+Milenial",
        author: "Dr. Sari Wijaya",
        date: "5 Januari 2024",
        readTime: "6 menit",
        category: "Tren",
    },
    {
        id: 6,
        title: "Cara Memilih Jamu yang Berkualitas dan Aman",
        excerpt:
            "Tidak semua jamu memiliki kualitas yang sama. Pelajari tips memilih jamu yang berkualitas, aman dikonsumsi, dan memberikan manfaat optimal untuk kesehatan Anda. Termasuk cara membaca label dan sertifikasi yang perlu diperhatikan.",
        image: "/placeholder.svg?height=300&width=400&text=Tips+Memilih+Jamu",
        author: "Maya Kusuma",
        date: "3 Januari 2024",
        readTime: "5 menit",
        category: "Tips",
    },
]

export default function ArtikelPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Artikel PPKO"
                subtitle="Baca artikel terbaru seputar jamu, kesehatan herbal, dan perkembangan program PPKO"
                backgroundImage="/herbal-medicine-books-background.jpg"
                supportingImage="/traditional-herbs-research-books.jpg"
            />

            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto space-y-12">
                        {articles.map((article, index) => (
                            <div key={article.id} className="group">
                                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
                                    {/* Large image on the left */}
                                    <div className="lg:col-span-2">
                                        <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                                            <img
                                                src={article.image || "/placeholder.svg"}
                                                alt={article.title}
                                                className="w-full h-64 lg:h-80 object-cover group-hover:scale-105 transition-transform duration-300"
                                            />
                                            <Badge className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm">
                                                {article.category}
                                            </Badge>
                                        </div>
                                    </div>

                                    {/* Content on the right */}
                                    <div className="lg:col-span-3 space-y-4">
                                        <h2 className="text-2xl lg:text-3xl font-bold text-balance group-hover:text-primary transition-colors duration-300">
                                            {article.title}
                                        </h2>

                                        <p className="text-muted-foreground leading-relaxed text-lg">{article.excerpt}</p>

                                        <div className="flex items-center gap-6 text-sm text-muted-foreground pt-2">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4" />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="h-4 w-4" />
                                                <span>{article.date}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="h-4 w-4" />
                                                <span>{article.readTime}</span>
                                            </div>
                                        </div>

                                        <button className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors duration-300 group-hover:translate-x-1 transform">
                                            Baca Selengkapnya
                                            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>

                                {/* Divider between articles */}
                                {index < articles.length - 1 && <div className="mt-12 border-b border-gray-200"></div>}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
