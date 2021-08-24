import './styles.scss';
import logo from '../../assets/images/logo.svg';

export function Sidebar() {
    return (
        <div className="sidebar">
            <img src={logo} alt="Logo" />

            <div>
                <i className="fas fa-home"></i>
                Dashboard
            </div>
            <div>
                <i className="fas fa-circle"></i>
                eCommerce
            </div>

            <h2>APPS</h2>
            <div>
                <i className="fas fa-envelope"></i>
                Email
            </div>
            <div>
                <i className="fas fa-comment-alt"></i>
                Chat
            </div>
            <div>
                <i className="fas fa-check-square"></i>
                Todo
            </div>
            <div>
                <i className="fas fa-calendar"></i>
                Calendar
            </div>

            <h2>UI Elements</h2>
            <div>
                <i className="fas fa-th"></i>
                Grid
            </div>
            <div>
                <i className="fas fa-tint"></i>
                Colors
            </div>
            <div>
                <i className="fas fa-credit-card"></i>
                Card
            </div>
            <div>
                <i className="fas fa-th-large"></i>
                Table
            </div>
            <div>
                <i className="fas fa-archive"></i>
                Components
            </div>

            <h2>Forms</h2>
            <div>
                <i className="fas fa-clone"></i>
                Form Elements
            </div>
            <div>
                <i className="fas fa-table"></i>
                Form Layouts
            </div>
            <div>
                <i className="fas fa-file-alt"></i>
                Form Wizard
            </div>
            <div>
                <i className="fas fa-check-circle"></i>
                Form Validation
            </div>
        </div>
    );
}
