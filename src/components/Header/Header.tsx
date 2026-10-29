import type {View} from '../../types';
import logo from '../../assets/logo.svg';
import './Header.css';

interface HeaderProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

function Header ({ currentView, onNavigate }: HeaderProps) {
    return (
        <header className='header'>
            <span className='header__logo'>
                <img className='header__mark' src={logo} alt="" />
                FRAME
            </span>

            <nav className='header__nav'>
                <button type='button' 
                 className={currentView === 'discover' ? 'nav-link nav-link--active' : 'nav-link'}
                 aria-current={currentView === 'discover' ? 'page' : undefined}
                 onClick={() => onNavigate('discover')}>
                    Discover
                </button>
                <button type='button' 
                 className={currentView === 'watchlist' ? 'nav-link nav-link--active' : 'nav-link'}
                 aria-current={currentView === 'watchlist' ? 'page' : undefined}
                 onClick={() => onNavigate('watchlist')}>
                    My Watchlist
                </button>
            </nav>
        </header>
    );
}

export default Header;

