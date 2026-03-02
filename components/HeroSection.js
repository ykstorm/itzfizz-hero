'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import AnimatedHeadline from './AnimatedHeadline'
import Stats from './Stats'

export default function HeroSection() {
  const sectionRef   = useRef(null)
  const taglineRef   = useRef(null)
  const scrollHintRef = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {

      // tagline fades in after the headline letters finish
      gsap.from(taglineRef.current, {
        opacity: 0,
        y: 18,
        duration: 0.9,
        ease: 'power3.out',
        delay: 1.3,
      })

      // the little scroll arrow bounces up and down forever
      gsap.to(scrollHintRef.current, {
        y: 7,
        repeat: -1,
        yoyo: true,
        duration: 1.3,
        ease: 'power1.inOut',
        delay: 2.2,
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen px-6 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse at 50% 15%, #1c1005 0%, #0A0A0A 60%)',
      }}
    >
      {/* faint vertical grid lines in the background */}
      <div className="absolute inset-0 pointer-events-none" style={{ opacity: 0.035 }}>
        {[20, 40, 60, 80].map(p => (
          <div
            key={p}
            style={{
              position: 'absolute',
              top: 0, bottom: 0,
              left: `${p}%`,
              width: '1px',
              background: '#F5F0E8',
            }}
          />
        ))}
      </div>

      {/* warm glow at the top */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: '-8%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '700px',
          height: '420px',
          background: 'radial-gradient(ellipse, rgba(255,92,26,0.1) 0%, transparent 70%)',
          filter: 'blur(50px)',
        }}
      />

      {/* main content */}
      <div className="relative z-10 flex flex-col items-center text-center w-full" style={{ maxWidth: '1100px' }}>

        {/* badge at the top */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.25, 1, 0.35, 1] }}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 1rem',
            borderRadius: '999px',
            border: '1px solid rgba(255,92,26,0.28)',
            background: 'rgba(255,92,26,0.05)',
            marginBottom: '2.5rem',
          }}
        >
          <span
            style={{
              width: '6px', height: '6px',
              borderRadius: '50%',
              background: '#FF5C1A',
              boxShadow: '0 0 6px #FF5C1A',
              display: 'inline-block',
            }}
          />
          <span
            style={{
              fontSize: '0.7rem',
              fontWeight: 600,
              letterSpacing: '0.13em',
              color: 'rgba(245,240,232,0.65)',
              textTransform: 'uppercase',
            }}
          >
            Digital Agency
          </span>
        </motion.div>

        {/* headline letters */}
        <AnimatedHeadline />

        {/* tagline */}
        <p
          ref={taglineRef}
          style={{
            marginTop: '2rem',
            fontSize: 'clamp(0.95rem, 1.8vw, 1.1rem)',
            color: 'rgba(245,240,232,0.45)',
            letterSpacing: '0.02em',
            maxWidth: '440px',
            lineHeight: 1.75,
            willChange: 'transform, opacity',
          }}
        >
          We build brands that move people — and interfaces that move with them.
        </p>

        {/* buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 1.7, ease: [0.25, 1, 0.35, 1] }}
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center', marginTop: '2.5rem' }}
        >
          <button
            style={{
              padding: '0.7rem 1.8rem',
              background: '#FF5C1A',
              color: '#0A0A0A',
              fontWeight: 700,
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'transform 0.15s, opacity 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            See Our Work
          </button>

          <button
            style={{
              padding: '0.7rem 1.8rem',
              background: 'transparent',
              color: '#F5F0E8',
              fontWeight: 600,
              fontSize: '0.82rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              border: '1px solid rgba(245,240,232,0.18)',
              borderRadius: '4px',
              cursor: 'pointer',
              transition: 'border-color 0.15s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.5)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(245,240,232,0.18)'; e.currentTarget.style.transform = 'translateY(0)' }}
          >
            Get In Touch
          </button>
        </motion.div>

        {/* stats */}
        <Stats />
      </div>

      {/* scroll indicator */}
      <div
        ref={scrollHintRef}
        style={{
          position: 'absolute',
          bottom: '2rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '5px',
          opacity: 0.3,
          willChange: 'transform',
        }}
      >
        <span style={{ fontSize: '0.6rem', letterSpacing: '0.16em', color: '#F5F0E8', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{ width: '1px', height: '28px', background: 'linear-gradient(to bottom, #F5F0E8, transparent)' }} />
      </div>
    </section>
  )
}
