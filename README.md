# DTC（Doraemon's Treasure Chest）

## 使用
### 在线文档

[dtc在线文档](https://wuyax.github.io/docs/)

### 安装

浏览器环境：
```
// 完整引入
<script src="dtc.umd.min.js"></script>
```
```
// 按需引入
<script src="dtc.util.umd.min.js"></script>
```
通过 npm：
```
$ npm install dtc --save
```
在组件中引入
```
// 按需引入
import {util} from 'dtc'
// 使用
let arr = [3,4,4,33,4,3,4]
util.unique(arr) // [3,4,33]

// 完整引入
import dtc from 'dtc'
// 使用
let arr = [3,4,4,33,4,3,4]
JEF.util.unique(arr) // [3,4,33]
```

## dtc.util
常用工具包 如：数组，字符串，类型判断，验证等

## dtc.charts
图表工具包，如：echarts,d3,等图表 

## dtc.vsual (开发中...)
可视化组件包，如：3D地图，星云效果等
