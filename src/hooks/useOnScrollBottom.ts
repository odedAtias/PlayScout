// React imports
import { useEffect } from "react";

const useOnScrollBottom = (onScroll: () => void) => {

    useEffect(() => {
        const handleScroll = () => {
            const { scrollY: top, innerHeight: windowHeight } = window;
            const { scrollHeight: fullHeight } = document?.documentElement;

            if (top + windowHeight >= fullHeight) {
                onScroll();
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);
};

export default useOnScrollBottom;