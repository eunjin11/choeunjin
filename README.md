# choeunjin

조은진의 세계 정복 기록을 남기는 블로그

## 시작하기

Node.js 24 이상과 Yarn 4가 필요해요. Yarn은 Corepack으로 켤 수 있어요.

```sh
nvm use          # .nvmrc의 Node 버전 사용
corepack enable  # package.json에 적힌 Yarn 버전 사용
yarn install
yarn dev         # http://localhost:4321
```

## 명령어

| 명령어              | 하는 일                                          |
| :------------------ | :----------------------------------------------- |
| `yarn dev`          | 로컬 개발 서버 실행 (`localhost:4321`)           |
| `yarn build`        | 배포용 사이트를 `./dist/`에 빌드                 |
| `yarn preview`      | 빌드 결과를 로컬에서 미리 보기                   |
| `yarn preview:cf`   | 빌드 후 Cloudflare와 같은 환경으로 로컬 실행     |
| `yarn lint`         | oxlint로 린트 (경고도 실패로 처리)               |
| `yarn typecheck`    | TypeScript 7로 `.ts` 파일 타입 검사              |
| `yarn format`       | Prettier로 전체 파일 포매팅                      |
| `yarn format:check` | 포매팅이 안 된 파일이 있는지 검사 (수정은 안 함) |
| `yarn astro ...`    | Astro CLI 실행 (`astro add` 등)                  |

VS Code에서 추천 확장(Astro, Prettier, Oxc)을 설치하면 저장할 때 자동으로 포매팅되고 린트 결과가 에디터에 바로 표시돼요.

`.astro` 파일은 oxlint가 frontmatter와 `<script>` 안의 코드만 검사하고, `tsc`는 검사하지 않아요. 템플릿 쪽 타입 오류는 VS Code의 Astro 확장이 에디터에서 보여줘요.

## 글 쓰기

`src/content/blog/`에 마크다운(`.md`) 파일을 추가

```md
---
title: 글 제목
description: 목록과 링크 미리보기에 나오는 한 줄 설명
date: 2026-11-18
tags: [lynx, react]
draft: false # true면 목록에서 숨겨져요
---

본문 작성
```

## 페이지

| 주소              | 파일                             | 내용           |
| :---------------- | :------------------------------- | :------------- |
| `/`               | `src/pages/index.astro`          | 블로그 글 목록 |
| `/blog/[글이름]/` | `src/pages/blog/[...slug].astro` | 글 상세        |
| `/about/`         | `src/pages/about.astro`          | 소개           |
| 없는 주소         | `src/pages/404.astro`            | 404 페이지     |

## 배포

Cloudflare Workers에 정적 사이트로 배포해요. 설정은 `wrangler.jsonc`에 있어요.

- Cloudflare 대시보드에서 이 레포를 연결해 두면 `main`에 push할 때마다 자동으로 배포돼요.
- 빌드 명령어는 `yarn build`, 배포 명령어는 `npx wrangler deploy`예요.
- 다른 브랜치에 push하면 미리보기 URL이 따로 생겨요.

## 프로젝트 구조

```text
/
├── public/                  # 정적 파일 (프로필 사진, 파비콘)
├── src/
│   ├── content/blog/        # 블로그 글 (마크다운)
│   ├── content.config.ts    # 글 frontmatter 스키마
│   ├── layouts/             # 공통 레이아웃 (헤더, 푸터, 메타 태그)
│   ├── lib/                 # 글 목록 정렬, 날짜 포맷
│   ├── pages/               # 페이지 (파일 경로 = URL)
│   └── styles/global.css    # 색상, 폰트 크기 토큰, 기본 스타일
├── astro.config.mjs
└── wrangler.jsonc           # Cloudflare 배포 설정
```
