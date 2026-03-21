import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const dores = [
  {
    number: "01",
    label: "CONFUSÃO",
    text: "Fica mais confuso do que quando começou",
  },
  {
    number: "02",
    label: "TEMPO PERDIDO",
    text: "Perde semanas tentando decifrar técnicas contraditórias",
  },
  {
    number: "03",
    label: "VÍCIOS",
    text: "Desenvolve vícios que depois custam meses para corrigir",
  },
  {
    number: "04",
    label: "DESISTÊNCIA",
    text: "Desiste frustrado, achando que não tem talento",
  },
];

const ProblemaSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="divider-glow mb-16" />
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
          "Já Tentei Tudo no YouTube e Nada Funciona"
        </motion.h2>
        <motion.p variants={fadeIn} className="text-center text-xl text-primary font-semibold mb-6">
          Sente isso?
        </motion.p>
        <motion.p variants={fadeIn} className="text-lg text-foreground mb-10 text-center">
          Você passa horas procurando "como tocar samba no cajón", assiste 15 vídeos diferentes, cada um dizendo uma coisa... e no final:
        </motion.p>

        {/* Pain points — lista horizontal moderna */}
        <div className="flex flex-col gap-3 mb-12">
          {dores.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              className="group flex items-center gap-5 px-6 py-4 rounded-xl border border-white/5 bg-white/[0.03] hover:border-red-500/30 hover:bg-red-500/[0.04] transition-all duration-300"
            >
              {/* Número */}
              <span
                className="font-heading text-4xl leading-none shrink-0 tabular-nums"
                style={{ color: "hsl(0 70% 47% / 0.35)" }}
              >
                {item.number}
              </span>

              {/* Divisor vertical */}
              <div className="w-px h-10 bg-white/10 shrink-0" />

              {/* Label + texto */}
              <div className="flex-1 min-w-0">
                <p className="text-[10px] font-bold tracking-[0.22em] uppercase text-red-400/70 mb-0.5">
                  {item.label}
                </p>
                <p className="text-foreground text-base font-medium">{item.text}</p>
              </div>

              {/* Ícone X */}
              <div className="w-6 h-6 rounded-full border border-red-500/30 flex items-center justify-center shrink-0 opacity-50 group-hover:opacity-100 transition-opacity">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                  <path d="M1 1l6 6M7 1L1 7" stroke="#f87171" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={fadeIn}
          className="border-l-4 border-primary bg-primary/[0.06] rounded-r-xl p-8"
        >
          <p className="text-lg text-foreground leading-relaxed">
            <strong className="text-primary text-xl block mb-2">A verdade que ninguém te conta:</strong>
            O YouTube tem 10.427 vídeos sobre cajón. Nenhum foi feito PARA VOCÊ. São gravações aleatórias, sem sequência lógica, sem correção de erros, sem acompanhamento.
          </p>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default ProblemaSection;
