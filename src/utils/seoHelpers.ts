export function generateMetaDescription(text: string, maxLength: number = 155): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength - 3) + '...';
}

export function generatePageTitle(title: string, siteName: string = 'KINTO TYRES UK'): string {
  return title.includes(siteName) ? title : `${title} | ${siteName}`;
}

export function generateKeywords(keywords: string[]): string {
  return keywords.join(', ');
}

export function sanitizeUrl(url: string): string {
  return url.replace(/([^:]\/)\/+/g, '$1');
}