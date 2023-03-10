import React from "react";
import { Link, Outlet } from "react-router-dom";
const App: React.FC = () => {
  return (
    <div>
      <nav>
      <h1>Strona główna</h1>
      <ul>
        <li>
          <Link to="/todo-list">Todo Lista</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      </nav>
      <div>
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default App;
