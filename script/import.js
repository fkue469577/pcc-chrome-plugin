const script = document.createElement('script');
script.setAttribute('type', 'text/javascript');
script.setAttribute('src', chrome.runtime.getURL('module/intercept/forward.js'));
document.documentElement.appendChild(script);




