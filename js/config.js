/* =====================================================================
 * config.js — 사이트에 표시되는 "내용"만 모아둔 파일
 * ---------------------------------------------------------------------
 * ✅ 이 파일의 값만 바꾸면 Hero / About / Skills / Projects / Contact /
 *    Footer 의 내용이 모두 반영됩니다. (index.html, main.js 수정 불필요)
 * ✅ "TODO" 로 표시된 항목을 본인 정보로 교체하세요.
 * ===================================================================== */

const SITE_CONFIG = {
  /* ---------- 브라우저 탭 제목 / 검색 설명 ---------- */
  meta: {
    title: '홍길동 | Portfolio', // TODO
    description: '홍길동의 포트폴리오 웹사이트입니다.', // TODO
  },

  /* ---------- 네비게이션 로고 ---------- */
  nav: {
    logoText: 'Portfolio', // TODO
  },

  /* ---------- Hero (인사말, CTA 버튼) ---------- */
  hero: {
    greeting: '안녕하세요,', // TODO
    title: '홍길동입니다.', // TODO
    role: '웹 개발을 공부하고 있습니다.', // TODO: 타이핑 효과를 끄면 이 문구가 고정 표시됩니다
    // [BONUS 2] 타이핑 효과로 번갈아 표시할 문구 목록
    typingPhrases: [
      '첫 번째 소개 문구를 입력하세요.', // TODO
      '두 번째 소개 문구를 입력하세요.', // TODO
      '세 번째 소개 문구를 입력하세요.', // TODO
    ],
    description: '여기에 본인을 소개하는 한두 문장을 입력하세요.', // TODO
    primaryCta: { label: '프로젝트 보기', href: '#projects' },
    secondaryCta: { label: '문의하기', href: '#contact' },
  },

  /* ---------- About (자기소개, 프로필 이미지) ---------- */
  about: {
    lead: '어떤 사람인지 한 줄로 소개합니다.', // TODO
    image: {
      src: 'images/profile.svg', // TODO: images/ 폴더에 본인 사진을 넣고 경로 변경 (예: images/profile.jpg)
      alt: '홍길동의 프로필 사진', // TODO: 이미지 내용을 설명하는 문장
    },
    // 문단 1개 = 배열 요소 1개
    paragraphs: [
      '첫 번째 자기소개 문단을 입력하세요.', // TODO
      '두 번째 자기소개 문단을 입력하세요.', // TODO
    ],
    // 핵심 정보 (라벨 - 값)
    facts: [
      { label: '전공', value: '전공을 입력하세요' }, // TODO
      { label: '관심 분야', value: '관심 분야를 입력하세요' }, // TODO
      { label: '이메일', value: 'your@email.com' }, // TODO
    ],
  },

  /* ---------- Skills (기술 스택 목록) ---------- */
  skills: {
    lead: '사용할 수 있는 기술을 분야별로 정리했습니다.', // TODO
    // 카테고리 1개 = 카드 1개
    categories: [
      { category: 'Frontend', items: ['HTML', 'CSS', 'JavaScript'] }, // TODO
      { category: 'Data', items: ['Python', 'SQL'] }, // TODO
      { category: 'Tools', items: ['Git', 'GitHub', 'VS Code'] }, // TODO
    ],
  },

  /* ---------- Projects (GitHub API 연동) ---------- */
  projects: {
    lead: 'GitHub 저장소에서 실시간으로 불러온 프로젝트입니다.', // TODO
    githubUsername: 'ktheodoreyw',
    excludeForks: true, // true: fork 한 저장소는 목록에서 제외 (filter 활용)
    maxRepos: 12, // 화면에 표시할 최대 저장소 수
    sort: 'updated', // 정렬 기준: updated | created | pushed | full_name
  },

  /* ---------- Contact (문의 폼) ---------- */
  contact: {
    lead: '궁금한 점이 있다면 편하게 메시지를 남겨 주세요.', // TODO
    successMessage: '메시지를 보냈습니다. 확인 후 답장드리겠습니다.',
    // [BONUS 3] Formspree 엔드포인트. 비워 두면 실제 전송 없이 검증 + 성공 메시지까지만 동작합니다(기본 과제 범위).
    // 예: 'https://formspree.io/f/abcdwxyz'
    formspreeEndpoint: '', // TODO (선택)
  },

  /* ---------- Footer (저작권, 소셜 링크) ---------- */
  footer: {
    copyrightName: '홍길동', // TODO
    // iconClass 는 Font Awesome 클래스명 (https://fontawesome.com/search?o=r&m=free)
    socialLinks: [
      { label: 'GitHub', url: 'https://github.com/', iconClass: 'fa-brands fa-github' }, // TODO
      { label: 'LinkedIn', url: 'https://www.linkedin.com/', iconClass: 'fa-brands fa-linkedin' }, // TODO
    ],
  },

  /* ---------- 보너스 기능 ON/OFF ----------
   * false 로 바꾸면 해당 보너스 기능 없이 "기본 과제"만 동작합니다.
   * (평가 시 기본 과제와 보너스 과제를 구분해서 시연할 수 있습니다) */
  features: {
    languageFilter: true, // [BONUS 1] 언어별 프로젝트 필터링
    typingEffect: true, // [BONUS 2] Hero 타이핑 효과
    // [BONUS 3] 폼 실제 전송은 contact.formspreeEndpoint 입력 여부로 켜집니다
    systemTheme: true, // [BONUS 4] 시스템 다크 모드 감지
  },
};
