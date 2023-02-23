import './App.css';
import {useCallback, useEffect, useMemo, useRef, useState} from "react";
import {ModelVoting} from "./ModelVoting";
import {modelConfig} from "./modelConfig";

const models = Object.keys(modelConfig);

function App() {
    const [modelPoints, setModelPoints] = useState(models.reduce((a, b) => ({...a, [b]: 0}), {}));
    const [availableVotes, setAvailableVotes] = useState(0);

    const sliderArrow = useRef();

    const animationCallback = useCallback(() => {
        const votingEl = document.getElementsByClassName('voting')[0];

        for (let i = 0; i < votingEl.children.length; i++) {
            const modelNameEl = votingEl.children[i].querySelector('.model-name h2');
            const parallax_x = -votingEl.scrollLeft * 0.25 + i * window.innerWidth * 0.25;
            modelNameEl.style.setProperty('--parallax-x', `${parallax_x}px`);
        }

        requestAnimationFrame(animationCallback);
    }, []);

    useEffect(() => {
        requestAnimationFrame(animationCallback);
    }, [animationCallback]);

    const onNewPoints = useCallback(({modelId, points}) => {
        setModelPoints(state => ({...state, [modelId]: points}));
    }, []);

    useEffect(() => {
        const id = setInterval(() => setAvailableVotes(s => s + 1), 500);
        return () => clearInterval(id);
    }, []);

    const onVoted = useCallback(() => setAvailableVotes(s => s - 10), []);

    const modelRanking = useMemo(() => Object.entries(modelPoints).sort((a, b) => b[1] - a[1]), [modelPoints]);

    return (
        <div className="wrapper">
            <section className="top-row">
                <div className="vote-counter">
                    {availableVotes}
                </div>
            </section>

            {/*<section className="header">*/}
            {/*    <h1>*/}
            {/*        SHE IS MY<br/>*/}
            {/*        <span className="header-gntm">GNTM</span>*/}
            {/*    </h1>*/}
            {/*</section>*/}

            <section className="slider">
                <div className="slider-container">
                    <div className="slider-arrow" ref={sliderArrow}></div>
                    <div className="slider-line"></div>
                </div>
            </section>

            <section className="voting">
                {models.map((modelId) =>
                    <ModelVoting
                        onVoted={onVoted}
                        availablePoints={availableVotes}
                        onNewPoints={onNewPoints}
                        key={modelId}
                        modelId={modelId}/>)}
            </section>

            <section className="ranking">

                <div className="ranking-list">

                    {modelRanking.map(([modelId, points], i) =>
                        <div className="ranking-row">
                            <div className="ranking-left">
                                <div className="ranking-image">
                                    <img src={`/models/${modelId}.webp`} alt="Image of model Eliz"/>
                                </div>
                                <div className="ranking-model-name">
                                    <span className="ranking-rank">#{i + 1}</span>
                                    <span> </span>
                                    <span className="ranking-name">{modelConfig[modelId]?.name}</span>
                                </div>
                            </div>
                            <div className="ranking-right">
                                <span className="ranking-value">{Math.round(points * 10) / 10}</span>
                                <span className="ranking-reference">/10</span>
                            </div>
                        </div>
                    )}

                </div>

            </section>

            {/*<div className="vote-color"></div>*/}
            {/*<div className="background-blur"></div>*/}
        </div>
    );
}

export default App;
