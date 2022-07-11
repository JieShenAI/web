# 隐藏显示

当鼠标悬停在某个元素后，显示出其后隐藏的下拉框

```
.nav a:hover + .down-menu,.nav .down-menu:hover {
    visibility: visible !important;
    max-height: 200px;
    opacity: 1;
}
```

`a: hover + .down-meau`

表示当鼠标悬停在a上，a其后的`down-meau`显示出来，但一旦鼠标离开a，`down-meau`又会不可见了，所以加上 `.down-meau:hover`。