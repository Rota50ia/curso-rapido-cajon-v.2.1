import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const steps = [
  "Som antes de ritmo",
  "Groove antes de música",
  "Base antes de variação",
  "Simples antes de complexo",
];

const ConfessionalSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-muted to-background">
    <div className="container max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <div className="border-l-4 border-primary/60 pl-6 mb-10">
          <p className="font-heading text-2xl sm:text-3xl font-bold italic text-muted-foreground">
            "Eu também não sabia ensinar assim"
          </p>
        </div>
        <div className="space-y-4 text-foreground text-lg leading-relaxed">
          <p>Sabe quantos alunos eu perdi nos primeiros anos dando aula?</p>
          <p><strong>Muitos.</strong></p>
          <p>
            Porque eu fazia o que todo professor faz: ensinava do jeito que EU aprendi (teoria, técnica, "agora faz
            baião swingado" sem explicar o baião básico antes).
          </p>
          <p>E as pessoas desistiam.</p>
          <p>
            Até que eu parei e pensei: <em className="text-muted-foreground">"Pera. O que essas pessoas REALMENTE precisam?"</em>
          </p>
          <p>
            Elas não querem ser percussionistas profissionais.
            <br />
            Elas querem tocar no churrasco. No evento. Na rodinha de amigos.
          </p>
          <p>E aí eu refiz tudo.</p>
          <p>Peguei 30 aulas. Organizei na ordem exata do aprendizado natural:</p>
        </div>

        <div className="bg-card rounded-lg my-6 p-8 space-y-4">
          {steps.map((step, i) => (
            <div key={i} className="flex gap-3 items-start">
              <span className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                {i + 1}
              </span>
              <span className="text-foreground font-medium text-lg pt-0.5">{step}</span>
            </div>
          ))}
        </div>

        <div className="space-y-4 text-foreground text-lg">
          <p>Testei com 217 alunos.</p>
          <p><strong>Funcionou.</strong></p>
        </div>
        <p className="text-center mt-8 text-primary font-bold font-heading text-2xl">E você também pode.</p>
      </motion.div>
    </div>
  </section>
);

export default ConfessionalSection;
