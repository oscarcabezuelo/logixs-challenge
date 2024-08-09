import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

export default function IssueActions() {
    return (
        <section className="m-8 fixed bottom-0 z-20">
            <Button className="bg-[#043873] hover:bg-blue-500" title="Volver" asChild>
                <Link href={"/manager"}><ArrowLeftIcon /></Link>
            </Button >
        </section>
    )
}
