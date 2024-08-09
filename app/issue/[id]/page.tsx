import Content from "@/components/Content"
import Header from "@/components/Header"
import IssueActions from "@/components/issue/IssueActions"
import IssueForm from "@/components/issue/IssueForm"
import { BOARD_ID, API_KEY, TOKEN } from "@/data/trelloKeys"

const fetchCard = (id: string) => {
    const url = `https://api.trello.com/1/cards/${id}?key=${API_KEY}&token=${TOKEN}`
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store'
        }
    ).then(res => res.json())
}

const fetchLabels = () => {
    const url = `https://api.trello.com/1/boards/${BOARD_ID}/labels?key=${API_KEY}&token=${TOKEN}`
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            },
            cache: 'no-store'
        }
    ).then(res => res.json())
}

export default async function IssueEdit({ params }: { params: { id: string } }) {
    const data = await fetchCard(params.id)
    const labels = await fetchLabels()
    const formData = {
        id: data.id,
        title: data.name,
        desc: data.desc,
        priority: data.labels[0].id
    }


    return (
        <>
            <Header />
            <IssueActions />
            <Content>
                <IssueForm data={formData} labels={labels} />
            </Content>
        </>
    )
}