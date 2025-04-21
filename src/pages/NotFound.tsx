import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center py-12">
        <div className="text-center px-4">
          <h1 className="text-6xl font-serif font-bold text-bossoli-navy mb-4">404</h1>
          <h2 className="text-2xl font-serif text-bossoli-crimson mb-6">Страница не найдена</h2>
          <p className="text-lg mb-8 max-w-md mx-auto">
            К сожалению, запрашиваемая страница не существует или была перемещена.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-bossoli-gold text-bossoli-navy px-6 py-3 rounded font-medium hover:bg-opacity-90 transition-colors"
          >
            Вернуться на главную
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
