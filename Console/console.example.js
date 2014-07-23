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
 * 向 stdout 打印并新起一行。这个函数可以像 printf() 那样接受多个参数。
 */
console.log("这个是基本的用法，向标准输出设备打印这句话，并另起一行。");
console.log("可以传入多个参数","，","并一起打印出来","。");

var count = 5;
console.log("可以像'printf()'那样接受多个参数，比如 count %d", count);

//下面例子在第一个字符串中没有找到格式化元素，那么 util.inspect 将被应用到
//各个参数，其效果与 console.dir 类似。
console.log(console);

/**
 * console.info([data],[...])
 * 用法与 console.log 相同。
 */

/**
 * console.error([data],[...])
 * 同 console.log，但输出到 stderr。
 */

/**
 * console.warn([data],[...])
 * 用法与 console.error 相同。
 */

/**
 * console.dir(obj)
 * 对 obj 使用 util.inspect 并将结果字符串输出到 stdout。这个函数会忽略 obj 上的
 * 任何自定义 inspect()。
 *
 * util.inspect 用于返回一个对象的字符串表现形式, 在代码调试的时候非常有用。
 */

//下面的例子用 console.dir 分别输出 console 对象和 process 对象的字符串表现形式。
console.dir(console);
console.dir(process);

/**
 * console.time(label)
 * 标记一个时间点。
 *
 * console.timeEnd(label)
 * 结束计时器，记录输出。
 */

//下面的例子标记了一段代码的开始的时间，并在代码结束后输出其执行所消耗的时间。
console.time('循环100万次：');
for (var i = 0; i < 1000000; i++) {
  ;
}
console.timeEnd('循环100万次：');

/**
 * console.trace(label)
 * 向标准错误流输出当前的调用栈。 
 */

//下面的例子将向标准错误流输出 console.trace() 函数当前的调用栈。
console.trace();

/**
 * console.assert(expression, [message])
 * 同 assert.ok() 函数一样，如果 expression 参数验证结果为false，则会抛出一个
 * AssertionError 异常，异常信息为 message 参数。
 *
 * 貌似对中文不友好 :(
 */

console.assert(false, "an AssertionError from console.assert()");
