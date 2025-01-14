import { useEffect } from 'react';

function useOnScrollBottom(onScrollToBottom: () => void) {

    useEffect(() => {
        let timeoutId: number | null = null;

        // After 100ms, it checks whether the user has scrolled to the bottom of the page
        const handleScrollToBottom = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    timeoutId = null;

                    // This is the actual check if the client is scrolled to the bottom
                    const { scrollY, innerHeight } = window;
                    const fullHeight = document.documentElement.scrollHeight;
                    scrollY + innerHeight + 1 >= fullHeight && onScrollToBottom();
                }, 100);
            }
        };

        addEventListener('scroll', handleScrollToBottom);

        return () => {
            removeEventListener('scroll', handleScrollToBottom);
            timeoutId && clearTimeout(timeoutId);
        };
    }, [onScrollToBottom]);
}

export default useOnScrollBottom;