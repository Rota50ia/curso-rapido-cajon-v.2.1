import { motion } from "framer-motion";

const items = [
  { dia: "DIA 3", text: "Você termina a Fase 1 e já toca o primeiro groove" },
  { dia: "DIA 7", text: "Você domina xote completo (Aulas 5-7) e toca sua primeira música REAL" },
  { dia: "DIA 15", text: "Você já tem 6+ ritmos no arsenal (xote, ijexá, chá chá chá, maracatu)" },
  { dia: "DIA 21", text: "Você toca baião em 5 variações (a partir daqui, eventos começam a chamar)" },
  { dia: "DIA 30", text: "Você fecha com samba reggae e ijexá avançado — repertório COMPLETO" },
];

const TimelineSection = () => (
  <section className="py-16 md:py-24 bg-primary text-primary-foreground">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12">
        O Que Acontece (Timeline Real de 30 Dias)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mb-10">
        {items.map((item, i) => (
          <motion.div
            key={i}
            className="text-center p-6 bg-white/10 rounded-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-3xl font-bold font-heading mb-3">{item.dia}</div>
            <p className="text-sm opacity-95">{item.text}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-center text-lg">
        Não to inventando. <strong>97% completam</strong> porque a sequência é VICIANTE (cada aula desbloqueia a próxima).
      </p>
    </div>
  </section>
);

export default TimelineSection;
