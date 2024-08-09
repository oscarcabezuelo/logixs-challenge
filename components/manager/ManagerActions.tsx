
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PlusIcon } from "@radix-ui/react-icons";

export default function ManagerActions() {
    return (
        <section className="m-8 fixed bottom-0 z-20">
            <Button
                title="Nueva incidencia"
                asChild
                className="bg-[#043873] hover:bg-blue-500"
            >
                <Link href={"/issue"}><PlusIcon /></Link>
            </Button >
        </section>
    )
}
