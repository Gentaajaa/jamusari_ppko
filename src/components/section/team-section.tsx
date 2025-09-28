import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

const teamMembers = [
    {
        name: "Dr. Sari Wijaya",
        position: "Direktur Program PPKO",
        description: "Ahli herbal dengan pengalaman 15 tahun dalam penelitian tanaman obat tradisional Indonesia.",
        image: "/placeholder.svg?height=300&width=300&text=Dr.+Sari+Wijaya",
    },
    {
        name: "Ahmad Rizki",
        position: "Manajer deJamuanz",
        description: "Entrepreneur muda yang berpengalaman dalam industri F&B dan passionate terhadap budaya Indonesia.",
        image: "/placeholder.svg?height=300&width=300&text=Ahmad+Rizki",
    },
    {
        name: "Maya Kusuma",
        position: "Head of Product Development",
        description: "Food scientist yang mengkhususkan diri dalam pengembangan produk minuman sehat dan organik.",
        image: "/placeholder.svg?height=300&width=300&text=Maya+Kusuma",
    },
    {
        name: "Budi Santoso",
        position: "Community Relations Manager",
        description: "Aktivis sosial yang fokus pada pemberdayaan masyarakat dan pengembangan ekonomi lokal.",
        image: "/placeholder.svg?height=300&width=300&text=Budi+Santoso",
    },
]

export default function TeamSection() {
    return (
        <section className="py-16 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Tim <span className="text-primary">PPKO</span>
                    </h2>
                    <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
                        Bertemu dengan tim profesional yang berdedikasi untuk mengembangkan program PPKO dan deJamuanz
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4">
                                    <Image
                                        src={member.image || "/placeholder.svg"}
                                        alt={member.name}
                                        width={300}
                                        height={300}
                                        className="w-32 h-32 rounded-full mx-auto object-cover"
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-1 text-primary">{member.name}</h3>
                                <p className="text-secondary font-medium mb-3">{member.position}</p>
                                <p className="text-muted-foreground text-sm">{member.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
