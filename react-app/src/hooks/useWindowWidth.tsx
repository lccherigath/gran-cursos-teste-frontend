import { useState, useEffect } from 'react';

function getWindowWidth() {
    // const { innerWidth: width, innerHeight: height } = window;
    // return {
    //     width,
    //     height,
    // };
    return window.innerWidth
}

export default function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState(
        getWindowWidth()
    );

    useEffect(() => {
        function handleResize() {
            setWindowWidth(getWindowWidth());
        }
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowWidth;
}
