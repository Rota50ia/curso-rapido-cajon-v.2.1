import { motion } from "framer-motion";

const testimonials = [
  {
    text: 'Tentei 2 anos sozinho. Em 7 dias aqui eu toquei mais que em 2 anos no YouTube. Eu tinha 47 vídeos salvos de "como tocar xote". Nenhum explicava a BASE antes. Terminei a Aula 7 e toquei xote completo pela primeira vez. Chorei.',
    name: "Carlos, 42 anos",
    location: "São Paulo",
    initials: "CA",
    result: "Tocou xote completo no Dia 7",
  },
  {
    text: 'Fui chamado pra tocar num casamento antes de terminar o curso. Cheguei na Aula 18 (baião) e um amigo me chamou. Eu falei "cara, ainda não terminei o curso". Ele falou "mas você já toca melhor que muito percussionista que eu conheço". Ganhei R$ 300.',
    name: "Roberto, 35 anos",
    location: "Belo Horizonte",
    initials: "RO",
    result: "Ganhou R$300 tocando num casamento antes de terminar",
  },
  {
    text: 'Eu sou professora. Quando vi a ordem das aulas, pensei: "esse cara entende de pedagogia". Cada aula desbloqueia a próxima. É viciante. Terminei em 22 dias.',
    name: "Ana, 28 anos",
    location: "Rio de Janeiro",
    initials: "AN",
    result: "Curso completo em 22 dias",
  },
];

const DepoimentosSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-4 text-foreground">
        Resultados Reais de Alunos Reais
      </h2>
      <p className="text-center text-muted-foreground text-lg mb-12">
        Não são depoimentos genéricos. São histórias com datas, números e nomes.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            className="relative border border-white/[0.08] bg-gradient-to-br from-card to-background rounded-2xl p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <span className="absolute top-4 right-6 text-6xl text-primary/20 font-serif leading-none select-none">"</span>
            <div className="text-xl mb-3">&#11088;&#11088;&#11088;&#11088;&#11088;</div>
            <p className="italic text-foreground mb-6 leading-relaxed relative z-10">{`"${t.text}"`}</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/30 to-primary/10 flex items-center justify-center text-primary font-bold text-sm border border-primary/20">
                {t.initials}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.location}</p>
                {t.result && (
                  <p className="text-xs text-accent font-semibold mt-0.5">&#10003; {t.result}</p>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default DepoimentosSection;
