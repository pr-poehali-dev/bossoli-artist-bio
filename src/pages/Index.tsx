import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import { sevastopolArtworks } from "@/data/artworks";

const Index = () => {
  // Показываем только 3 картины на главной странице
  const featuredArtworks = sevastopolArtworks.slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero секция */}
        <section className="bg-bossoli-navy text-white py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                Карло Боссоли
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-bossoli-gold">
                Художник-путешественник и летописец Крыма
              </p>
              <p className="text-lg mb-8">
                Итальянский художник XIX века, известный своими прекрасными изображениями Севастополя и Крыма
              </p>
              <Link 
                to="/gallery" 
                className="inline-block bg-bossoli-gold text-bossoli-navy px-6 py-3 rounded font-medium hover:bg-opacity-90 transition-colors"
              >
                Смотреть галерею
              </Link>
            </div>
          </div>
        </section>

        {/* Краткая биография */}
        <section className="py-12 bg-bossoli-cream">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-6 text-bossoli-navy text-center">Биография</h2>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <p className="mb-4">
                  Карло Боссоли (1815-1884) — итальянский художник, родившийся в Швейцарии, прославившийся своими пейзажами и архитектурными видами различных городов Европы и Крыма.
                </p>
                <p className="mb-4">
                  В 1840-1842 годах по приглашению графа М.С. Воронцова Боссоли посетил Крым, где создал серию замечательных акварелей с видами Севастополя, Ялты, Бахчисарая и других крымских городов.
                </p>
                <p>
                  Работы Боссоли отличаются документальной точностью, вниманием к деталям и особой атмосферностью, передающей дух эпохи и места.
                </p>
                <div className="mt-6 text-center">
                  <Link 
                    to="/biography" 
                    className="text-bossoli-navy font-medium hover:text-bossoli-gold transition-colors"
                  >
                    Читать полную биографию →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Избранные работы */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-8 text-bossoli-navy text-center">
              Севастополь в картинах Боссоли
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {featuredArtworks.map((artwork) => (
                <ArtworkCard 
                  key={artwork.id}
                  title={artwork.title}
                  year={artwork.year}
                  imageUrl={artwork.imageUrl}
                  description={artwork.description}
                />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link 
                to="/gallery" 
                className="inline-block bg-bossoli-navy text-white px-6 py-3 rounded font-medium hover:bg-opacity-90 transition-colors"
              >
                Смотреть все работы
              </Link>
            </div>
          </div>
        </section>

        {/* Цитата */}
        <section className="py-12 bg-bossoli-sepia">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <blockquote className="font-serif text-2xl italic text-bossoli-crimson mb-4">
                "Боссоли сумел запечатлеть облик Севастополя до разрушительной Крымской войны, создав бесценные исторические документы в виде художественных произведений."
              </blockquote>
              <p className="text-bossoli-navy">— Историк искусства</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
