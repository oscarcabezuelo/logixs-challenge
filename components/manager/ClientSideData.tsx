// app/manager/ClientSideData.tsx
'use client';

import { useEffect, useState } from "react";
import ManagerTable from "@/components/manager/ManagerTable";
import { Board } from "@/components/manager/ManagerTable.types";
import { columns } from "@/components/manager/ManagerTableColumns";
import { API_KEY, BOARD_ID, TOKEN } from "@/data/trelloKeys";

function fetchBoardData() {
    return fetch(`https://api.trello.com/1/boards/${BOARD_ID}/cards?key=${API_KEY}&token=${TOKEN}`)
        .then(res => res.json())
        .catch(err => {
            console.error('Error fetching data:', err);
            return [];
        });
}

export default function ClientSideData({ initialData }: { initialData: Board[] }) {
    const [data, setData] = useState<Board[]>(initialData);

    const fetchData = async () => {
        const newData = await fetchBoardData();
        setData(newData);
    };

    useEffect(() => {
        fetchData();
        const interval = setInterval(fetchData, 3000);
        return () => clearInterval(interval);
    }, []);

    return <ManagerTable columns={columns} data={data} />;
}
