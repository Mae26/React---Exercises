// function getNum(){
//     return Math.floor(Math.random() * 10) + 1;
// }
// //Création d'un composant qui choisi un nombre au hasard
// class NumPicker extends React.Component {
//     render(){
//         const num = getNum();
//         let msg;
//         if(num === 7){
//             msg = 
//         } else {
//             msg = 
//         }
//         return (
//             <div>
//                 <h1>Your number is {num}</h1>
//                 {/*Si le nombre = 7, le message congrats est affiché, si non, le message unlucky est affiché*/}
//                 <p>{num === 7 ? 'Congrats!': 'Unlucky!'}</p>
//                 {/*Si le nombre = 7, le message congrats avec un GIF sont affichés, si non, rien est affiché*/}

//                 {/*Permet de ne pas devoir dire de ne rien afficher si le chiffre n'est pas 7*/}
//                 {
//                     num === 7 && 
//                     <img src="https://media0.giphy.com/media/nXxOjZrbnbRxS/giphy.webp?cid=790b76114360aadf0354ae05dffb2b6207a6d42c37a47933&rid=giphy.webp"/>
//                 }
//             </div>
//         )
//     }
// }

// ReactDOM.render(<NumPicker/>, document.getElementById('root'));

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

ReactDOM.render(<NumPicker/>, document.getElementById('root'));