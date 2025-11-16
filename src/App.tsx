import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowDown, Mail, Phone } from "lucide-react";
import { cn } from "@/lib/utils";

const BASE = (import.meta.env.BASE_URL ?? "/").replace(/\/+$/, "") + "/";
const asset = (path: string) => `${BASE}${path.replace(/^\/+/, "")}`;

const services = [
  "Branding",
  "Identidade visual",
  "Produto",
  "Eventos",
  "Produção audiovisual",
  "Campanhas e ativações"
];

const team = [
  { name: "Estratégia", icon: "assets/brand/icon-01.png" },
  { name: "Conteúdo", icon: "assets/brand/icon-02.png" },
  { name: "Design", icon: "assets/brand/icon-03.png" },
  { name: "Audiovisual", icon: "assets/brand/icon-04.png" },
  { name: "Experiência", icon: "assets/brand/icon-05.png" },
];

const backgroundWaves = [
  { src: "assets/brand/wave-01.png", className: "top-[-80px] left-[-60px]" },
  { src: "assets/brand/wave-02.png", className: "top-[20%] right-[-120px]" },
  { src: "assets/brand/wave-03.png", className: "bottom-[25%] left-[-90px]" },
  { src: "assets/brand/wave-04.png", className: "bottom-[-120px] right-[-60px]" },
];

function App() {
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = form.get("name");

    setMessage(
      `Valeu ${name || "!"} ✨ Recebemos seu contato e vamos retornar rapidinho.`
    );
    event.currentTarget.reset();
  };

  return (
    <div className="min-h-screen text-soft overflow-hidden relative">
      <div className="absolute inset-0 opacity-80">
        {backgroundWaves.map((wave, index) => (
          <img
            key={wave.src}
            src={asset(wave.src)}
            className={cn(
              "pointer-events-none absolute blur-sm md:blur-md mix-blend-screen",
              "w-72 md:w-96 lg:w-[520px]",
              index % 2 === 0 ? "rotate-6" : "-rotate-6",
              wave.className
            )}
            loading="lazy"
            alt=""
          />
        ))}
      </div>

      <main className="relative z-10">
        <header className="max-w-6xl mx-auto px-6 md:px-10 pt-10 md:pt-16 pb-6">
          <div className="flex items-center justify-between text-sm md:text-base text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="size-2.5 rounded-full bg-neon shadow-[0_0_30px_rgba(231,255,115,0.6)]" />
              <p className="uppercase tracking-[0.3rem] font-heading text-xs md:text-sm">
                criatividade em alto e bom som
              </p>
            </div>
            <div className="hidden md:flex items-center gap-4">
              <Mail size={16} />
              <span>hello@noisy.ag</span>
            </div>
          </div>
          <section className="mt-10 text-center flex flex-col items-center gap-6">
            <img
              src={asset("assets/brand/logo.png")}
              alt="Noisy"
              className="w-[350px] md:w-[410px] drop-shadow-glow"
            />
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 rounded-full shadow-lg shadow-primary/30"
              onClick={() =>
                document
                  .getElementById("contato")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Fale conosco
            </Button>
            <ArrowDown className="animate-bounce text-accent" size={28} />
          </section>
        </header>

        <section
          id="sobre"
          className="max-w-5xl mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-10 items-center py-10"
        >
          <div className="flex flex-col items-center lg:items-start gap-6">
            <img
              src={asset("assets/brand/make-some-noise.png")}
              alt="Make some noise"
              className="w-64 md:w-80 drop-shadow-glow"
              loading="lazy"
            />
            <p className="text-lg leading-relaxed text-muted-foreground max-w-xl text-center lg:text-left">
              A Noisy nasceu de uma paixão compartilhada por criar experiências que marcam e despertam emoções. 
              Somos uma agência criativa que junta estratégia, criatividade, planejamento e execução para transformar marcas em manifestações inesquecíveis.
            </p>
          </div>
          <Card className="bg-secondary/70 border-primary/40 backdrop-blur">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-soft">
                Manifesto Noisy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-muted-foreground">
              <p>
                Viemos para fazer barulho e amplificar sua marca. Criamos experiências marcantes, cheias de energia, vibração e impacto.
              </p>
              <p className="font-clash text-soft">
                Vamos juntos colocar sua marca no volume máximo.
              </p>
            </CardContent>
          </Card>
        </section>

        <section className="max-w-5xl mx-auto px-6 md:px-10 py-12 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-display tracking-tight">
            Nossos serviços
          </h2>
          <div className="grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <Card className="bg-gradient-to-br from-secondary/80 via-secondary/60 to-primary/40 border-primary/30">
              <CardContent className="py-8 px-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left text-soft">
                {services.map((service) => (
                  <div
                    key={service}
                    className="flex items-center gap-3 rounded-lg bg-white/5 px-3 py-2 border border-white/10 shadow-sm"
                  >
                    <span className="size-2 rounded-full bg-neon shadow-[0_0_20px_rgba(231,255,115,0.7)]" />
                    <p className="text-sm font-heading">{service}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <div className="flex flex-col items-center gap-4">
              <img
                src={asset("assets/brand/globinho.png")}
                alt="Globo Noisy"
                className="w-48 md:w-60 drop-shadow-glow"
                loading="lazy"
              />
              <p className="max-w-xs text-muted-foreground">
                Venha fazer barulho!
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 md:px-10 py-12 space-y-10">
          <div className="flex flex-col items-center text-center gap-3">
            <p className="text-3xl font-display">
              Equipe
            </p>
            <div>
              <img
                src={asset("assets/ELEMENTOS GRÁFICOS/organograma.png")}
                alt={"organograma.png"}
                className="object-cover w-full h-full"
                loading="lazy"
              />
            </div>
            <h3 className="text-3xl font-display">Especialistas que fazem barulho</h3>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mx-auto max-w-4xl">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col items-center gap-2 text-center bg-white/5 border border-white/10 rounded-2xl px-3 py-4 shadow-sm shadow-primary/20 backdrop-blur"
              >
                <div className="size-16 md:size-20 rounded-full overflow-hidden border border-primary/30">
                  <img
                    src={asset(member.icon)}
                    alt={member.name}
                    className="object-cover w-full h-full"
                    loading="lazy"
                  />
                </div>
                <p className="text-sm font-heading text-soft">{member.name}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          id="contato"
          className="max-w-5xl mx-auto px-6 md:px-10 pb-16 pt-4 space-y-8"
        >
          <div className="text-center space-y-2">
            <h4 className="text-2xl md:text-3xl font-display">
              Vamos fazer barulho juntos?
            </h4>
            <p className="text-muted-foreground">
              Conte aonde quer chegar. Voltamos com uma proposta personalizada.
            </p>
          </div>
          <Card className="bg-secondary/70 border-primary/30 backdrop-blur-lg shadow-xl">
            <CardContent className="py-8">
              <form
                className="grid md:grid-cols-2 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Nome</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Como podemos te chamar?"
                    required
                    className="bg-background/60 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">E-mail</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="voce@empresa.com"
                    required
                    className="bg-background/60 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="company">Empresa</Label>
                  <Input
                    id="company"
                    name="company"
                    placeholder="Onde o desafio acontece?"
                    className="bg-background/60 border-white/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="goal">Objetivo</Label>
                  <Input
                    id="goal"
                    name="goal"
                    placeholder="Lançar, reposicionar, escalar..."
                    className="bg-background/60 border-white/20"
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="message">Conte mais</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Fale sobre o desafio, prazo ou referências."
                    rows={4}
                    className="bg-background/60 border-white/20"
                  />
                </div>
                <div className="md:col-span-2 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-2">
                      <Mail size={16} /> noise@agencia.com
                    </span>
                    <span className="inline-flex items-center gap-2">
                      <Phone size={16} /> +55 11 99999-0000
                    </span>
                  </div>
                  <Button
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 rounded-full"
                  >
                    Enviar briefing
                  </Button>
                </div>
              </form>
              {message && (
                <p className="mt-6 text-sm text-accent font-heading">{message}</p>
              )}
            </CardContent>
          </Card>
        </section>

        <footer className="text-center text-xs text-muted-foreground pb-8 space-y-3">
          <p>Rua Criativa, 321 - São Paulo</p>
          <p className="flex items-center justify-center gap-2 text-soft">
            <span className="size-2 rounded-full bg-accent" />
            Feito com barulho pela Noisy
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
