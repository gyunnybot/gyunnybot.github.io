document.addEventListener("DOMContentLoaded", () => {
  // 사이드바 안의 모든 링크 중 외부 링크만 새 탭
  const links = document.querySelectorAll(".sidebar a[href]");

  links.forEach((a) => {
    const href = a.getAttribute("href") || "";
    if (!/^https?:\/\//i.test(href)) return; // http(s)만

    // 내 사이트 도메인은 제외
    try {
      const url = new URL(a.href);
      if (url.host === window.location.host) return;
    } catch {
      return;
    }

    a.target = "_blank";
    a.rel = "noopener noreferrer";
  });
});
