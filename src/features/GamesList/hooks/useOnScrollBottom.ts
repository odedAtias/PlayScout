// React imports
import { useEffect } from 'react';

function useOnScrollBottom(onScrollToBottom: () => void) {

    useEffect(() => {
        const handleScrollToBottom = () => {
            const { scrollY, innerHeight } = window;
            const fullHeight = document.documentElement.scrollHeight;

            if (scrollY + innerHeight + 1 >= fullHeight) {
                onScrollToBottom();
            }
        };

        window.addEventListener('scroll', handleScrollToBottom);

        return () => {
            window.removeEventListener('scroll', handleScrollToBottom); // Cleanup on unmount
        };
    }, [onScrollToBottom]);
}

export default useOnScrollBottom;