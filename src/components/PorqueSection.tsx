import { motion } from "framer-motion";

const PorqueSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl text-center">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8 text-foreground">
        Porque No Fundo... Isso Não É Sobre Cajón
      </h2>
      <p className="text-xl font-medium text-foreground mb-8">
        É sobre você parando de ser <strong>consumidor</strong> e virando <strong>criador</strong>.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        <div className="bg-muted p-8 rounded-lg">
          <h3 className="font-heading text-xl font-bold mb-3 text-foreground">Consumidor</h3>
          <p className="text-muted-foreground">Assiste. Vê alguém tocando baião e pensa "que legal".</p>
        </div>
        <div className="bg-primary text-primary-foreground p-8 rounded-lg">
          <h3 className="font-heading text-xl font-bold mb-3">Criador</h3>
          <p>FAZ. Pega o cajón e toca baião JUNTO.</p>
        </div>
      </div>
      <p className="text-xl italic text-foreground mb-4">E olha... <em className="text-muted-foreground">(pausa)</em></p>
      <p className="text-xl font-medium text-foreground mb-6">
        A vida é curta demais pra você ficar assistindo outras pessoas fazerem música enquanto você fica na plateia
        pensando "um dia eu aprendo".
      </p>
      <p className="text-primary font-bold font-heading text-3xl sm:text-4xl">Esse dia é hoje.</p>
    </div>
  </section>
);

export default PorqueSection;
