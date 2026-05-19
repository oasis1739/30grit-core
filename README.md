# 30GRIT: CORE

> **30일이면 습관이 된다.**
> 30일 코어 챌린지 PWA — 하루 5~15분, 30일 뒤 멈출 수 없는 몸.

## 🔥 핵심 기능
- 30일 점진적 코어 프로그램 (입문/표준/하드코어 3단계)
- 인터벌 타이머 (30초 운동 + 10초 휴식)
- 본인 사진 업로드 + 10가지 힙한 인증 오버레이 (Strava / Nike / Samsung / TikTok 등)
- 진척 캘린더 + 연속일 + 누적 통계
- 30일 1사이클 완주 후 재결제 모델 (₩4,900)
- 3사이클(90일) 완주 시 평생이용권 무료
- PWA 지원 (홈화면 설치, 오프라인 동작, 푸시 알림)
- 앱 잠금 + 대시보드 위젯 설정

## 🛠️ 기술 스택
- **Frontend**: 단일 HTML + Vanilla JS + CSS (의존성 최소)
- **PWA**: Manifest + Service Worker
- **공유**: html2canvas + Web Share API
- **저장**: LocalStorage
- **호스팅**: Vercel
- **결제 (예정)**: Stripe / 토스페이먼츠

## 📁 파일 구조
```
30GRIT/
├── index.html          메인 앱 (모든 화면 통합)
├── manifest.json       PWA 매니페스트
├── service-worker.js   오프라인 + 캐싱
├── icon.svg            브랜드 아이콘
└── README.md
```

## 🚀 로컬 실행
```powershell
cd 30GRIT
python -m http.server 8000
# 또는: npx serve
```
브라우저: `http://localhost:8000`

## 📱 폰 테스트
1. 같은 WiFi에서 PC IP 확인 후 `http://192.168.x.x:8000` 접속
2. 또는 Vercel 배포 URL 사용

## 🗺️ 로드맵
- [x] MVP — 30일 코어 프로그램 + 타이머 + 진척
- [x] 사진 업로드 + 10종 인증 오버레이
- [x] PWA (오프라인, 홈화면 설치)
- [ ] html2canvas 실 공유 동작
- [ ] Stripe/토스 결제 연동
- [ ] 푸시 알림 스케줄
- [ ] 30GRIT: BACK (허리 통증 시리즈 2번째)
- [ ] 30GRIT: PUSH (푸쉬업 100 시리즈 3번째)
- [ ] Capacitor 래핑 → iOS/Android 앱스토어 출시

## 📜 슬로건
> "21일이면 익숙해지고, 30일이면 습관이 된다."

---
© 2026 30GRIT
