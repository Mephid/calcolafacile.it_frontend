import { useEffect, useState } from 'react'

const useCheckYScroll = () => {
    let [isScrolled, setIsScrolled] = useState(false)

    const scrollHandler = () => {
        if (window.scrollY == 0) {
            setIsScrolled(false)
        } else {
            setIsScrolled(true)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollHandler)

        return () => {
            window.removeEventListener('scroll', scrollHandler)
        }
    }, [isScrolled])

    return isScrolled
}

export default useCheckYScroll
