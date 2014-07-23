/**
 * node.js (v0.10.29) - console 示例程序
 *
 * The MIT License (MIT)
 * Copyright (c) 2014 node-sparrow
 *
 * 描述：
 * 用于向 stdout 和 stderr 打印字符。类似于大部分 Web 浏览器提供的 console 
 * 对象函数，在这里则是输出到 stdout 或 stderr。
 *
 * 当输出目标是一个终端或文件时，console函数是同步的，防止过早退出时丢失信息
 * 当输出目标是一个管道时它们是异步的，防止阻塞过长时间。
 *
 * 可以像'printf()'那样接受多个参数，如果在第一个字符串中没有找到格式化元素，
 * 那么 util.inspect 将被应用到各个参数。详见 ..\Util\util.example.js
 */

/**
 * console.log([data],[...])
 */
console.log("这个是基本的用法，向标准输出设备打印这句话，并另起一行。");
console.log("可以传入多个参数","，","并一起打印出来","。");

var count = 5;
console.log("可以像'printf()'那样接受多个参数，比如 count %d", count);

/**
 * console.info([data],[...])
 * 用法与console.log相同
 */
