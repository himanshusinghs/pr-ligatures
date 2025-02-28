(function() {
  const link = document.createElement('link');
  link.href = 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap';
  link.rel = 'stylesheet';
  document.head.appendChild(link);

  function isPullRequestPage() {
    return window.location.pathname.includes('/pull/') || 
           window.location.pathname.includes('/compare/') || 
           document.querySelector('.pull-request') !== null;
  }

  function applyLigaturesToNewElements() {
    if (!isPullRequestPage()) return;
    
    const codeBlocks = document.querySelectorAll('pre:not([data-ligatures-applied]), code:not([data-ligatures-applied])');
    codeBlocks.forEach(block => {
      block.dataset.ligaturesApplied = 'true';
    });
  }

  applyLigaturesToNewElements();

  const observer = new MutationObserver(mutations => {
    for (const mutation of mutations) {
      if (mutation.addedNodes.length) {
        applyLigaturesToNewElements();
      }
    }
  });

  observer.observe(document.body, { childList: true, subtree: true });
})();