import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemaSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        {[
          { icon: "🎥", text: "Você abre o YouTube. Assiste 47 vídeos diferentes. Cada um fala uma coisa." },
          { icon: "❌", text: 'Um diz "começa pelo xote". Outro diz "ignora xote, vai direto pro samba".' },
          { icon: "😰", text: 'E você... para. Porque no fundo, você tá pensando: "Eu não tenho talento pra isso."' },
        ].map((item, i) => (
          <motion.div
            key={i}
            variants={fadeIn}
            className="bg-muted p-8 rounded-lg text-center"
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <p className="text-foreground">{item.text}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="bg-secondary p-8 rounded-lg border-l-4 border-primary"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <h2 className="font-heading text-4xl font-bold text-primary-dark mb-3">Mentira.</h2>
        <p className="text-xl font-medium text-foreground mb-3">
          Você não precisa de talento. Você precisa de alguém que te mostre{" "}
          <strong>a ordem certa</strong> — tijolo por tijolo, camada por camada, sem pular etapas.
        </p>
        <p className="text-foreground">
          E é exatamente isso que eu fiz para <strong>217 pessoas</strong> que achavam que nunca iam conseguir.
        </p>
      </motion.div>
    </div>
  </section>
);

export default ProblemaSection;
