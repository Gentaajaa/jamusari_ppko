"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar

const navigationItems = [
    { name: "Beranda", href: "/" },
    { name: "Tentang Kami", href: "/tentang-kami" },
    { name: "Produk", href: "/produk" },
    { name: "Galeri", href: "/galeri" },
    { name: "Artikel", href: "/artikel" },
    { name: "Pengumuman", href: "/pengumuman" },
]

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)
    const pathname = usePathname()

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    if (pathname?.startsWith("/kontak")) {
        return null
    }

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                isScrolled ? "bg-primary/90 backdrop-blur-md shadow-lg" : "bg-transparent",
            )}
            suppressHydrationWarning={true} // <-- TAMBAHKAN INI
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link href="/" className="flex items-center space-x-2">
                        <Image
                            src="/images/logo_jamsari.png"
                            alt="Logo PPKO"
                            width={40}
                            height={40}
                            className="h-10 w-10 rounded-md"
                            priority
                        />
                        <span
                            className={cn(
                                "text-2xl font-bold transition-colors duration-300",
                                isScrolled ? "text-white" : "text-primary",
                            )}
                        >
                            JAMUSARI
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center">
                        <div
                            className={cn(
                                "border border-white/30 rounded-full px-8 py-3 shadow-lg transition-all duration-300",
                                isScrolled ? "bg-white/20 backdrop-blur-md" : "bg-white/20 backdrop-blur-md",
                            )}
                        >
                            <div className="flex items-center space-x-8">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "text-sm font-medium transition-all duration-300 hover:scale-105",
                                            pathname === item.href
                                                ? isScrolled
                                                    ? "text-yellow-jamsari font-semibold"
                                                    : "text-primary font-semibold"
                                                : isScrolled
                                                    ? "text-white hover:text-secondary"
                                                    : "text-gray-700 hover:text-primary",
                                        )}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block">
                        <Button
                            className={cn(
                                "px-6 py-2 rounded-full transition-all duration-300 hover:scale-105 shadow-lg",
                                isScrolled
                                    ? "bg-secondary hover:bg-secondary/90 text-white"
                                    : "bg-primary hover:bg-primary/90 text-white",
                            )}
                            asChild
                        >
                            <Link href="/kontak">Kontak Kami</Link>
                        </Button>
                    </div>

                    <Button
                        variant="ghost"
                        size="sm"
                        className={cn(
                            "md:hidden p-2 rounded-full border border-white/30 transition-all duration-300",
                            isScrolled ? "bg-white/10 backdrop-blur-md text-white" : "bg-white/20 backdrop-blur-md text-gray-700",
                        )}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </Button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-4">
                        <div
                            className={cn(
                                "border border-white/30 rounded-2xl p-4 shadow-lg transition-all duration-300",
                                isScrolled ? "bg-white/10 backdrop-blur-md" : "bg-white/20 backdrop-blur-md",
                            )}
                        >
                            <div className="space-y-3">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "block px-4 py-3 text-base font-medium transition-all duration-300 rounded-xl hover:bg-white/20",
                                            pathname === item.href
                                                ? isScrolled
                                                    ? "text-secondary bg-white/30 font-semibold"
                                                    : "text-primary bg-white/30 font-semibold"
                                                : isScrolled
                                                    ? "text-white"
                                                    : "text-gray-700",
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}
                                <div className="pt-3 border-t border-white/30">
                                    <Button
                                        className={cn(
                                            "w-full rounded-xl transition-all duration-300",
                                            isScrolled
                                                ? "bg-secondary hover:bg-secondary/90 text-white"
                                                : "bg-primary hover:bg-primary/90 text-white",
                                        )}
                                        asChild
                                    >
                                        <Link href="/kontak">Kontak Kami</Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    )
}
