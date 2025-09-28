import Image from "next/image"
import { Quote } from "lucide-react"
import Link from "next/link"


const testimonials = [
    {
        id: 1,
        name: "Genta Saputra",
        profession: "Mahasiswa",
        content:
            "Produk jamu dari Jamusari sangat berkualitas dan alami. Kesehatan keluarga saya jadi lebih terjaga sejak rutin mengonsumsi jamu modern ini.",
        avatar: "/images/user_testimonials/Genta.png",
    },
    {
        id: 2,
        name: "Tio Sinaga",
        profession: "Pegawai",
        content:
            "Pelayanan di Jamusari sangat memuaskan dan produknya terpercaya. Jamu tradisional ini membantu menjaga stamina saya dalam bekerja sehari-hari.",
        avatar: "/images/user_testimonials/Tio.png",
    },
    {
        id: 3,
        name: "Nathan Maulana",
        profession: "Peternak Lele",
        content:
            "Kualitas jamu Jamusari tidak diragukan lagi. Sudah bertahun-tahun menjadi pelanggan setia karena manfaatnya yang nyata untuk kesehatan.",
        avatar: "/images/user_testimonials/Nathan.png",
    },
]

export default function Testimonials() {
    return (
        <section className="py-16 bg-gradient-to-b from-white to-green-50/30">
            <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 max-w-sm sm:max-w-2xl md:max-w-4xl lg:max-w-5xl">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Testimoni <span className="text-primary">Pelanggan</span>
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami. Berikut adalah pengalaman nyata dari
                        pelanggan Jamusari.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300 group"
                        >
                            {/* Quote Icon */}
                            <div className="mb-4">
                                <Quote className="w-8 h-8 text-yellow-jamsari opacity-60" />
                            </div>

                            {/* Testimonial Content */}
                            <blockquote className="text-gray-700 mb-6 leading-relaxed">
                                &quot;{testimonial.content}&quot;
                            </blockquote>

                            {/* Customer Info */}
                            <div className="flex items-center gap-4">
                                <div className="relative">
                                    <Image
                                        src={testimonial.avatar || "/placeholder.svg"}
                                        alt={testimonial.name}
                                        width={70}
                                        height={70}
                                        className="object-cover border-2 border-primary/30 rounded-tr-4xl rounded-bl-4xl"
                                    />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900 text-lg">{testimonial.name}</h4>
                                    <p className="text-primary text-sm font-medium">{testimonial.profession}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="text-start mt-12">
                    <button className="bg-primary hover:bg-[#128a43] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300 shadow-lg hover:shadow-xl">
                        <Link href="/kontak">Kontak Kami </Link>
                    </button>
                </div>
            </div>
        </section>
    )
}
