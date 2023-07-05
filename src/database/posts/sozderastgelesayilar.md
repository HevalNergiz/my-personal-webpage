# Rastgeleliğin İllüzyonu: Sözde Rastgele Sayılar

Belki Siri'den zar atmasını istemişsinizdir ya da rastgele bir değer üreten bir programla karşılaşmışsınızdır. Peki, girdi ve çıktıları kesin olan bir sistemden gerçekten rastgele bir sayı elde edebilir miyiz? Ne yazık ki hayır. Elde ettiğimiz bu çıktılar aslında sadece rastgele gibi görünen ve genellikle **pseudo-rastgele** (yani "sözde rastgele") olarak adlandırılan sayılardır.

**Pseudo-rastgele sayı üreteci (PRNG)**, belirli bir **tohum** (seed) değeri alır ve bu tohumdan yola çıkarak bir sayı dizisi oluşturur. Aynı tohum kullanıldığında, üretilen sayı dizisi de aynı olur. Bu yüzden, tohum değeri program her çalıştığında değişken olmalıdır. Genellikle sistem saatini bu değişken değer olarak kullanırız. Fakat daha fazla rastlantısallığa ihtiyaç duyduğumuz durumlarda, donanım tabanlı rastgele sayı üreteçleri kullanılır ki bunlar, radyo gürültüsü gibi fiziksel rastgele süreçlerden veya klavye ve fare gibi kullanıcı girişlerinden veri alabilirler.

PRNG algoritmaları genellikle, matematiksel veya bit düzeyi işlemlerle rastgele sayılar oluşturur. Bu konuda en basit örnek, Doğrusal Kongrüensel Üreteç (LCG) olabilir. Bu algoritmayı aşağıdaki formülle temsil edebiliriz:

X(n+1) = (a \* X(n) + c) mod m

Bu formülde:

- X(n+1), bir sonraki rastgele sayıyı temsil eder.
- X(n), mevcut rastgele sayıdır (ilk değer olarak tohum kullanılır).
- a, c ve m, pozitif tam sayılardır ve bu değerler üretecin özelliklerini belirler.

Aşağıdaki kod örneği, C dili kullanılarak yazılmıştır ve LCG metodunu kullanarak 'rastgele' 10 adet sayı oluşturur:

```C
#include <stdio.h>
#include <time.h>

// LCG parametreleri
#define a 1103515245
#define c 12345
#define m 2147483648  // 2^31

unsigned int seed;  // başlangıç tohumu

unsigned int lcg_rand() {
    seed = (a * seed + c) % m;
    return seed;
}

int main() {
    // Sistem saatini
    //tohum değeri olarak kullan
    seed = time(NULL);

    for(int i = 0; i < 10; i++) {
        printf("%u\n", lcg_rand());
    }
    return 0;
}

```

Bu kod, sistem saatini kullanarak rastgele bir tohum değeri oluşturur ve bu tohum değerini LCG algoritmasıyla rastgele sayılar üretmek için kullanır. Dolayısıyla, her seferinde sistem saati farklı bir değer olduğu için farklı rastgele sayılar elde ederiz.

Sonuç olarak, bu da bir illüzyondan ibarettir: "Rastgeleliğin İllüzyonu".
