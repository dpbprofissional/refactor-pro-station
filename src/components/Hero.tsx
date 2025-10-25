import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop')",
        }}
      />
      
      <div className="relative z-20 container h-full flex flex-col justify-end pb-20">
        <div className="max-w-2xl space-y-4 animate-fade-in">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight">
            Descubra seu próximo
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              filme favorito
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-lg">
            Explore nossa coleção exclusiva de filmes selecionados. Desde clássicos atemporais até os maiores sucessos do momento.
          </p>
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary-glow transition-colors shadow-glow">
              <Play className="mr-2 h-5 w-5" />
              Assistir Agora
            </Button>
            <Button size="lg" variant="secondary" className="border-border">
              <Info className="mr-2 h-5 w-5" />
              Mais Informações
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
