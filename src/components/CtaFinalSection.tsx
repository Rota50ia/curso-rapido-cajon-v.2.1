const CtaFinalSection = () => (
  <section id="cta-final" className="py-16 md:py-24 bg-cta-gradient text-foreground text-center">
    <div className="container max-w-2xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
        🎯 SIM, QUERO DOMINAR CAJÓN EM 30 DIAS
      </h2>
      <p className="text-5xl sm:text-6xl font-extrabold font-heading mb-10">R$ 147</p>

      <div className="max-w-lg mx-auto text-left space-y-3 mb-10 text-lg">
        {[
          "30 aulas progressivas (do zero ao avançado)",
          "Acesso vitalício (assiste quantas vezes quiser)",
          "Garantia 15 dias (risco zero)",
          "Suporte pessoal no WhatsApp",
          "Comunidade de alunos",
          "Certificado digital",
        ].map((item, i) => (
          <div key={i}>✅ {item}</div>
        ))}
      </div>

      <a
        href="https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv"
        target="_blank"
        rel="noopener noreferrer"
        className="block max-w-xl mx-auto bg-primary text-primary-foreground font-heading font-extrabold text-xl sm:text-2xl px-10 py-6 rounded-lg shadow-cta hover:scale-105 transition-transform uppercase animate-pulse-glow"
      >
        🔥 GARANTIR MINHA VAGA AGORA - R$ 147 🔥
      </a>
      <p className="text-sm mt-4 opacity-90">Pagamento único • Sem mensalidade • Sem pegadinha</p>
    </div>
  </section>
);

export default CtaFinalSection;
