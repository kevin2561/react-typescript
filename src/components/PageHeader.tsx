import './PageHeader.css'
type Props = {
    tituloPage: string;

};

export default function PageHeader({ tituloPage }: Props) {

    return (
        <>
            <section id='page-header' className='container'>
                <h1 className='h1'>{tituloPage}</h1>
            </section>

        </>
    )
}
