/* config.js: 웹 페이지에 표시되는 내용을 모아둔 파일 */

const SITE_CONFIG = {
  /* 브라우저 탭 제목 / 검색 설명 */
  meta: {
    title: '김영운 | Portfolio',
    description: '김영운의 포트폴리오 웹사이트입니다.', 
  },

  /* 네비게이션 */
  nav: {
    logoText: 'Portfolio',
  },

  /* Hero(인사말, CTA 버튼) */
  hero: {
    greeting: '환영합니다.',
    title: '김영운의 포트폴리오',
    role: '디지털 전환을 넘어, 실질적인 비즈니스 가치를 창출하는 AX 컨설턴트입니다.', 
    // [BONUS 2] 타이핑 효과로 번갈아 표시할 문구 목록
    typingPhrases: [
      'AX 컨설턴트', 
      'AI 서비스 기획자', 
      '마케팅 사이언티스트', 
    ],
    description: 'AX Consultant: Driving Business Value beyond Digital Transformation', 
    primaryCta: { label: '프로젝트 보기', href: '#projects' },
    secondaryCta: { label: '문의하기', href: '#contact' },
  },

  /* About(자기소개) */
  about: {
    lead: '디지털 전환을 넘어, 실질적인 비즈니스 가치를 창출하는 AX 컨설턴트',
    image: {
      src: 'images/김영운.jpg',
      alt: '프로필 사진', // 이미지 내용을 설명하는 문장
    },
    // 주요 경력
    paragraphs: [
      '직장 경력: Ernst & Young AI 컨설팅 팀 / KoDATA(한국평가데이터) 리서치 팀',
      '주요 프로젝트: 하나증권 옴니버스 계좌 타겟 MTS 개선/ BNK금융그룹 모바일 앱 리뷰 분석 시스템',
    ],
    // 핵심 정보
    facts: [
      { label: '학교', value: '경희대학교' },
      { label: '전공', value: '경영학, 수학, 한국어학' }, 
      { label: '관심 분야', value: 'Fin-Tech, Mobility, Smart City' }, 
      { label: '이메일', value: 'k.theodore.yw@gmail.com' }, 
    ],
  },

  /* Skills(기술 스택 목록) */
  skills: {
    lead: '사용할 수 있는 기술을 분야별로 정리했습니다.', 
    // 카테고리 1개 = 카드 1개
    categories: [
      { category: 'AI', items: ['RAG', 'Vision', 'NLP', 'Claude Code'] }, 
      { category: 'Data', items: ['Python', 'SQL', 'GIS', 'Tableau'] }, 
      { category: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Notion', 'Figma', 'MS Office'] }, 
    ],
  },

  /* Projects(GitHub API 연동) */
  projects: {
    lead: 'Codyssey 과정에서 수행한 프로젝트입니다.', 
    githubUsername: 'ktheodoreyw',
    excludeForks: true, // true: fork 한 저장소는 목록에서 제외
    maxRepos: 12, // 화면에 표시할 최대 저장소 수
    sort: 'updated', // 정렬 기준: updated | created | pushed | full_name
  },

  /* Contact(문의 폼) */
  contact: {
    lead: '궁금한 점이 있다면 편하게 메시지를 남겨 주세요.',
    successMessage: '메시지를 보냈습니다. 확인 후 답장드리겠습니다.',
    // [BONUS 3] Formspree 엔드포인트
    formspreeEndpoint: 'https://formspree.io/f/xrpbpaow',
  },

  /* Footer(저작권, 소셜 링크) */
  footer: {
    copyrightName: '김영운', 
    // iconClass 는 Font Awesome 클래스명(https://fontawesome.com/search?o=r&m=free)
    socialLinks: [
      { label: 'GitHub', url: 'https://github.com/ktheodoreyw', iconClass: 'fa-brands fa-github' },
      { label: 'LinkedIn', url: 'https://www.linkedin.com/in/yeong-woon-kim-86463a2a4/', iconClass: 'fa-brands fa-linkedin' },
    ],
  },

  /* 보너스 과제 ON/OFF */
  features: {
    languageFilter: true, // [BONUS 1] 언어별 프로젝트 필터링
    typingEffect: true, // [BONUS 2] Hero 타이핑 효과
    // [BONUS 3] 폼 실제 전송
    systemTheme: true, // [BONUS 4] 시스템 다크 모드 감지
  },
};
