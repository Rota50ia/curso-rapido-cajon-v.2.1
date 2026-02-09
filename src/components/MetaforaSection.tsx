import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const MetaforaSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-10 text-foreground">
        Imagina Construir Uma Casa
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <motion.div
          className="p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <p className="text-xl font-medium text-foreground mb-4">No YouTube, você encontra:</p>
          <ul className="space-y-3 mb-6">
            {[
              "1 vídeo ensinando a fazer o telhado",
              "3 vídeos sobre pintura avançada",
              "12 vídeos sobre tipos de acabamento",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-foreground">
                <span className="text-primary font-bold">▸</span> {item}
              </li>
            ))}
            <li className="flex items-start gap-2 font-bold text-foreground">
              <span className="text-primary font-bold">▸</span> Zero vídeos sobre como fazer a fundação primeiro
            </li>
          </ul>
          <p className="text-xl font-medium text-foreground">E aí você tenta construir. Óbvio que desaba.</p>
        </motion.div>

        <motion.div
          className="bg-primary text-primary-foreground p-8 rounded-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="text-6xl text-center mb-4">🏗️</div>
          <h3 className="font-heading text-2xl font-bold mb-4">Cajón é a mesma coisa.</h3>
          <p className="mb-4">
            Se você não aprende na ordem certa (som → groove → ritmo → variação → técnica avançada), você vai:
          </p>
          <ol className="list-decimal pl-5 space-y-2 mb-4">
            <li>Desenvolver vícios</li>
            <li>Ficar travado</li>
            <li>Achar que o problema é você</li>
          </ol>
          <p>
            <strong>Não é.</strong>
            <br />O problema é que ninguém te mostrou o passo a passo certo.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MetaforaSection;
