import { motion } from "framer-motion";

const GarantiaSection = () => (
  <section className="py-16 md:py-24 bg-accent-light">
    <div className="container max-w-3xl">
      <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full text-lg font-bold text-center max-w-xs mx-auto mb-6">
        ✅ GARANTIA 15 DIAS
      </div>
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-8 text-foreground">
        Risco Zero. Literalmente.
      </h2>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="space-y-4 text-foreground text-lg"
      >
        <p className="text-xl font-medium">
          Entra no curso. Faz as primeiras 10 aulas. Pratica. Participa da comunidade.
        </p>
        <p>Se em 15 dias você não:</p>
        <ul className="bg-card p-8 rounded-lg space-y-3 font-medium">
          <li>✅ Dominar xote completo (Aulas 5-7)</li>
          <li>✅ Tocar pelo menos 3 ritmos diferentes</li>
          <li>✅ Sentir confiança pra tocar na frente de alguém</li>
        </ul>
        <p className="text-xl font-medium">...manda um email. Eu devolvo cada centavo.</p>
        <p><strong>Sem pergunta. Sem "mas por quê?". Sem burocracia.</strong></p>
        <div className="bg-card p-8 rounded-lg text-center mt-6">
          <p className="text-xl font-semibold text-accent mb-3">Por que tanta confiança?</p>
          <p>
            Porque dos 217 alunos, só <strong>3 pediram reembolso (1,4%)</strong>.
          </p>
          <p className="text-muted-foreground">A sequência funciona. Eu sei. Você ainda não. Por isso a garantia existe.</p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default GarantiaSection;
