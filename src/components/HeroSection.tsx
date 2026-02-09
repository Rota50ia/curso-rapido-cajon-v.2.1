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
        ✅ 217 alunos transformados
      </motion.div>
      <motion.h1
        variants={fadeUp}
        className="font-heading text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight mb-6 max-w-4xl mx-auto text-foreground"
      >
        Sabe aquele momento que você tá vendo alguém tocar cajón e pensa:
        <br />
        <span className="italic text-primary">"Cara, eu TAMBÉM queria fazer isso..."</span>
      </motion.h1>
      <motion.p variants={fadeUp} className="text-xl sm:text-2xl mb-8 text-muted-foreground">
        30 aulas. 30 dias. Do zero ao palco.
      </motion.p>
      <motion.a
        variants={fadeUp}
        href="#cta-final"
        className="inline-block bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase animate-pulse-glow"
      >
        🔥 QUERO DOMINAR CAJÓN - R$ 147
      </motion.a>
    </motion.div>
  </section>
);

export default HeroSection;
