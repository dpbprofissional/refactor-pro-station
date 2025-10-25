import { Button } from "@/components/ui/button";
import { Play, Info } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative h-[50vh] md:h-[60vh] lg:h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 bg-hero-gradient z-10" />
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&h=1080&fit=crop')",
        }}
      />
      
      <div className="relative z-20 container h-full flex flex-col justify-end pb-8 md:pb-16 lg:pb-20 px-4 md:px-6">
        <div className="max-w-2xl space-y-3 md:space-y-4 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-tight">
            Descubra seu próximo
            <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              filme favorito
            </span>
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-lg">
            Explore nossa coleção exclusiva de filmes selecionados. Desde clássicos atemporais até os maiores sucessos do momento.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
            <Button size="lg" className="bg-primary hover:bg-primary-glow transition-colors shadow-glow w-full sm:w-auto">
              <Play className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Assistir Agora</span>
            </Button>
            <Button size="lg" variant="secondary" className="border-border w-full sm:w-auto">
              <Info className="mr-2 h-4 w-4 md:h-5 md:w-5" />
              <span className="text-sm md:text-base">Mais Informações</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
