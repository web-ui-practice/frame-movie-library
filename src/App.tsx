import {useState} from 'react';
import type {View} from './types/index';
import Header from './components/Header/Header';
import DiscoverView from './views/DiscoverView';
import WatchlistView from './views/WatchlistView';


function App() {

  const [currentView, setCurrentView] = useState<View>('discover');
  return (
    <>
     <Header currentView={currentView} onNavigate={setCurrentView} />
     {currentView === 'discover' ? <DiscoverView /> : <WatchlistView />}
    </>
  );
}

export default App;