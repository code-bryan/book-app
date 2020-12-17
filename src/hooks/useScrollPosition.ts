import React from 'react';

export default function useScrollPosition(): number {
    const [position, setPosition] = React.useState<number>(0);

    React.useEffect(() => {
        const { addEventListener, pageYOffset, removeEventListener } = window;
        const listener = () =>  setPosition(pageYOffset);
        addEventListener('scroll', listener, { passive: true });
        return () => removeEventListener('scroll', listener);
    }, [])

    return position;
}