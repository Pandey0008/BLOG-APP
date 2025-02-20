import React, { useState, useMemo } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X } from 'lucide-react'; // Icons for menu toggle

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = useMemo(() => [
    { name: 'Home', slug: "/", active: true },
    { name: "Login", slug: "/login", active: !authStatus },
    { name: "Signup", slug: "/signup", active: !authStatus },
    { name: "All Posts", slug: "/all-posts", active: authStatus },
    { name: "Add Post", slug: "/add-post", active: authStatus },
  ], [authStatus]);

  return (
    <header className="bg-gray-800 shadow-md text-white">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <Logo width="100px" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2 rounded-md"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Navigation Items (Desktop) */}
          <ul className="hidden lg:flex space-x-6">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name}>
                  <button
                    onClick={() => navigate(item.slug)}
                    className={`px-5 py-2 rounded-lg transition-all 
                      ${location.pathname === item.slug ? "bg-blue-500" : "hover:bg-gray-700"}`}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && <LogoutBtn />}
          </ul>
        </nav>

        {/* Mobile Navigation (Collapsible) */}
        <div
          className={`lg:hidden flex flex-col gap-3 p-5 bg-gray-900 rounded-md transition-all 
            ${menuOpen ? "block" : "hidden"}`}
        >
          {navItems.map((item) =>
            item.active ? (
              <button
                key={item.name}
                onClick={() => {
                  navigate(item.slug);
                  setMenuOpen(false);
                }}
                className={`block w-full text-left px-4 py-2 rounded-lg transition-all 
                  ${location.pathname === item.slug ? "bg-blue-500" : "hover:bg-gray-700"}`}
              >
                {item.name}
              </button>
            ) : null
          )}
          {authStatus && <LogoutBtn />}
        </div>
      </Container>
    </header>
  );
}

export default Header;
