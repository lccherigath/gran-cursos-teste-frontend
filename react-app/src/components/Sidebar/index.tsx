import './styles.scss';
import logo from '../../assets/images/logo.svg';

interface Props {
    sidebarStatus: boolean;
}

export function Sidebar(props: Props) {
    return (
        <div className="sidebar" style={{left: props.sidebarStatus ? 0 : '-100vw'}}>
            <img src={logo} className="logo" alt="Logo" />

            <div className="sidebar-menu-item dropdown">
                <div>
                    <i className="fas fa-home"></i>
                    Dashboard
                </div>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-circle"></i>
                eCommerce
            </div>

            <h4>APPS</h4>
            <div className="sidebar-menu-item">
                <i className="fas fa-envelope"></i>
                Email
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-comment-alt"></i>
                Chat
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-check-square"></i>
                Todo
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-calendar"></i>
                Calendar
            </div>

            <h4>UI Elements</h4>
            <div className="sidebar-menu-item dropdown">
                <div>
                    <i className="fas fa-th"></i>
                    Grid
                </div>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-tint"></i>
                Colors
            </div>
            <div className="sidebar-menu-item dropdown">
                <div>
                    <i className="fas fa-credit-card"></i>
                    Card
                </div>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-th-large"></i>
                Table
            </div>
            <div className="sidebar-menu-item dropdown">
                <div>
                    <i className="fas fa-archive"></i>
                    Components
                </div>
                <i className="fas fa-chevron-right"></i>
            </div>

            <h4>Forms</h4>
            <div className="sidebar-menu-item dropdown">
                <div>
                    <i className="fas fa-clone"></i>
                    Form Elements
                </div>
                <i className="fas fa-chevron-right"></i>
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-table"></i>
                Form Layouts
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-file-alt"></i>
                Form Wizard
            </div>
            <div className="sidebar-menu-item">
                <i className="fas fa-check-circle"></i>
                Form Validation
            </div>
        </div>
    );
}
