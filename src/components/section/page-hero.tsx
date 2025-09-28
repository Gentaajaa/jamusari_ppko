import Image from "next/image" //Gunakan Import Ini Jika menggunakan Gambar


interface PageHeroProps {
    title: string
    subtitle?: string
    backgroundImage?: string
    supportingImage?: string
}

export default function PageHero({ title, subtitle, backgroundImage, supportingImage }: PageHeroProps) {
    return (
        <section className="relative h-screen flex items-center overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0">
                {backgroundImage ? (
                    <img src={backgroundImage || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20"></div>
                )}
                <div className="absolute inset-0 bg-black/40"></div>
            </div>

            <div className="relative z-10 w-full">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Left side - Text content */}
                        <div className="text-white">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6 text-left">{title}</h1>
                            {subtitle && <p className="text-lg md:text-xl text-balance opacity-90 text-left">{subtitle}</p>}
                        </div>

                        {/* Right side - Supporting image */}
                        {supportingImage && (
                            <div className="flex justify-center lg:justify-end">
                                <div className="relative">
                                    <Image
                                        src={supportingImage || "/placeholder.svg"}
                                        alt="Supporting visual"
                                        className="object-cover shadow-2xl"
                                        width={800}
                                        height={800}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    )
}
