import Link from "next/link";
import Logo from "./icons/Logo";

export default function Header() {
    return (
        <div className="flex justify-between items-center bg-[#043873] text-white md:px-8 md:py-[22px] p-4">
            <div className="flex justify-evenly items-center md:gap-x-2 md:w-auto w-[134px]">
                <div className="md:w-8 w-6"><Logo /></div>
                <Link href={"/"}><h1 className="font-bold md:text-3xl text-xl">Galactic</h1></Link>
            </div>
        </div>
    )
}
