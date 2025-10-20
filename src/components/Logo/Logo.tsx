// lib/ui/components/logo.tsx
import React from 'react'
// Dark variants
import LogoDark1 from "../../assets/dark_1.svg"
import LogoDark2 from "../../assets/dark_2.svg"
import LogoDark3 from "../../assets/dark_3.svg"
import LogoDark4 from "../../assets/dark_4.svg"
// Light variants
import LogoLight1 from "../../assets/light_1.svg"
import LogoLight2 from "../../assets/light_2.svg"
import LogoLight3 from "../../assets/light_3.svg"
import LogoLight4 from "../../assets/light_4.svg"

interface LogoProps {
  variant?: '1' | '2' | '3' | '4'
  theme?: 'dark' | 'light'
  width?: number | string
  height?: number | string
  className?: string
}

export default function Logo({ 
  variant = '1',
  theme = 'dark',
  width,
  height,
  className = '' 
}: LogoProps) {
  // Sélection du logo selon le variant et le thème
  const logos = {
    dark: {
      '1': LogoDark1,
      '2': LogoDark2,
      '3': LogoDark3,
      '4': LogoDark4,
    },
    light: {
      '1': LogoLight1,
      '2': LogoLight2,
      '3': LogoLight3,
      '4': LogoLight4,
    }
  }

  const logoSrc = logos[theme][variant]

  // Gestion des dimensions
  const getStyle = (): React.CSSProperties => {
    const style: React.CSSProperties = {}
    
    if (width) {
      style.width = typeof width === 'number' ? `${width}px` : width
      if (!height) {
        style.height = 'auto'
      }
    }
    
    if (height) {
      style.height = typeof height === 'number' ? `${height}px` : height
      if (!width) {
        style.width = 'auto'
      }
    }
    
    return style
  }

  // Si les SVG sont des composants React (avec SVGR)
  if (typeof logoSrc === 'function') {
    const LogoComponent = logoSrc as React.ComponentType<React.SVGProps<SVGSVGElement>>
    return (
      <LogoComponent 
        style={getStyle()}
        className={className}
        aria-label="Logo"
      />
    )
  }

  // Si les SVG sont des URLs (import par défaut)
  return (
    <img
      src={logoSrc as string}
      alt="Logo"
      style={getStyle()}
      className={className}
    />
  )
}