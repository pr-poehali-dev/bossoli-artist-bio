const Footer = () => {
  return (
    <footer className="bg-bossoli-navy text-white mt-12 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="font-serif text-bossoli-gold text-xl mb-2">Карло Боссоли</h3>
            <p className="text-sm text-gray-300">Художник и путешественник XIX века</p>
          </div>
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} Сайт о творчестве Карло Боссоли
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
