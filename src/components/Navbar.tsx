import { NavLink } from 'react-router-dom';
import { NavLinksAuth, NavLinksMain } from '../data';
import { Fragment } from 'react';

const Navbar = () => {
  const storageKey = 'loggedInUser';
  const userDataString = localStorage.getItem(storageKey);
  const userData = userDataString ? JSON.parse(userDataString) : null;

  // Handlers
  const logoutHandler = () => {
    localStorage.removeItem('loggedInUser');
  };
  // Render
  const NavLinksMainRender = NavLinksMain.map((item) => {
    return (
      <li key={item.id} className={item.class}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `${isActive ? `${item.isActive}` : `${item.isNotActive}`} ${
              item.navLink
            }`
          }
        >
          <span className={item.spanClass}>{item.text}</span>
          <span className={item.spanClass}>{item.text}</span>
        </NavLink>
      </li>
    );
  });
  const NavLinksAuthRender = NavLinksAuth.map((item) => {
    return userData ? (
      <Fragment key={item.id}>
        <li key={item.id} className={item.class}>
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              `${isActive ? `${item.isActive}` : `${item.isNotActive}`} ${
                item.navLink
              }`
            }
          >
            <span className={item.spanClass}>{item.text}</span>
            <span className={item.spanClass}>{item.text}</span>
          </NavLink>
        </li>
        <li className={item.class}>
          <form onSubmit={logoutHandler}>
            <button className={`p-5 -translate-y-5 rounded-2xl logout-btn`}>
              logout
            </button>
          </form>
        </li>
      </Fragment>
    ) : (
      <li key={item.id} className={item.class}>
        <NavLink
          to={item.path}
          className={({ isActive }) =>
            `${isActive ? `${item.isActive}` : `${item.isNotActive}`} ${
              item.navLink
            }`
          }
        >
          <span className={item.spanClass}>{item.text}</span>
          <span className={item.spanClass}>{item.text}</span>
        </NavLink>
      </li>
    );
  });

  return (
    <nav className="max-w-lg lg:max-w-5xl px- mx-auto mt-7 mb-20 border border-slate-600 px-7 py-5 rounded-[5rem]">
      <ul className="flex items-center justify-between">
        {NavLinksMainRender}

        <aside className="flex items-center space-x-3">
          {NavLinksAuthRender}
        </aside>
      </ul>
    </nav>
  );
};

export default Navbar;
