const PsSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container max-w-3xl space-y-8">
      <div className="bg-muted p-8 rounded-lg border-l-4 border-primary">
        <p className="text-foreground text-lg mb-4">
          <strong>P.S.:</strong> Daqui a 30 dias você pode estar em um de dois lugares:
        </p>
        <div className="space-y-4 mb-6">
          <div className="bg-destructive/10 p-5 rounded-md border-l-4 border-destructive text-foreground">
            <strong>Opção A →</strong> Ainda no YouTube, com mais vídeos salvos, ainda sem tocar nada
            do começo ao fim — achando que "não tem talento"
          </div>
          <div className="bg-accent-light p-5 rounded-md border-l-4 border-accent text-foreground">
            <strong>Opção B →</strong> Tocando xote, baião, samba reggae, ijexá — sendo chamado pra
            eventos, ouvindo aquele "nossa, você toca muito bem" que muda como as pessoas te veem
          </div>
        </div>
        <p className="text-xl font-semibold text-center text-foreground">
          A diferença entre as duas opções? <strong>R$ 147</strong> e a decisão de clicar no botão abaixo.
        </p>
        <p className="text-muted-foreground text-center text-sm mt-2">
          Com garantia de 30 dias. Se não gostar, devolvo tudo. Sem perguntas.
        </p>
      </div>

      <div className="text-center">
        <a
          href="https://chk.eduzz.com/VWGZ2XYO07?utm_source=cajon&utm_medium=an&utm_campaign=cam+1+cajon&utm_id=pv"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-heading font-bold text-lg px-10 py-5 rounded-lg shadow-cta hover:bg-primary-dark hover:-translate-y-0.5 hover:shadow-cta-hover transition-all uppercase"
        >
          🔥 GARANTIR MINHA VAGA AGORA - R$ 147 🔥
        </a>
      </div>
    </div>
  </section>
);

export default PsSection;
