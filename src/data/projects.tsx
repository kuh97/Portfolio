import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "No Code / Low Code 백엔드 개발 스튜디오",
    descriptions: [
      "비즈니스 요구 사항에 맞춰 Java 기반 백엔드 서비스 코드를 자동으로 생성할 수 있는 No Code / Low Code 플랫폼",
      "비개발자도 손쉽게 API를 설계 & 생성할 수 있도록 직관적인 UI/UX와 코드 자동화 기능을 제공",
    ],
    technologies: [
      "JavaScript(ES6+)",
      "TypeScript",
      "React",
      "MobX",
      "Sass",
      "React Dnd",
      "Java",
      "FreeMarker",
      "Tibero",
      "Figma",
      "Slack",
      "Google Sheet",
    ],
    period: "2022.09 ~ 2024.11",
    tasks: [
      {
        id: "1",
        title: "No Code Select 서비스 기능 개발",
        issue:
          "비개발자가 SQL 지식 없이 데이터 조회 API를 생성하는 과정이 복잡해 효율적인 파이프라인이 필요했음",
        solutions: [
          "Drag & Drop 기반 UI로 테이블 선택 및 관계 자동 분석 UX 설계",
          "선택된 테이블 컬럼 기반 OutDTO 자동 매핑 시스템 구현",
          "조건 및 부가 설정 시 컬럼명/연산자 자동 제안 기능 개발",
          "자체 개발한 SQL Generator와 FreeMarker를 활용한 동적 쿼리 및 Java 코드 생성",
        ],
        achievements: ["평균 10분 내에 Select API를 손쉽게 생성하는 기능 제공"],
      },
      {
        id: "2",
        title: "리스트 순서 변경 UX 개선",
        issue: "버튼 기반 순서 변경 방식이 직관성이 부족해 VOC가 지속 발생",
        solutions: [
          "React DnD 라이브러리를 적용하여 Drag & Drop 방식으로 개선",
          "GPU 가속 및 CSS 트랜지션을 통한 부드러운 이동 효과 구현",
          "React.memo, useCallback으로 불필요한 렌더링 최소화",
        ],
        achievements: [
          "사용자 만족도 설문 90% 이상 긍정적 피드백",
          "VOC 감소 및 직관적인 리스트 관리 UX 제공",
        ],
      },
      {
        id: "3",
        title: "중앙 집중식 다이얼로그 관리 시스템",
        issue:
          "프로젝트 규모가 커지면서 다이얼로그 관리가 컴포넌트별 분산되어 타입 오류와 유지보수 비용 증가",
        solutions: [
          "as const + typeof를 활용한 타입 기반 다이얼로그 정의",
          "MobX 전역 관리로 다이얼로그 상태를 한 곳에서 제어",
          "조건부 렌더링으로 다이얼로그 통합 관리 컴포넌트 구현",
        ],
        achievements: [
          "20개 이상 다이얼로그를 단일 컴포넌트로 관리",
          "런타임 오류 대폭 감소 및 유지보수성 향상",
        ],
      },
      {
        id: "4",
        title: "서비스 등록 및 메시지 핸들링 시스템 개선",
        issue:
          "서비스 등록 및 메시지 핸들링 로직이 분산되어 있어 신규 서비스 추가 시 코드 누락이 자주 발생했고, 이로 인해 런타임에 명확한 오류 없이 기능이 제대로 동작하지 않아 디버깅에 오랜 시간이 소요",
        solutions: [
          "기존 Map 기반 양방향 매핑 구조를 도메인별 객체 기반 서비스 관리 구조로 개선",
          "Object.keys 기반 자동 매핑 구조를 설계하여, 핸들러 등록 과정을 코드 1줄로 단순화",
          "핸들러 누락 시 컴파일 타임 오류를 강제하는 타입 유틸리티 구현",
        ],
        achievements: [
          "디버깅 시간 90% 이상 단축",
          "신규 서비스 추가 작업 시간 대폭 감소 및 코드의 안정성 확보",
        ],
      },
      {
        id: "5",
        title: "React 순환 의존성 문제 해결",
        issue:
          "컴포넌트 구조가 복잡해지면서 순환 의존성 문제가 반복적으로 발생했고, 이로 인해 빌드 및 런타임 오류가 자주 발생",
        solutions: [
          "컴포넌트간 직접 import를 제거하고, Props 주입 방식으로 전환하여 결합를 최소화",
          "타입/유틸리티/상수 등의 공통 요소를 별로 모듈로 분리하여 구조 개선",
        ],
        achievements: [
          "빌드 및 런타임 오류 제거",
          "테스트 코드 작성 용이성과 코드 가독성 향상",
        ],
      },
    ],
  },
  {
    id: "2",
    title: "RDBMS 기반 데이터 모델링 설계 플랫폼 (ERD Tool)",
    descriptions: [
      "데이터베이스 테이블 및 컬럼을 설계하고 시각적으로 ERD를 표현할 수 있는 플랫폼",
      "실시간 협업과 데이터 마이그레이션 기능을 제공하여 개발 생산성을 높임",
    ],
    technologies: [
      "JavaScript(ES6+)",
      "TypeScript",
      "React",
      "React Flow",
      "MobX",
      "Sass",
      "Java",
      "Jest",
      "React Testing Library",
      "Figma",
      "Slack",
    ],
    period: "2022.02 ~ 2022.09",
    tasks: [
      {
        id: "1",
        title: "공통 컴포넌트 개발",
        issue:
          "UI 일관성 부족 및 낮은 개발 효율성 문제로 재사용 가능한 UI 컴포넌트 필요",
        solutions: [
          "Figma를 통해 디자이너와 협업하여 다양한 화면에서 공통적으로 사용되는 UI를 재사용 가능한 공통 컴포넌트로 추상화",
          "Props 기반 유연한 동작 정의 및 스타일 확장성 확보",
        ],
        achievements: [
          "UI 일관성 확보 및 사용자 경험(UX) 개선",
          "팀 내 개발 생산성 및 유지보수성 향상",
        ],
      },
      {
        id: "2",
        title: "테스트 코드 도입",
        issue: "코드 품질 향상 및 버그 사전 방지를 위한 테스트 환경 구축 필요",
        solutions: [
          "Jest + React Testing Library 기반 단위 테스트 환경 구축",
          "pre-push 훅 설정을 통해 Git push 시 자동 테스트 실행",
        ],
        achievements: [
          "코드 품질 및 안정성 향상",
          "TDD(Test Driven Development)의 중요성 인식 및 점진적으로 반영",
        ],
      },
      {
        id: "3",
        title: "ERD 툴 편집 모드 개발",
        issue: "생성/읽기 전용 구조로 협업 편집 기능 부족",
        solutions: [
          "UX 일관성 확보와 컴포넌트 재사용을 위해 테이블 생성 및 편집 기능을 하나의 컴포넌트로 통합하여 리팩토링",
          "React Flow 노드 더블클릭 기반 편집 모드 진입 기능 추가",
          "Deep Copy 메서드로 데이터 무결성 보장",
        ],
        achievements: [
          "실시간 협업 편집 기능 제공",
          "UI/UX 일관성 강화 및 사용자 경험(UX) 개선",
        ],
      },
      {
        id: "4",
        title: "데이터 마이그레이션 및 플랫폼 통합 기능",
        issue: "Tibero DB 데이터를 자사 플랫폼 DB 스키마로 이관 필요",
        solutions: [
          "ETL 프로세스를 구축하여 메타데이터 추출 및 변환 저장",
          "ERD 시각화를 위한 위치 정보까지 함께 저장",
        ],
        achievements: [
          "데이터 이전 시간 80% 이상 단축",
          "Tibero 기반 개발자의 학습 비용 최소화",
        ],
      },
    ],
  },
  // {
  //   id: "2",
  //   title: "RDBMS 기반 데이터 모델링 설계 플랫폼",
  //   description:
  //     "데이터베이스 테이블과 컬럼을 설계하고 이를 기반으로 데이터베이스 구조를 시각적으로 확인할 수 있는 플랫폼입니다.",
  //   technologies: [
  //     "React",
  //     "JavaScript(ES6+)",
  //     "TypeScript",
  //     "MobX",
  //     "React Flow",
  //     "Jest",
  //     "React Testing Library",
  //     "Tibero",
  //     "Java",
  //     "Figma",
  //     "Slack",
  //   ],
  // },
  // {
  //   id: "3",
  //   title: "프로젝트 관리 시스템",
  //   description:
  //     "프로젝트를 관리할 수 있는 시스템입니다. Jira의 기능을 참고하여 개발했습니다.",
  //   technologies: [
  //     "React",
  //     "JavaScript(ES6+)",
  //     "TypeScript",
  //     "Zustand",
  //     "Tailwind CSS",
  //     "Google oauth",
  //     "react query",
  //     "tanstack query",
  //     "vite",
  //     "mongodb",
  //   ],
  //   githubUrl: "https://github.com/kuh97/task-flow",
  // },
  // {
  //   id: "4",
  //   title: "포트폴리오 웹사이트",
  //   description: "Next.js 기반으로 만든 포트폴리오 웹 사이트입니다.",
  //   technologies: [
  //     "Next.js",
  //     "TypeScript",
  //     "Tailwind CSS",
  //     "React",
  //     "Framer Motion",
  //     "React Intersection Observer",
  //     "Vercel",
  //     "Google Analytics",
  //   ],
  //   image: "/profile.jpg",
  //   githubUrl: "https://github.com/kuh97/Portfolio",
  // },
];
