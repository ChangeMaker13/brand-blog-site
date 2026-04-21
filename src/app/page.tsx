import Header from "@/components/Header";

const services = [
  {
    title: "웹 애플리케이션",
    description:
      "React, Next.js, Vue.js 등 최신 프레임워크로 빠르고 안정적인 웹 애플리케이션을 구축합니다. 반응형 디자인과 SEO 최적화는 기본입니다.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418"
        />
      </svg>
    ),
  },
  {
    title: "모바일 앱",
    description:
      "iOS, Android 네이티브 및 React Native 크로스플랫폼 앱을 개발합니다. 사용자 중심의 UI/UX 설계로 높은 만족도를 보장합니다.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
        />
      </svg>
    ),
  },
  {
    title: "클라우드 & 인프라",
    description:
      "AWS, GCP 기반의 안정적인 인프라를 설계하고 구축합니다. CI/CD 파이프라인, 모니터링, 자동 스케일링까지 운영 자동화를 지원합니다.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
        />
      </svg>
    ),
  },
  {
    title: "AI & 자동화",
    description:
      "AI 기반 비즈니스 프로세스 자동화 및 데이터 분석 솔루션을 제공합니다. 머신러닝 모델 개발부터 서비스 통합까지 지원합니다.",
    icon: (
      <svg
        className="h-8 w-8"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
        />
      </svg>
    ),
  },
];

const processSteps = [
  {
    step: "01",
    title: "상담 & 분석",
    description: "비즈니스 요구사항을 분석하고 최적의 기술 방향을 제안합니다.",
  },
  {
    step: "02",
    title: "기획 & 설계",
    description: "와이어프레임, 시스템 아키텍처, 일정을 수립합니다.",
  },
  { step: "03", title: "개발", description: "애자일 방법론으로 투명하게 개발을 진행합니다." },
  {
    step: "04",
    title: "테스트 & QA",
    description: "철저한 품질 보증으로 안정적인 제품을 만듭니다.",
  },
  { step: "05", title: "런칭", description: "배포 전략 수립부터 출시까지 전 과정을 지원합니다." },
  { step: "06", title: "유지보수", description: "지속적인 운영 지원과 기능 개선을 제공합니다." },
];

const portfolioItems = [
  {
    category: "이커머스",
    title: "대규모 온라인 쇼핑몰 플랫폼",
    description:
      "실시간 재고 관리, 결제 연동, 추천 시스템을 포함한 종합 이커머스 플랫폼을 구축했습니다.",
    result: "주문 처리량 200% 향상 · 페이지 로딩 40% 개선",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    category: "헬스케어",
    title: "환자-의료진 실시간 소통 앱",
    description:
      "원격 상담, 건강 기록 관리, 예약 시스템을 통합한 헬스케어 모바일 앱을 개발했습니다.",
    result: "월간 활성 사용자 10만+ 달성",
    tags: ["React Native", "Node.js", "Firebase"],
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    category: "엔터프라이즈",
    title: "실시간 데이터 분석 대시보드",
    description:
      "다양한 데이터 소스를 통합하고 실시간 시각화를 제공하는 기업용 분석 시스템을 구축했습니다.",
    result: "의사결정 속도 3배 향상",
    tags: ["React", "Python", "AWS"],
    gradient: "from-violet-500 to-purple-500",
  },
];

export default function Home() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 pt-16">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(59,130,246,0.15),_transparent_50%)]" />
          <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
            <p className="mb-4 inline-block rounded-full border border-blue-400/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-300">
              신뢰할 수 있는 기술 파트너
            </p>
            <h1 className="mx-auto max-w-4xl text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              비즈니스의 성장을
              <br />
              <span className="text-blue-400">이끄는 기술 파트너</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300 sm:text-xl">
              웹, 모바일, 클라우드까지 — 아이디어를 현실로 만드는
              <br className="hidden sm:block" />
              외주개발 전문 팀입니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="#contact"
                className="w-full rounded-lg bg-blue-600 px-8 py-3.5 text-base font-medium text-white shadow-lg shadow-blue-600/25 transition-colors hover:bg-blue-700 sm:w-auto"
              >
                무료 상담 신청하기
              </a>
              <a
                href="#services"
                className="w-full rounded-lg border border-gray-600 px-8 py-3.5 text-base font-medium text-gray-300 transition-colors hover:border-gray-500 hover:text-white sm:w-auto"
              >
                서비스 알아보기
              </a>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="scroll-mt-16 bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                전문 서비스
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                최신 기술과 축적된 경험으로 최적의 솔루션을 제공합니다
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="group rounded-2xl border border-gray-200 p-6 transition-all hover:border-blue-200 hover:shadow-lg hover:shadow-blue-50"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    {service.icon}
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-gray-900">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="scroll-mt-16 bg-gray-50 py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                프로젝트 진행 과정
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                체계적인 프로세스로 성공적인 프로젝트를 보장합니다
              </p>
            </div>
            <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {processSteps.map((item) => (
                <div key={item.step} className="flex gap-4">
                  <span className="text-3xl font-bold text-blue-200">{item.step}</span>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio */}
        <section id="portfolio" className="scroll-mt-16 bg-white py-24">
          <div className="mx-auto max-w-6xl px-6">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                프로젝트 사례
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                다양한 산업에서 성공적인 프로젝트를 수행했습니다
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-3">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className="group overflow-hidden rounded-2xl border border-gray-200 transition-all hover:shadow-lg"
                >
                  <div className={`h-48 bg-gradient-to-br ${item.gradient} p-6`}>
                    <span className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                      {item.category}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-600">{item.description}</p>
                    <p className="mt-3 text-sm font-medium text-blue-600">{item.result}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-700"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section
          id="contact"
          className="scroll-mt-16 bg-gradient-to-br from-blue-600 to-blue-800 py-24"
        >
          <div className="mx-auto max-w-3xl px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              프로젝트를 시작하세요
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-blue-100">
              아이디어가 있으신가요? 무료 상담을 통해 최적의 기술 방향을
              <br className="hidden sm:block" />
              함께 찾아보겠습니다.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href="mailto:contact@paperclip.dev"
                className="w-full rounded-lg bg-white px-8 py-3.5 text-base font-medium text-blue-700 shadow-lg transition-colors hover:bg-blue-50 sm:w-auto"
              >
                이메일 문의하기
              </a>
            </div>
            <p className="mt-6 text-sm text-blue-200">
              contact@paperclip.dev · 평일 10:00–18:00 응답
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div>
              <a href="#" className="text-lg font-bold text-white">
                Paperclip<span className="text-blue-400">Dev</span>
              </a>
              <p className="mt-1 text-sm text-gray-400">
                비즈니스 성장을 이끄는 외주개발 전문 파트너
              </p>
            </div>
            <nav>
              <ul className="flex gap-6">
                <li>
                  <a
                    href="#services"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    서비스
                  </a>
                </li>
                <li>
                  <a
                    href="#process"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    진행 과정
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    포트폴리오
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-sm text-gray-400 transition-colors hover:text-white"
                  >
                    문의하기
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} PaperclipDev. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
