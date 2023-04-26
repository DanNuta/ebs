import { Routes, Route, Link } from 'react-router-dom';

import { Home, Card } from 'pages';

export const ROUTER_PATH = {
  home: '/',
  card: '/card',
};

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`${ROUTER_PATH.home}`}>Home</Link>
          </li>
          <li>
            <Link to={`${ROUTER_PATH.card}`}>Card</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path={`${ROUTER_PATH.home}`} element={<Home />} />
        <Route path={`${ROUTER_PATH.card}`} element={<Card />} />
      </Routes>
    </div>
  );
};

export default App;
