import { NextResponse, NextRequest } from 'next/server'
import { AnalyticsCollector } from '@/lib/analytics'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
  const response = NextResponse.next()
  
  // Skip analytics for API routes, static files, and admin routes
  if (
    request.nextUrl.pathname.startsWith('/api') ||
    request.nextUrl.pathname.startsWith('/_next') ||
    request.nextUrl.pathname.startsWith('/admin') ||
    request.nextUrl.pathname.includes('.') // Skip files with extensions
  ) {
    return response
  }

  try {
    // Collect visitor data
    const ipAddress = AnalyticsCollector.getClientIP(request)
    const userAgent = request.headers.get('user-agent') || 'Unknown'
    const acceptLanguage = request.headers.get('accept-language')
    const referrer = request.headers.get('referer') || undefined
    
    // Generate fingerprint
    const fingerprint = AnalyticsCollector.generateFingerprint(userAgent, acceptLanguage || undefined)
    
    // Parse user agent
    const { browser, os, device } = AnalyticsCollector.parseUserAgent(userAgent)
    
    // Parse UTM parameters
    const utmParams = AnalyticsCollector.parseUTMParams(request.url)
    
    // Set analytics cookies/headers for client-side tracking
    response.headers.set('x-visitor-ip', ipAddress)
    response.headers.set('x-visitor-fingerprint', fingerprint)
    
    // Store analytics data in headers for API route processing
    response.headers.set('x-analytics-data', JSON.stringify({
      ipAddress,
      userAgent,
      fingerprint,
      browser,
      os,
      device,
      referrer,
      utmParams,
      path: request.nextUrl.pathname,
      timestamp: new Date().toISOString(),
    }))
    
  } catch (error) {
    console.error('Analytics middleware error:', error)
  }
  
  return response
}
 
export const config = {
  matcher: '/((?!api/analytics|_next|favicon.ico|.*\\..*).*)',
}
