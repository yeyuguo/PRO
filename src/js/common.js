var commonJS = function(){
    function random(n){
        var n = n || 10
        return Math.round(Math.random()*n)
    }
    const paramType = (data) => {
        let paramArr = []; 
        let paramStr = ''; 
        for (let attr in data) {
            paramArr.push(attr + '=' + data[attr]);
        }
        paramStr = paramArr.join('&');
        paramStr = '?' + paramStr;
        return paramStr
    }
    return {
        random:random,
        paramType:paramType
    }
}

export default commonJS
