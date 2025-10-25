import { Button } from "@/components/ui/button";

interface FilterBarProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const FilterBar = ({ categories, activeCategory, onCategoryChange }: FilterBarProps) => {
  return (
    <div className="container py-4 md:py-6 lg:py-8 px-4 md:px-6">
      <div className="flex gap-2 md:gap-3 overflow-x-auto pb-2 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0">
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => onCategoryChange(category)}
            size="sm"
            variant={activeCategory === category ? "default" : "secondary"}
            className={`
              whitespace-nowrap transition-all text-xs md:text-sm
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
