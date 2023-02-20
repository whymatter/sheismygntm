import './App.css';
import {useCallback, useEffect} from "react";
import {ModelVoting} from "./ModelVoting";
import {modelConfig} from "./modelConfig";

const models = Object.keys(modelConfig);

function App() {
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

    return (
        <div className="wrapper">
            <div></div>

            {/*<section className="header">*/}
            {/*    <h1>*/}
            {/*        SHE IS MY<br/>*/}
            {/*        <span className="header-gntm">GNTM</span>*/}
            {/*    </h1>*/}
            {/*</section>*/}

            <section className="slider">
                <div className="slider-line"></div>
            </section>

            <section className="voting">
                {models.map((modelId) => <ModelVoting key={modelId} modelId={modelId} />)}
            </section>

            <section className="ranking">

                <div className="ranking-list">

                    <div className="ranking-row">
                        <div className="ranking-left">
                            <div className="ranking-image">
                                <img src="/models/eliz.webp" alt="Image of model Eliz"/>
                            </div>
                            <div className="ranking-model-name">
                                <span className="ranking-rank">#1</span>
                                <span> </span>
                                <span className="ranking-name">Eliz</span>
                            </div>
                        </div>
                        <div className="ranking-right">
                            <span className="ranking-value">8.5</span>
                            <span className="ranking-reference">/10</span>
                        </div>
                    </div>

                    <div className="ranking-row">
                        <div className="ranking-left">
                            <div className="ranking-image">
                                <img src="/models/eliz.webp" alt="Image of model Eliz"/>
                            </div>
                            <div className="ranking-model-name">
                                <span className="ranking-rank">#1</span>
                                <span> </span>
                                <span className="ranking-name">Eliz</span>
                            </div>
                        </div>
                        <div className="ranking-right">
                            <span className="ranking-value">8.5</span>
                            <span className="ranking-reference">/10</span>
                        </div>
                    </div>

                    <div className="ranking-row">
                        <div className="ranking-left">
                            <div className="ranking-image">
                                <img src="/models/eliz.webp" alt="Image of model Eliz"/>
                            </div>
                            <div className="ranking-model-name">
                                <span className="ranking-rank">#1</span>
                                <span> </span>
                                <span className="ranking-name">Eliz</span>
                            </div>
                        </div>
                        <div className="ranking-right">
                            <span className="ranking-value">8.5</span>
                            <span className="ranking-reference">/10</span>
                        </div>
                    </div>

                    <div className="ranking-row">
                        <div className="ranking-left">
                            <div className="ranking-image">
                                <img src="/models/eliz.webp" alt="Image of model Eliz"/>
                            </div>
                            <div className="ranking-model-name">
                                <span className="ranking-rank">#1</span>
                                <span> </span>
                                <span className="ranking-name">Eliz</span>
                            </div>
                        </div>
                        <div className="ranking-right">
                            <span className="ranking-value">8.5</span>
                            <span className="ranking-reference">/10</span>
                        </div>
                    </div>

                </div>

            </section>

            {/*<div className="vote-color"></div>*/}
            {/*<div className="background-blur"></div>*/}
        </div>
    );
}

export default App;
