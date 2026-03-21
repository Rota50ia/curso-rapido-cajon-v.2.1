import { motion } from "framer-motion";

const GarantiaSection = () => (
  <section className="py-16 md:py-24 bg-accent-light">
    <div className="container max-w-3xl">
      <div className="border-2 border-primary/30 rounded-3xl bg-gradient-to-br from-primary/5 to-transparent p-10">
        <div className="text-6xl text-center mb-4 select-none">&#128737;&#65039;</div>
        <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-lg font-bold text-center max-w-xs mx-auto mb-6">
          &#10004; GARANTIA 30 DIAS
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-8 text-primary">
          Risco Zero. Literalmente.
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-4 text-foreground text-lg"
        >
          <p className="text-xl font-medium">
            Entra no curso. Assiste as primeiras aulas. Pratica. Participa da comunidade.
          </p>
          <p>
            Se em <strong>30 dias</strong> você não estiver satisfeito por{" "}
            <strong>qualquer motivo</strong> — manda um email.
          </p>
          <p className="text-xl font-medium">Eu devolvo cada centavo.</p>
          <p>
            <strong>Sem pergunta. Sem "mas por quê?". Sem burocracia.</strong>
          </p>
          <div className="bg-card p-8 rounded-lg text-center mt-6">
            <p className="text-xl font-semibold text-accent mb-3">Por que tanta confiança?</p>
            <p>
              Porque dos 217 alunos, só <strong>3 pediram reembolso (1,4%)</strong>.
            </p>
            <p className="text-muted-foreground mt-2">
              A sequência funciona. Eu sei. Você ainda não sabe. Por isso a garantia existe — e por isso
              eu posso dar 30 dias sem perder o sono.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default GarantiaSection;
