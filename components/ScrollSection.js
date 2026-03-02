'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  { num: '01', name: 'Brandform',   tag: 'Identity + Web',   year: '2024' },
  { num: '02', name: 'Velora Co.',  tag: 'UI/UX + Motion',   year: '2024' },
  { num: '03', name: 'Hyper Civic', tag: 'Campaign + Brand', year: '2023' },
]

export default function ScrollSection() {
  const sectionRef  = useRef(null)
  const headingRef  = useRef(null)
  const visualRef   = useRef(null)
  const listRef     = useRef(null)

  useEffect(() => {
    if (!sectionRef.current) return

    const ctx = gsap.context(() => {

      // heading moves up slightly slower than scroll — creates a parallax depth feel
      gsap.to(headingRef.current, {
        y: -60,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      })

      // orange card slides in from the left as you scroll down to this section
      // scrub: 1.5 means there's a slight lag — makes it feel weighty
      gsap.fromTo(
        visualRef.current,
        { x: -80, opacity: 0, scale: 0.92 },
        {
          x: 0, opacity: 1, scale: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 78%',
            end: 'top 30%',
            scrub: 1.5,
          },
        }
      )

      // project list items slide in one by one
      const items = listRef.current?.querySelectorAll('.project-row')
      if (items) {
        gsap.from(items, {
          opacity: 0,
          x: 30,
          duration: 0.7,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: listRef.current,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        })
      }

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative px-6 md:px-16 overflow-hidden"
      style={{ background: '#0A0A0A', minHeight: '100vh', display: 'flex', alignItems: 'center' }}
    >
      {/* top border */}
      <div
        style={{
          position: 'absolute',
          top: 0, left: '4%', right: '4%',
          height: '1px',
          background: 'rgba(245,240,232,0.05)',
        }}
      />

      <div
        className="relative z-10 w-full grid md:grid-cols-2 gap-16 items-center"
        style={{ maxWidth: '1100px', margin: '0 auto', padding: '6rem 0' }}
      >

        {/* LEFT side — text + project list */}
        <div>
          <h2
            ref={headingRef}
            style={{
              fontSize: 'clamp(2.6rem, 5vw, 4.8rem)',
              fontWeight: 800,
              color: '#F5F0E8',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              willChange: 'transform',
            }}
          >
            Work that<br />
            <span style={{ color: '#FF5C1A' }}>speaks</span><br />
            for itself.
          </h2>

          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1rem',
              color: 'rgba(245,240,232,0.42)',
              lineHeight: 1.78,
              maxWidth: '370px',
            }}
          >
            Every brand is a story. We find the core of it and build the
            experience around that single, honest truth.
          </p>

          {/* project rows */}
          <div ref={listRef} style={{ marginTop: '3rem' }}>
            {projects.map(p => (
              <div
                key={p.num}
                className="project-row"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '1.1rem 0',
                  borderBottom: '1px solid rgba(245,240,232,0.06)',
                  cursor: 'pointer',
                  willChange: 'transform, opacity',
                }}
              >
                <span style={{ fontSize: '0.7rem', color: '#FF5C1A', fontWeight: 700, letterSpacing: '0.1em', minWidth: '1.5rem' }}>
                  {p.num}
                </span>
                <span style={{ flex: 1, fontWeight: 700, fontSize: '1rem', color: '#F5F0E8', letterSpacing: '-0.01em' }}>
                  {p.name}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.32)', letterSpacing: '0.07em', textTransform: 'uppercase' }}>
                  {p.tag}
                </span>
                <span style={{ fontSize: '0.7rem', color: 'rgba(245,240,232,0.22)' }}>
                  {p.year}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT side — the orange card that animates in on scroll */}
        <div
          ref={visualRef}
          className="hidden md:block relative"
          style={{ aspectRatio: '3/4', maxWidth: '400px', willChange: 'transform, opacity' }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(150deg, #FF5C1A 0%, #c83900 100%)',
              borderRadius: '10px',
              overflow: 'hidden',
            }}
          >
            {/* texture stripes */}
            {[...Array(9)].map((_, i) => (
              <div
                key={i}
                style={{
                  position: 'absolute',
                  left: 0, right: 0,
                  top: `${i * 12}%`,
                  height: '1px',
                  background: 'rgba(0,0,0,0.08)',
                }}
              />
            ))}

            <div style={{ position: 'absolute', bottom: '2rem', left: '2rem', right: '2rem' }}>
              <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.14em', color: 'rgba(0,0,0,0.45)', textTransform: 'uppercase', marginBottom: '0.4rem' }}>
                Selected Work
              </p>
              <p style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0A0A0A', letterSpacing: '-0.02em', lineHeight: 1.2 }}>
                2023 — 2024
              </p>
            </div>
          </div>

          {/* small floating counter card */}
          <motion.div
            animate={{ y: [0, -9, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: '-1.4rem',
              right: '-1.4rem',
              padding: '0.9rem 1.2rem',
              background: '#141414',
              borderRadius: '10px',
              border: '1px solid rgba(245,240,232,0.09)',
              boxShadow: '0 16px 50px rgba(0,0,0,0.5)',
            }}
          >
            <p style={{ fontSize: '0.62rem', color: 'rgba(245,240,232,0.38)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Projects
            </p>
            <p style={{ fontSize: '1.6rem', fontWeight: 800, color: '#F5F0E8', lineHeight: 1 }}>
              180+
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
