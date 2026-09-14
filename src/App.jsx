import {
  DemoBar,
  Header,
  Section,
  Faq,
  ZayavkaForm,
  Footer,
  btnPrimary,
  btnGhost,
} from "./ui.jsx";

const Logo = () => (
  <span className="flex items-center gap-2.5">
    <svg viewBox="0 0 64 64" className="size-8" aria-hidden="true">
      <rect width="64" height="64" rx="16" fill="#3b4fd8" />
      <g fill="#ffffff">
        <rect x="14" y="14" width="16" height="10" rx="2" />
        <rect x="34" y="14" width="16" height="10" rx="2" opacity=".6" />
        <rect x="14" y="28" width="16" height="10" rx="2" opacity=".6" />
        <rect x="14" y="42" width="16" height="10" rx="2" opacity=".6" />
        <rect x="34" y="28" width="16" height="24" rx="2" fill="#c6f36b" />
      </g>
    </svg>
    <span className="font-display text-[17px] font-semibold tracking-tight">
      Сводная
    </span>
  </span>
);

const LINKS = {
  items: [
    { href: "#dlya-kogo", label: "Для кого" },
    { href: "#programma", label: "Программа" },
    { href: "#avtor", label: "Автор" },
    { href: "#tarify", label: "Тарифы" },
    { href: "#voprosy", label: "Вопросы" },
  ],
};

const PROGRAMMA = [
  {
    w: "Неделя 1",
    t: "Порядок в выгрузках",
    l: [
      "Как выгрузить отчёт из 1С, чтобы с ним можно было работать",
      "Умные таблицы и фильтры вместо ручного поиска",
      "Текст, числа и даты: почему СУММ показывает ноль",
      "Практика: чистим оборотно-сальдовую ведомость",
    ],
  },
  {
    w: "Неделя 2",
    t: "Формулы, которые экономят часы",
    l: [
      "ВПР и ИНДЕКС + ПОИСКПОЗ: подтягиваем данные из другой таблицы",
      "СУММЕСЛИМН для отчётов по контрагентам",
      "ЕСЛИ и проверка ошибок",
      "Практика: акт сверки за 10 минут",
    ],
  },
  {
    w: "Неделя 3",
    t: "Сводные таблицы",
    l: [
      "Сводная за 3 клика: выручка по месяцам и клиентам",
      "Группировка дат и расчётные поля",
      "Срезы для руководителя",
      "Практика: отчёт о дебиторке",
    ],
  },
  {
    w: "Неделя 4",
    t: "Отчёт, который не стыдно отправить",
    l: [
      "Условное форматирование: подсветка просрочек",
      "Диаграммы без лишнего",
      "Защита листов и совместная работа",
      "Итоговый проект на ваших данных",
    ],
  },
];

const FAQ = [
  {
    q: "Какая версия Excel нужна?",
    a: "Excel 2016 и новее, в том числе Microsoft 365. Большинство приёмов работают и в «Р7-Офисе» и «МойОфис» — в уроках показываем, где отличия.",
  },
  {
    q: "Я совсем новичок, справлюсь?",
    a: "Да, если умеете открыть файл и ввести формулу суммы. Первая неделя начинается с основ, а куратор отвечает на вопросы в чате.",
  },
  {
    q: "Что если не успеваю по графику?",
    a: "Уроки остаются в записи на год. Домашние задания принимаем до конца потока плюс две недели.",
  },
  {
    q: "Можно вернуть деньги?",
    a: "Да, в течение 14 дней с начала потока, если вы прошли не больше трёх уроков. Без объяснения причин.",
  },
  {
    q: "Можно оплатить от компании?",
    a: "Да, выставим счёт и подпишем договор с актом. Напишите в форме, что нужна оплата от организации.",
  },
];

function HeroArt() {
  const rows = [
    ["Контрагент", "Янв", "Фев", "Мар"],
    ["ООО «Альфа»", "120", "98", "143"],
    ["ИП Смирнов", "45", "61", "38"],
    ["ООО «Вектор»", "210", "188", "256"],
    ["Итого", "375", "347", "437"],
  ];
  return (
    <svg
      viewBox="0 0 460 420"
      className="h-auto w-full"
      role="img"
      aria-labelledby="xl-t"
    >
      <title id="xl-t">Таблица со сводными данными и диаграммой</title>
      <rect x="10" y="10" width="440" height="400" rx="22" fill="#121633" />
      <g fontFamily="Inter Variable, sans-serif" fontSize="14">
        {rows.map((r, i) =>
          r.map((c, j) => {
            const x = 34 + (j === 0 ? 0 : 150 + (j - 1) * 80);
            const y = 44 + i * 40;
            const w = j === 0 ? 146 : 76;
            const head = i === 0;
            const total = i === rows.length - 1;
            const hl = i === 3 && j === 3;
            return (
              <g key={`${i}-${j}`}>
                <rect
                  x={x}
                  y={y}
                  width={w}
                  height="36"
                  rx="6"
                  fill={
                    hl
                      ? "#c6f36b"
                      : head
                        ? "#3b4fd8"
                        : total
                          ? "#2a3070"
                          : "#1d2250"
                  }
                />
                <text
                  x={j === 0 ? x + 12 : x + w - 12}
                  y={y + 23}
                  textAnchor={j === 0 ? "start" : "end"}
                  fill={hl ? "#121633" : "#f6f7fb"}
                  fontWeight={head || total || hl ? 700 : 400}
                >
                  {c}
                </text>
              </g>
            );
          }),
        )}
      </g>
      <g>
        {[
          [52, 80],
          [112, 64],
          [172, 102],
          [232, 90],
          [292, 128],
          [352, 150],
        ].map(([x, h]) => (
          <rect
            key={x}
            x={x}
            y={380 - h}
            width="40"
            height={h}
            rx="6"
            fill={x === 352 ? "#c6f36b" : "#3b4fd8"}
          />
        ))}
      </g>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <DemoBar />
      <Header
        brand={<Logo />}
        links={LINKS}
        cta={{ href: "#zapis", label: "Забронировать место" }}
      />

      <main>
        <section>
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-12 lg:grid-cols-[1.1fr_0.9fr] lg:pb-24 lg:pt-20">
            <div>
              <p className="mb-5 inline-flex items-center gap-2 rounded-full bg-soft px-4 py-1.5 text-sm font-semibold text-accent-text">
                <span
                  aria-hidden="true"
                  className="size-2 rounded-full bg-accent"
                />
                Онлайн-курс · поток стартует 6 октября
              </p>
              <h1 className="font-display text-[clamp(2rem,1.1rem+3.6vw,3.6rem)] font-semibold leading-[1.08] tracking-[-0.02em]">
                Excel для бухгалтера: закрывайте месяц на два дня быстрее
              </h1>
              <p className="mt-6 max-w-[54ch] text-[18px] leading-relaxed text-muted">
                4 недели, 16 уроков по 15–25 минут на реальных выгрузках из 1С.
                Сводные таблицы, ВПР и акты сверки — без формул ради формул.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="#zapis" className={btnPrimary}>
                  Забронировать место
                </a>
                <a href="#programma" className={btnGhost}>
                  Смотреть программу
                </a>
              </div>
              <p className="mt-4 text-sm text-muted">
                Бронь бесплатная, оплата — до старта потока
              </p>
            </div>
            <HeroArt />
          </div>
        </section>

        <div className="border-y border-line bg-surface">
          <ul className="mx-auto grid max-w-6xl gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["16 уроков", "по 15–25 минут"],
              ["12 заданий", "с проверкой куратора"],
              ["1 год", "доступа к записям"],
              ["14 дней", "на возврат денег"],
            ].map(([a, b]) => (
              <li key={a} className="bg-surface px-5 py-6">
                <p className="font-display text-2xl font-semibold">{a}</p>
                <p className="mt-1 text-sm text-muted">{b}</p>
              </li>
            ))}
          </ul>
        </div>

        <Section
          id="dlya-kogo"
          eyebrow="Для кого"
          title="Курс для тех, кто считает в Excel каждый день, но долго"
        >
          <div className="grid gap-5 md:grid-cols-3">
            {[
              [
                "Бухгалтер на участке",
                "Сверки с контрагентами и отчёты для главбуха занимают полдня, а хочется — полчаса.",
              ],
              [
                "Главный бухгалтер",
                "Нужно быстро собирать управленческие отчёты для руководителя из разных выгрузок.",
              ],
              [
                "Бухгалтер на аутсорсе",
                "Много клиентов, у каждого свой формат файлов. Нужны приёмы, которые работают везде.",
              ],
            ].map(([h, t]) => (
              <article
                key={h}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-7"
              >
                <h3 className="text-lg font-bold">{h}</h3>
                <p className="mt-3 leading-relaxed text-muted">{t}</p>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="programma"
          tone="bg-night text-white"
          className="[&_h2]:text-white"
        >
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-lime">
                Программа
              </p>
              <h2 className="font-display text-[clamp(1.7rem,1.1rem+2.4vw,2.6rem)] font-semibold leading-[1.12]">
                Каждая неделя заканчивается задачей из реальной работы
              </h2>
              <p className="mt-4 max-w-[46ch] leading-relaxed text-white/75">
                Уроки открываются по понедельникам. На неделю уходит 2–3 часа
                вместе с домашним заданием.
              </p>
            </div>
            <div className="divide-y divide-white/15 border-y border-white/15">
              {PROGRAMMA.map((p, i) => (
                <details key={p.w} open={i === 0} className="group">
                  <summary className="flex min-h-16 cursor-pointer list-none items-center gap-5 py-5 [&::-webkit-details-marker]:hidden">
                    <span className="w-24 shrink-0 text-sm font-semibold text-lime">
                      {p.w}
                    </span>
                    <span className="flex-1 text-lg font-semibold">{p.t}</span>
                    <span
                      aria-hidden="true"
                      className="grid size-8 shrink-0 place-items-center rounded-full border border-white/30 transition group-open:rotate-45"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="space-y-2 pb-6 pl-0 text-white/80 sm:pl-[116px]">
                    {p.l.map((x) => (
                      <li key={x} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2.5 size-1.5 shrink-0 rounded-full bg-lime"
                        />
                        {x}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </div>
        </Section>

        <Section eyebrow="Что изменится" title="Примеры задач до курса и после">
          {/* На телефоне таблица из трёх колонок прячет главное — «После курса» — за прокруткой вбок,
              поэтому там те же данные идут карточками. */}
          <ul className="grid gap-3 sm:hidden">
            {[
              [
                "Акт сверки с контрагентом",
                "Построчно глазами",
                "ВПР и подсветка расхождений",
              ],
              [
                "Выручка по клиентам за квартал",
                "Фильтр и калькулятор",
                "Сводная таблица со срезами",
              ],
              [
                "Дебиторка с просрочкой",
                "Отдельный файл вручную",
                "Условное форматирование в выгрузке",
              ],
            ].map(([a, b, c]) => (
              <li
                key={a}
                className="rounded-[var(--radius-card)] border border-line bg-surface p-5"
              >
                <p className="font-semibold">{a}</p>
                <p className="mt-3 text-sm text-muted">Как обычно: {b}</p>
                <p className="mt-1 text-sm font-semibold text-accent-text">
                  После курса: {c}
                </p>
              </li>
            ))}
          </ul>
          <div className="hidden overflow-x-auto rounded-[var(--radius-card)] border border-line bg-surface sm:block">
            <table className="w-full min-w-[560px] text-left">
              <thead>
                <tr className="border-b border-line text-sm text-muted">
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Задача
                  </th>
                  <th scope="col" className="px-6 py-4 font-semibold">
                    Как обычно
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-4 font-semibold text-accent-text"
                  >
                    После курса
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  [
                    "Акт сверки с контрагентом",
                    "Построчно глазами",
                    "ВПР и подсветка расхождений",
                  ],
                  [
                    "Выручка по клиентам за квартал",
                    "Фильтр и калькулятор",
                    "Сводная таблица со срезами",
                  ],
                  [
                    "Дебиторка с просрочкой",
                    "Отдельный файл вручную",
                    "Условное форматирование в выгрузке",
                  ],
                ].map(([a, b, c]) => (
                  <tr key={a} className="border-b border-line last:border-0">
                    <th scope="row" className="px-6 py-5 font-semibold">
                      {a}
                    </th>
                    <td className="px-6 py-5 text-muted">{b}</td>
                    <td className="px-6 py-5 font-semibold">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="avtor" tone="bg-surface border-y border-line">
          <div className="grid items-center gap-10 md:grid-cols-[auto_1fr]">
            <span
              aria-hidden="true"
              className="grid size-40 place-items-center rounded-[32px] bg-accent font-display text-5xl font-semibold text-on-accent"
            >
              ИМ
            </span>
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                Автор курса
              </p>
              <h2 className="font-display text-[clamp(1.7rem,1.1rem+2.4vw,2.6rem)] font-semibold leading-[1.12]">
                Ирина Малахова
              </h2>
              <p className="mt-4 max-w-[60ch] text-[17px] leading-relaxed text-muted">
                Главный бухгалтер в торговой компании. Собрала в курс приёмы,
                которыми сама пользуется при закрытии месяца, — только то, что
                пригодилось больше одного раза.
              </p>
            </div>
          </div>
        </Section>

        <Section
          id="tarify"
          eyebrow="Тарифы"
          title="Выберите, сколько поддержки нужно"
        >
          <div className="grid items-stretch gap-5 lg:grid-cols-3">
            {[
              {
                n: "Самостоятельно",
                p: "6 900 ₽",
                l: ["16 уроков в записи", "Файлы-тренажёры", "Доступ на год"],
              },
              {
                n: "С проверкой",
                p: "12 900 ₽",
                l: [
                  "Всё из «Самостоятельно»",
                  "Проверка 12 заданий",
                  "Чат потока с куратором",
                  "Итоговый проект на ваших данных",
                ],
                hit: true,
              },
              {
                n: "С наставником",
                p: "19 900 ₽",
                l: [
                  "Всё из «С проверкой»",
                  "Три созвона по 30 минут",
                  "Разбор ваших рабочих файлов",
                ],
              },
            ].map((t) => (
              <article
                key={t.n}
                className={`relative flex flex-col rounded-[var(--radius-card)] border p-8 ${t.hit ? "border-accent bg-surface shadow-[var(--shadow-card)] ring-2 ring-accent" : "border-line bg-surface"}`}
              >
                {t.hit && (
                  <span className="absolute -top-3.5 left-8 rounded-full bg-lime px-3 py-1 text-xs font-bold text-night">
                    Чаще всего берут
                  </span>
                )}
                <h3 className="text-xl font-bold">{t.n}</h3>
                <p className="mt-4 font-display text-4xl font-semibold">
                  {t.p}
                </p>
                <ul className="mt-6 flex-1 space-y-3 border-t border-line pt-6">
                  {t.l.map((x) => (
                    <li key={x} className="flex gap-3">
                      <svg
                        viewBox="0 0 20 20"
                        className="mt-0.5 size-5 shrink-0 text-accent-text"
                        aria-hidden="true"
                      >
                        <path
                          d="M4 10.5l4 4 8-9"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {x}
                    </li>
                  ))}
                </ul>
                <a
                  href="#zapis"
                  className={`${t.hit ? btnPrimary : btnGhost} mt-8 w-full`}
                >
                  Забронировать
                </a>
              </article>
            ))}
          </div>
        </Section>

        <Section
          id="voprosy"
          tone="bg-surface border-y border-line"
          eyebrow="Вопросы"
          title="Отвечаем до оплаты"
        >
          <div className="max-w-3xl">
            <Faq items={FAQ} />
          </div>
        </Section>

        <Section id="zapis">
          <div className="grid gap-12 md:grid-cols-[1fr_1.1fr]">
            <div>
              <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-accent-text">
                Бронь
              </p>
              <h2 className="font-display text-[clamp(1.7rem,1.1rem+2.4vw,2.6rem)] font-semibold leading-[1.12]">
                Забронируйте место в потоке 6 октября
              </h2>
              <p className="mt-4 max-w-[46ch] text-[17px] leading-relaxed text-muted">
                Пришлём программу, ссылку на оплату и первый урок в подарок,
                чтобы вы оценили формат.
              </p>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line bg-surface p-[clamp(20px,4vw,40px)] shadow-[var(--shadow-card)]">
              <ZayavkaForm
                button="Забронировать место"
                note="Бронь бесплатная и ни к чему не обязывает"
                fields={[
                  {
                    name: "imya",
                    label: "Имя",
                    required: true,
                    autoComplete: "given-name",
                    placeholder: "Как к вам обращаться",
                  },
                  {
                    name: "telefon",
                    label: "Телефон или Telegram",
                    type: "text",
                    required: true,
                    autoComplete: "tel",
                    placeholder: "+7 900 000-00-00 или @ник",
                  },
                  {
                    name: "tarif",
                    label: "Тариф",
                    type: "select",
                    options: [
                      "Самостоятельно",
                      "С проверкой",
                      "С наставником",
                      "Пока не решил(а)",
                    ],
                    placeholder: "Выберите тариф",
                  },
                ]}
              />
            </div>
          </div>
        </Section>
      </main>

      <Footer
        brand={<Logo />}
        about="Онлайн-школа практических навыков для бухгалтеров. Короткие уроки на реальных рабочих файлах."
        contacts={[
          "hello@… (демо)",
          "Пн–Пт, 10:00–19:00 МСК",
          "Поддержка в Telegram",
        ]}
      />
    </>
  );
}
