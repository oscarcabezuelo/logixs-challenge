import Content from '@/components/Content'
import Header from '@/components/Header'
import LoadingSpinner from '@/components/icons/LoadingSpinner'

export default function ManagerLoading() {

    return (
        <>
            <Header />
            <Content>
                <section className='size-full'><LoadingSpinner /></section>
            </Content>
        </>

    )
}
