'use client'

import React from 'react'
import { useAnalytics } from '@/app/(analytics)/_hooks/use-analytics'

interface AnalyticsProviderProps {
  children: React.ReactNode
}

export function AnalyticsProvider({ children }: AnalyticsProviderProps) {
  // This will automatically track page views and sessions
  useAnalytics()
  
  return <>{children}</>
}

// Component to track specific events
export function AnalyticsTracker() {
  const { trackEvent } = useAnalytics()

  const sanitizeText = (text?: string | null) => {
    if (!text) return 'unknown'
    return text.replace(/[<>]/g, '').trim().slice(0, 120) || 'unknown'
  }

  // Auto-track common events
  React.useEffect(() => {
    // Track external link clicks
    const handleExternalLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement | null
      if (link?.href && !link.href.includes(window.location.hostname)) {
        const linkText = sanitizeText(link.textContent)
        trackEvent('click', 'external_link', link.href, { url: link.href, text: linkText })
      }
    }

    // Track download clicks
    const handleDownloadClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href]') as HTMLAnchorElement | null
      if (link?.href) {
        const url = link.href
        const fileExtensions = ['.pdf', '.doc', '.docx', '.zip', '.exe', '.dmg', '.apk']
        const isDownload = fileExtensions.some(ext => url.toLowerCase().includes(ext))
        
        if (isDownload) {
          const fileName = url.split('/').pop() || 'unknown'
          trackEvent('download', 'file_download', fileName, { url, fileName })
        }
      }
    }

    // Track button clicks
    const handleButtonClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (target.tagName === 'BUTTON' || target.closest('button')) {
        const button = target.tagName === 'BUTTON' ? target : target.closest('button')
        const buttonText = sanitizeText(button?.textContent)
        const buttonId = button?.id || undefined
        const buttonClass = button?.className || undefined
        
        trackEvent('click', 'button_click', buttonText, { 
          text: buttonText, 
          id: buttonId, 
          className: buttonClass 
        })
      }
    }

    document.addEventListener('click', handleExternalLinkClick)
    document.addEventListener('click', handleDownloadClick)
    document.addEventListener('click', handleButtonClick)

    return () => {
      document.removeEventListener('click', handleExternalLinkClick)
      document.removeEventListener('click', handleDownloadClick)
      document.removeEventListener('click', handleButtonClick)
    }
  }, [trackEvent])

  return null // This component doesn't render anything
}
