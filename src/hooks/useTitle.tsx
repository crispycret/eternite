import { useEffect } from 'react';

// const { useEffect } = require('react');


/**
 * @summary A hook that updates the document title when the component mounts and resets the document title when the component unmounts.
 * @param {string} title - The title to set.
 */ 
export const useTitle = (title: string): void => {

    useEffect(() => {

        const prevTitle = document.title
        document.title = title

        return () => { document.title = prevTitle; }
    }, [title]) // Only re-run the effect if title changes

}

export default useTitle;

