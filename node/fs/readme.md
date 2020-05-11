# node.js 文件系统
> var fs = require("fs")
## 一 文件系统
- fs文件系统分为同步，异步。读取文件fs readFile()和 fs readFileSync().
> 异步的方法函数最后一个参数为回调函数，回调函数的第一个参数包含了错误信息(error)。

## 二 打开文件语法
- 以下为在异步模式下打开文件的语法格式：

fs.open(path, flags[, mode], callback)
### 1 参数
- 参数使用说明如下：
> path - 文件的路径。
flags - 文件打开的行为。具体值详见下文。
mode - 设置文件模式(权限)，文件创建默认权限为 0666(可读，可写)。
callback - 回调函数，带有两个参数如：callback(err, fd)。

#### Flag	描述
r	以读取模式打开文件。如果文件不存在抛出异常。
r+	以读写模式打开文件。如果文件不存在抛出异常。
rs	以同步的方式读取文件。
rs+	以同步的方式读取和写入文件。
w	以写入模式打开文件，如果文件不存在则创建。
wx	类似 'w'，但是如果文件路径存在，则文件写入失败。
w+	以读写模式打开文件，如果文件不存在则创建。
wx+	类似 'w+'， 但是如果文件路径存在，则文件读写失败。
a	以追加模式打开文件，如果文件不存在则创建。
ax	类似 'a'， 但是如果文件路径存在，则文件追加失败。
a+	以读取追加模式打开文件，如果文件不存在则创建。
ax+	类似 'a+'， 但是如果文件路径存在，则文件读取追加失败。

## 三 获取文件信息
- 以下为通过异步模式获取文件信息的语法格式：
fs.stat(path, callback)
### 参数
path - 文件路径。
callback - 回调函数，带有两个参数如：(err, stats), stats 是 fs.Stats 对象。
stats其中方法
方法              |	描述
stats.isFile()	| 如果是文件返回 true，否则返回 false。
stats.isDirectory() |	如果是目录返回 true，否则返回 false。
stats.isBlockDevice() |	如果是块设备返回 true，否则返回 false。
stats.isCharacterDevice() |	如果是字符设备返回 true，否则返回 false。
stats.isSymbolicLink() |	如果是软链接返回 true，否则返回 false。
stats.isFIFO() |	如果是FIFO，返回true，否则返回 false。FIFO是UNIX中的一种特殊类型的命令管道。
stats.isSocket() |	如果是 Socket 返回 true，否则返回 false。

## 三 写入文件信息
> fs.writeFile(file, data[, options], callback)
writeFile 直接打开文件默认是 w 模式，所以如果文件存在，该方法写入的内容会覆盖旧的文件内容。
### 参数
file - 文件名或文件描述符。
data - 要写入文件的数据，可以是 String(字符串) 或 Buffer(缓冲) 对象。
options - 该参数是一个对象，包含 {encoding, mode, flag}。默认编码为 utf8, 模式为 0666 ， flag 为 'w'
callback - 回调函数，回调函数只包含错误信息参数(err)，在写入失败时返回。

## 四 读取文件
以下为异步模式下读取文件的语法格式：
> fs.read(fd, buffer, offset, length, position, callback)
### 参数
fd - 通过 fs.open() 方法返回的文件描述符。

buffer - 数据写入的缓冲区。

offset - 缓冲区写入的写入偏移量。

length - 要从文件中读取的字节数。

position - 文件读取的起始位置，如果 position 的值为 null，则会从当前文件指针的位置读取。

callback - 回调函数，有三个参数err, bytesRead, buffer，err 为错误信息， bytesRead 表示读取的字节数，buffer 为缓冲区对象。

## 五 关闭文件
以下为异步模式下关闭文件的语法格式：
> fs.close(fd, callback)
### 参数
fd - 通过 fs.open() 方法返回的文件描述符。
callback - 回调函数，没有参数。

## 六 截取文件
### 语法
fs.ftruncate(fd, len, callback)
### 参数
fd - 通过 fs.open() 方法返回的文件描述符。
len - 文件内容截取的长度。
callback - 回调函数，没有参数。

## 七 删除
### 语法
fs.unlink(path, callback)
### 参数
path - 文件路径。
callback - 回调函数，没有参数。

## 八 创建目录
### 语法
fs.mkdir(path[, options], callback)

### 参数
path - 文件路径。
options 参数可以是：
recursive - 是否以递归的方式创建目录，默认为 false。
mode - 设置目录权限，默认为 0777。
callback - 回调函数，没有参数。

可以添加 recursive: true 参数，不管创建的目录 /tmp 和 /tmp/a 是否存在：

## 九 读取目录 删除目录
### 读取
fs.readdir(path, callback)
#### 读取目录参数
path - 文件路径。
callback - 回调函数，回调函数带有两个参数err, files，err 为错误信息，files 为 目录下的文件数组列表。

### 删除
fs.rmdir(path, callback)

#### 删除目录参数
path - 文件路径。
callback - 回调函数，没有参数。