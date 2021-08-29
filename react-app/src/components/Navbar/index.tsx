import { useState } from 'react';
import logoImg from '../../assets/images/logo.svg'
import userImg from '../../assets/images/user.png'
import './styles.scss';

interface Props {
    sidebarStatus: Function;
}

export function Navbar(props: Props) {
    const [visibleSidebar, setVisibleSidebar] = useState(false);

    function sendMenuStatus() {
        setVisibleSidebar(!visibleSidebar);
        props.sidebarStatus(!visibleSidebar);
    }

    return (
        <>
            <nav className="padding-border">
                <div className="icons">
                    <i className="fas fa-check-square"></i>
                    <i className="fas fa-comment-alt"></i>
                    <i className="fas fa-envelope"></i>
                    <i className="fas fa-calendar"></i>
                    <i className="fas fa-star"></i>
                </div>

                <div className="info">
                    <select>
                        <option value="en">English</option>
                        <option value="pt-br">Português</option>
                    </select>
                    <i className="fas fa-bell"></i>
                    <i className="fas fa-search"></i>
                    <div className="user-info">
                        <div>
                            <span className="user-name">John Doe</span>
                            <span className="user-status">Available</span>
                        </div>
                        <img src={userImg} alt="Foto do usuário" />
                    </div>
                </div>
            </nav>

            <nav className="mobile-nav">
                <div className="user-info">
                    <img src={userImg} alt="Foto do usuário" />
                </div>
                <img src={logoImg} className="logo" alt="Logo" />
                <div className="menu-icon">
                    <input
                        type="checkbox" id="check"
                        // onChange={event => setVisibleSidebar(!visibleSidebar)}
                        onChange={event => sendMenuStatus()}
                        checked={visibleSidebar}
                    />
                    {/* <p>{visibleSidebar ? 'true' : 'false'}</p> */}
                    <label htmlFor="check">
                        <i className="fas fa-bars"></i>
                    </label>
                </div>
            </nav>
        </>
    );
}
