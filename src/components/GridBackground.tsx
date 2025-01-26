'use client'

import React from 'react'

const GridBackground: React.FC = () => {
  const mousePosition = { x: 0, y: 0 }
  const windowSize = { width: 0, height: 0 }

  // const handleMouseMove = useCallback((event: MouseEvent) => {
  //   setMousePosition({ x: event.clientX, y: event.clientY })
  // }, [])

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  //   }

  //   window.addEventListener('mousemove', handleMouseMove)
  //   window.addEventListener('resize', handleResize)
  //   handleResize()

  //   return () => {
  //     window.removeEventListener('mousemove', handleMouseMove)
  //     window.removeEventListener('resize', handleResize)
  //   }
  // }, [handleMouseMove])

  const dotSize = 3
  const gap = 40
  const rows = Math.ceil(windowSize.height / gap)
  const cols = Math.ceil(windowSize.width / gap)

  return (
    <div className="absolute bottom-0 top-0 left-0 right-0 -z-10 opacity-60">
      <div
        className="w-full h-full "
        style={{
          backgroundSize: `${gap}px ${gap}px`,
          backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 2px, transparent 2px)`,
        }}
      >
        {Array.from({ length: rows * cols }).map((_, index) => {
          const row = Math.floor(index / cols)
          const col = index % cols
          const x = col * gap
          const y = row * gap
          const distance = Math.sqrt(
            Math.pow(x - mousePosition.x, 2) + Math.pow(y - mousePosition.y, 2)
          )
          const intensity = Math.max(0, 1 - distance / 200)

          return (
            <div
              key={index}
              className="fixed rounded-full transition-all duration-300 ease-out "
              style={{
                width: `${dotSize}px`,
                height: `${dotSize}px`,
                left: `${x}px`,
                top: `${y}px`,
                backgroundColor: `rgba(255, 255, 255, ${0.2 + intensity * 0.8})`,
                boxShadow: `0 0 ${intensity * 10}px ${
                  intensity * 5
                }px rgba(255, 255, 255, ${intensity})`,
              }}
            />
          )
        })}
      </div>
    </div>
  )
}

export default GridBackground

