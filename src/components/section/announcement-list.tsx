import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell, MapPin } from "lucide-react"

const announcements = [
    {
        id: 1,
        title: "Pembukaan Cabang deJamuanz Baru di Jakarta Selatan",
        content:
            "Kami dengan bangga mengumumkan pembukaan cabang deJamuanz yang baru di kawasan Jakarta Selatan. Cabang ini akan menjadi flagship store dengan konsep yang lebih modern dan lengkap. Grand opening akan dilaksanakan pada tanggal 25 Januari 2024 dengan berbagai promo menarik dan doorprize untuk pengunjung.",
        date: "20 Januari 2024",
        type: "info",
        priority: "high",
        location: "Jakarta Selatan",
    },
    {
        id: 2,
        title: "Workshop Pembuatan Jamu Tradisional - Batch 3",
        content:
            "Pendaftaran telah dibuka untuk workshop pembuatan jamu tradisional batch ke-3. Workshop ini akan mengajarkan teknik pembuatan jamu dari bahan-bahan alami dengan metode tradisional yang telah dimodernisasi. Peserta akan mendapatkan sertifikat dan starter kit untuk memulai usaha jamu sendiri.",
        date: "18 Januari 2024",
        type: "event",
        priority: "medium",
        location: "Pusat Pelatihan PPKO",
    },
    {
        id: 3,
        title: "Promo Spesial Ramadan - Diskon 30% untuk Paket Jamu Sehat",
        content:
            "Menyambut bulan suci Ramadan, deJamuanz memberikan promo spesial berupa diskon 30% untuk semua paket jamu sehat. Promo ini berlaku untuk pembelian paket minimal 5 botol jamu pilihan. Dapatkan juga bonus tumbler eksklusif deJamuanz untuk setiap pembelian paket.",
        date: "15 Januari 2024",
        type: "promo",
        priority: "high",
        location: "Semua Cabang",
    },
    {
        id: 4,
        title: "Rekrutmen Tim Marketing dan Customer Service",
        content:
            "PPKO membuka kesempatan berkarir untuk posisi Marketing Executive dan Customer Service Representative. Kami mencari kandidat yang passionate terhadap produk herbal dan memiliki kemampuan komunikasi yang baik. Kirimkan CV dan portfolio Anda ke email recruitment@ppko.id",
        date: "12 Januari 2024",
        type: "recruitment",
        priority: "medium",
        location: "Jakarta & Bandung",
    },
    {
        id: 5,
        title: "Peluncuran Aplikasi Mobile deJamuanz",
        content:
            "Segera hadir aplikasi mobile deJamuanz yang memudahkan Anda untuk memesan jamu favorit secara online. Aplikasi ini dilengkapi dengan fitur konsultasi kesehatan, tracking pesanan, dan program loyalty member. Pre-register sekarang dan dapatkan voucher gratis senilai Rp 50.000.",
        date: "10 Januari 2024",
        type: "product",
        priority: "high",
        location: "Online",
    },
    {
        id: 6,
        title: "Kerjasama dengan Universitas untuk Penelitian Jamu Modern",
        content:
            "PPKO menjalin kerjasama strategis dengan beberapa universitas terkemuka untuk melakukan penelitian pengembangan jamu modern. Penelitian ini bertujuan untuk meningkatkan kualitas dan efektivitas produk jamu dengan tetap mempertahankan keaslian resep tradisional.",
        date: "8 Januari 2024",
        type: "partnership",
        priority: "medium",
        location: "Jakarta & Yogyakarta",
    },
]

const getTypeColor = (type: string) => {
    switch (type) {
        case "info":
            return "bg-blue-500"
        case "event":
            return "bg-green-500"
        case "promo":
            return "bg-orange-500"
        case "recruitment":
            return "bg-purple-500"
        case "product":
            return "bg-primary"
        case "partnership":
            return "bg-secondary"
        default:
            return "bg-gray-500"
    }
}

const getTypeLabel = (type: string) => {
    switch (type) {
        case "info":
            return "Informasi"
        case "event":
            return "Event"
        case "promo":
            return "Promo"
        case "recruitment":
            return "Rekrutmen"
        case "product":
            return "Produk"
        case "partnership":
            return "Kerjasama"
        default:
            return "Umum"
    }
}

export default function AnnouncementList() {
    return (
        <div className="space-y-6">
            {announcements.map((announcement) => (
                <Card key={announcement.id} className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                            <div className="flex items-center gap-3">
                                <div className="p-2 rounded-full bg-primary/10">
                                    <Bell className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-primary mb-1">{announcement.title}</h3>
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Calendar className="h-4 w-4" />
                                            <span>{announcement.date}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <MapPin className="h-4 w-4" />
                                            <span>{announcement.location}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <Badge className={getTypeColor(announcement.type)}>{getTypeLabel(announcement.type)}</Badge>
                                {announcement.priority === "high" && <Badge variant="destructive">Penting</Badge>}
                            </div>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">{announcement.content}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    )
}
