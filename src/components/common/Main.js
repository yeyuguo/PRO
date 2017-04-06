import route from './route'
import animation from './animation'
import calculate from './calculate'

// TODO ：更好的方案来解决按需加载，并且能只有一个入口来找到这些公共方法；

const common ={
    route,
    calculate,
    animation,
}

export default common
