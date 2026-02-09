import { motion } from "framer-motion";

const PacoteSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
        O Que Você Recebe (Pacote Completo)
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
        {[
          {
            icon: "📹",
            title: "30 AULAS EM VÍDEO HD",
            desc: "10-15 min cada",
            details: [
              "FASE 1: Fundação (Aulas 1-4)",
              "FASE 2: Ritmos Brasileiros (Aulas 5-10)",
              "FASE 3: Variações Latinas (Aulas 11-14)",
              "FASE 4: Elevando Nível (Aulas 15-17)",
              "FASE 5: Baião Completo (Aulas 18-24)",
              "FASE 6: Samba Reggae e Ijexá Avançado (Aulas 25-30)",
            ],
          },
          {
            icon: "💬",
            title: "COMUNIDADE WHATSAPP VIP",
            desc: "Suporte em até 24h + outros alunos aprendendo junto",
            sub: "(porque aprender sozinho é uma merda)",
          },
          {
            icon: "🎓",
            title: "CERTIFICADO DIGITAL",
            desc: "Quando você terminar",
            sub: "(e você VAI terminar — 97% terminam)",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="bg-card p-8 rounded-lg shadow-sm text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-6xl mb-4">{item.icon}</div>
            <h3 className="font-heading text-lg font-bold text-foreground mb-2">{item.title}</h3>
            <p className="text-foreground mb-2">{item.desc}</p>
            {item.details && (
              <ul className="text-left text-sm space-y-1 mt-4 text-muted-foreground">
                {item.details.map((d, j) => (
                  <li key={j}>• {d}</li>
                ))}
              </ul>
            )}
            {item.sub && <p className="text-sm italic text-muted-foreground mt-2">{item.sub}</p>}
          </motion.div>
        ))}
      </div>

      <motion.div
        className="bg-card text-center p-10 sm:p-14 rounded-lg shadow-lg max-w-xl mx-auto"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-xl text-muted-foreground mb-2">
          Valor real: <span className="line-through">R$ 400</span>
        </p>
        <p className="text-5xl sm:text-6xl font-extrabold text-primary font-heading mb-3">R$ 147</p>
        <p className="text-muted-foreground italic">
          (Menos que 2 pizzas. E uma pizza você esquece. Cajón fica pra vida.)
        </p>
      </motion.div>
    </div>
  </section>
);

export default PacoteSection;
