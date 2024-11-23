// React imports
import { useEffect } from "react";

const useOnScrollBottom = (callback: () => void) => {

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY: scrollTop, innerHeight: windowHeight } = window;
            const { scrollHeight: fullHeight } = document?.documentElement;

            if (scrollTop + windowHeight >= fullHeight) {
                callback();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
        
    }, []);
};

export default useOnScrollBottom;