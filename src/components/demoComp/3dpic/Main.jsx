import React from 'react'

require('./Main.less')
window.THREE = require('../../../js/build/three.js')
console.log({THREE})
window.TWEEN = require('tween')
// var TWEEN = require('../../../js/libs/tween.min')
require('../../../js/controls/TrackballControls')
require('../../../js/renderers/CSS3DRenderer')


const ImgShow = React.createClass({
    getInitialState(){
        return {
        }
    },
    render(){
        return (
            <div>
                <div id="container"></div>
                <div id="info"><a href="http://threejs.org" target="_blank">three.js css3d</a> - periodic table. <a href="https://plus.google.com/113862800338869870683/posts/QcFk5HrWran" target="_blank">info</a>.</div>
                <div id="menu">
                    <button id="table">TABLE</button>
                    <button id="sphere">SPHERE</button>
                    <button id="helix">HELIX</button>
                    <button id="grid">GRID</button>
                </div>
            </div>
        )
    },
    componentDidMount(){
        var imgShow = require('./imgShow');
        console.log({imgShow})
        imgShow.init()
        imgShow.animate()
    }
})

export default ImgShow
