import Link from "next/link"

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-8 mt-18">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div className="col-span-1 md:col-span-2">
                        <h3 className="text-2xl font-bold text-primary mb-4">Jamsari</h3>
                        <p className="text-gray-300 mb-4 leading-relaxed">
                            Kafe jamu kekinian yang menghadirkan minuman tradisional Indonesia dengan sentuhan modern, berbasis potensi lokal Desa Guwosari. Bagian dari Program PPK Ormawa untuk edukasi, pelestarian TOGA, serta inovasi produk herbal yang sehat dan bernilai.
                        </p>
                        <div className="flex space-x-4">
                            <Link href="https://www.instagram.com/ppko.hmifuii?igsh=N2hqcmh1NjlvNWUw" className="text-gray-400 hover:text-primary transition-colors">
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
                            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ppkormawahmifuii@gmail.com"
                                className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">Gmail</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M20 4H4C2.9 4 2 4.9 2 6v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.16c.35.29.85.29 1.2 0L20 8.24V18H4Z" />
                                </svg>
                            </a>
                            <Link href="https://www.tiktok.com/@ppko.hmifuii?_t=ZS-90ECPLof9Yl&_r=1" className="text-gray-400 hover:text-primary transition-colors">
                                <span className="sr-only">TikTok</span>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    className="w-6 h-6"
                                >
                                    <path d="M12.5 2h3.1c.1 1.3.7 2.6 1.7 3.5s2.2 1.4 3.5 1.5v3.1c-1.2 0-2.4-.3-3.5-.9v6.9c0 1.7-.7 3.3-1.9 4.5s-2.8 1.9-4.5 1.9-3.3-.7-4.5-1.9-1.9-2.8-1.9-4.5 1-3.5 2.6-4.6c1.1-.7 2.4-1 3.8-.9v3.2c-.5-.1-1 .1-1.4.4-.4.3-.7.8-.7 1.3 0 .5.2 1 .6 1.4.4.4.9.6 1.4.6.5 0 1-.2 1.3-.7.3-.4.5-.9.4-1.4V2z" />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Kontak</h4>
                        <div className="space-y-3 text-gray-300">
                            <p>📞 (+62) 812-1163-5636</p>
                            <p>📧 ppkormawahmifuii@gmail.com</p>
                            <p>
                                🕒 Senin - Sabtu: <br /> 16:00 - 21.00
                                <br />
                                Minggu: <br /> 15:00 - 22:00
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
