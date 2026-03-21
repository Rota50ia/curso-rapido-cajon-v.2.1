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
    <div className="container max-w-5xl">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}>

        <div className="flex flex-col md:flex-row gap-10 md:gap-14 items-start">

          {/* Foto — coluna esquerda */}
          <div className="w-full md:w-[300px] shrink-0">
            <div className="relative rounded-2xl overflow-hidden ring-1 ring-primary/20 shadow-2xl">
              <img
                src="/edilson.png"
                alt="Edilson Morais tocando cajón no palco"
                className="w-full h-auto object-cover"
              />
              {/* Badge sobre a foto */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-5 py-4">
                <p className="font-heading text-white text-lg leading-tight tracking-wide">
                  EDILSON MORAIS
                </p>
                <p className="text-[11px] font-semibold tracking-[0.18em] uppercase mt-0.5" style={{ color: "#FF6B2B" }}>
                  40 anos de percussão · 217 alunos
                </p>
              </div>
            </div>
          </div>

          {/* Texto — coluna direita */}
          <div className="flex-1 min-w-0">
            <div className="border-l-4 border-primary/60 pl-6 mb-8">
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
                Até que eu parei e pensei:{" "}
                <em className="text-muted-foreground">"Pera. O que essas pessoas REALMENTE precisam?"</em>
              </p>
              <p>
                Elas não querem ser percussionistas profissionais.
                <br />
                Elas querem tocar no churrasco. No evento. Na rodinha de amigos.
              </p>
              <p>E aí eu refiz tudo.</p>
              <p>Peguei 30 aulas. Organizei na ordem exata do aprendizado natural:</p>
            </div>

            <div className="bg-card rounded-lg my-6 p-6 space-y-4">
              {steps.map((step, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <span className="w-8 h-8 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center text-primary font-bold text-sm shrink-0">
                    {i + 1}
                  </span>
                  <span className="text-foreground font-medium text-lg pt-0.5">{step}</span>
                </div>
              ))}
            </div>

            <div className="space-y-3 text-foreground text-lg">
              <p>Testei com 217 alunos.</p>
              <p><strong>Funcionou.</strong></p>
              <p>Não porque eles eram talentosos. Mas porque a ordem estava certa.</p>
            </div>
            <p className="mt-6 text-primary font-bold font-heading text-2xl">
              Você não precisa de talento. Precisa da sequência certa.
            </p>
          </div>

        </div>
      </motion.div>
    </div>
  </section>
);

export default ConfessionalSection;
