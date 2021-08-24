import { Filter } from '../../components/Filter';
import { Navbar } from '../../components/Navbar';
import { ProductCard } from '../../components/ProductCard';
import { ProductLine } from '../../components/ProductLine';
import { Sidebar } from '../../components/Sidebar';
import './styles.scss'

export function Home() {
    return (
        <>
            <Sidebar></Sidebar>

            <main>
                <Navbar></Navbar>

                <Filter></Filter>

                <section>
                    <ProductCard></ProductCard>
                    <ProductLine></ProductLine>
                </section>
            </main>
        </>
    );
}
