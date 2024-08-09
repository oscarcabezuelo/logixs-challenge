type HeroSectionProps = {
    children?: string | React.ReactNode
}

export default function HeroSection({ children }: HeroSectionProps) {
    return (
        <div id="hero" className="h-screen bg-[#043873] text-white">{children}</div>
    )
}

