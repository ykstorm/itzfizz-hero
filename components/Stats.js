'use client'

import { motion } from 'framer-motion'

const stats = [
  { value: '94%',  label: 'Client Satisfaction', sub: 'across 200+ projects' },
  { value: '3.2x', label: 'Average ROI',          sub: 'on digital campaigns'  },
  { value: '180+', label: 'Brands Built',          sub: 'from scratch to launch'},
  { value: '08',   label: 'Years of Craft',        sub: 'in the digital space'  },
]

function StatCard({ value, label, sub, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{
        duration: 0.65,
        ease: [0.25, 1, 0.35, 1],
        delay: index * 0.1,
      }}
      style={{
        padding: '1.5rem',
        borderLeft: '1px solid rgba(245, 240, 232, 0.08)',
      }}
    >
      {/* the big number — first character gets the orange accent */}
      <div
        style={{
          fontSize: 'clamp(2rem, 3.5vw, 3rem)',
          fontWeight: 800,
          color: '#F5F0E8',
          lineHeight: 1,
          letterSpacing: '-0.02em',
          marginBottom: '0.5rem',
        }}
      >
        <span style={{ color: '#FF5C1A' }}>{value[0]}</span>
        {value.slice(1)}
      </div>

      <div
        style={{
          fontSize: '0.78rem',
          fontWeight: 700,
          color: 'rgba(245, 240, 232, 0.85)',
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          marginBottom: '0.25rem',
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '0.75rem',
          color: 'rgba(245, 240, 232, 0.38)',
        }}
      >
        {sub}
      </div>
    </motion.div>
  )
}

export default function Stats() {
  return (
    <div
      className="grid grid-cols-2 md:grid-cols-4 w-full"
      style={{
        maxWidth: '900px',
        margin: '4rem auto 0',
        borderTop: '1px solid rgba(245, 240, 232, 0.07)',
        borderRight: '1px solid rgba(245, 240, 232, 0.07)',
      }}
    >
      {stats.map((s, i) => (
        <StatCard key={s.label} {...s} index={i} />
      ))}
    </div>
  )
}
