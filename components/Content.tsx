type ContentProps = {
    children?: string | React.ReactNode
}

export default function Content({ children }: ContentProps) {
    return (
        <section className="flex md:flex-col flex-row mt-8 md:mx-8 space-y-4">
            {children}
        </section>
    )
}
