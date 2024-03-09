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


1. İlk olarak `bulMedyan` fonksiyonu tanımlanıyor ve `dizi1` ve `dizi2` isimli iki adet parametre alıyor.
2. `birlestirilmisDizi` isimli bir değişken oluşturuluyor ve spread operatörü kullanılarak `dizi1` ve `dizi2` dizileri birleştiriliyor. Daha sonra bu birleştirilmiş dizi küçükten büyüğe doğru sıralanıyor.
3. `ortancaIndex` isimli değişkene, birleştirilmiş dizinin uzunluğunun yarısının alınarak aşağıya yuvarlanmış değeri atanıyor.
4. Eğer birleştirilmiş dizi uzunluğunun 2'ye bölümünden kalan 0 ise (yani çift sayıda elemana sahipse):
   - Fonksiyon, `birlestirilmisDizi` dizisinin ortanca iki elemanının ortalamasını döndürüyor.
5. Değilse (yani tek sayıda elemana sahipse):
   - Fonksiyon, `birlestirilmisDizi` dizisinin ortanca elemanını döndürüyor.
6. `dizi1` ve `dizi2` isimli iki dizi tanımlanıyor.
7. "Output 2:" ifadesi ekrana yazdırılıyor.
8. `bulMedyan` fonksiyonu `dizi1` ve `dizi2` dizilerini parametre olarak alarak çağrılıyor ve sonuç konsola yazdırılıyor.

