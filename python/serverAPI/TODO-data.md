# API 数据架构的简述(针对本人的使用)
## 数据请求的架构 **Flask** && **GraphQL** && **proxy**
>因为目前大部分的前后分离，数据的提供都是 RestFul API 形式的，所以  
我个人认为这样的方式是类似 **MVVM的数据方式**
1. 由 flask 去请求真正的数据；或者由 反向代理去请求数据；
2. 请求来的数据，有GraphQL 来返回给前端使用；
3. 前端通过自由的 GraphQL 的语义来完成渲染功能；

## 为什么要用 GraphQL  
> * GraphQL 可以让前端自由定义自己的那个键值，并且前端可以自由**轻量**的定义自己的那个 API 的数据结构；
**为什么说是轻量的呢？(可以说成是缺点吗？>_<)** 
>这是由于经我一段时间的 node 端使用后，得出的经验：
1. 对于多层的对象定义数据结构，`例如:{a:{b:{c}}}`，虽然这样的结构在API函数完成是非常简单的，但是，后端的工作量是非常大和繁琐的；
2. 想完全自定义得到的 API 数据结构，GrapQL好像不能够做到这样的事。 

>**上述两个的原因：GraphQL需要定义参数的变量类型和输出结构的每个key对应的value值的类型。**
如果想**完全的自由定义 API 数据结构**，可以推荐一个国人写的很不错的框架 [APIJSON](https://github.com/TommyLemon/APIJSON)，由于我个人技术选型，只选择 `javascript` 和 `python`；

python 推荐使用 `graphqlene` && `django`;
JavaScript 推荐使用 `graphql-express`;

## TODO ...

