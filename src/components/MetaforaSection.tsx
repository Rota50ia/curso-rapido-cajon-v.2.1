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
          className="bg-card card-glow rounded-lg p-8 border border-border"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="font-heading text-xl font-bold text-muted-foreground mb-6 text-center">
            Voce sozinho no YouTube
          </h3>
          <ul className="space-y-4 text-foreground">
            <li className="flex items-start gap-3">
              <span className="text-primary shrink-0">&#10005;</span>
              <span>15 horas procurando conteudo</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary shrink-0">&#10005;</span>
              <span>R$450 em tempo perdido (se ganha R$30/h)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary shrink-0">&#10005;</span>
              <span>Alta probabilidade de desistencia</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary shrink-0">&#10005;</span>
              <span>Resultado: "Mais ou menos"</span>
            </li>
          </ul>
        </motion.div>

        {/* Card Direito -- Curso (destacado) */}
        <motion.div
          className="bg-primary text-primary-foreground rounded-lg p-8 ring-2 ring-primary shadow-cta"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h3 className="font-heading text-xl font-bold mb-6 text-center">
            Com Curso Rapido de Cajon
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="shrink-0">&#10003;</span>
              <span>2 horas de aula direta</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0">&#10003;</span>
              <span>R$147 investimento unico</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0">&#10003;</span>
              <span>97% taxa de conclusao</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="shrink-0">&#10003;</span>
              <span>Resultado: Dominio tecnico</span>
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
          (15h x R$30) / R$147 = <span className="text-primary">3 vezes</span>
        </p>
        <p className="text-muted-foreground text-lg">
          Voce esta pagando mais em tempo perdido do que pagaria em um curso estruturado.
        </p>
      </motion.div>
    </div>
  </section>
);

export default MetaforaSection;
