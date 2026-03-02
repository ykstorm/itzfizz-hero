'use client'

import { motion } from 'framer-motion'

const HEADLINE = "WELCOME ITZFIZZ"
const letters = HEADLINE.split('')

export default function AnimatedHeadline() {
  return (
    <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '0.12em',
        }}
      >
        {letters.map((char, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.1 + i * 0.04,
            }}
            style={{
              display: 'inline-block',
              fontFamily: '"Inter", system-ui, sans-serif',
              fontSize: 'clamp(2.8rem, 7.5vw, 6.5rem)',
              fontWeight: 800,
              letterSpacing: '0.08em',
              color: '#F5F0E8',
              lineHeight: 1.1,
              minWidth: char === ' ' ? '0.5em' : undefined,
              willChange: 'transform, opacity',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <motion.div
          initial={{ width: '0%', opacity: 0 }}
          animate={{ width: '55%', opacity: 1 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.9 }}
          style={{
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #FF5C1A, transparent)',
          }}
        />
      </div>

    </div>
  )
}