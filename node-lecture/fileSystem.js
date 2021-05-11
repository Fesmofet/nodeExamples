const fs = require('fs')
/**
 *  принимает три параметра
 *  путь к файлу;
 *  кодировка;
 *  callback-функция, вызываемая после получения содержимого файла.
 */

// fs.readFile(`${__dirname}/wobj.json`, {encoding: 'utf8'}, (err,data) => {
//   if(err){
//     //do something
//   }
//   console.log(data)
// })
// try {
//   const content = fs.readFileSync(`${__dirname}/wobj.json`, 'utf8')
//   console.log(content)
//
// } catch (error) {
//   console.log(error)
// }

/**
 * Методы readFile() и readFileSync() для работы с файлами используют Buffer.
 *  Но есть и другой способ считать содержимое файла: создать поток с помощью Node.js
 *  fs.createReadStream(). Любой поток в Node.js является экземпляром класса
 *  EventEmitter, который позволяет обрабатывать возникающие в потоке события.
 */

// const stream = fs.createReadStream(`${__dirname}/wobj.json`, 'utf8')
// stream.on('data', (data) => console.log(data))
// stream.on('error', (err) => console.log(`Err: ${err}`))

/**
 * Использование потока имеет ряд преимуществ перед Buffer:
 * Меньшее использование памяти за счет чтения содержимого по частям;
 * Для объемных файлов время между запросом и ответом существенно сокращается
 * за счет того, что данные начинают поступать по частям, а не после полной загрузки;
 * озможность перенаправить данные в другой поток с помощью метода pipe().
 */
// fs.readdir(__dirname, 'utf8', (err, files) => {
//   if (err) throw err
//
//   console.log(files)
// })
//
// try {
//   const files = fs.readdirSync(__dirname, 'utf8')
//   console.log(files)
// } catch (e) {
//   console.log(e)
// }
/**
 * В Node.js файлы могут быть записаны также синхронно и асинхронно.
 * Для асинхронной записи имеется метод writeFile(), принимающий следующие аргументы:
 */
// fs.writeFile(
//   `${__dirname}/data.txt`,
//   'File Yo',
//   'utf8',
//   (err) => {
//     if (err) throw err
//
//     console.log('Done')
//   }
// )

// try {
//   fs.writeFileSync(`${__dirname}/data.txt`, 'File Content', 'utf8')
//   console.log('Done')
// } catch (e) {
//   console.log(e)
// }

/**
 * Методы writeFile() и writeFileSync() перезаписывают уже имеющуюся в файле
 * информацию новыми данными. Если вам нужно внести новые данные без удаления
 * старых, используйте методы appendFIle() и appendFileAsync(), которые имеют
 * идентичные параметры.
 */
// fs.appendFile(
//   `${__dirname}/data.txt`,
//   '\nFile Content 2',
//   'utf8',
//   (err) => {
//     if (err) throw err
//
//     console.log('Done')
//   }
// )

/**
 * Для записи файла через потока ввода имеется метод fs.createWriteStream(),
 * который возвращает поток ввода и принимает два параметра:
 * путь к файлу;
 * объект со следующими настройками:
 */

const writeStream = fs.createWriteStream(
  `${__dirname}/data.txt`,
  'utf8'
)

writeStream.on('error', (err) => console.log(`Err: ${err}`))
writeStream.on('finish', () => console.log('Done'))

writeStream.write('First line')
writeStream.end()
