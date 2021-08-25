import './styles.scss';
import logo from '../../assets/images/logo.svg';

export function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} alt="Logo" />

            <div>
                <i className="far fa-home"></i>
                Dashboard
            </div>
            <div>
                <i className="far fa-circle"></i>
                eCommerce
            </div>

            <h2>APPS</h2>
            <div>
                <i className="far fa-envelope"></i>
                Email
            </div>
            <div>
                <i className="far fa-comment-alt"></i>
                Chat
            </div>
            <div>
                <i className="far fa-check-square"></i>
                Todo
            </div>
            <div>
                <i className="far fa-calendar"></i>
                Calendar
            </div>

            <h2>UI Elements</h2>
            <div>
                <i className="far fa-th"></i>
                Grid
            </div>
            <div>
                <i className="far fa-tint"></i>
                Colors
            </div>
            <div>
                <i className="far fa-credit-card"></i>
                Card
            </div>
            <div>
                <i className="far fa-th-large"></i>
                Table
            </div>
            <div>
                <i className="far fa-archive"></i>
                Components
            </div>

            <h2>Forms</h2>
            <div>
                <i className="far fa-clone"></i>
                Form Elements
            </div>
            <div>
                <i className="far fa-table"></i>
                Form Layouts
            </div>
            <div>
                <i className="far fa-file-alt"></i>
                Form Wizard
            </div>
            <div>
                <i className="far fa-check-circle"></i>
                Form Validation
            </div>
        </div>
    );
}
