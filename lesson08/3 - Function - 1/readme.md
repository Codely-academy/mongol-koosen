# Хичээл 08 - 3: Функц

JavaScript функц нь дахин хэрэглэх боломжтой тодорхой үйлдлийг гүйцэтгэхэд зориулагдсан багц кодууд юм.
 
### Функцийг зарлах (тодорхойлж өгөх) 
```sh
const greeting = () => {
  console.log('Hello function');
} 
```
### Функцийг ажиллуулах
```sh
greeting();
# Үр дүнд нь 'Hello function' гэж console-руу хэвлэнэ.
```

### 1. Гаднаас параметр дамжуулдаг функц

```sh
# Дугуй хаалтан дотор байгаа x, y нь энэ функцийн параметр болно.
const sum = (x,y) =>{   
  # функц-д return үйлдэл байхгүй бол үр дүн буцаахгүй.
 return x + y;  
}
# Бичсэн функцаа ашиглахдаа параметруудын оронд утга өгч ашиглана
sum(3,2) 
# Үр дүн: 5
sum(3)
# Үр дүн: NaN буюу 3 + undefined
sum(3,2,5,4)
# Үр дүн: 5 буюу эхний 2 утгийг аваад бусдыг ашиглахгүй
```

- Жишээ нь:
  ![Alt text](image.png)
  ![Alt text](image-1.png)
  ![Alt text](image-4.png)
  ![Alt text](image-3.png)

### 2. Анхны утгатай параметр

![Alt text](image-2.png)

### 3. Local vs Global scope: Хамрах хүрээ

```sh
let globalVariable = 'энэ бол глобал хувьсагч';

const myFunction = () => {
    let localVariable = 'энэ бол локал хувьсагч';
    console.log(localVariable); // Output: энэ бол локал хувьсагч
    console.log(globalVariable); // Output: энэ бол глобал хувьсагч
}
console.log(globalVariable); // Output: энэ бол глобал хувьсагч
console.log(localVariable); // Error: localVariable is not defined
```

# Дасгал ажил:

### 1. Өгөгдсөн илэрхийллийн утгыг олдог "calculate" нэртэй функц бич. A=B\*C-D ( B, C, D утгийг гараас авна)

- Илэрхийллийн бичиглэлийг өөрчлөхгүйгээр зөвхөн B,C,D-н утгыг өөрчлөхөд илэрхийллийн хариу үнэн байхаар хийнэ. Хариугаа console.log ашиглан шалгаарай.
- ![Alt text](image-5.png)
- ![Alt text](image-6.png)

### 2. Гараас хоног, цаг өгсөн бол нийт цаг болохыг олдог "totalTime" нэртэй функц бичээрэй.

- day буюу хоног, time буюу цаг өгсөн 2 хувьсагч байх ба нийт хэдэн цаг байгааг тооцон totalTime хувьсагчид хадгалан console.log ашиглан харуулаарай.
- ![Alt text](image-7.png)
- ![Alt text](image-8.png)

### 3. Гараас өгсөн 2 тооны ихийг олж буцаадаг "max" нэртэй функц бич

- ![Alt text](image-9.png)
- ![Alt text](image-10.png)

### 4. Тэгш өнцөгтийн урт өргөнийг авч талбайг нь олдог calculateArea нэртэй функц бич.

- ![Alt text](image-13.png)
- ![Alt text](image-14.png)


### 5. Өгсөн онооны үсгэн үнэлгээг олдог "checkPoint" нэртэй функц бич

      - 90 : 'A'
      - 80 - 89: 'B'
      - 70 - 79: 'C'
      - 60 - 69: 'D'
      - < 60 : 'F'
      функц дээрхийн дагуу console руу хэвлэх ёстой.

- ![Alt text](image-11.png)
- ![Alt text](image-12.png)


### 6. Массив авч массив доторхи хамгийн их элементийг олдог findLargestElement нэртэй функц бич.

- ![Alt text](image-15.png)
- ![Alt text](image-16.png)

### 7. Массив авч элементүүдийг тонгоргож бичдэг reverseArray нэртэй функц бич.

- ![Alt text](image-17.png)
- ![Alt text](image-18.png)

### Нэмэлт: Массив авч өгөгдсөн элементүүдийг багаас их рүү нь эрэмбэлдэг sortArray нэртэй функц бич.

- ![Alt text](image-19.png)
- ![Alt text](image-20.png)
