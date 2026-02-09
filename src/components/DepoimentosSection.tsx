import { motion } from "framer-motion";

const testimonials = [
  {
    text: 'Tentei 2 anos sozinho. Em 7 dias aqui eu toquei mais que em 2 anos no YouTube. Eu tinha 47 vídeos salvos de "como tocar xote". Nenhum explicava a BASE antes. Terminei a Aula 7 e toquei xote completo pela primeira vez. Chorei.',
    name: "Carlos, 42 anos • São Paulo",
  },
  {
    text: 'Fui chamado pra tocar num casamento antes de terminar o curso. Cheguei na Aula 18 (baião) e um amigo me chamou. Eu falei "cara, ainda não terminei o curso". Ele falou "mas você já toca melhor que muito percussionista que eu conheço". Ganhei R$ 300.',
    name: "Roberto, 35 anos • Belo Horizonte",
  },
  {
    text: 'Eu sou professora. Quando vi a ordem das aulas, pensei: "esse cara entende de pedagogia". Cada aula desbloqueia a próxima. É viciante. Terminei em 22 dias.',
    name: "Ana, 28 anos • Rio de Janeiro",
  },
];

const DepoimentosSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-12 text-foreground">
        O Que Alunos Reais Falam
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="bg-card card-glow rounded-lg p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="text-xl mb-3">⭐⭐⭐⭐⭐</div>
            <p className="italic text-foreground mb-4 leading-relaxed">{`"${t.text}"`}</p>
            <p className="text-sm font-semibold text-muted-foreground">{t.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
