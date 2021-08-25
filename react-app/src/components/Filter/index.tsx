import './styles.scss';

export function Filter() {
    return (
        <div className="filter-container">
            <span className="component-title">Filters</span>

            <div className="filter padding-border">
                <p>Multi Range</p>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="radio" id="multi-range-10" name="multi_range" value="" />
                        <label htmlFor="multi-range-10">$10</label>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="radio" id="multi-range-10-100" name="multi_range" value="" />
                        <label htmlFor="multi-range-10-100">$10-$100</label>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="radio" id="multi-range-100-500" name="multi_range" value="" />
                        <label htmlFor="multi-range-100-500">$100-$500</label>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="radio" id="multi-range-500" name="multi_range" value="" />
                        <label htmlFor="multi-range-500">$500</label>
                    </div>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="radio" id="multi-range-all" name="multi_range" value="" />
                        <label htmlFor="multi-range-all">All</label>
                    </div>
                </div>

                <hr />

                <p>Slider</p>
                <div className="filter-field">
                    <input type="range"/>
                </div>

                <hr />

                <p>Category</p>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-1" value="category-1" />
                        <label htmlFor="category-1">Cell Phones</label>
                    </div>
                    <span className="count">1920</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-2" value="category-2" />
                        <label htmlFor="category-2">Computers & Tablets</label>
                    </div>
                    <span className="count">1820</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-3" value="category-3" />
                        <label htmlFor="category-3">Cell Phone Accessories</label>
                    </div>
                    <span className="count">462</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-4" value="category-4" />
                        <label htmlFor="category-4">Appliances</label>
                    </div>
                    <span className="count">6556</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-5" value="category-5" />
                        <label htmlFor="category-5">Audio</label>
                    </div>
                    <span className="count">120</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-6" value="category-6" />
                        <label htmlFor="category-6">iPhone Accessories</label>
                    </div>
                    <span className="count">353</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-7" value="category-7" />
                        <label htmlFor="category-7">Cameras & Camcorders</label>
                    </div>
                    <span className="count">45</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-8" value="category-8" />
                        <label htmlFor="category-8">iPhone Cases & Clips</label>
                    </div>
                    <span className="count">456</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-9" value="category-9" />
                        <label htmlFor="category-9">TV & Home Theater</label>
                    </div>
                    <span className="count">55</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="category-10" value="category-10" />
                        <label htmlFor="category-10">Small Kitchen Appliances</label>
                    </div>
                    <span className="count">10</span>
                </div>

                <hr />

                <p>Brand</p>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-1" value="brand-1" />
                        <label htmlFor="brand-1">Insigni</label>
                    </div>
                    <span className="count">220</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-2" value="brand-2" />
                        <label htmlFor="brand-2">Samsung</label>
                    </div>
                    <span className="count">120</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-3" value="brand-3" />
                        <label htmlFor="brand-3">Apple</label>
                    </div>
                    <span className="count">320</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-4" value="brand-4" />
                        <label htmlFor="brand-4">HP</label>
                    </div>
                    <span className="count">32</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-5" value="brand-5" />
                        <label htmlFor="brand-5">Sony</label>
                    </div>
                    <span className="count">520</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-6" value="brand-6" />
                        <label htmlFor="brand-6">Metra</label>
                    </div>
                    <span className="count">55</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-7" value="brand-7" />
                        <label htmlFor="brand-7">Dyne</label>
                    </div>
                    <span className="count">120</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-8" value="brand-8" />
                        <label htmlFor="brand-8">LG</label>
                    </div>
                    <span className="count">98</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-9" value="brand-9" />
                        <label htmlFor="brand-9">Canon</label>
                    </div>
                    <span className="count">99</span>
                </div>
                <div className="filter-field">
                    <div className="input-group">
                        <input type="checkbox" id="brand-10" value="brand-10" />
                        <label htmlFor="brand-10">Speck</label>
                    </div>
                    <span className="count">575</span>
                </div>

                <hr />

                <p>Rating</p>
                <div className="filter-field">
                    <div className="rating-field">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <span>& Up</span>
                    </div>
                    <span className="count">8500</span>
                </div>
                <div className="filter-field">
                    <div className="rating-field">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <span>& Up</span>
                    </div>
                    <span className="count">3250</span>
                </div>
                <div className="filter-field">
                    <div className="rating-field">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <span>& Up</span>
                    </div>
                    <span className="count">1120</span>
                </div>
            </div>

            <button>CLEAR ALL FILTERS</button>

        </div>
    );
}
