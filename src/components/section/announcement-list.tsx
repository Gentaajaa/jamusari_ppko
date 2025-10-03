import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Bell, MapPin } from "lucide-react"

const announcements = [


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
