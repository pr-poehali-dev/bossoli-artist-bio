import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtworkCard from "@/components/ArtworkCard";
import { sevastopolArtworks } from "@/data/artworks";

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-serif font-bold mb-4 text-bossoli-navy text-center">
            Севастополь в картинах Карло Боссоли
          </h1>
          <p className="text-lg text-center mb-10 max-w-3xl mx-auto">
            Коллекция работ художника, запечатлевших Севастополь 1840-х годов — уникальный исторический документ, сохранивший облик города до Крымской войны.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sevastopolArtworks.map((artwork) => (
              <ArtworkCard 
                key={artwork.id}
                title={artwork.title}
                year={artwork.year}
                imageUrl={artwork.imageUrl}
                description={artwork.description}
              />
            ))}
          </div>
          
          <div className="mt-12 bg-bossoli-sepia p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold mb-4 text-bossoli-navy">
              Об этой коллекции
            </h2>
            <p className="mb-4">
              Изображения Севастополя, созданные Карло Боссоли в начале 1840-х годов, представляют собой бесценный исторический и художественный материал. Эти работы были выполнены за десятилетие до Крымской войны, в результате которой город был сильно разрушен.
            </p>
            <p>
              Акварели и литографии Боссоли позволяют увидеть первоначальный облик Севастополя как морской крепости и базы Черноморского флота Российской империи. Художник с документальной точностью передал архитектуру зданий, панорамы бухт и особенности городского ландшафта, добавив к этому живость и атмосферу повседневной жизни города.
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
