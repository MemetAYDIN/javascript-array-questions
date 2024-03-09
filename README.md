# javascript-array-questions
Reverse sum for two arrays and find medyan for two arrays

Question 1;
Bu kod bir toplama fonksiyonu oluşturur. Fonksiyon, iki farklı dizi a ve b'yi toplar ve sonucu döndürür. 

1. `const result = [];` : Boş bir dizi olan 'result' oluşturulur.
2. `let carry = 0;` : 'carry' adında bir değişken oluşturulur ve başlangıçta 0 değeri atanır.
3. `const length = Math.max(a.length, b.length);` : 'a' ve 'b' dizilerinin uzunlukları arasından maximum olan değer 'length' değişkenine atanır.
4. 'for' döngüsü, her iki dizinin elemanlarını sırayla toplar ve sonuçları 'result' dizisine ekler.
5. `for (let i = 0; i < length; i++) { ... }` : 0'dan 'length' değerine kadar olan her bir i için bir döngü oluşturulur.
6. 'sum' değişkeni, i. elemanları alır ve 'a' veya 'b' dizilerinde eleman yoksa 0 alır ve taşıma değeri ile toplar.
7. `const sum = (a[i] || 0) + (b[i] || 0) + carry;` : 'a' ve 'b' dizilerinin i. elemanlarını toplar, taşıma değeri ekler ve sonucu 'sum' değişkenine atar.
8. 'result' dizisinin sonuna, 'sum' değişkeninin mod 10'unu ekler.
9. `result.push(sum % 10);` : 'sum' değerinin 10'a bölümünden kalan (mod) 'result' dizisine eklenir.
10. 'sum' değeri 10 veya büyükse 'carry' değişkenine 1 atanır.
11. `carry = sum >= 10 ? 1 : 0;` : 'sum' değeri 10 veya daha fazla ise 'carry' değerine 1, değilse 0 atanır.
12. Son olarak, eğer hala 'carry' taşıma değeri varsa, bu değer de 'result' dizisine eklenir.
13. `if (carry) { result.push(carry); }` : 'carry' değişkeninin 0 dışında olduğu durumda 'result' dizisine ekler.
14. Fonksiyon, 'result' dizisini döndürür.
15. `return result;` : 'result' dizisini döndürür.
16. Kodun çıktısı şudur: '[1, 0, 7]', yani [5, 6, 1] ve [6, 3, 5] dizilerinin toplamı [1, 0, 7]'dir.


Question 2;


1. `bulMedyan` adında bir fonksiyon tanımlanmıştır. Bu fonksiyon, iki adet dizi alır (dizi1 ve dizi2).
2. `birlestirilmisDizi` adında bir değişken oluşturulmuş ve `spread` operatörü kullanılarak `dizi1` ve `dizi2` dizilerinin elemanları birleştirilmiştir. Daha sonra bu birleştirilmiş dizi küçükten büyüğe doğru sıralanmıştır.
3. `ortancaIndex` değişkenine, `birlestirilmisDizi` dizisinin uzunluğunun yarısının tam sayı bölümü atanmıştır.
4. Fonksiyon içerisinde ternary operatörü kullanılarak, birleştirilmiş dizi eleman sayısının çift mi yoksa tek mi olduğu kontrol edilir. Eğer çiftse, ortadaki iki elemanın aritmetik ortalaması hesaplanarak döndürülür. Eğer tekse, ortanca eleman döndürülür.
5. `dizi1` ve `dizi2` değişkenleri tanımlanmış ve her biri 2 eleman içeren bir dizi oluşturulmuştur.
6. `console.log("Output 2:");` ile konsola "Output 2:" metni yazdırılmıştır.
7. `bulMedyan` fonksiyonu çağrılarak, dizi1 ve dizi2 dizileri fonksiyona parametre olarak verilmiş ve fonksiyonun sonucu konsola yazdırılmıştır.

