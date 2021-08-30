import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { Filter } from '../../components/Filter';
import { Navbar } from '../../components/Navbar';
import { ProductCard } from '../../components/ProductCard';
import { ProductLine } from '../../components/ProductLine';
import { Sidebar } from '../../components/Sidebar';
import useProducts from '../../hooks/useProducts';

import './styles.scss'

export function Home() {

    const [visibleSidebar, setVisibleSidebar] = useState(false);
    const [visibleMobileFilter, setVisibleMobileFilter] = useState(false);

    const [currentPage, setCurrentPage] = useState(1)

    const pageLimit = 6;
    const { products, fetchProducts, totalProducts } = useProducts(pageLimit);

    useEffect(
        () => {
            fetchProducts(currentPage)
        }, [currentPage] // eslint-disable-line react-hooks/exhaustive-deps
    );

    function receiveMenuStatus(sidebarStatus: boolean) {
        setVisibleSidebar(sidebarStatus);
    }

    function receiveMobileFilterStatus(mobileFilterStatus: boolean) {
        setVisibleMobileFilter(mobileFilterStatus);
    }

    return (
        <>
            <Sidebar sidebarStatus={visibleSidebar}></Sidebar>

            <main>
                <Navbar sidebarStatus={receiveMenuStatus}></Navbar>

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
                    <aside style={{right: visibleMobileFilter  ? '0' : '100vw'}}>
                        <Filter mobileFilterStatus={receiveMobileFilterStatus}></Filter>
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
                                <input
                                    type="checkbox"
                                    id="mobile_filter_menu"
                                    onChange={() => setVisibleMobileFilter(!visibleMobileFilter)}
                                    checked={visibleMobileFilter}
                                />
                                <label htmlFor="mobile_filter_menu">
                                    <i className="fas fa-filter padding-border"></i>
                                </label>
                                {/* <p>{visibleMobileFilter ? 'true' : 'false'}</p> */}
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
                            {
                                products.map((product) =>
                                    <ProductLine
                                        key={product._id}
                                        {... product}
                                    />
                                )
                            }
                        </div>

                        <div className="products-list cards">
                            {
                                products.map((product) =>
                                    <ProductCard
                                        key={product._id}
                                        {... product}
                                    />
                                )
                            }
                        </div>

                        <div className="pagination">
                            <button
                                disabled={currentPage===1}
                                className={`page-item previous ${currentPage === 1 ? 'disabled' : ''}`}
                                onClick={() => setCurrentPage(currentPage - 1)}
                            >
                                <i className="fas fa-chevron-left"></i>
                            </button>
                            <div className="pages">
                                {Array( Math.ceil(totalProducts/pageLimit) ).fill('').map((_, index) => (
                                    <button
                                        className={`page-item ${currentPage===(index+1) ? 'active' : ''}`}
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                    >
                                        {index+1}
                                    </button>
                                ))}
                                {/* <button className="page-item active">3</button> */}
                                {/* <button disabled={true} className="page-item disabled">...</button> */}
                            </div>
                            <button
                                disabled={currentPage===Math.ceil(totalProducts/pageLimit)}
                                className={`page-item next ${currentPage === Math.ceil(totalProducts/pageLimit) ? 'disabled' : ''}`}
                                onClick={() => setCurrentPage(currentPage + 1)}
                            >
                                <i className="fas fa-chevron-right"></i>
                            </button>
                        </div>
                    </section>
                </div>
            </main>
        </>
    );
}
