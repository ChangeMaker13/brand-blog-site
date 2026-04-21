import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "외주개발 전문 | 소프트웨어 개발 파트너",
  description:
    "신뢰할 수 있는 외주개발 파트너. 웹, 모바일, 클라우드 서비스 등 다양한 소프트웨어 개발 프로젝트를 전문적으로 수행합니다.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="antialiased">{children}</body>
    </html>
  );
}
