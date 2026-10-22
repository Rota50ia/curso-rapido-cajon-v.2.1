const CtaFinalSection = () => (
  <section id="cta-final" className="py-16 md:py-24 bg-cta-gradient text-foreground text-center">
    <div className="container max-w-2xl">
      <h2 className="font-heading text-3xl sm:text-4xl font-extrabold mb-4">
        &#127919; SIM, QUERO COMEÇAR AGORA
      </h2>
      <div className="mb-10">
        <p className="text-lg text-muted-foreground line-through">De R$ 147,00</p>
        <p className="text-5xl sm:text-6xl font-extrabold font-heading stat-number text-primary">R$ 44,10</p>
        <p className="text-sm font-bold uppercase tracking-[0.16em] text-foreground/80">à vista · 70% OFF</p>
      </div>

      <div className="max-w-lg mx-auto text-left space-y-3 mb-10 text-lg">
        {[
          "30 aulas progressivas (do zero ao avançado)",
          "Acesso vitalício (assiste quantas vezes quiser)",
          "Garantia de 30 dias (risco zero)",
          "Suporte pessoal no WhatsApp",
          "Comunidade de alunos",
          "Certificado digital",
        ].map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <span className="text-accent shrink-0">&#10004;</span> {item}
          </div>
        ))}
      </div>

      <div className="divider-glow max-w-xl mx-auto mb-10" />

      <a
        href="https://sun.eduzz.com/VWGZ2XYO07?cupom=CAJON70OFFBLACK"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full max-w-2xl mx-auto bg-primary text-primary-foreground font-heading font-extrabold text-2xl px-14 py-7 rounded-2xl shadow-cta hover:scale-105 transition-transform uppercase animate-pulse-glow"
      >
        &#128293; QUERO COMEÇAR AGORA - R$ 44,10 &#128293;
      </a>
      <p className="text-sm mt-4 opacity-90">Pagamento único • Sem mensalidade • Sem pegadinha</p>

      <div className="flex flex-wrap justify-center gap-4 mt-8">
        <span className="bg-white/5 rounded-full px-4 py-2 text-sm border border-white/10">Acesso Vitalício</span>
        <span className="bg-white/5 rounded-full px-4 py-2 text-sm border border-white/10">Garantia 30 Dias</span>
        <span className="bg-white/5 rounded-full px-4 py-2 text-sm border border-white/10">Pagamento Seguro</span>
      </div>
    </div>
  </section>
);

export default CtaFinalSection;
