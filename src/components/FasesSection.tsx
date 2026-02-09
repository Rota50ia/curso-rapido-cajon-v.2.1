import { motion } from "framer-motion";

interface Aula {
  title: string;
  desc: string;
}

interface FaseData {
  num: string;
  titulo: string;
  subtitle: string;
  aulas: Aula[];
  resultado: string;
  colorClass: string;
}

const fases: FaseData[] = [
  {
    num: "01",
    titulo: "FUNDAÇÃO",
    subtitle: 'Aulas 1-4 • "Antes de tocar música, você precisa entender o instrumento"',
    colorClass: "bg-fase-1",
    aulas: [
      { title: "AULA 1 – Sons do Cajón", desc: "Você descobre que cajón não é \"bater forte ou fraco\". São 3 sons DISTINTOS. Você aprende a tirar cada um." },
      { title: "AULA 2 – Cajón + Bateria", desc: "Sacada: cajón imita bateria. Bumbo = grave. Caixa = agudo. Quando você VÊ essa conexão, tudo muda." },
      { title: "AULA 3 – O Primeiro Groove", desc: "Aqui você toca sua primeira \"música\" (ainda não é xote nem samba — é o PADRÃO BASE que está dentro de TODOS os ritmos)." },
      { title: "AULA 4 – Mais Uma Camada", desc: "Você adiciona a mão esquerda. Coordenação motora começa a fazer sentido." },
    ],
    resultado: 'Você já toca algo que soa "musical" (não é exercício fake — é groove real).',
  },
  {
    num: "02",
    titulo: "RITMOS BRASILEIROS BASE",
    subtitle: 'Aulas 5-10 • "Agora você pega o groove e transforma em MÚSICA que as pessoas reconhecem"',
    colorClass: "bg-fase-2",
    aulas: [
      { title: "AULAS 5, 6, 7 – Xote (3 Aulas Progressivas)", desc: "Não é \"uma aula de xote\". São 3 camadas: Xote 1 (padrão básico) → Xote 2 (adiciona mão esquerda) → Xote 3 (variação + dinâmica). No fim da Aula 7, você toca xote completo." },
      { title: "AULA 8 – Ijexá", desc: "Ritmo afro-brasileiro (rodas de samba e candomblé). Seu cérebro aprende flexibilidade rítmica." },
      { title: "AULA 9 – Macete", desc: "O \"atalho\" que percussionistas profissionais usam (e que ninguém te conta)." },
      { title: "AULA 10 – Shake + Cajón", desc: "Você adiciona TEXTURA ao cajón. Aqui que você começa a soar profissional." },
    ],
    resultado: "Você toca xote, ijexá e já usa shake. 87% dos alunos são chamados pra tocar na igreja/evento aqui.",
  },
  {
    num: "03",
    titulo: "VARIAÇÕES LATINO-AMERICANAS",
    subtitle: 'Aulas 11-14 • "Você expande seu repertório — não é só Brasil, é América Latina inteira"',
    colorClass: "bg-fase-3",
    aulas: [
      { title: "AULAS 11, 12 – Chá Chá Chá (Básico + Hi-Hat com Pé)", desc: "Ritmo cubano. Você aprende coordenação tripla (mãos + pé). Isso treina seu cérebro pra coordenação complexa." },
      { title: "AULA 13 – Macete com Hi-Hat", desc: "Você volta no \"macete\" da Aula 9 e ELEVA com hi-hat. Mesma base, som mais rico." },
      { title: "AULA 14 – Maracatu", desc: "Ritmo nordestino pesado (bloco de carnaval). Você aprende PESO e GROOVE denso." },
    ],
    resultado: 'Seu repertório agora tem 6+ ritmos diferentes. Você não é "o cara que toca cajón". É o percussionista.',
  },
  {
    num: "04",
    titulo: "ELEVANDO O NÍVEL",
    subtitle: 'Aulas 15-17 • "Aqui você sai de \'toca bem\' pra \'toca MUITO\'"',
    colorClass: "bg-fase-4",
    aulas: [
      { title: "AULA 15 – Hi-Hat Dobrado", desc: "Técnica avançada que faz o ritmo ficar mais DENSO. O diferencial entre amador e profissional." },
      { title: "AULA 16 – Xote com Hi-Hat Dobrado", desc: "Você volta no xote (que já domina) e ELEVA com hi-hat dobrado. Resultado: xote profissional." },
      { title: "AULA 17 – Xote Swingado", desc: 'Aqui você aprende SWING (aquela "moleza" que faz o ritmo respirar). Não é técnica — é SENTIMENTO.' },
    ],
    resultado: "Você toca com dinâmica e textura. O som não é mais mecânico — é orgânico, vivo.",
  },
  {
    num: "05",
    titulo: "BAIÃO E LEVADAS AVANÇADAS",
    subtitle: 'Aulas 18-24 • "Você domina baião (o ritmo mais pedido em eventos) e cria seu arsenal pessoal"',
    colorClass: "bg-fase-5",
    aulas: [
      { title: "AULAS 18-22 – Baião (5 Variações Progressivas)", desc: "Não é \"uma aula de baião\". São 5 camadas: Baião base → Baião + Hi-Hat dobrado → Baião swingado → Baião zabumba → Baião zabumba + Hi-Hat. No fim da Aula 22, você domina baião em todas as variações." },
      { title: "AULAS 23, 24 – Levada Coringa (Com e Sem Hi-Hat)", desc: 'A "levada universal" que funciona em 80% das músicas. Aquela que você usa quando o músico manda "toca aí um groove" e você não sabe a música.' },
    ],
    resultado: "Você tem versatilidade total. Baião, xote, ijexá, levada coringa — você toca TUDO.",
  },
  {
    num: "06",
    titulo: "SAMBA REGGAE E IJEXÁ AVANÇADO",
    subtitle: 'Aulas 25-30 • "Você fecha o curso tocando os ritmos mais complexos e desafiadores"',
    colorClass: "bg-fase-6",
    aulas: [
      { title: "AULAS 25-27 – Samba Reggae (3 Camadas)", desc: "O ritmo do Olodum, Timbalada, carnaval da Bahia. Pesado, denso, poderoso: Samba reggae base → Variação 2 → + Hi-Hat" },
      { title: "AULAS 28-30 – Ijexá 2 (Avançado)", desc: "Você volta no ijexá da Aula 8, mas MUITO mais avançado: Nova variação → + Hi-Hat no tempo → + Hi-Hat no contratempo" },
    ],
    resultado: "Você fecha o curso tocando samba reggae e ijexá avançado. Se você chegou aqui, você não é iniciante. Você é percussionista.",
  },
];

const FaseCard = ({ fase, index }: { fase: FaseData; index: number }) => (
  <motion.div
    className="border-2 border-border rounded-lg mb-8 overflow-hidden bg-card hover:shadow-lg transition-shadow"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: index * 0.05 }}
  >
    <div className={`flex items-start gap-4 sm:gap-6 p-6 sm:p-8 ${fase.colorClass}`}>
      <span className="text-5xl sm:text-7xl font-extrabold text-primary leading-none shrink-0 font-heading">
        {fase.num}
      </span>
      <div>
        <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground">{fase.titulo}</h3>
        <p className="text-sm text-muted-foreground italic">{fase.subtitle}</p>
      </div>
    </div>
    <div className="p-6 sm:px-8 space-y-5">
      {fase.aulas.map((aula, i) => (
        <div key={i} className="flex gap-3 items-start">
          <span className="text-accent text-xl shrink-0">✅</span>
          <div>
            <strong className="block text-foreground mb-1">{aula.title}</strong>
            <p className="text-sm text-muted-foreground leading-relaxed">{aula.desc}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="flex gap-3 items-start p-5 bg-secondary border-t border-border text-sm">
      <span className="text-2xl shrink-0">⭐</span>
      <p className="text-foreground">
        <strong>Resultado da Fase {parseInt(fase.num)}:</strong> {fase.resultado}
      </p>
    </div>
  </motion.div>
);

const FasesSection = () => (
  <section className="py-16 md:py-24 bg-background">
    <div className="container">
      <h2 className="font-heading text-3xl sm:text-4xl font-bold text-center mb-3 text-foreground">
        A Sequência Que Ninguém Te Mostrou
      </h2>
      <p className="text-center text-xl text-muted-foreground mb-4">(E Que Funciona)</p>
      <p className="text-center text-lg max-w-3xl mx-auto mb-12 text-foreground">
        Depois de 40 anos tocando percussão e testar com 217 alunos, eu descobri a ordem EXATA que faz qualquer pessoa sair de zero e tocar música real em 30 dias.
      </p>
      {fases.map((fase, i) => (
        <FaseCard key={fase.num} fase={fase} index={i} />
      ))}
    </div>
  </section>
);

export default FasesSection;
