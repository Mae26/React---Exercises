function getNum(){
    return Math.floor(Math.random() * 10) + 1;
}
//Création d'un composant qui choisi un nombre au hasard
class NumPicker extends React.Component {
    render(){
        const num = getNum();
        let msg;
        if(num === 7){
            msg = 
            <div>
                <h2>Congrats, you win!</h2>
                <img src="https://media0.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76114360aadf0354ae05dffb2b6207a6d42c37a47933&rid=giphy.webp"/>
            </div>
        } else {
            msg = <p>Sorry, you lose!</p>
        }
        return (
            <div>
                <h1>Your number is {num}</h1>
                {msg}
            </div>
        )
    }
}