import {
  LuArrowUpRight,
  LuFeather,
  LuFlame,
  LuHeart,
  LuInfinity,
  LuLightbulb,
  LuMegaphone,
  LuMoon,
  LuSparkles,
  LuStar,
  LuTarget,
} from "react-icons/lu";

const pilares = [
  {
    title: "Sanación que vende",
    icon: LuHeart,
    description:
      "Historias reales y vulnerables que ayudan a las mujeres a reconciliarse con su cuerpo, sus ciclos y su voz interior.",
    hooks: [
      "“Lo que nadie te dijo sobre amarte en medio de tus días grises”",
      "“3 rituales emocionales que abren espacio para crear contenido auténtico”",
      "“Del autosabotaje al lanzamiento: bitácora de un renacer”",
    ],
  },
  {
    title: "Marketing con propósito",
    icon: LuSparkles,
    description:
      "Estrategias aplicables, cálidas y alineadas a un negocio del alma: branding holístico, funnels de contención, ofertas con impacto social.",
    hooks: [
      "“Cómo convertir tu historia de dolor en una oferta magnética”",
      "“Embudo consciente: guía para nutrir sin manipular”",
      "“Checklist de un lanzamiento que respeta tu energía femenina”",
    ],
  },
  {
    title: "Visibilidad con esencia",
    icon: LuFeather,
    description:
      "Estilo visual, narrativa, presencia, colaboraciones e innovación para ser vista sin perder tu autenticidad.",
    hooks: [
      "“Mini reto: 5 días de visibilidad suave para salir del anonimato”",
      "“Cómo negociar colaboraciones sin rebajar tu valor”",
      "“Plantilla de bio magnética para mujeres guía”",
    ],
  },
];

const formatos = [
  {
    title: "Reels activadores",
    icon: LuFlame,
    description:
      "Rituales, confesiones y micro-manifiestos que detonan guardados y compartidos.",
    ideas: [
      "Before & after emocional: “Así se ve cuando vuelves a reconocerte”.",
      "Tranquil hype: trend con afirmaciones potentes + CTA a reto gratuito.",
      "Reel POV: “Cuando decides vender desde el amor propio”.",
    ],
  },
  {
    title: "Carruseles profundos",
    icon: LuMoon,
    description:
      "Educación estratégica que mezcla marketing, psicología y espiritualidad práctica.",
    ideas: [
      "Mapa de ruta: del bloqueo creativo al lanzamiento alineado.",
      "Framework: 4 arquetipos de cliente herida y cómo acompañarlos.",
      "Checklist: señales de que tu contenido ya está listo para monetizar.",
    ],
  },
  {
    title: "Historias & Vivos íntimos",
    icon: LuMegaphone,
    description:
      "Contención diaria, behind the scenes, ceremonias mini y cierres con venta suave.",
    ideas: [
      "Bitácora de creación: 3 historias al día mostrando proceso real.",
      "Encuesta-oráculo: conversación con la comunidad para co-crear ofertas.",
      "Live quincenal: mentoría grupal gratuita + invitación a programa premium.",
    ],
  },
];

const agenda = [
  {
    day: "Lunes",
    focus: "Anclar propósito",
    format: "Reel confesión",
    objective: "Conexión emocional inmediata",
    cta: "Guarda si hoy decides amarte más",
  },
  {
    day: "Martes",
    focus: "Marco estratégico",
    format: "Carrusel educativo",
    objective: "Autoridad suave en marketing consciente",
    cta: "Descarga la mini-guía gratuita",
  },
  {
    day: "Miércoles",
    focus: "Visibilidad íntima",
    format: "Stories detrás de escena",
    objective: "Romper creencias + feedback en vivo",
    cta: "Responde la encuesta y recibe afirmación personalizada",
  },
  {
    day: "Jueves",
    focus: "Oferta alineada",
    format: "Reel transformación de clienta",
    objective: "Prueba social + storytelling sagrado",
    cta: "Comenta RENACER para más detalles",
  },
  {
    day: "Viernes",
    focus: "Energía femenina CEO",
    format: "Carrusel estilo moodboard",
    objective: "Inspirar lifestyle coherente con el negocio",
    cta: "Comparte con tu socia del alma",
  },
  {
    day: "Sábado",
    focus: "Cultivar comunidad",
    format: "Live íntimo",
    objective: "Responder dudas + micro venta de programa principal",
    cta: "Inscríbete al círculo de espera",
  },
  {
    day: "Domingo",
    focus: "Receso consciente",
    format: "Story ritual guiado",
    objective: "Mantener presencia suave en descanso",
    cta: "Envía DM con la palabra CALMA",
  },
  {
    day: "Semana 2",
    focus: "Mini reto 5 días",
    format: "Guía descargable + reels diarios",
    objective: "Captación lead magnet",
    cta: "Link en bio: Reto Renacer en 5 minutos",
  },
  {
    day: "Semana 3",
    focus: "Colaboración",
    format: "Live dual con terapeuta invitada",
    objective: "Alcance cruzado + autoridad compartida",
    cta: "Follow y guarda para ver después",
  },
  {
    day: "Semana 4",
    focus: "Lanzamiento",
    format: "Secuencia 4 reels + 3 emails",
    objective: "Conversión a programa premium",
    cta: "Aplica al programa RENACER ESENCIAL",
  },
];

const funnel = [
  {
    title: "Atracción consciente",
    detail:
      "Contenido viral con storytelling vulnerable + ganchos aspiracionales que muestran el contraste entre autoabandono y liderazgo femenino.",
    deliverable: "Reels activadores + carrusel “Diagnóstico de sombras”.",
    metric: "Guardados & compartidos como KPIs primarios.",
  },
  {
    title: "Nutrición alquímica",
    detail:
      "Secuencia de emails + lives privados donde se profundiza en la sanación y se entregan herramientas accionables.",
    deliverable: "Lead magnet: Ritual de Reencuentro (audio + workbook).",
    metric: "Tasa de finalización del ritual y respuestas a CTA.",
  },
  {
    title: "Conversión en calma",
    detail:
      "Venta desde conversaciones 1:1 y grupos reducidos, invitando a un programa premium de marketing con propósito.",
    deliverable: "DMs personalizados, aplicación filtrada, onboarding ceremonial.",
    metric: "Conversiones por conversación + satisfacción post bienvenida.",
  },
];

const colores = [
  { name: "Rosa esencia", hex: "#F7A6B2", meaning: "Autoamor, calidez" },
  { name: "Coral fuego", hex: "#FF846D", meaning: "Visibilidad, acción" },
  { name: "Dorado suave", hex: "#F8D57E", meaning: "Abundancia, brillo" },
  { name: "Azul serenidad", hex: "#9ECBFF", meaning: "Claridad, estrategia" },
  { name: "Malva raíz", hex: "#8E6BAF", meaning: "Sabiduría, misticismo" },
];

const hashtags = [
  "#MarketingConAlma",
  "#MujerVisible",
  "#RenacerFemenino",
  "#NegocioDelAlma",
  "#MarketingHolístico",
  "#LiderazgoFemenino",
  "#ContenidoConPropósito",
  "#AutoamorEmprendedor",
];

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <div className="aurora" />
      <div className="grid-overlay" />
      <main className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-24 pt-20 sm:px-10 lg:px-16">
        <section className="glass relative overflow-hidden rounded-3xl border border-white/40 p-10 shadow-xl shadow-rose-100/50">
          <div className="absolute right-0 top-0 h-48 w-48 -translate-y-1/3 translate-x-1/3 rounded-full bg-rose-200/50 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-44 w-44 translate-y-1/3 rounded-full bg-sky-200/40 blur-3xl" />
          <div className="relative flex flex-col gap-6">
            <span className="inline-flex items-center gap-2 self-start rounded-full border border-rose-100 bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-rose-500">
              Renacer Esencial
              <LuStar className="text-rose-400" size={16} />
            </span>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              Estrategia viral para un Instagram que mezcla marketing con
              sanación femenina.
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Perfil diseñado para mujeres que dejaron de verse a sí mismas.
              Fusiona marketing digital estratégico, rituales de autoamor y
              narrativa sagrada para volver a la esencia, atraer clientes
              conscientes y vender con propósito.
            </p>
            <div className="grid gap-6 sm:grid-cols-3">
              {[
                {
                  label: "Arquetipo de marca",
                  value: "Mentora Alquimista",
                  icon: LuInfinity,
                },
                {
                  label: "Promesa central",
                  value: "De invisibles a magnéticas con autenticidad",
                  icon: LuSparkles,
                },
                {
                  label: "Faro emocional",
                  value: "Recordar que ser vista es un acto de amor propio",
                  icon: LuHeart,
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-sm"
                >
                  <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.15em] text-slate-500">
                    <item.icon className="text-rose-400" />
                    {item.label}
                  </div>
                  <p className="mt-3 text-base font-semibold text-slate-800">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-sky-100/50">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Identidad profunda
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Brújula de la marca
              </h2>
              <p className="text-lg leading-relaxed text-slate-600">
                La cuenta acompaña a mujeres que brillan en lo profesional, pero
                se sienten invisibles en su mundo interno. El contenido mezcla
                verdad emocional + estrategia para convertir su historia en una
                marca magnética.
              </p>
              <div className="grid gap-5 sm:grid-cols-3">
                {[
                  {
                    title: "Propósito",
                    text: "Recordar a la mujer que se abandonó que su voz es su activo más rentable.",
                  },
                  {
                    title: "Mujer musa",
                    text: "Emprendedora sensible, experta en lo que hace pero desconectada de su brillo.",
                  },
                  {
                    title: "Transformación",
                    text: "Pasa de autoprometerse a exponerse con amor y convertir sin sentirse impostora.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-sky-100 bg-white/90 p-4"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="shrink-0 space-y-4 rounded-2xl border border-slate-100 bg-white/80 p-6 text-sm text-slate-600 lg:w-80">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-800">
                <LuLightbulb className="text-amber-400" />
                Manifiesto creativo
              </h3>
              <ul className="space-y-3">
                {[
                  "Vendemos desde el corazón: cada CTA es una invitación a recordar quién eres.",
                  "No hay filtros perfectos, hay historias reales que se sienten y se comparten.",
                  "El algoritmo responde a la verdad: métricas sanas nacen de lideresas auténticas.",
                ].map((point) => (
                  <li key={point} className="flex gap-2">
                    <LuStar className="mt-1 flex-shrink-0 text-rose-400" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl border border-rose-100 bg-rose-50/70 p-4 text-rose-600">
                Tonalidad clave: íntima, valiente, esperanzadora, con metáforas
                suaves y llamadas a la acción empáticas.
              </div>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-rose-100/50">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
                Pilares editoriales
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Lo que mantiene el perfil vibrando alto
              </h2>
              <p className="max-w-3xl text-lg text-slate-600">
                Cada pilar funciona como un universo narrativo. Alternarlos crea
                ritmo, genera autoridad y acompaña a la audiencia en el viaje
                completo: sentir, entender, accionar.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {pilares.map((pilar) => (
                <div
                  key={pilar.title}
                  className="flex flex-col gap-4 rounded-2xl border border-rose-100 bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-rose-100 p-3 text-rose-500">
                      <pilar.icon size={22} />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {pilar.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {pilar.description}
                  </p>
                  <div className="space-y-2 text-sm text-slate-600">
                    {pilar.hooks.map((hook) => (
                      <div
                        key={hook}
                        className="rounded-lg border border-rose-100/70 bg-rose-50/50 px-3 py-2"
                      >
                        {hook}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-sky-100/60">
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Ecosistema de formatos
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Cómo se distribuye la magia
              </h2>
              <p className="max-w-3xl text-lg text-slate-600">
                La consistencia nace de procesos concretos. Cada formato tiene
                un rol: despertar, nutrir, convertir y fidelizar. Mezcla energía
                femenina (recepción y escucha) con estrategia clara.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {formatos.map((formato) => (
                <div
                  key={formato.title}
                  className="flex h-full flex-col gap-4 rounded-2xl border border-sky-100 bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="rounded-full bg-sky-100 p-3 text-sky-500">
                      <formato.icon size={22} />
                    </span>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {formato.title}
                    </h3>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    {formato.description}
                  </p>
                  <ul className="space-y-3 text-sm text-slate-600">
                    {formato.ideas.map((idea) => (
                      <li key={idea} className="flex gap-2 rounded-lg bg-sky-50/60 p-3">
                        <LuArrowUpRight className="mt-1 flex-shrink-0 text-sky-500" />
                        <span>{idea}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-rose-100/60">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
                Agenda viral
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Calendario de contenido sagrado
              </h2>
              <p className="max-w-3xl text-lg text-slate-600">
                Combina ritmos semanales con campañas quincenales y lanzamientos
                cíclicos. Piensa en estaciones emocionales: abrir, profundizar,
                invitar, descansar.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {agenda.map((item) => (
                <div
                  key={item.day}
                  className="rounded-2xl border border-rose-100 bg-white/85 p-6 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
                      {item.day}
                    </span>
                    <LuTarget className="text-rose-400" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.focus}
                  </h3>
                  <div className="mt-3 grid gap-2 text-sm text-slate-600">
                    <p>
                      <span className="font-semibold text-rose-500">
                        Formato:
                      </span>{" "}
                      {item.format}
                    </p>
                    <p>
                      <span className="font-semibold text-rose-500">
                        Objetivo:
                      </span>{" "}
                      {item.objective}
                    </p>
                    <p>
                      <span className="font-semibold text-rose-500">CTA:</span>{" "}
                      {item.cta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-sky-100/40">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Embudo consciente
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                De vista casual a clienta apalabrada
              </h2>
              <p className="max-w-3xl text-lg text-slate-600">
                Sin presión: cada paso honra el ritmo femenino. Primero se
                contiene, luego se ilumina, después se invita.
              </p>
            </div>
            <div className="grid gap-6 lg:grid-cols-3">
              {funnel.map((step) => (
                <div
                  key={step.title}
                  className="relative overflow-hidden rounded-2xl border border-sky-100 bg-white/85 p-6 shadow-sm"
                >
                  <div className="absolute right-3 top-3 h-16 w-16 rounded-full bg-sky-50 blur-2xl" />
                  <h3 className="text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {step.detail}
                  </p>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="rounded-lg bg-sky-50/70 px-3 py-2 text-sky-700">
                      <strong>Entrega:</strong> {step.deliverable}
                    </div>
                    <div className="rounded-lg bg-rose-50/70 px-3 py-2 text-rose-600">
                      <strong>Métrica clave:</strong> {step.metric}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-rose-100/40">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-xl space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-rose-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-rose-600">
                Identidad visual
              </div>
              <h2 className="text-3xl font-semibold text-slate-900 lg:text-4xl">
                Kit express para un feed magnético
              </h2>
              <p className="text-lg text-slate-600">
                Busca imágenes con luz suave, pieles reales, texturas orgánicas
                (lino, mármol rosa, velas), journaling, mujeres en movimiento
                libre. Añade tipografías serif con detalles manuscritos para
                citas y afirmaciones.
              </p>
              <div className="rounded-2xl border border-rose-100 bg-white/80 p-5 text-sm text-slate-600">
                Moodboard clave: amanecer rosado, costa mediterránea, rituales,
                cuadernos, elementos dorados minimalistas, flores en tonos malva
                y brillos suaves estilo lente difuminado.
              </div>
            </div>
            <div className="space-y-5 rounded-2xl border border-slate-100 bg-white/80 p-6 lg:w-[360px]">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                <LuStar className="text-rose-400" />
                Paleta viva
              </h3>
              <div className="space-y-4">
                {colores.map((color) => (
                  <div key={color.hex} className="flex items-center gap-4">
                    <span
                      className="h-12 w-12 rounded-2xl border border-slate-100 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {color.name}
                      </p>
                      <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                        {color.hex}
                      </p>
                      <p className="text-xs text-slate-500">{color.meaning}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="glass rounded-3xl border border-white/40 p-10 shadow-lg shadow-sky-100/30">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-sky-600">
                Voz & Comunidad
              </div>
              <h2 className="text-3xl font-semibold text-slate-900">
                Hashtags ancla + ritual de CTA
              </h2>
              <p className="max-w-xl text-lg text-slate-600">
                Úsalos al final de cada pieza junto con una micro reflexión o
                pregunta poderosa. Intercala llamadas a DM e invita a compartir
                con mujeres que necesiten ser vistas.
              </p>
              <div className="flex flex-wrap gap-2">
                {hashtags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-200 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white/85 p-6 text-sm text-slate-600 lg:w-[360px]">
              <h3 className="flex items-center gap-2 text-base font-semibold text-slate-900">
                Ritual “DM Sagrado”
              </h3>
              <ol className="mt-4 space-y-3">
                {[
                  "Invita a escribirte con la palabra RENACER para acceso prioritario.",
                  "Responde con nota de voz personalizada + regalo (affirmación audio).",
                  "Cierra con enlace a aplicación del programa premium en Notion.",
                ].map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="mt-1 flex h-6 w-6 items-center justify-center rounded-full bg-rose-100 text-xs font-semibold text-rose-500">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
