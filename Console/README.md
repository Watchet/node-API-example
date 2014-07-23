控制台 (console) 示例程序
=========================

console 用于提供控制台标准输出，通常用于向终端输出一些程序的调试信息。

Node.js 提供了一个全局的 console 对象，用于向标准输出流（stdout）或标准错误流
（stderr）输出字符。  

* console 对象所拥有的函数如下：
  - console.log([data], [...])
  - console.info([data], [...])
  - console.error([data], [...])
  - console.warn([data], [...])
  - console.dir(obj)
  - console.time(label)
  - console.timeEnd(label)
  - console.trace(label)
  - console.assert(expression, [message])

console.log 与 console.info 相同，用于向标准输出流打印字符并以换行符结束。

console.error 与 console.warn 相同，用于向标准错误流打印字符并以换行符结束。

它们都可以像'printf()'那样接受多个参数，如果在第一个字符串中没有找到格式化元素，
那么 util.inspect 将被应用到各个参数。详见 ..\Util\util.example.js

console.dir 可以将一个对象用字符串的形式输出到 stdout

console.time 与 console.timeEnd 可以用于标记一段代码开始执行的时间点，并在代码
执行完以后输出其执行所用的时间。

console.trace 向标准错误流输出当前的调用栈，可以用于定位出错代码位置。

console.assert 同 assert.ok() 函数一样，如果 expression 参数验证结果为false，
则会抛出一个 AssertionError 异常，异常信息为 message 参数。
