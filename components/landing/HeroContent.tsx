import AccessButton from "@/components/landing/AccessButton";

export default function HeroContent() {
    return (
        <section className="md:block flex flex-col gap-14 md:w-[562px] md:mx-8 md:my-36 mx-4 my-20 ">
            <div className="flex flex-col gap-6 md:text-left text-center">
                <h2 className="md:text-6xl text-4xl md:leading-snug font-bold">Bienvenido a Galactic Corp</h2>
                <p className="leading-7 text-[18px]">Explorando nuevas fronteras del espacio, elevando la humanidad hacia un futuro ilimitado 🚀</p>
            </div>
            <AccessButton className="mx-auto md:mt-14" />
        </section>
    )
}
