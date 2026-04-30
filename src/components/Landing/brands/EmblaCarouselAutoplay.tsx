/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from 'embla-carousel'
import type { AutoplayType } from "embla-carousel-autoplay";
type UseAutoplayType = {
  autoplayIsPlaying: boolean
  toggleAutoplay: () => void
}

export const useAutoplay = (
  emblaApi: EmblaCarouselType | undefined
): UseAutoplayType => {
  const [autoplayIsPlaying] = useState(false)

const autoplay = emblaApi?.plugins()?.autoplay as AutoplayType | undefined;
  const toggleAutoplay = useCallback(() => {
    //const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop = autoplay.isPlaying() ? autoplay.stop : autoplay.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
   // const autoplay = emblaApi?.plugins()?.autoplay
    if (!autoplay) return

    const playOrStop =  autoplay.play
    playOrStop()
  }, [emblaApi])

  return {
    autoplayIsPlaying,
    toggleAutoplay
  }
}
