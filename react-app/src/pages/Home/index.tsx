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

                        <div className="products">
                            <ProductLine></ProductLine>
                        </div>
                        {/* <div>
                            <ProductCard></ProductCard>
                        </div> */}
                    </section>
                </div>
            </main>
        </>
    );
}
