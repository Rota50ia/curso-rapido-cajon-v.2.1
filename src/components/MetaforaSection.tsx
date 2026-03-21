import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MetaforaSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container">
      <motion.h2
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="font-heading text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground"
      >
        O Custo Oculto do "Gratuito"
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Card Esquerdo -- YouTube */}
        <motion.div
          className="border border-red-500/25 bg-red-950/30 rounded-2xl p-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="font-heading text-xl font-bold text-muted-foreground mb-6 text-center">
            Você sozinho no YouTube
          </h3>
          <ul className="space-y-4 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-red-400 shrink-0">&#10005;</span>
              <span>15 horas procurando conteúdo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 shrink-0">&#10005;</span>
              <span>R$450 em tempo perdido (se ganha R$30/h)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 shrink-0">&#10005;</span>
              <span>Alta probabilidade de desistência</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 shrink-0">&#10005;</span>
              <span>Resultado: "Mais ou menos"</span>
            </li>
          </ul>
        </motion.div>

        {/* Card Direito -- Curso (destacado) */}
        <motion.div
          className="relative border border-primary/40 bg-primary/[0.08] rounded-2xl p-8 ring-1 ring-primary/20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 badge-pill rounded-full px-5 py-1.5 text-primary font-bold text-sm">
            RECOMENDADO
          </div>
          <h3 className="font-heading text-xl font-bold mb-6 text-center text-foreground">
            Com Curso Rápido de Cajón
          </h3>
          <ul className="space-y-4 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-accent shrink-0">&#10003;</span>
              <span>2 horas de aula direta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent shrink-0">&#10003;</span>
              <span>R$147 investimento único</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent shrink-0">&#10003;</span>
              <span>97% taxa de conclusão</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-accent shrink-0">&#10003;</span>
              <span>Resultado: Domínio técnico</span>
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Linha de fechamento */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="bg-card card-glow rounded-lg p-8 mt-10 max-w-3xl mx-auto text-center"
      >
        <p className="text-lg text-foreground mb-2">
          <strong className="text-primary font-heading text-xl">Conta de Padaria:</strong>
        </p>
        <p className="text-2xl font-bold text-foreground mb-3 font-heading">
          15h × R$30/h = <span className="text-red-400">R$450 em tempo perdido</span>
        </p>
        <p className="text-muted-foreground text-lg">
          O YouTube "gratuito" custa <strong className="text-foreground">3× mais</strong> do que o curso — só em tempo.
          Fora a frustração, os vícios e a desistência que não têm preço.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MetaforaSection;
