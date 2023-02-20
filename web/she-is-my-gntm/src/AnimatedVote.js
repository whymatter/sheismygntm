import {useEffect, useRef, useState} from "react";

export function AnimatedVote({voteValue}) {
    const [randomValueX,] = useState(Math.random());
    const [randomValueY,] = useState(Math.random());
    const ref = useRef(null);

    useEffect(() => {
        ref.current?.style.setProperty('--randomX', randomValueX);
        ref.current?.style.setProperty('--randomY', randomValueY);
    }, [ref.current, randomValueX, randomValueY]);

    return <div
        ref={ref}
        className={`animated-vote ${voteValue === 1 ? 'green' : 'red'}`}
        data-random-x={randomValueX}
        data-random-y={randomValueY}></div>;
}