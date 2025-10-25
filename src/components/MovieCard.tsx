import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Play } from "lucide-react";

interface MovieCardProps {
  title: string;
  category: string;
  rating: number;
  image: string;
}

const MovieCard = ({ title, category, rating, image }: MovieCardProps) => {
  return (
    <Card className="group relative overflow-hidden border-border bg-card hover:shadow-card-hover transition-all duration-300 cursor-pointer">
      <div className="aspect-[2/3] overflow-hidden relative">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 md:group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex h-12 w-12 lg:h-16 lg:w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-6 w-6 lg:h-8 lg:w-8 text-primary-foreground ml-0.5" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="p-2 md:p-3 lg:p-4 space-y-1 md:space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-sm md:text-base font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-0.5 md:gap-1 text-yellow-500 shrink-0">
            <Star className="h-3 w-3 md:h-4 md:w-4 fill-current" />
            <span className="text-xs md:text-sm font-medium">{rating}</span>
          </div>
        </div>
        <Badge variant="secondary" className="text-[10px] md:text-xs">
          {category}
        </Badge>
      </div>
    </Card>
  );
};

export default MovieCard;
