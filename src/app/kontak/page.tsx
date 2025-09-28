"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Mail, Instagram, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function KontakPage() {
    const [formData, setFormData] = useState({
        nama: "",
        email: "",
        pesan: "",
    })

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle form submission here
        console.log("Form submitted:", formData)
        // Reset form
        setFormData({ nama: "", email: "", pesan: "" })
        alert("Pesan Anda telah terkirim! Terima kasih.")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
            {/* Header with Back Button */}
            <div className="container mx-auto px-4 py-8">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors duration-300 mb-8"
                >
                    <ArrowLeft className="h-5 w-5" />
                    <span className="font-medium">Kembali</span>
                </Link>

                <div className="max-w-2xl mx-auto">
                    {/* Page Title */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-900 mb-4">Kontak Kami</h1>
                        <p className="text-lg text-gray-600">
                            Hubungi kami untuk pertanyaan, saran, atau informasi lebih lanjut tentang produk PPKO
                        </p>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg mb-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <Label htmlFor="nama" className="text-sm font-medium text-gray-700 mb-2 block">
                                    Nama Lengkap
                                </Label>
                                <Input
                                    id="nama"
                                    name="nama"
                                    type="text"
                                    value={formData.nama}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="Masukkan nama lengkap Anda"
                                />
                            </div>

                            <div>
                                <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                                    Email
                                </Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                                    placeholder="contoh@email.com"
                                />
                            </div>

                            <div>
                                <Label htmlFor="pesan" className="text-sm font-medium text-gray-700 mb-2 block">
                                    Pesan
                                </Label>
                                <Textarea
                                    id="pesan"
                                    name="pesan"
                                    value={formData.pesan}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300 resize-none"
                                    placeholder="Tulis pesan Anda di sini..."
                                />
                            </div>

                            <Button
                                type="submit"
                                className="w-full bg-primary hover:bg-primary/90 text-white py-3 px-6 rounded-xl font-medium transition-all duration-300 hover:scale-[1.02] shadow-lg flex items-center justify-center gap-2"
                            >
                                <Send className="h-5 w-5" />
                                Kirim Pesan
                            </Button>
                        </form>
                    </div>

                    {/* Contact Information */}
                    <div className="bg-white/60 backdrop-blur-md border border-white/30 rounded-2xl p-8 shadow-lg">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Informasi Kontak</h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                                <div className="bg-primary/10 p-3 rounded-full">
                                    <Mail className="h-6 w-6 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Email Resmi</h3>
                                    <p className="text-gray-600">info@ppko.co.id</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl">
                                <div className="bg-secondary/10 p-3 rounded-full">
                                    <Instagram className="h-6 w-6 text-secondary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-gray-900">Instagram</h3>
                                    <p className="text-gray-600">@ppko_official</p>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 p-4 bg-primary/5 rounded-xl border border-primary/20">
                            <p className="text-sm text-gray-600 text-center">
                                Tim kami akan merespons pesan Anda dalam waktu 1-2 hari kerja. Terima kasih atas kepercayaan Anda pada
                                produk PPKO!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
