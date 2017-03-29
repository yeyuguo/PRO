var commonJS = function(){
    function random(n){
        var n = n || 10
        return Math.round(Math.random()*n)
    }
    return {
        random:random
    }
}
