class JSXDemo extends React.Component {
    render(){
        return ( 
            //To return multiple element, we have to wrap them in a div
            <div>
                <h1>My Image!</h1>
                <img src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"/>
            </div>
        );
    }
}

ReactDOM.render(<JSXDemo/>, document.getElementById('root'))

//return React.createElement("h3", null, "I am an h3 "); = crée un h3