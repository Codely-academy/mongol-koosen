# Click speed тоглоом 2

### Хичээлийн бичлэг: <https://youtu.be/n8YStE5nsZM>
 
### NaN: Not a number буюу тоо биш гэсэн утгатай.
- isNaN() функцийг ашиглан NaN утгатай байна уу шалгаж болно.
```jsx
// Хэрэв clickSec NaN утгатай байх юм бол 0 үгүй бол утгийг нь буцаана
const clickSec = (daralt / second * 1000).toFixed(2)
isNan(clickSec) ? 0 : clickSec
```
### setState: Яг өөрчлөхийн өмнөх утгаа ашиглан утгаа шинэчлэх. Жишээ нь өмнөх second дээр 10-г нэмэгдүүлэх. 
```jsx 
  setSecond(second => second + 10);
```

### Товч дарсан үед css ажиллуулах :active. my-button товчийг дарах үед шар өнгөтэй болгох.

```css
.my-button:active{
  background: gold;
}
```

### Дасгал ажил:

1. NaN текстийг засах.
2. Товч дарах үед эвтэйхэн харуулах: :active
3. Тоглоомыг 2 секунд болчихвол зогсоодог болгох.
  - Хугацааг зогсоох: clearInterval
  - Даралтыг зогсоох: 
4. Ranking: Click/s буюу секундэд хэдэн удаа дарсан хурдыг ашиглан үнэлгээ өгөх

```jsx 
const ranking_names= {
    "slow": "Эмгэн хумс 🐌",
    "moderate": "Яст мэлхий🐢",
    "average": "Туулай🐰",
    "sonic_speed": "Супер соник🔥",
    "flash": "Марвел флаш⚡",
  };

```
 
 


Линк: <https://clickspeedtest.net/>
