import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"

export const metadata: Metadata = {
    title: "Kontak Kami - Jamusari",
    description: "Hubungi kami untuk pertanyaan, saran, atau informasi lebih lanjut tentang produk Jamusari",
}

export default function KontakLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <div className="min-h-screen">{children}</div>
            </Suspense>
            <Analytics />
        </>
    )
}
