const HeaderNav = () => (
  <header className="sticky top-0 z-50 backdrop-blur-md border-b border-white/[0.06]" style={{ background: "rgba(10,22,40,0.95)" }}>
    <div className="container flex items-center justify-between h-[52px]">

      {/* Logo horizontal – brandbook */}
      <div className="flex items-center gap-3">
        <svg width="32" height="37" viewBox="0 0 260 230" fill="none" aria-hidden="true">
          <polygon points="130,10 222,60 222,160 130,210 38,160 38,60" fill="#FF6B2B" />
          <g transform="translate(0,-24)">
            <path d="M76 90 Q64 105 64 110 Q64 115 76 130" stroke="#0A1628" strokeWidth="6" fill="none" strokeLinecap="round" />
            <rect x="104" y="72" width="52" height="68" rx="6" fill="#0A1628" />
            <ellipse cx="130" cy="104" rx="13" ry="15" fill="#FF6B2B" opacity="0.88" />
            <path d="M184 90 Q196 105 196 110 Q196 115 184 130" stroke="#0A1628" strokeWidth="6" fill="none" strokeLinecap="round" />
          </g>
        </svg>
        <div>
          <div className="font-heading text-base text-white leading-none tracking-[0.08em]">
            CURSO RÁPIDO DE <span style={{ color: "#FF6B2B" }}>CAJÓN</span>
          </div>
          <div className="text-[9px] font-semibold tracking-[0.2em] uppercase mt-0.5" style={{ color: "#FF6B2B" }}>
            Do zero ao ritmo em 30 dias
          </div>
        </div>
      </div>

      {/* Social proof pill */}
      <div className="hidden sm:flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] uppercase" style={{ color: "#FF6B2B" }}>
        ★ 4.9/5 · 217 ALUNOS
      </div>

    </div>
  </header>
);

export default HeaderNav;
