import { useRef, useState, useEffect } from "react";

const useIntersectionObserver = (
    callBack = null,
    intersectionOptions = null,
    repeat = false
) => {
    const element = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const handleIntersection = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);

        callBack && callBack();
    };

    const options = intersectionOptions || {
        root: null,
        rootMargin: "0px",
        threshold: 1.0,
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, options);
        if (repeat) {
            if (element.current) observer.observe(element.current);
        }
        if (!isVisible) {
            if (element.current) observer.observe(element.current);
        }
        return () => {
            if (element.current) observer.unobserve(element.current);
        };
    }, [element, options, callBack]);

    return [element, isVisible];
};

export default useIntersectionObserver;
