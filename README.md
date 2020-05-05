# master-css
重学前端之css

以完整的体系来学习CSS要比单纯关注属性值理解得更加深刻
可以培养从宏观层面认识与理解CSS的习惯

这世间上的事情只要发生了，都是有原因的。CSS世界的出现也不例外。
css诞生出来是为了图片和文字服务。

css的强项是图文，svg的强项是图形，canvas的强项是动画。

css的核心是流：定位和布局机制。

html中的核心元素
div + span

流：引导元素定位和排列的机制

流的机制
破坏流的机制

css2 -> css3

律法之外的皆可为
css中的未定义行为 导致兼容性问题。
伪类

-------------------------------------------------------------------

谈谈块级元素元素

第一：什么是块级元素
html元素种类繁多大致可以分为块级元素和内联元素
一个元素是块级元素还是内联元素和元素的display
属性无关。决定一个元素是块级元素与否的核心是看它是否独占一行。

第二：如何将一个非块级元素设置成块级元素?
如果将一个元素设置display: block, display: table, display: list-item
那么这个元素就是块级元素元素

-------------------------------------------------------------------

元素的尺寸
块级元素的尺寸和内联元素的尺寸
width
max-width | min-width

height
max-height | min-height

width | height 是作用在content-box上，不是作用在border-box上

流动性是指：margin border padding content 内在区域自动分配空间的机制

css准则: 无宽度，无图片， 无浮动

外部尺寸和流体特性

元素的尺寸由外部元素决定
元素的尺寸由内部元素决定

------------------------------------------------------------------
min-width min-height 默认是auto
max-width max-height 默认是none

min-width=value1
max-width=value2
if value1 > value2
else min-width 优先



------------------------------------------------------------------


可以继承的属性
font-size
font-weight
color
text-align(对块级元素无效)
visibility

不可以继承的属性
margin
border
padding
width
height
display
opacity
