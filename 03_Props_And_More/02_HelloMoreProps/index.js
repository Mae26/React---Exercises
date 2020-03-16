class App extends React.Component{
    render(){
        return(
            <div>
                <Hello 
                    to="Ringo" 
                    from="Paul" 
                    bangs={4} 
                    img="https://images.unsplash.com/photo-1516481265257-97e5f4bc50d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
                />
            </div>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'));