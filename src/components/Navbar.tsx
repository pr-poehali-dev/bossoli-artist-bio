import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-bossoli-navy text-white shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-serif text-xl font-bold text-bossoli-gold">
            Карло Боссоли
          </Link>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-bossoli-gold transition-colors">
                Главная
              </Link>
            </li>
            <li>
              <Link to="/biography" className="hover:text-bossoli-gold transition-colors">
                Биография
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:text-bossoli-gold transition-colors">
                Галерея
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
