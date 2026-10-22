import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const HeroSection = () => (
  <section className="noise-overlay relative min-h-[90vh] flex items-center justify-center bg-hero-gradient overflow-hidden">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(270_90%_64%/0.10)_0%,transparent_60%)]" />
    <div className="hero-glow -top-40 -left-40" />
    <div className="hero-glow -bottom-40 -right-40" />
    <motion.div
      className="relative z-10 container py-16 md:py-24"
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
    >
      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-16">
        <div className="text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 badge-pill text-accent-foreground px-5 py-2 rounded-full text-sm font-semibold mb-6 bg-accent/90 border-accent/40"
          >
            Oferta especial: 70% OFF
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 max-w-xl mx-auto lg:mx-0 text-foreground tracking-tight text-balance"
          >
            Aprenda Cajón do Zero com 30 Aulas Progressivas — agora com{" "}
            <span className="text-primary">70% OFF</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl sm:text-2xl mb-8 max-w-xl mx-auto lg:mx-0 text-muted-foreground leading-relaxed">
            Acesso vitalício, suporte no WhatsApp, comunidade de alunos e certificado digital para você começar sem se perder.
          </motion.p>
          <motion.div variants={fadeUp} className="divider-glow max-w-xl mx-auto lg:mx-0 mb-8" />
          <motion.div variants={fadeUp} className="mb-6">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-5 py-2 text-sm font-bold uppercase tracking-[0.12em] text-primary">
              <span className="line-through text-foreground/60">De R$ 147,00</span>
              <span aria-hidden="true">→</span>
              <span>Por R$ 44,10 à vista</span>
            </div>
          </motion.div>
          <motion.a
            variants={fadeUp}
            href="https://sun.eduzz.com/VWGZ2XYO07?cupom=CAJON70OFFBLACK"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
          >
            QUERO COMEÇAR AGORA
          </motion.a>
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mt-6 text-sm text-muted-foreground"
          >
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-accent">&#10003;</span> Acesso Vitalício
            </span>
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-accent">&#10003;</span> 30 Dias de Garantia
            </span>
            <span className="flex items-center gap-2 bg-white/5 backdrop-blur-sm rounded-full px-4 py-2 border border-white/10">
              <span className="text-accent">&#10003;</span> Suporte no WhatsApp
            </span>
          </motion.div>
        </div>

        <motion.div variants={fadeUp} className="w-full max-w-3xl mx-auto lg:max-w-none rounded-xl overflow-hidden shadow-2xl aspect-video ring-1 ring-white/10">
          <iframe
            src="https://www.youtube.com/embed/snt8jW32rzc?rel=0&modestbranding=1"
            title="Curso Rápido de Cajón"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default HeroSection;
