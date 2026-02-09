const FooterSection = () => (
  <footer className="bg-foreground text-primary-foreground py-12 text-center">
    <div className="container">
      <h3 className="font-heading text-2xl sm:text-3xl font-bold mb-3">Edilson Morais</h3>
      <p className="text-base mb-1">40 anos tocando. 217 alunos transformados.</p>
      <p className="text-base mb-4"><strong>Mas isso não importa.</strong></p>
      <p className="text-xl font-semibold text-primary mb-6">O que importa é: você vai tocar ou não?</p>
      <p className="mb-8">
        📧{" "}
        <a href="mailto:edilsomdil@gmail.com" className="underline hover:text-primary transition-colors">
          edilsomdil@gmail.com
        </a>
      </p>
      <div className="text-sm text-muted-foreground mb-4 space-x-3">
        <a href="#termos" className="hover:text-primary transition-colors">Termos de Uso</a>
        <span>|</span>
        <a href="#privacidade" className="hover:text-primary transition-colors">Política de Privacidade</a>
      </div>
      <p className="text-xs text-muted-foreground pt-4 border-t border-white/10">
        Todos os direitos reservados – Edilson Morais 2026
      </p>
    </div>
  </footer>
);

export default FooterSection;
