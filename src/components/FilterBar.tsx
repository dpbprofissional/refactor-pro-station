import { Button } from "@/components/ui/button";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({ categories, activeCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="container py-8">
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            variant={activeCategory === category ? "default" : "secondary"}
            className={`
              whitespace-nowrap transition-all
              ${activeCategory === category 
                ? "bg-primary text-primary-foreground shadow-glow" 
                : "bg-secondary hover:bg-secondary/80"
              }
            `}
          >
            {category}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default FilterBar;
