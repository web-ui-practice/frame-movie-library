import { useState } from 'react';
import type { View } from './types/index';
import Header from './components/Header/Header';
import DiscoverView from './views/DiscoverView';
import WatchlistView from './views/WatchlistView';
import { useWatchlist } from './hooks/useWatchlist';

function App() {
  const [currentView, setCurrentView] = useState<View>('discover');
  // Watchlist lives in App: Header, Discover and My Watchlist all need it
  const { watchlistIds, isInWatchlist, toggleWatchlist } = useWatchlist();

  return (
    <>
      <Header
        currentView={currentView}
        onNavigate={setCurrentView}
        watchlistCount={watchlistIds.length}
      />
      {currentView === 'discover' ? (
        <DiscoverView isInWatchlist={isInWatchlist} onToggleWatchlist={toggleWatchlist} />
      ) : (
        <WatchlistView
          watchlistIds={watchlistIds}
          isInWatchlist={isInWatchlist}
          onToggleWatchlist={toggleWatchlist}
          onBrowse={() => setCurrentView('discover')}
        />
      )}
    </>
  );
}

export default App;
