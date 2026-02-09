import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ConfessionalSection = () => (
  <section className="py-16 md:py-24 bg-muted">
    <div className="container max-w-3xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>
        <p className="font-heading text-2xl sm:text-3xl font-bold italic text-center mb-10 text-muted-foreground">
          "Eu também não sabia ensinar assim"
        </p>
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
            Elas querem tocar na igreja. No churrasco. Na rodinha de amigos.
          </p>
          <p>E aí eu refiz tudo.</p>
          <p>Peguei 30 aulas. Organizei na ordem exata do aprendizado natural:</p>
        </div>

        <ol className="bg-card p-8 rounded-lg my-6 space-y-3 list-decimal list-inside text-foreground font-medium text-lg">
          <li>Som antes de ritmo</li>
          <li>Groove antes de música</li>
          <li>Base antes de variação</li>
          <li>Simples antes de complexo</li>
        </ol>

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
