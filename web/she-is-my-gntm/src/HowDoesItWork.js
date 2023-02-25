import './App.css';

function HowDoesItWork() {

    return (
        <div className="how-does-it-work">
            <section>
                <p>Hi sheIsMyGNTM ist eine Seite auf der ihr live für die Models der aktuellen Staffel GNTM abstimmen könnt.</p>
                <p>Ihr erhaltet jede Sekunde eine Stimme und könnt diese benutzen um ein beliebiges Model up oder down zu voten! Euer Votestand wird euch oben rechts angezeigt.</p>
                <p>Um zwischen den Models zu wechseln swiped einfach links oder rechts. Die Tabelle unten zeigt euch die Rangliste der Models an!</p>
                <p>Ach genau und ich setze vor jeder Folge die Punkte aller Models auf 0 zurück damit es spannender ist :)</p>
                <p>Beste Grüße & Follow me on TikTok @oliverseitz</p>
                <p>Diese Seite steht nicht in Zusammenhang mit Prosieben!</p>
            </section>
            <section>
                <div onClick={() => window.location.replace('/')}>
                    Los gehts!
                </div>
            </section>
        </div>
    );
}

export default HowDoesItWork;
