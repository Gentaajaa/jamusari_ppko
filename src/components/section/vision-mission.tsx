import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Leaf, Users } from "lucide-react"

const visionMissionData = [
    {
        icon: Target,
        title: "Visi",
        description:
            "Menjadi pelopor dalam melestarikan dan mengembangkan tradisi jamu Indonesia melalui inovasi modern yang berkelanjutan.",
    },
    {
        icon: Heart,
        title: "Misi",
        description:
            "Menyediakan produk jamu berkualitas tinggi yang mendukung gaya hidup sehat dan melestarikan warisan budaya Indonesia.",
    },
    {
        icon: Leaf,
        title: "Komitmen",
        description:
            "Menggunakan bahan-bahan organik dan ramah lingkungan dalam setiap produk untuk mendukung keberlanjutan alam.",
    },
    {
        icon: Users,
        title: "Pemberdayaan",
        description:
            "Memberdayakan masyarakat lokal melalui program pelatihan dan pengembangan usaha kafe organik yang berkelanjutan.",
    },
]

export default function VisionMission() {
    return (
        <section className="py-16 bg-gradient-to-br from-secondary/5 to-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Visi & <span className="text-primary">Misi</span>
                    </h2>
                    <p className="text-lg text-muted-foreground text-balance max-w-3xl mx-auto">
                        Landasan filosofi yang mengarahkan setiap langkah perjalanan PPKO dalam mengembangkan program deJamuanz
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                    {visionMissionData.map((item, index) => (
                        <Card key={index} className="glassmorphism border-0 hover:scale-105 transition-transform duration-300">
                            <CardContent className="p-6 text-center">
                                <div className="mb-4 flex justify-center">
                                    <div className="p-3 rounded-full bg-primary/10">
                                        <item.icon className="h-8 w-8 text-primary" />
                                    </div>
                                </div>
                                <h3 className="text-xl font-semibold mb-3 text-primary">{item.title}</h3>
                                <p className="text-muted-foreground text-sm">{item.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
