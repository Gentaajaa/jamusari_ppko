"use client"

import dynamic from "next/dynamic"

import { MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { renderToString } from "react-dom/server"
import { useMemo } from "react"


// Maps Leaflet
const MapContainer = dynamic(
    () => import("react-leaflet").then((m) => m.MapContainer),
    { ssr: false }
)
const TileLayer = dynamic(
    () => import("react-leaflet").then((m) => m.TileLayer),
    { ssr: false }
)
const Marker = dynamic(
    () => import("react-leaflet").then((m) => m.Marker),
    { ssr: false }
)
const Popup = dynamic(
    () => import("react-leaflet").then((m) => m.Popup),
    { ssr: false }
)

export default function MapsLocation() {
    const handleOpenGoogleMaps = () => {
        // Placeholder URL - Masukin url kafenya nanti, untuk ngarahin langsung ke GMaps
        window.open("https://maps.google.com/?q=Jakarta,Indonesia", "_blank")
    }

    const customMarker = useMemo(() => {
        if (typeof window === "undefined") return null
        // eslint-disable-next-line @typescript-eslint/no-require-imports
        const L = require("leaflet")
        return L.divIcon({
            className: "custom-pin",
            html: renderToString(
                <div className="flex flex-col items-center">
                    {/* Pin utama */}
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg animate-bounce">
                        <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div className="w-3 h-3 bg-primary rounded-full mt-1 shadow-md"></div>
                </div>
            ),
            iconAnchor: [24, 48],
            popupAnchor: [0, -48],
        })
    }, [])

    return (
        <section className="py-16 bg-white">
            <div className="mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
                <div className="max-w-sm mx-auto sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
                    {/* Section Header */}
                    <div className="text-center mb-8">
                        <h2 className="text-3xl md:text-4xl font-bold text-yellow-jamsari mb-4">Lokasi Kami</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kunjungi kafe kami untuk merasakan langsung kualitas produk jamu modern terbaik
                        </p>
                    </div>

                    {/* Maps Container */}
                    <div className="relative">
                        {/* Google Maps Button */}
                        <div className="flex justify-end mb-4">
                            <Button
                                onClick={handleOpenGoogleMaps}
                                variant="outline"
                                size="sm"
                                className="border-[#159c4f] text-[#159c4f] hover:bg-[#159c4f] hover:text-white transition-colors duration-300 bg-transparent"
                            >
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Buka di Google Maps
                            </Button>
                        </div>

                        {/* Map Frame */}
                        <div className="w-full h-[500px] rounded-2xl shadow-lg overflow-hidden bg-gray-100 border border-gray-200">
                            {/* Placeholder Map - Replace with actual embed when ready */}
                            <MapContainer
                                center={[-6.2088, 106.8456]} // Jakarta sebagai contoh
                                zoom={15}
                                className="w-full h-full"
                                scrollWheelZoom={true}
                            >
                                <TileLayer
                                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                                />

                                {/* Custom Marker pakai Lucide-react */}
                                <Marker
                                    position={[-6.2088, 106.8456]}
                                    icon={customMarker}
                                >
                                    <Popup>
                                        <b>PPKO Store</b> <br /> Jl. Contoh Alamat No. 123
                                    </Popup>
                                </Marker>
                            </MapContainer>
                        </div>

                        {/* Contact Info */}
                        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-semibold text-[#159c4f] mb-2">Alamat</h4>
                                <p className="text-sm text-gray-600">
                                    Jl. Contoh Alamat No. 123
                                    <br />
                                    Jakarta Selatan, DKI Jakarta
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-semibold text-[#159c4f] mb-2">Jam Buka</h4>
                                <p className="text-sm text-gray-600">
                                    Senin - Sabtu: 08:00 - 20:00
                                    <br />
                                    Minggu: 09:00 - 18:00
                                </p>
                            </div>
                            <div className="p-4 bg-gray-50 rounded-xl">
                                <h4 className="font-semibold text-[#159c4f] mb-2">Kontak</h4>
                                <p className="text-sm text-gray-600">
                                    Telepon: (021) 1234-5678
                                    <br />
                                    WhatsApp: +62 812-3456-7890
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
