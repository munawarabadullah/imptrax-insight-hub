// Browser and device detection utilities
export const getBrowserInfo = () => {
  const userAgent = navigator.userAgent;
  
  // Browser detection
  let browser = 'Unknown';
  let version = 'Unknown';
  
  if (userAgent.includes('Chrome') && !userAgent.includes('Edg')) {
    browser = 'Chrome';
    const match = userAgent.match(/Chrome\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.includes('Firefox')) {
    browser = 'Firefox';
    const match = userAgent.match(/Firefox\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.includes('Safari') && !userAgent.includes('Chrome')) {
    browser = 'Safari';
    const match = userAgent.match(/Version\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  } else if (userAgent.includes('Edg')) {
    browser = 'Edge';
    const match = userAgent.match(/Edg\/(\d+)/);
    version = match ? match[1] : 'Unknown';
  }
  
  // OS detection
  let os = 'Unknown';
  if (userAgent.includes('Windows')) os = 'Windows';
  else if (userAgent.includes('Mac')) os = 'macOS';
  else if (userAgent.includes('Linux')) os = 'Linux';
  else if (userAgent.includes('Android')) os = 'Android';
  else if (userAgent.includes('iOS')) os = 'iOS';
  
  return {
    browser,
    version,
    os,
    userAgent,
    language: navigator.language,
    platform: navigator.platform,
    cookieEnabled: navigator.cookieEnabled,
    onLine: navigator.onLine
  };
};

export const getScreenInfo = () => {
  return {
    screenWidth: screen.width,
    screenHeight: screen.height,
    availWidth: screen.availWidth,
    availHeight: screen.availHeight,
    colorDepth: screen.colorDepth,
    pixelDepth: screen.pixelDepth,
    windowWidth: window.innerWidth,
    windowHeight: window.innerHeight,
    devicePixelRatio: window.devicePixelRatio || 1
  };
};

export const getTimezoneInfo = () => {
  const now = new Date();
  return {
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    timezoneOffset: now.getTimezoneOffset(),
    locale: Intl.DateTimeFormat().resolvedOptions().locale,
    timestamp: now.toISOString(),
    localTime: now.toLocaleString()
  };
};

export const getReferralInfo = () => {
  const urlParams = new URLSearchParams(window.location.search);
  
  return {
    referrer: document.referrer || 'Direct',
    currentUrl: window.location.href,
    pathname: window.location.pathname,
    source: urlParams.get('source') || urlParams.get('utm_source') || 'Direct',
    medium: urlParams.get('utm_medium') || 'Unknown',
    campaign: urlParams.get('utm_campaign') || 'Unknown',
    term: urlParams.get('utm_term') || 'Unknown',
    content: urlParams.get('utm_content') || 'Unknown'
  };
};

export const getSessionInfo = () => {
  const sessionStart = sessionStorage.getItem('sessionStart');
  const startTime = sessionStart ? parseInt(sessionStart) : Date.now();
  
  if (!sessionStart) {
    sessionStorage.setItem('sessionStart', startTime.toString());
  }
  
  return {
    sessionId: `session_${startTime}_${Math.random().toString(36).substr(2, 9)}`,
    sessionStart: startTime,
    sessionDuration: Date.now() - startTime,
    pageViews: parseInt(sessionStorage.getItem('pageViews') || '1'),
    isNewSession: !sessionStart
  };
};

// Mock IP-based location (in production, this would be server-side)
export const getLocationInfo = async () => {
  // Mock data - in production, use server-side IP geolocation
  return {
    ip: '192.168.1.1', // This would come from server
    city: 'New York',
    state: 'NY',
    country: 'United States',
    countryCode: 'US',
    latitude: 40.7128,
    longitude: -74.0060,
    isp: 'Mock ISP',
    organization: 'Mock Organization'
  };
};

export const getComprehensiveTrackingData = async () => {
  const [locationInfo] = await Promise.all([
    getLocationInfo()
  ]);
  
  return {
    browser: getBrowserInfo(),
    screen: getScreenInfo(),
    timezone: getTimezoneInfo(),
    referral: getReferralInfo(),
    session: getSessionInfo(),
    location: locationInfo,
    timestamp: new Date().toISOString()
  };
};