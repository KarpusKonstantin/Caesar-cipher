# Ceasar Cipher CLI

Приложение командной строки. 

## Как настроить

1. Скачать код с репозитория
2. Запустить "npm install"
3. Готово к использованию

# Как использовать

После установки npm пакетов зайдите в папку Ceasar-cipher

```bash
$ cd Ceasar-cipher
```

После этого введите в командой строке "node ceasar-start-cli [options]", опции могу принимать следующие значения:

* -s, --shift: сдвиг (положительное, целое число)
* -i, --input: путь к входному файлу ("./input.txt")
* -o, --output: путь к выходному файлу ("./output.txt")
* -a, --action: действие encode/decode

Пример:

```bash
$ node ceasar-start-cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
```

Before:

> input.txt This is secret. Message about "_" symbol! Привет!!!!

After:

> output.txt Aopz pz zljyla. Tlzzhnl hivba "_" zftivs! Привет!!!!

