# Jquery



css属性赋值

`{}`赋值

```css
$("div").css({
    width: 400,
    height: 400,
    backgroundColor: "red"
// 如果是复合属性则必须采取驼峰命名法，如果值不是数字，则需要加引号
})
```



链式赋值

```css
$(this).css("background", "pink").css("width","300px");
```



进入和离开没必要分开写，可以一起写

```javascript
$(function() {
            //鼠标进入的时候,其他的li标签透明度：0.5
            $(".wrap li").hover(function() {
                $(this).siblings().stop().fadeTo(400, 0.5);
            }, function() {
                // 鼠标离开，其他li 透明度改为 1
                $(this).siblings().stop().fadeTo(400, 1);
            })
        });
```

