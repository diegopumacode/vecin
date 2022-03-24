import React, { useEffect, useRef, useState } from 'react'

export default function InfiniteScroll({ loader, hasMore, callback, children, useLoader = true, useTopScroll = false }) {

    const lastItemRef = useRef(null)

    useEffect(async () => {
        const handleObserver = (entities) => {
            const target = entities[0]
            if (target.isIntersecting) {
                if (hasMore) {
                    callback()
                }
            }
        };

        const options = {
            root: null,
            rootMargin: '0px',
            threshold: 0
        }

        const observer = new IntersectionObserver(handleObserver, options)

        if (lastItemRef.current) {
            observer.observe(lastItemRef.current)
        }
    }, [hasMore])



    return (
        <div>
            {children}
            <div ref={lastItemRef}>
                {hasMore && useLoader && <div>....Cargando</div>}
            </div>
        </div>
    )
}
