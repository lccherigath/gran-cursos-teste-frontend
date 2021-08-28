import userImg from '../../assets/images/user.png'
import './styles.scss';

export function Navbar() {
    return (
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
    );
}
