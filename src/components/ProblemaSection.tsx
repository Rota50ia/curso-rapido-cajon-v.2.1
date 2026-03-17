import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const dores = [
  { icon: "😵", text: "FICA MAIS CONFUSO do que quando comecou" },
  { icon: "⏳", text: "PERDE SEMANAS tentando decifrar tecnicas contraditorias" },
  { icon: "🔄", text: "DESENVOLVE VICIOS que depois custam meses para corrigir" },
  { icon: "😤", text: "DESISTE frustrado, achando que 'nao tem talento'" },
];

const ProblemaSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h2
          variants={fadeIn}
          className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3 text-foreground"
        >
          "Ja Tentei Tudo no YouTube e Nada Funciona"
        </motion.h2>
        <motion.p variants={fadeIn} className="text-center text-xl text-primary font-semibold mb-6">
          Sente isso?
        </motion.p>
        <motion.p variants={fadeIn} className="text-lg text-foreground mb-8 text-center">
          Voce passa horas procurando "como tocar samba no cajon", assiste 15 videos diferentes, cada um dizendo uma coisa... e no final:
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {dores.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="bg-card card-glow rounded-lg p-8 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <p className="text-foreground font-medium">{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          className="bg-secondary p-8 rounded-lg border-l-4 border-primary"
        >
          <p className="text-lg text-foreground leading-relaxed">
            <strong className="text-primary text-xl block mb-2">A verdade que ninguem te conta:</strong>
            O YouTube tem 10.427 videos sobre cajon. Nenhum foi feito PARA VOCE. Sao gravacoes aleatorias, sem sequencia logica, sem correcao de erros, sem acompanhamento.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProblemaSection;
