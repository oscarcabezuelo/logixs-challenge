import Header from "@/components/Header";
import Content from "@/components/Content";
import IssueActions from "@/components/issue/IssueActions";
import IssueForm from "@/components/issue/IssueForm";
import { API_KEY, BOARD_ID, TOKEN } from "@/data/trelloKeys";

const fetchLabels = () => {
    const url = `https://api.trello.com/1/boards/${BOARD_ID}/labels?key=${API_KEY}&token=${TOKEN}`
    return fetch(
        url,
        {
            method: 'GET',
            headers: {
                'Accept': 'application/json'
            }
        }
    ).then(res => res.json())
}

export default async function Issue() {
    const labels = await fetchLabels()

    return (
        <>
            <Header />
            <IssueActions />
            <Content>
                <IssueForm labels={labels} />
            </Content>
        </>
    )
}
