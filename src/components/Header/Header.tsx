import type {View} from '../../types';

interface HeaderProps {
    currentView: View;
    onNavigate: (view: View) => void;
}

function Header ({ currentView, onNavigate }: HeaderProps) {
    return (
        <header>
            <span>FRAME</span>

            <nav>
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

