import { Link } from 'react-router-dom';

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

                <div className="breadcrumb">
                    <div>
                        <span className="breadcrumb-root">Card Actions</span>
                        <Link to="/">
                            <i className="fas fa-home"></i>
                        </Link>
                        <i className="fas fa-angle-double-right"></i>
                        <Link to="/">eCommerce</Link>
                        <i className="fas fa-angle-double-right"></i>
                        <span className="last-node">Eletronics</span>
                    </div>
                    <button type="button">
                        <i className="fas fa-cog"></i>
                    </button>
                </div>

                <div className="content">
                    <aside>
                        <Filter></Filter>
                    </aside>

                    <section>
                        <div className="view-options">
                            <span className="count">7.618 results found in 5ms</span>
                            <div className="view-mode">
                                <select className="padding-border">
                                    <option value="default">Default</option>
                                </select>
                                <i className="fas fa-th-large padding-border"></i>
                                <i className="fas fa-bars padding-border"></i>
                            </div>
                        </div>

                        <div className="search padding-border">
                            <input type="text"
                                placeholder="Search hear"
                            />
                            <i className="fas fa-search"></i>
                        </div>

                            {/* <ProductLine></ProductLine>
                            <ProductLine></ProductLine> */}
                        <div className="products-list lines">
                            <ProductLine></ProductLine>
                            <ProductLine></ProductLine>
                            <ProductLine></ProductLine>
                            <ProductLine></ProductLine>
                            <ProductLine></ProductLine>
                        </div>

                        <div className="products-list cards">
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                            <ProductCard></ProductCard>
                        </div>


                        <div className="pagination">
                            <button className="page-item previous">
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="pages">
                                <button className="page-item">1</button>
                                <button className="page-item">2</button>
                                <button className="page-item">3</button>
                                <button className="page-item">4</button>
                                <button className="page-item">5</button>
                                <button className="page-item active">6</button>
                                <button className="page-item">7</button>
                                <button className="page-item">8</button>
                                <button className="page-item">9</button>
                                <button className="page-item">10</button>
                            </div>
                            <button className="page-item next">
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
