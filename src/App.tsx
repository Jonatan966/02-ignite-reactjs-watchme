import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { Header } from './components/Header';

import { GenreProvider } from './contexts/GenreContext';

import './styles/global.scss';

export function App() {

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <GenreProvider>
        <SideBar />

        <div className="container">
          <Header />

          <main>
            <Content />
          </main>
        </div>
      </GenreProvider>
    </div>
  )
}
