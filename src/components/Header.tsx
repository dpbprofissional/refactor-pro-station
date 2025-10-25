import { Search, Film } from "lucide-react";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
}

const Header = ({ searchQuery, onSearchChange }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 md:h-20 items-center justify-between gap-3 px-4 md:px-6">
        <div className="flex items-center gap-2 md:gap-3 shrink-0">
          <div className="flex h-8 w-8 md:h-10 md:w-10 items-center justify-center rounded-lg bg-primary">
            <Film className="h-4 w-4 md:h-6 md:w-6 text-primary-foreground" />
          </div>
          <h1 className="text-lg md:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Cinexos
          </h1>
        </div>
        
        <div className="relative w-full max-w-[200px] md:max-w-md">
          <Search className="absolute left-2 md:left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Buscar..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-8 md:pl-10 text-sm md:text-base bg-secondary border-border focus-visible:ring-primary h-9 md:h-10"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
