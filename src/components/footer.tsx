import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12 mt-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-4">Jamsari</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Kafe jamu kekinian yang menghadirkan minuman tradisional Indonesia dengan sentuhan modern, berbasis potensi lokal Desa Guwosari. Bagian dari Program PPK Ormawa untuk edukasi, pelestarian TOGA, serta inovasi produk herbal yang sehat dan bernilai.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Instagram</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 1.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7ZM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2Z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Gmail</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.16c.35.29.85.29 1.2 0L20 8.24V18H4Z" />
                                </svg>
                            </Link>
                            <Link href="#" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">WhatsApp</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 2C6.477 2 2 6.11 2 11.345c0 1.93.566 3.72 1.547 5.23L2 22l5.61-1.808a10.2 10.2 0 0 0 4.39.95c5.523 0 10-4.11 10-9.345S17.523 2 12 2Zm0 16.73c-1.43 0-2.82-.39-4.02-1.13l-.29-.17-3.32 1.07 1.08-3.2-.19-.3a7.65 7.65 0 0 1-1.21-4.3c0-4.19 3.54-7.6 7.95-7.6s7.95 3.41 7.95 7.6c0 4.19-3.54 7.6-7.95 7.6Zm3.98-5.53c-.22-.11-1.29-.64-1.49-.72-.2-.07-.35-.11-.5.11s-.57.72-.7.87c-.13.14-.26.16-.48.05-.22-.11-.93-.34-1.77-1.09-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.36.07-.14.03-.27-.01-.38-.05-.11-.48-1.17-.66-1.61-.18-.44-.37-.38-.5-.39h-.43c-.14 0-.37.05-.57.27-.2.22-.75.73-.75 1.78s.77 2.07.88 2.21c.11.14 1.52 2.34 3.7 3.28.52.23.93.37 1.25.48.52.17 1 .15 1.38.09.42-.06 1.29-.52 1.47-1.02.18-.5.18-.93.13-1.02-.05-.09-.2-.14-.42-.25Z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>
                                📍 Jl. Jamu Sehat No. 123
                                <br />
                                Jakarta Selatan, 12345
                            </p>
                            <p>📞 +62 812-3456-7890</p>
                            <p>✉️ info@dejamuanz.com</p>
                            <p>
                                🕒 Senin - Minggu
                                <br />
                                08:00 - 22:00 WIB
                            </p>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Menu Cepat</h4>
                        <div className="space-y-2">
                            <Link href="/" className="block text-gray-300 hover:text-primary transition-colors">
                                Beranda
                            </Link>
                            <Link href="/tentang-kami" className="block text-gray-300 hover:text-primary transition-colors">
                                Tentang Kami
                            </Link>
                            <Link href="/produk" className="block text-gray-300 hover:text-primary transition-colors">
                                Produk
                            </Link>
                            <Link href="/galeri" className="block text-gray-300 hover:text-primary transition-colors">
                                Galeri
                            </Link>
                            <Link href="/artikel" className="block text-gray-300 hover:text-primary transition-colors">
                                Artikel
                            </Link>
                            <Link href="/pengumuman" className="block text-gray-300 hover:text-primary transition-colors">
                                Pengumuman
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>&copy; 2025 Jamusari - Semua hak dilindungi.</p>
                </div>
            </div>
        </footer>
    )
}
