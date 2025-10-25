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
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/90 backdrop-blur-sm transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="h-8 w-8 text-primary-foreground ml-1" fill="currentColor" />
          </div>
        </div>
      </div>
      
      <div className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-foreground line-clamp-1 group-hover:text-primary transition-colors">
            {title}
          </h3>
          <div className="flex items-center gap-1 text-yellow-500 shrink-0">
            <Star className="h-4 w-4 fill-current" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <Badge variant="secondary" className="text-xs">
          {category}
        </Badge>
      </div>
    </Card>
  );
};

export default MovieCard;
