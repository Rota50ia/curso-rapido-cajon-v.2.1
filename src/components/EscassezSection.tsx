import { motion } from "framer-motion";

const EscassezSection = () => (
  <section className="py-16 md:py-24 bg-escassez text-foreground text-center">
    <div className="container max-w-2xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold mb-8">Última Coisa (Importante)</h2>
      <p className="text-lg mb-4">
        Eu limito a <strong>30 alunos por mês</strong>.
      </p>
      <p className="text-lg mb-8">
        Não é golpe de escassez. É realidade operacional: eu respondo PESSOALMENTE no grupo WhatsApp. Se entrar 100
        pessoas, eu não consigo dar atenção individualizada pra todo mundo.
      </p>
      <motion.div
        className="border border-primary/30 bg-primary/5 card-glow rounded-lg p-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl mb-4">
          Este mês está <strong className="text-primary">quase cheio</strong>.
        </p>
        <p className="text-lg font-semibold mb-2">
          Quando fechar, fecha — e a próxima abertura pode demorar semanas.
        </p>
        <p className="text-muted-foreground text-base mt-4">
          Se você está lendo isso, ainda tem vaga. Amanhã pode não ter.
        </p>
      </motion.div>
    </div>
  </section>
);

export default EscassezSection;
