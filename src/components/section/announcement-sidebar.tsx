"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, TrendingUp, Gift } from "lucide-react"

const recentAnnouncements = [
    { title: "Pembukaan Cabang Jakarta Selatan", date: "20 Jan 2024", type: "info" },
    { title: "Workshop Jamu Tradisional Batch 3", date: "18 Jan 2024", type: "event" },
    { title: "Promo Spesial Ramadan 30%", date: "15 Jan 2024", type: "promo" },
    { title: "Rekrutmen Tim Marketing", date: "12 Jan 2024", type: "recruitment" },
    { title: "Peluncuran Aplikasi Mobile", date: "10 Jan 2024", type: "product" },
]

const upcomingEvents = [
    { title: "Grand Opening Jakarta Selatan", date: "25 Jan 2024", location: "Jakarta Selatan" },
    { title: "Workshop Jamu Tradisional", date: "28 Jan 2024", location: "Pusat Pelatihan PPKO" },
]

const statistics = [
    { label: "Pengumuman Bulan Ini", value: "12", icon: TrendingUp },
    { label: "Event Aktif", value: "5", icon: Calendar },
    { label: "Promo Berjalan", value: "3", icon: Gift },
]

export default function AnnouncementSidebar() {
    return (
        <div className="space-y-6">
            {/* Recent Announcements */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">Pengumuman Terbaru</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {recentAnnouncements.slice(0, 4).map((item, index) => (
                        <div
                            key={index}
                            className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-foreground truncate">{item.title}</p>
                                <p className="text-xs text-muted-foreground">{item.date}</p>
                            </div>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Mini Calendar & Upcoming Events */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">Event Mendatang</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    {upcomingEvents.map((event, index) => (
                        <div key={index} className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                            <h4 className="font-medium text-sm text-primary mb-1">{event.title}</h4>
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Calendar className="h-3 w-3" />
                                <span>{event.date}</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{event.location}</p>
                        </div>
                    ))}
                </CardContent>
            </Card>

            {/* Statistics */}
            <Card className="backdrop-blur-md bg-white/10 border-white/20">
                <CardHeader className="pb-3">
                    <CardTitle className="text-lg text-primary">Statistik</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                    {statistics.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <div key={index} className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
                                <div className="p-2 rounded-full bg-primary/20">
                                    <Icon className="h-4 w-4 text-primary" />
                                </div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-foreground">{stat.value}</p>
                                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                                </div>
                            </div>
                        )
                    })}
                </CardContent>
            </Card>
        </div>
    )
}
