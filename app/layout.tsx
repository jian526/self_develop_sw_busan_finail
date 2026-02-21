import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://self-develop-sw-busan-finail.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "무인점포 이상행동 감지 서비스",
    template: "%s - sw",
  },
  description:
    "본 프로젝트는 무인점포 내 CCTV 영상을 실시간으로 분석하여 고객의 이상행동을 탐지하고,이를 보안 관리자에게 즉시 알림으로 전달하는 AI 기반 보안 시스템을 구축하는 것을 목표로 합니다",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
