// React imports
import { useEffect } from 'react';

export const useOnScrollBottom = (onScrollToBottom: () => void) => {

    useEffect(() => {
        let timeoutId: number | undefined = undefined;

        // After 100ms, it checks whether the user has scrolled to the bottom of the page
        const handleScrollToBottom = () => {
            if (!timeoutId) {
                timeoutId = window.setTimeout(() => {
                    timeoutId = undefined;

                    // This is the actual check if the client is scrolled to the bottom
                    const { scrollY, innerHeight } = window;
                    const fullHeight = document.documentElement.scrollHeight;
                    scrollY + innerHeight + 1 >= fullHeight && onScrollToBottom();
                }, 100);
                console.info('========timeoutId',timeoutId);
            }
        };

        addEventListener('scroll', handleScrollToBottom);

        return () => {
            removeEventListener('scroll', handleScrollToBottom);
            timeoutId && clearTimeout(timeoutId);
        };
    }, [onScrollToBottom]);
}