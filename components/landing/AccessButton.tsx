'use client'

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "@radix-ui/react-icons"
import Link from "next/link";
import { usePathname } from "next/navigation";

type AccessButtonProps = {
    className?: string
}

export default function AccessButton({ className }: AccessButtonProps) {
    const pathname = usePathname()

    return (
        <Button className={cn(
            `bg-[#4F9CF9] text-[18px] md:py-6 md:px-4 py-10 px-5 rounded-lg hover:bg-[#4F9CF990] ${pathname === "/manager" ? "md:hidden" : "md:inline-flex"}`,
            className
        )} asChild>
            <Link href={"/manager"}>Acceder < ArrowRightIcon className="ml-2" /></Link>
        </Button >
    )
}
