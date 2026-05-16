/* ============================================================
 *  CONFIG  ·  인생자동화 시스템
 *  환경별 설정값을 모아둠. API URL, 새로고침 주기 등.
 *  ※ 이 파일은 GitHub에 그대로 올라가도 무방한 정보만 담는다.
 *    (Apps Script URL은 액세스 권한이 'Anyone'이라도 데이터만 읽기 전용)
 * ============================================================ */

window.CONFIG = {

  /* ─── 데이터 엔드포인트 ─────────────────────────── */
  endpoints: {
    cashflow: 'https://script.google.com/macros/s/AKfycbykIYKa9oA13CtAXxmFCNruZMHstBzyPn2mruWg26DhBjFbJ2SG_qxpcb6kOWbHdTS1PQ/exec',
    // portfolio: '',
    // macro: '',
    // realestate: '',
  },

  /* ─── 자동 새로고침 (ms) — null이면 안 함 ─────── */
  autoRefreshMs: null,

  /* ─── 통화 설정 ─────────────────────────────────── */
  locale: 'ko-KR',
  currency: 'KRW',

  /* ─── 디버그 ─────────────────────────────────────── */
  debug: false,
};
