/* ============================================================
 *  CONFIG  ·  인생자동화 시스템
 *  ※ GitHub에 올라가도 무방한 정보만. 시크릿은 localStorage에서 관리.
 * ============================================================ */

window.CONFIG = {

  /* ─── 데이터 엔드포인트 ─────────────────────────── */
  endpoints: {
    cashflow: 'https://script.google.com/macros/s/AKfycbygxvmpQVFETTLHPwtjY2Uh0vYaMVIkfTTM9HU9yb5mT3ggAy-6ETd_tivaLjsmy9qTnw/exec',
  },

  /* ─── 자동 새로고침 (ms) — null이면 안 함 ─────── */
  autoRefreshMs: null,

  /* ─── 통화 / 로케일 ─────────────────────────── */
  locale: 'ko-KR',
  currency: 'KRW',

  /* ─── 디버그 ─────────────────────────────────── */
  debug: false,
};

/* ============================================================
 *  WRITE SECRET 관리 (거래 입력 인증)
 *  - localStorage에 저장됨 (브라우저별)
 *  - 첫 입력 시 prompt로 받음
 *  - "초기화" 버튼으로 재입력 가능
 * ============================================================ */
window.SecretManager = {
  KEY: 'whooing_write_secret',

  get() {
    return localStorage.getItem(this.KEY);
  },

  set(value) {
    localStorage.setItem(this.KEY, value);
  },

  clear() {
    localStorage.removeItem(this.KEY);
  },

  ensure() {
    let s = this.get();
    if (!s) {
      s = prompt('거래 입력용 시크릿을 한 번만 입력해주세요\n(Apps Script generateWriteSecret 실행해서 받은 값)');
      if (!s) return null;
      s = s.trim();
      this.set(s);
    }
    return s;
  }
};
