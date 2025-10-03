import PageHero from "@/components/section/page-hero"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock } from "lucide-react"

const articles = [
    // {
    //     id: 1,
    //     title: "Manfaat Jamu Kunyit Asam untuk Kesehatan Wanita",
    //     excerpt:
    //         "Jamu kunyit asam telah lama dikenal sebagai minuman tradisional yang memiliki banyak manfaat untuk kesehatan wanita. Artikel ini membahas kandungan nutrisi dan khasiatnya secara mendalam, termasuk cara konsumsi yang tepat dan efek samping yang perlu diperhatikan.",
    //     image: "/placeholder.svg?height=300&width=400&text=Artikel+Kunyit+Asam",
    //     author: "Dr. Sari Wijaya",
    //     date: "15 Januari 2024",
    //     readTime: "5 menit",
    //     category: "Kesehatan",
    // },
]

export default function ArtikelPage() {
    return (
        <div className="flex flex-col">
            <PageHero
                title="Artikel PPKO"
                subtitle="Baca artikel terbaru seputar jamu, kesehatan herbal, dan perkembangan program PPKO"
                backgroundImage="/images/hero_aboutus.png"
                supportingImage="/images/artikel/hero_side_artikel.png"
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
