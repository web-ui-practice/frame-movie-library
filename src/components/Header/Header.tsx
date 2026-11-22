import type { View } from '../../types';
import logo from '../../assets/logo.svg';
import './Header.css';

interface HeaderProps {
  currentView: View;
  onNavigate: (view: View) => void;
  watchlistCount: number;
}

const NAV_ITEMS: { view: View; label: string }[] = [
  { view: 'discover', label: 'Discover' },
  { view: 'watchlist', label: 'My Watchlist' },
];

function Header({ currentView, onNavigate, watchlistCount }: HeaderProps) {
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
              {view === 'watchlist' && (
                <>
                  <span className="nav-link__count" aria-hidden="true">
                    {watchlistCount}
                  </span>
                  {/* Screen readers hear "My Watchlist, 4 saved" instead of "My Watchlist 4" */}
                  <span className="visually-hidden">, {watchlistCount} saved</span>
                </>
              )}
            </button>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
