import AccessButton from "@/components/landing/AccessButton";
import Logo from "@/components/icons/Logo";


export default function HeroHeader() {
    return (
        <div className="flex justify-between items-center bg-[#043873] text-white md:px-8 md:py-4 p-4">
            <div className="flex justify-evenly items-center md:gap-x-2 md:w-auto w-[134px]">
                <div className="md:w-8 w-6"><Logo /></div>
                <h1 className="font-bold md:text-3xl text-xl">Galactic</h1>
            </div>
            <AccessButton className="md:inline-flex hidden" />
        </div>
    )
}
