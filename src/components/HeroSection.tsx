import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(18_100%_60%/0.08)_0%,transparent_60%)]" />
    <motion.div
      className="relative z-10 container text-center py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <motion.div
        variants={fadeUp}
        className="inline-block bg-accent text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold mb-6"
      >
        Metodo comprovado por 217 alunos
      </motion.div>
      <motion.h1
        variants={fadeUp}
        className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-foreground"
      >
        Pare de Procurar no YouTube: Domine o Cajon em 30 Dias com Metodo Simples ou{" "}
        <span className="text-primary">Devolvemos Seu Dinheiro</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto text-muted-foreground">
        Descubra o sistema passo a passo que ja transformou 217 iniciantes em percussionistas confiantes – mesmo que voce nunca tenha tocado um instrumento na vida.
      </motion.p>
      <motion.a
        variants={fadeUp}
        href="https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
      >
        QUERO DOMINAR O CAJON POR R$147
      </motion.a>
      <motion.div
        variants={fadeUp}
        className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-6 text-sm text-muted-foreground"
      >
        <span className="flex items-center gap-2">
          <span className="text-accent">&#10003;</span> Acesso Vitalicio
        </span>
        <span className="flex items-center gap-2">
          <span className="text-accent">&#10003;</span> 15 Dias de Garantia
        </span>
        <span className="flex items-center gap-2">
          <span className="text-accent">&#10003;</span> Suporte 24h
        </span>
      </motion.div>
    </motion.div>
  </section>
);

export default HeroSection;
