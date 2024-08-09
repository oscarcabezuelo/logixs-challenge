import Header from "@/components/Header";
import Content from "@/components/Content";
import ManagerActions from "@/components/manager/ManagerActions";
import { Suspense } from "react";
import ManagerLoading from "./loading";
import { Board } from "@/components/manager/ManagerTable.types";
import { API_KEY, BOARD_ID, TOKEN } from "@/data/trelloKeys";
import { columns } from "@/components/manager/ManagerTableColumns";
import ClientSideData from "@/components/manager/ClientSideData";

const fetchBoard = async () => {
    const url = `https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${API_KEY}&token=${TOKEN}`

    const res = await fetch(url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            next: { revalidate: 60 }
        }
    )

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Manager() {

    const data: Board[] = await fetchBoard()

    return (
        <>
            <Header />
            <ManagerActions />
            <Content>
                <Suspense fallback={<ManagerLoading />}>
                    <ClientSideData initialData={data} />
                </Suspense>
            </Content>
        </>
    )
}