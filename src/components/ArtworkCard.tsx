interface ArtworkCardProps {
  title: string;
  year: string;
  imageUrl: string;
  description: string;
}

const ArtworkCard = ({ title, year, imageUrl, description }: ArtworkCardProps) => {
  return (
    <div className="image-frame group animate-fade-in">
      <div className="overflow-hidden">
        <img 
          src={imageUrl || "/placeholder.svg"} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-4 bg-card">
        <h3 className="font-serif text-lg font-medium text-bossoli-navy">{title}</h3>
        <p className="text-sm text-bossoli-crimson font-medium mb-2">{year}</p>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default ArtworkCard;
