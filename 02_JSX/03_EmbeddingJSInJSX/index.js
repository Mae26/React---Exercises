//On crée une fonction getMood pour avoir une mood random. On crée une array avec différents mood
//On prend l'array et la length de celle-ci que l'on multiplie par un nombre random et on le floor.
function getMood(){
    const moods = ['Angry', 'Hungry', 'Silly', 'Quiet', 'Paranoid'];
    return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
    render(){
        return ( 
        <div>
            {/* Pour intégrer du JS dans du JSX, il faut l'écrire entre {}*/}
            <h1>My Current Mood is: {getMood()}</h1> 
        </div>
        );
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))

