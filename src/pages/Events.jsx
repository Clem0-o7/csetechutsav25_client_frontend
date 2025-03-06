import React, { useEffect, useState } from 'react'
import { motion, useMotionValue, useTransform } from 'framer-motion'
import { api } from '../api/auth'
import { useMediaQuery } from '@mui/material'
import Flagship from '../components/Flagship'
import CardSkeleton from '../components/CardSkeleton'

// Static images for each department (Replace with actual image paths)
const departmentImages = {
  CSE: '/images/cs.png',
  IT: '/images/it.png',
  CSBS: '/images/csbs.png',
  DS: '/images/ds.png'
}

// Neon Blue Glow CSS Animation
const neonGlow = `
@keyframes neon-glow {
  0% { box-shadow: 0 0 12px rgba(8, 100, 140, 0.59), 0 0 24px rgba(8, 100, 140, 0.59); }
  50% { box-shadow: 0 0 18px rgba(8, 100, 140, 0.9), 0 0 36px rgba(8, 100, 140, 0.9); }
  100% { box-shadow: 0 0 12px rgba(8, 100, 140, 0.59), 0 0 24px rgba(8, 100, 140, 0.59); }
}
`

// Inject Neon Glow Animation into the document head
const style = document.createElement('style')
style.innerHTML = neonGlow
document.head.appendChild(style)

const SpotlightCard = ({ name, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      className='card-spotlight w-full'
      style={{
        position: 'relative',
        marginBottom: '30px',
        overflow: 'hidden',
        borderRadius: '12px',
        animation: 'neon-glow 1.8s infinite alternate',
        backgroundImage: `url(${departmentImages[name]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
      }}
      whileHover={{
        scale: 1.05,
        rotate: Math.random() > 0.5 ? -5 : 5 // Randomly tilts left or right
      }}
      transition={{
        type: 'spring',
        stiffness: 120,
        damping: 10
      }}
    >
      <div
        className='overlay'
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.4)'
        }}
      />
      <h2 className='text-2xl font-bold text-white relative'>{name}</h2>
      <button
        className='mt-4 px-4 py-2 bg-white/20 rounded-full text-sm font-medium hover:bg-white/30 transition-colors relative'
        style={{ color: '#ffffff' }}
        onClick={e => {
          e.stopPropagation()
          onClick()
        }}
      >
        See More
      </button>
    </motion.div>
  )
}

const Events = () => {
  const [flagShipEvents, setFlagShipEvents] = useState([])
  const [flagshipLoading, setFlagshipLoading] = useState(true)
  const departments = ['CSE', 'IT', 'CSBS', 'DS']

  const handleDepartmentClick = dept => {
    window.location.href = `/more-events/${dept.toLowerCase()}`
  }

  useEffect(() => {
    setFlagshipLoading(true)
    api
      .get('event/getFlagshipEvents')
      .then(result => {
        setFlagShipEvents(result.data)
        // console.log('..........', flagShipEvents[0]['uniqueName'])
        // console.log('..........', flagShipEvents[0]['eventName'])
        // console.log('..........', flagShipEvents[0]['eventAbstract'])
        setFlagshipLoading(false)
      })
      .catch(err => {
        console.error('Error fetching flagship events:', err)
      })
  }, [])

  return (
    <>
      {flagshipLoading ? (
        <CardSkeleton cards={1} />
      ) : (
        flagShipEvents.length > 0 && (
          <Flagship
            uniqueName={flagShipEvents[0]['uniqueName']}
            eventName={flagShipEvents[0]['eventName']}
            eventDescription={flagShipEvents[0]['eventAbstract']}
            image={'https://csi.coep.org.in/csi_logo.png'}
          />
        )
      )}
      <div
        className='py-10 px-4 sm:px-9 flex flex-col gap-8'
        style={{ backgroundColor: '#e0f2fe' }}
      >
        <div className='w-full justify-start'>
          <h1 className='font-semibold text-xl sm:text-3xl'>Departments</h1>
          <div className='mt-9 grid w-full grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-9 items-center'>
            {departments.map((dept, i) => (
              <SpotlightCard
                key={i}
                name={dept}
                onClick={() => handleDepartmentClick(dept)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Events