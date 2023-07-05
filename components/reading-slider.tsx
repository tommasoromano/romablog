import React, { useEffect, useState } from 'react'

const ReadingSlider = () => {
  const [sliderWidth, setSliderWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight
      const contentHeight = document.documentElement.scrollHeight
      const scrollPosition = window.scrollY

      const sliderWidth = (scrollPosition / (contentHeight - windowHeight)) * 100
      setSliderWidth(sliderWidth)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 h-2 bg-primary-light dark:bg-primary-light" style={{ width: `${sliderWidth}%` }}></div>
  )
}

export default ReadingSlider