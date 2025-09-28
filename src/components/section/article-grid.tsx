import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"
import Image from "next/image"

const articles = [
    {
        id: 1,
        title: "Manfaat Jamu Kunyit Asam untuk Kesehatan Wanita",
        excerpt:
            "Jamu kunyit asam telah lama dikenal sebagai minuman tradisional yang memiliki banyak manfaat untuk kesehatan wanita. Artikel ini membahas kandungan nutrisi dan khasiatnya secara mendalam.",
        image: "/placeholder.svg?height=200&width=400&text=Artikel+Kunyit+Asam",
        author: "Dr. Sari Wijaya",
        date: "15 Januari 2024",
        readTime: "5 menit",
        category: "Kesehatan",
    },
    {
        id: 2,
        title: "Inovasi deJamuanz: Menggabungkan Tradisi dengan Modernitas",
        excerpt:
            "Program deJamuanz hadir dengan konsep inovatif yang memadukan kearifan lokal dengan teknologi modern. Simak bagaimana kami mengembangkan produk jamu kekinian yang tetap autentik.",
        image: "/placeholder.svg?height=200&width=400&text=Inovasi+deJamuanz",
        author: "Ahmad Rizki",
        date: "12 Januari 2024",
        readTime: "7 menit",
        category: "Inovasi",
    },
    {
        id: 3,
        title: "Resep Jamu Beras Kencur yang Mudah Dibuat di Rumah",
        excerpt:
            "Ingin membuat jamu beras kencur sendiri di rumah? Artikel ini memberikan panduan lengkap mulai dari pemilihan bahan hingga cara penyajian yang tepat untuk mendapatkan khasiat optimal.",
        image: "/placeholder.svg?height=200&width=400&text=Resep+Beras+Kencur",
        author: "Maya Kusuma",
        date: "10 Januari 2024",
        readTime: "6 menit",
        category: "Resep",
    },
    {
        id: 4,
        title: "Dampak Positif PPKO terhadap Ekonomi Masyarakat Lokal",
        excerpt:
            "Program PPKO tidak hanya fokus pada produk, tetapi juga pemberdayaan ekonomi masyarakat. Lihat bagaimana program ini memberikan dampak positif bagi komunitas lokal.",
        image: "/placeholder.svg?height=200&width=400&text=Dampak+Ekonomi+PPKO",
        author: "Budi Santoso",
        date: "8 Januari 2024",
        readTime: "8 menit",
        category: "Sosial",
    },
    {
        id: 5,
        title: "Tren Jamu Kekinian di Kalangan Milenial",
        excerpt:
            "Jamu kini semakin populer di kalangan generasi milenial. Artikel ini menganalisis tren konsumsi jamu modern dan faktor-faktor yang mempengaruhi popularitasnya.",
        image: "/placeholder.svg?height=200&width=400&text=Tren+Jamu+Milenial",
        author: "Dr. Sari Wijaya",
        date: "5 Januari 2024",
        readTime: "6 menit",
        category: "Tren",
    },
    {
        id: 6,
        title: "Cara Memilih Jamu yang Berkualitas dan Aman",
        excerpt:
            "Tidak semua jamu memiliki kualitas yang sama. Pelajari tips memilih jamu yang berkualitas, aman dikonsumsi, dan memberikan manfaat optimal untuk kesehatan Anda.",
        image: "/placeholder.svg?height=200&width=400&text=Tips+Memilih+Jamu",
        author: "Maya Kusuma",
        date: "3 Januari 2024",
        readTime: "5 menit",
        category: "Tips",
    },
]

export default function ArticleGrid() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {articles.map((article) => (
                        <Card key={article.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                            <CardContent className="p-0">
                                <div className="relative">
                                    <Image
                                        src={article.image || "/placeholder.svg"}
                                        alt={article.title}
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-t-lg"
                                    />
                                    <Badge className="absolute top-2 right-2 bg-primary/90 backdrop-blur-sm">{article.category}</Badge>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-3 text-primary line-clamp-2">{article.title}</h3>
                                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-1">
                                                <User className="h-3 w-3" />
                                                <span>{article.author}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>{article.date}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-3 w-3" />
                                            <span>{article.readTime}</span>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
