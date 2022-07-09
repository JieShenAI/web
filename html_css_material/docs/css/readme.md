

## 精确选择

### 第几个

选择section容器内，第一个孩子

```
section div:nth-child(1){
	...
}
```

* `nth-child(-n+2)` 获得前2个
* `nth-child(n+2)` 从第2个开始





### 以xxx开头



```css
.local-nav li [class^="local-nav"]{

}
```

`[class^="local-nav"]` 匹配类名以 local-nav 开头的元素；



## 固定定位

`fixed`

固定的盒子必须有宽度



### 居中

固定定位的盒子，没法使用 `margin: 0 auto` 实现居中；



```
left: 50%
/* 减去自己宽度的一半 */
-webkit-transform: translateX(-50%) /*兼容老版本的谷歌浏览器*/
transform: translateX(-50%)
```

但是我们发现若不指定 left 的值，也是居中的



## 绝对定位

加了绝对的定位的盒子就有大小了

引入的原因：

> 有时候为了让容器有大小就声明盒子为块级元素
>
> 但块级元素独占一行。

故使用绝对定位可以解决这个问题，既有大小又不会独占一行；

“子绝父相”，孩子使用绝对定位，父亲容器需要使用相对定位；



## 颜色

### 渐变



```
-webkit-linear-gradient(left, #34C2A9, #6CD559);
```

