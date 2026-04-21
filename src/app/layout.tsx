import type { Metadata } from "next";
import { Noto_Sans_KR } from "next/font/google";
import "./globals.css";

const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-noto-sans-kr",
  display: "swap",
});

const SITE_URL = "https://brand-blog-site.pages.dev";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "외주개발 전문 | 웹·모바일·클라우드 소프트웨어 개발 파트너 — PaperclipDev",
  description:
    "신뢰할 수 있는 외주개발 파트너. 웹 애플리케이션, 모바일 앱, 클라우드 인프라, AI 솔루션까지 — 비즈니스 성장을 이끄는 기술 파트너입니다. 무료 상담을 통해 프로젝트를 시작하세요.",
  keywords: [
    "외주개발",
    "소프트웨어 개발",
    "웹 개발",
    "모바일 앱 개발",
    "외주 개발 업체",
    "IT 외주",
    "앱 개발",
    "웹사이트 제작",
    "클라우드 개발",
    "AI 솔루션",
    "React 개발",
    "Next.js 개발",
  ],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE_URL,
    siteName: "PaperclipDev",
    title: "외주개발 전문 | 웹·모바일·클라우드 소프트웨어 개발 파트너",
    description:
      "신뢰할 수 있는 외주개발 파트너. 웹, 모바일, 클라우드, AI까지 — 비즈니스 성장을 이끄는 기술 파트너입니다.",
  },
  twitter: {
    card: "summary_large_image",
    title: "외주개발 전문 | PaperclipDev",
    description: "웹, 모바일, 클라우드, AI — 비즈니스 성장을 이끄는 외주개발 전문 파트너.",
  },
  alternates: {
    canonical: SITE_URL,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        name: "PaperclipDev",
        url: SITE_URL,
        description: "웹, 모바일, 클라우드, AI 소프트웨어 외주개발 전문 파트너",
        contactPoint: {
          "@type": "ContactPoint",
          email: "contact@paperclip.dev",
          contactType: "sales",
          availableLanguage: ["Korean", "English"],
        },
      },
      {
        "@type": "WebSite",
        url: SITE_URL,
        name: "PaperclipDev",
        inLanguage: "ko",
      },
      {
        "@type": "ProfessionalService",
        name: "PaperclipDev",
        url: SITE_URL,
        description: "외주개발 전문 소프트웨어 개발 서비스 — 웹, 모바일, 클라우드, AI",
        areaServed: {
          "@type": "Country",
          name: "South Korea",
        },
        serviceType: [
          "웹 애플리케이션 개발",
          "모바일 앱 개발",
          "클라우드 인프라 구축",
          "AI 솔루션 개발",
        ],
      },
    ],
  };

  return (
    <html lang="ko">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${notoSansKR.variable} antialiased`}>{children}</body>
    </html>
  );
}
