class Hello extends React.Component{
    //On peut définir des valeurs par défaut qui seront alors d'office utilisées si on ne les change pas dans le code
    static defaultProps = {
        from: 'Anonymous',
        bangs: 1
    }

    render(){
        let bangs = "!".repeat(this.props.bangs)
        return(
            <div>
                <p>Hi {this.props.to} from {this.props.from}{bangs}</p>
                <img src={this.props.img}/>
            </div>
        )
    }
}