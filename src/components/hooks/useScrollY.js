import { useState, useEffect } from "react";

export function useScrollY() {
    const [scrollY, setScrollY] = useState(0);
    const handleScroll = () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        setScrollY(scrollY);
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);
    return ([scrollY]);
}