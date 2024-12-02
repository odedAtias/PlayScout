import { useEffect } from 'react';

function useOnScrollBottom(onScrollToBottom: () => void) {

    useEffect(() => {
        let timeoutId: number | null = null;

        const handleScrollToBottom = () => {
            if (!timeoutId) {
                timeoutId = setTimeout(() => {
                    timeoutId = null;
                    const { scrollY, innerHeight } = window;
                    const fullHeight = document.documentElement.scrollHeight;
                    scrollY + innerHeight + 1 >= fullHeight && onScrollToBottom();
                }, 500);
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