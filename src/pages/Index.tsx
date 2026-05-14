import { useState, useEffect } from "react";

const poems = [
  {
    title: "Мамины руки",
    author: "Игорь Гудзенко",
    lines: [
      "Мамины руки — тепло и забота,",
      "В них столько нежности, столько работы.",
      "Они убаюкают, приласкают,",
      "Они от беды меня защищают.",
      "",
      "Мамины руки — мой первый урок,",
      "Как жить в этом мире, как выдержать срок.",
      "В морщинках — история нашей любви,",
      "Мамины руки — всегда рядом, живи.",
    ],
    image: "https://cdn.poehali.dev/projects/ab692f10-e51d-4d77-892f-a671c07ee865/files/844f3fe6-9c96-49db-8835-adab46cb7135.jpg",
    accent: "#c2185b",
    bg: "from-rose-50 via-pink-50 to-amber-50",
  },
  {
    title: "Весна похожа на маму",
    author: "Горина Татьяна",
    lines: [
      "Весна похожа на маму —",
      "Приходит тихо, без шума,",
      "Приносит свет и тепло,",
      "И делает всё светло.",
      "",
      "Цветёт черёмуха белая,",
      "Как мамина улыбка смелая,",
      "Как мамин голос родной —",
      "Весна всегда пахнет мамой.",
    ],
    image: "https://cdn.poehali.dev/projects/ab692f10-e51d-4d77-892f-a671c07ee865/files/8b77b225-4e58-42b3-8711-6efa485894f7.jpg",
    accent: "#7b1fa2",
    bg: "from-purple-50 via-pink-50 to-rose-50",
  },
  {
    title: "Самый лучший человек",
    author: "Олеся Бондарук",
    lines: [
      "Самый лучший человек —",
      "Это мама на всю жизнь.",
      "Сквозь года, сквозь целый век",
      "К ней душою прикоснись.",
      "",
      "Нет добрее, нет родней,",
      "Нет нежнее и теплей.",
      "Всё на свете отдала —",
      "Мама жизнь мне подарила.",
    ],
    image: "https://cdn.poehali.dev/projects/ab692f10-e51d-4d77-892f-a671c07ee865/files/79a339dc-293a-4694-8444-ee8f9b9afad9.jpg",
    accent: "#c62828",
    bg: "from-amber-50 via-rose-50 to-pink-50",
  },
];

function FloralOrnament({ color = "#c2185b", size = 60 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.7">
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(0 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(45 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(90 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(135 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(180 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(225 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(270 30 30)" />
        <ellipse cx="30" cy="12" rx="5" ry="10" fill={color} opacity="0.3" transform="rotate(315 30 30)" />
        <circle cx="30" cy="30" r="5" fill={color} opacity="0.5" />
      </g>
    </svg>
  );
}

function LeafBranch({ color = "#7cb342", flip = false }: { color?: string; flip?: boolean }) {
  return (
    <svg
      width="120"
      height="60"
      viewBox="0 0 120 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path d="M10 50 Q30 20 60 30 Q90 40 110 10" stroke={color} strokeWidth="1.5" fill="none" opacity="0.5" />
      <ellipse cx="35" cy="28" rx="12" ry="6" fill={color} opacity="0.3" transform="rotate(-20 35 28)" />
      <ellipse cx="60" cy="30" rx="12" ry="6" fill={color} opacity="0.3" transform="rotate(0 60 30)" />
      <ellipse cx="85" cy="22" rx="10" ry="5" fill={color} opacity="0.3" transform="rotate(20 85 22)" />
      <ellipse cx="50" cy="18" rx="8" ry="4" fill={color} opacity="0.25" transform="rotate(-10 50 18)" />
      <ellipse cx="75" cy="14" rx="7" ry="3.5" fill={color} opacity="0.25" transform="rotate(15 75 14)" />
    </svg>
  );
}

function CornerFloral({ color = "#c2185b", position }: { color?: string; position: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<string, string> = {
    tl: "rotate(0)",
    tr: "scaleX(-1)",
    bl: "scaleY(-1)",
    br: "scale(-1,-1)",
  };
  const posClasses: Record<string, string> = {
    tl: "top-0 left-0",
    tr: "top-0 right-0",
    bl: "bottom-0 left-0",
    br: "bottom-0 right-0",
  };

  return (
    <div className={`absolute ${posClasses[position]} pointer-events-none`} style={{ transform: transforms[position] }}>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 0 Q40 0 40 40" stroke={color} strokeWidth="1" fill="none" opacity="0.2" />
        <path d="M0 0 Q80 0 80 80" stroke={color} strokeWidth="0.7" fill="none" opacity="0.15" />
        <ellipse cx="55" cy="20" rx="18" ry="9" fill={color} opacity="0.15" transform="rotate(-30 55 20)" />
        <ellipse cx="30" cy="45" rx="15" ry="7" fill={color} opacity="0.12" transform="rotate(-60 30 45)" />
        <ellipse cx="75" cy="50" rx="12" ry="6" fill={color} opacity="0.1" transform="rotate(-20 75 50)" />
        <circle cx="40" cy="15" r="4" fill={color} opacity="0.25" />
        <circle cx="15" cy="40" r="3" fill={color} opacity="0.2" />
        <circle cx="65" cy="30" r="3" fill={color} opacity="0.18" />
        <path d="M10 5 Q25 25 20 50" stroke={color} strokeWidth="1" fill="none" opacity="0.15" />
        <path d="M5 10 Q30 30 50 20" stroke={color} strokeWidth="1" fill="none" opacity="0.15" />
      </svg>
    </div>
  );
}

function TitleSlide({ onNext }: { onNext: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <CornerFloral color="#c2185b" position="tl" />
      <CornerFloral color="#c2185b" position="tr" />
      <CornerFloral color="#c2185b" position="bl" />
      <CornerFloral color="#c2185b" position="br" />

      <div
        className="text-center px-8 max-w-2xl mx-auto z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="flex justify-center mb-6 gap-4">
          <LeafBranch color="#7cb342" />
          <FloralOrnament color="#c2185b" size={52} />
          <LeafBranch color="#7cb342" flip />
        </div>

        <p
          className="font-caveat text-xl text-rose-400 mb-2 tracking-widest"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.3s" }}
        >
          поэтическая презентация
        </p>

        <h1
          className="font-cormorant text-6xl md:text-8xl font-light text-rose-900 leading-tight mb-4"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.5s" }}
        >
          Маме
          <br />
          <span className="italic font-light text-rose-600">с любовью</span>
        </h1>

        <div
          className="flex items-center justify-center gap-3 my-6"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.7s" }}
        >
          <div className="h-px w-16 bg-rose-300" />
          <FloralOrnament color="#e91e8c" size={24} />
          <div className="h-px w-16 bg-rose-300" />
        </div>

        <p
          className="font-caveat text-2xl text-rose-500 mb-2"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.9s" }}
        >
          Автор презентации: Кира Пластун
        </p>
        <p
          className="font-cormorant text-lg text-rose-400 italic"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.1s" }}
        >
          14 мая 2026 года
        </p>

        <div
          className="flex justify-center mt-8 gap-4"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.3s" }}
        >
          <LeafBranch color="#7cb342" />
          <FloralOrnament color="#e91e8c" size={40} />
          <LeafBranch color="#7cb342" flip />
        </div>

        <button
          onClick={onNext}
          className="mt-10 font-caveat text-xl text-rose-600 border border-rose-300 px-10 py-3 rounded-full hover:bg-rose-50 hover:border-rose-500 transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.5s" }}
        >
          Читать стихи →
        </button>
      </div>
    </div>
  );
}

function PoemSlide({
  poem,
  index,
  onNext,
  onPrev,
  isLast,
}: {
  poem: typeof poems[0];
  index: number;
  onNext: () => void;
  onPrev: () => void;
  isLast: boolean;
}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      className={`relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br ${poem.bg}`}
    >
      <CornerFloral color={poem.accent} position="tl" />
      <CornerFloral color={poem.accent} position="tr" />
      <CornerFloral color={poem.accent} position="bl" />
      <CornerFloral color={poem.accent} position="br" />

      <div
        className="w-full max-w-5xl mx-auto px-6 py-12 z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div className="order-2 md:order-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px flex-1 opacity-20" style={{ background: poem.accent }} />
              <FloralOrnament color={poem.accent} size={32} />
              <div className="h-px flex-1 opacity-20" style={{ background: poem.accent }} />
            </div>

            <p className="font-caveat text-lg mb-2" style={{ color: poem.accent, opacity: 0.7 }}>
              стих {index + 1} из {poems.length}
            </p>

            <h2 className="font-cormorant text-4xl md:text-5xl font-light mb-8" style={{ color: poem.accent }}>
              {poem.title}
            </h2>

            <div className="space-y-1">
              {poem.lines.map((line, i) =>
                line === "" ? (
                  <div key={i} className="h-4" />
                ) : (
                  <p
                    key={i}
                    className="font-cormorant text-xl md:text-2xl font-light leading-relaxed text-gray-700 italic"
                    style={{
                      opacity: visible ? 1 : 0,
                      transition: `opacity 0.6s ease ${0.1 + i * 0.07}s`,
                    }}
                  >
                    {line}
                  </p>
                )
              )}
            </div>

            <p
              className="font-caveat text-xl mt-6 text-right"
              style={{
                color: poem.accent,
                opacity: visible ? 0.75 : 0,
                transition: "opacity 0.8s ease 0.8s",
              }}
            >
              — {poem.author}
            </p>

            <div className="flex items-center gap-3 mt-4">
              <LeafBranch color="#7cb342" />
              <FloralOrnament color={poem.accent} size={24} />
              <LeafBranch color="#7cb342" flip />
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-2xl"
                style={{
                  background: poem.accent,
                  opacity: 0.08,
                  transform: "rotate(3deg) scale(1.04)",
                }}
              />
              <div
                className="absolute inset-0 rounded-2xl border-2"
                style={{
                  borderColor: poem.accent,
                  opacity: 0.2,
                  transform: "rotate(-1.5deg) scale(1.02)",
                }}
              />
              <img
                src={poem.image}
                alt={poem.title}
                className="relative rounded-2xl shadow-2xl w-full max-w-sm object-cover"
                style={{ maxHeight: "420px" }}
              />
              <div className="absolute -bottom-4 -right-4 bg-white rounded-full p-2 shadow-lg">
                <FloralOrnament color={poem.accent} size={36} />
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-between items-center mt-12">
          <button
            onClick={onPrev}
            className="font-caveat text-lg px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: poem.accent + "60",
              color: poem.accent,
            }}
          >
            ← Назад
          </button>
          <div className="flex gap-2 items-center">
            {[...Array(poems.length)].map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-300"
                style={{
                  width: i === index ? 24 : 8,
                  height: 8,
                  background: i === index ? poem.accent : poem.accent + "40",
                }}
              />
            ))}
          </div>
          <button
            onClick={onNext}
            className="font-caveat text-lg px-8 py-3 rounded-full border transition-all duration-300 hover:shadow-md"
            style={{
              borderColor: poem.accent,
              color: poem.accent,
              background: poem.accent + "10",
            }}
          >
            {isLast ? "Финал →" : "Далее →"}
          </button>
        </div>
      </div>
    </div>
  );
}

function FinalSlide({ onBack }: { onBack: () => void }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  const petals = Array.from({ length: 18 }, (_, i) => i);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-rose-100 via-pink-50 to-rose-50">
      <CornerFloral color="#c2185b" position="tl" />
      <CornerFloral color="#c2185b" position="tr" />
      <CornerFloral color="#c2185b" position="bl" />
      <CornerFloral color="#c2185b" position="br" />

      {petals.map((i) => (
        <div
          key={i}
          className="absolute pointer-events-none"
          style={{
            left: `${10 + (i * 73) % 80}%`,
            top: `${5 + (i * 47) % 85}%`,
            opacity: 0.08 + (i % 5) * 0.04,
            transform: `rotate(${i * 37}deg) scale(${0.4 + (i % 4) * 0.2})`,
          }}
        >
          <FloralOrnament color="#c2185b" size={28} />
        </div>
      ))}

      <div
        className="text-center px-8 max-w-2xl mx-auto z-10"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(30px)",
          transition: "all 1.2s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        <FloralOrnament color="#c2185b" size={64} />

        <h2
          className="font-cormorant text-5xl md:text-7xl font-light text-rose-800 mt-6 mb-4"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.4s" }}
        >
          Посвящение
        </h2>

        <div
          className="flex items-center justify-center gap-3 my-6"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.6s" }}
        >
          <div className="h-px w-20 bg-rose-300" />
          <FloralOrnament color="#e91e8c" size={20} />
          <div className="h-px w-20 bg-rose-300" />
        </div>

        <p
          className="font-cormorant text-2xl md:text-3xl font-light italic text-rose-700 leading-relaxed mb-6"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 0.8s" }}
        >
          Этот маленький сборник стихов<br />
          посвящается самому дорогому<br />
          и любимому человеку на свете —
        </p>

        <p
          className="font-caveat text-4xl text-rose-500 mb-8"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1s" }}
        >
          моей маме 💐
        </p>

        <div
          className="bg-white bg-opacity-60 rounded-2xl p-6 border border-rose-200 mb-8 backdrop-blur-sm"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.2s" }}
        >
          <p className="font-cormorant text-xl italic text-rose-600 leading-relaxed">
            «За каждой строкой — твоя любовь,<br />
            которую невозможно измерить словами»
          </p>
        </div>

        <div
          className="flex justify-center gap-4 mb-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.4s" }}
        >
          <LeafBranch color="#7cb342" />
          <FloralOrnament color="#c2185b" size={40} />
          <LeafBranch color="#7cb342" flip />
        </div>

        <button
          onClick={onBack}
          className="font-caveat text-lg text-rose-500 border border-rose-300 px-8 py-3 rounded-full hover:bg-rose-50 transition-all duration-300"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1.5s ease 1.6s" }}
        >
          ← К стихам
        </button>
      </div>
    </div>
  );
}

export default function Index() {
  const [slide, setSlide] = useState(0);

  const goNext = () => setSlide((s) => Math.min(s + 1, poems.length + 1));
  const goPrev = () => setSlide((s) => Math.max(s - 1, 0));

  if (slide === 0) return <TitleSlide onNext={goNext} />;
  if (slide >= 1 && slide <= poems.length)
    return (
      <PoemSlide
        poem={poems[slide - 1]}
        index={slide - 1}
        onNext={goNext}
        onPrev={goPrev}
        isLast={slide === poems.length}
      />
    );
  return <FinalSlide onBack={goPrev} />;
}