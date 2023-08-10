
import useCountdownTimer from './useCountdownTimer';
import useMobile from './useMobile';
import usePage from './usePage';
import usePosition from './usePosition';
import useTitle from './useTitle';
import useToggle from './useToggle';

// Create a hooks object that has all the hooks defined in it that will be the default export for this file
// import hooks from 'eternite/hooks';
const hooks = {
    useCountdownTimer,
    useMobile,
    usePage,
    usePosition,
    useTitle,
    useToggle
}
export default hooks


// Create a named export for each hook so that they can be imported individually
// import { useCountdownTimer, useMobile, usePage, usePosition, useTitle, useToggle } from 'eternite/hooks';
export {
    useCountdownTimer,
    useMobile,
    usePage,
    usePosition,
    useTitle,
    useToggle
}



// Dynamically export each hook as a named export as well to allow import such as:
// import { useCountdownTimer, useMobile, usePage, usePosition, useTitle, useToggle } from 'eternite/hooks';
// Object.keys(hooks).map ((key, index) => {
//     // Using dynamic export to create a named export for each hook
//     // The 'key' represents the hook name, and 'hooks[key]' is the hook itself
//     // This allows us to avoid manual export statements for each hook
//     // export { key: Object.values(hooks).at(index)}
//     export {hooks[keys] }
// });
