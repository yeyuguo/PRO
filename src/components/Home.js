import React from 'react'

const Home = React.createClass({
    render(){
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
})

export default Home;

