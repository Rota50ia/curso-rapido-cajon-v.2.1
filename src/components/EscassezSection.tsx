import { motion } from "framer-motion";

const EscassezSection = () => (
  <section className="py-16 md:py-24 bg-escassez text-primary-foreground text-center">
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
        className="bg-white/10 p-10 rounded-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl mb-3">Das 30 vagas de fevereiro, restam</p>
        <p className="text-8xl font-extrabold font-heading leading-none my-4">7</p>
        <p className="text-lg font-semibold">Amanhã pode não ter mais.</p>
      </motion.div>
    </div>
  </section>
);

export default EscassezSection;
