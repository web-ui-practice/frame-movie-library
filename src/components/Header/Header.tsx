import type { View } from '../../types';
import logo from '../../assets/logo.svg';
import './Header.css';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
}

const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'discover', label: 'Discover' },
  { view: 'watchlist', label: 'My Watchlist' },
];

function Header({ currentView, onNavigate }: HeaderProps) {
  return (
    <header className="header">
      <span className="header__logo">
        <img className="header__mark" src={logo} alt="" />
        FRAME
      </span>

      <nav className="header__nav">
        {NAV_ITEMS.map(({ view, label }) => {
          const isActive = view === currentView;

          return (
            <button
              key={view}
              type="button"
              className={isActive ? 'nav-link nav-link--active' : 'nav-link'}
              aria-current={isActive ? 'page' : undefined}
              onClick={() => onNavigate(view)}
            >
              {label}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
