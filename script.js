(function(){
"use strict";
/* ---------- i18n ---------- */
var T={
ru:{
title:"Шаңырақ Café — меню, акции и онлайн-заказ в Алматы",
desc:"Кафе «Шаңырақ» в Алматы: казахская и европейская кухня, бешбармак, лагман, манты, десерты. Меню с ценами, акции, онлайн-заказ и бронирование стола.",
nav_menu:"Меню",nav_special:"Акции",nav_about:"О нас",nav_reviews:"Отзывы",nav_contacts:"Контакты",cart_btn:"Корзина",
open_now:"Открыто сегодня до 23:00",
hero_t:"Вкус дастархана в каждой тарелке",
hero_s:"Казахская и европейская кухня, свежие продукты и тёплая атмосфера. Закажите онлайн: привезём горячим за 40 минут.",
cta_menu:"Смотреть меню",cta_book:"Забронировать стол",
st1:"блюд в меню",st2:"минут доставка",st3:"оценка гостей",
menu_t:"Наше меню",menu_s:"Выберите раздел, добавьте блюда в корзину и оформите заказ. У каждой позиции указаны цена и вес порции.",
search_ph:"Найти блюдо, например «лагман»",
f_all:"Все",f_h:"🔥 Хиты",f_v:"🌿 Вегетарианское",f_s:"🌶️ Острое",f_n:"✨ Новинки",
tg_h:"Хит",tg_v:"Вегетарианское",tg_s:"Острое",tg_n:"Новинка",
empty:"Ничего не нашли. Попробуйте другое слово или сбросьте фильтр.",
add:"В корзину",alc:"Только для лиц старше 18 лет. Чрезмерное употребление алкоголя вредит вашему здоровью.",
sp_t:"Акции и спецпредложения",sp_s:"Выгодно, вкусно и по-домашнему.",sp_btn:"Добавить в корзину",
ab_t:"Душа казахской кухни",
ab_p:"«Шаңырақ» — это место, где собираются семьи и друзья. Мы готовим по домашним рецептам, берём мясо у местных фермеров, а хлеб и баурсаки пекём каждое утро.",
ab1_t:"Халяль",ab1_p:"Всё мясо халяль, от проверенных поставщиков.",
ab2_t:"Свежее каждый день",ab2_p:"Продукты привозят утром, заготовок на завтра мы не делаем.",
ab3_t:"Для всей семьи",ab3_p:"Детская зона, высокие стульчики и просторные залы для праздников.",
c1:"лет с вами",c2:"довольных гостей",c3:"блюд в меню",c4:"средняя оценка",
rv_t:"Нам доверяют",rv_s:"Что говорят гости о «Шаңырақ».",
ct_t:"Контакты и бронирование",ct_s:"Приходите в гости или забронируйте стол заранее.",
bk_t:"Забронировать стол",f_name:"Ваше имя",f_phone:"Телефон",bk_date:"Дата",bk_time:"Время",bk_guests:"Количество гостей",bk_btn:"Забронировать",
bk_ok:"Стол забронирован! Мы позвоним, чтобы подтвердить.",
e_name:"Введите имя",e_phone:"Введите телефон, минимум 10 цифр",e_date:"Выберите дату",e_addr:"Укажите адрес доставки",e_fb:"Напишите пару слов",
addr_t:"Как нас найти",addr:"г. Алматы, пр. Достык, 100",addr_s:"Рядом с остановкой «Площадь Республики»",hrs:"Ежедневно 09:00–23:00",hrs_s:"Кухня работает до 22:30",
fb_t:"Оставьте отзыв",fb_ph:"Что понравилось и что можно улучшить?",fb_btn:"Отправить отзыв",fb_ok:"Спасибо за отзыв! Мы читаем каждый.",
foot:"Меню и цены действительны на сегодня",
cart_t:"Ваш заказ",cart_empty:"Корзина пуста. Добавьте что-нибудь вкусное из меню.",
ty_del:"Доставка",ty_pick:"Самовывоз",ty_hall:"В зале",f_addr:"Адрес доставки",f_note:"Комментарий к заказу",
sum:"Сумма заказа",delv:"Доставка",free:"бесплатно",total:"Итого",place:"Оформить заказ",remove:"Удалить",
ok_t:"Заказ принят!",ok_num:"Номер заказа",eta_del:"Курьер привезёт заказ примерно через 40–50 минут.",eta_pick:"Заказ будет готов через 20 минут.",eta_hall:"Официант подаст блюда через 15–20 минут.",
demo:"Это демо-версия: данные не отправляются на сервер.",close:"Закрыть",bk_ok_t:"Бронь принята",
g:"г",ml:"мл",items:"поз."
},
kk:{
title:"Шаңырақ Café — мәзір, акциялар және онлайн-тапсырыс (Алматы)",
desc:"Алматыдағы «Шаңырақ» кафесі: қазақ және еуропалық асхана, бешбармақ, лағман, мәнті, тәттілер. Бағасы бар мәзір, акциялар, онлайн-тапсырыс және үстел брондау.",
nav_menu:"Мәзір",nav_special:"Акциялар",nav_about:"Біз туралы",nav_reviews:"Пікірлер",nav_contacts:"Байланыс",cart_btn:"Себет",
open_now:"Бүгін 23:00-ге дейін ашық",
hero_t:"Дастархан дәмі әр табақта",
hero_s:"Қазақ және еуропалық асхана, балғын өнімдер және жылы атмосфера. Онлайн тапсырыс беріңіз: 40 минутта ыстықтай жеткіземіз.",
cta_menu:"Мәзірді көру",cta_book:"Үстел брондау",
st1:"мәзірдегі тағам",st2:"минутта жеткізу",st3:"қонақтар бағасы",
menu_t:"Біздің мәзір",menu_s:"Бөлімді таңдаңыз, тағамдарды себетке салыңыз да, тапсырыс беріңіз. Әр тағамның бағасы мен салмағы көрсетілген.",
search_ph:"Тағамды іздеу, мысалы «лағман»",
f_all:"Барлығы",f_h:"🔥 Хиттер",f_v:"🌿 Вегетариандық",f_s:"🌶️ Ащы",f_n:"✨ Жаңалықтар",
tg_h:"Хит",tg_v:"Вегетариандық",tg_s:"Ащы",tg_n:"Жаңа",
empty:"Ештеңе табылмады. Басқа сөз енгізіп көріңіз немесе сүзгіні тазалаңыз.",
add:"Себетке",alc:"Тек 18 жастан асқандарға. Алкогольді шамадан тыс ішу денсаулыққа зиян.",
sp_t:"Акциялар мен арнайы ұсыныстар",sp_s:"Тиімді, дәмді әрі үйдегідей.",sp_btn:"Себетке қосу",
ab_t:"Қазақ асханасының жаны",
ab_p:"«Шаңырақ» — отбасы мен достар жиналатын орын. Біз үйдің рецептімен дайындаймыз, етті жергілікті фермерлерден аламыз, ал нан мен бауырсақты күн сайын таңертең пісіреміз.",
ab1_t:"Халал",ab1_p:"Барлық ет халал, сенімді жеткізушілерден.",
ab2_t:"Күн сайын балғын",ab2_p:"Өнімдер таңертең келеді, ертеңге дайындама жасамаймыз.",
ab3_t:"Бүкіл отбасыға",ab3_p:"Балалар ойын аймағы, балаларға арналған орындықтар және мерекеге арналған кең залдар.",
c1:"жыл сіздермен",c2:"риза қонақ",c3:"мәзірдегі тағам",c4:"орташа баға",
rv_t:"Бізге сенеді",rv_s:"Қонақтар «Шаңырақ» туралы не дейді.",
ct_t:"Байланыс және брондау",ct_s:"Қонаққа келіңіз немесе үстелді алдын ала брондаңыз.",
bk_t:"Үстел брондау",f_name:"Атыңыз",f_phone:"Телефон",bk_date:"Күні",bk_time:"Уақыты",bk_guests:"Қонақ саны",bk_btn:"Брондау",
bk_ok:"Үстел брондалды! Растау үшін қоңырау шаламыз.",
e_name:"Атыңызды енгізіңіз",e_phone:"Телефон нөмірін енгізіңіз, кемінде 10 сан",e_date:"Күнді таңдаңыз",e_addr:"Жеткізу мекенжайын жазыңыз",e_fb:"Бірнеше сөз жазыңыз",
addr_t:"Бізді қалай табуға болады",addr:"Алматы қ., Достық даңғ., 100",addr_s:"«Республика алаңы» аялдамасының жанында",hrs:"Күн сайын 09:00–23:00",hrs_s:"Асхана 22:30-ға дейін жұмыс істейді",
fb_t:"Пікір қалдырыңыз",fb_ph:"Не ұнады және нені жақсартуға болады?",fb_btn:"Пікір жіберу",fb_ok:"Пікіріңіз үшін рахмет! Біз бәрін оқимыз.",
foot:"Мәзір мен бағалар бүгінге жарамды",
cart_t:"Тапсырысыңыз",cart_empty:"Себет бос. Мәзірден дәмді бірдеңе қосыңыз.",
ty_del:"Жеткізу",ty_pick:"Өзі алып кету",ty_hall:"Залда",f_addr:"Жеткізу мекенжайы",f_note:"Тапсырысқа түсініктеме",
sum:"Тапсырыс сомасы",delv:"Жеткізу",free:"тегін",total:"Барлығы",place:"Тапсырыс беру",remove:"Жою",
ok_t:"Тапсырыс қабылданды!",ok_num:"Тапсырыс нөмірі",eta_del:"Курьер тапсырысты шамамен 40–50 минутта әкеледі.",eta_pick:"Тапсырыс 20 минутта дайын болады.",eta_hall:"Даяшы тағамдарды 15–20 минутта әкеледі.",
demo:"Бұл демо-нұсқа: деректер серверге жіберілмейді.",close:"Жабу",bk_ok_t:"Брондау қабылданды",
g:"г",ml:"мл",items:"тағам"
}};

/* ---------- data ---------- */
var CATS=[
 {k:"z",e:"🥟",h:28, ru:"Закуски",kk:"Тіскебасарлар"},
 {k:"s",e:"🥗",h:120,ru:"Салаты",kk:"Салаттар"},
 {k:"p",e:"🍲",h:20, ru:"Первые блюда",kk:"Бірінші тағамдар"},
 {k:"m",e:"🍖",h:6,  ru:"Вторые блюда",kk:"Екінші тағамдар"},
 {k:"d",e:"🍰",h:330,ru:"Десерты",kk:"Тәттілер"},
 {k:"b",e:"🍵",h:195,ru:"Напитки",kk:"Сусындар"},
 {k:"a",e:"🍷",h:350,ru:"Алкогольные напитки",kk:"Алкогольді сусындар"}
];
/* [emoji, ru, kk, ruDesc, kkDesc, price, qty, unit, tags(h=hit v=veg s=spicy n=new)] */
var RAW={
z:[
["🥩","Казы-карта ассорти","Қазы-қарта ассорти","Домашние казы и карта, лук, зелень","Үйдің қазысы мен қартасы, пияз, көк",2450,150,"g","h"],
["🥟","Самса с бараниной","Қой етінен самса","Две хрустящие самсы из слоёного теста с луком","Қабатты қамырдан екі қытырлақ самса, пияз қосылған",1200,220,"g","h"],
["🍩","Баурсаки с каймаком","Қаймақпен бауырсақ","Горячие золотистые баурсаки, каймак и мёд","Ыстық алтын бауырсақ, қаймақ және бал",990,180,"g","v"],
["🍞","Брускетта с лососем","Албырт балықты брускетта","Хрустящий багет, сливочный сыр, слабосолёный лосось","Қытырлақ багет, кілегейлі ірімшік, аздап тұздалған албырт",1790,160,"g","n"],
["🧆","Хумус с лавашом","Лаваш қосқан хумус","Нежный нутовый хумус, оливковое масло, тёплый лаваш","Жұмсақ ноқат хумусы, зәйтүн майы, жылы лаваш",1390,200,"g","v"],
["🧀","Сырные палочки","Ірімшік таяқшалары","Моцарелла в хрустящей панировке, клюквенный соус","Қытырлақ қабығындағы моцарелла, мүкжидек тұздығы",1490,150,"g","v"],
["🍗","Крылышки BBQ","BBQ тауық қанаттары","Глазированные в соусе барбекю, подаются с сельдереем","Барбекю тұздығында қуырылған, балдыркөкпен беріледі",2190,250,"g","s"],
["🍆","Баклажаны с орехами","Жаңғақты баялды","Жареные баклажаны, грецкий орех, чеснок, гранат","Қуырылған баялды, грек жаңғағы, сарымсақ, анар",1590,180,"g","v"]
],
s:[
["🥗","Цезарь с курицей","Тауық етті Цезарь","Романо, куриное филе гриль, пармезан, гренки","Романо, грильдегі тауық филесі, пармезан, сухарик",2190,230,"g","h"],
["🥒","Греческий салат","Грек салаты","Томаты, огурцы, фета, маслины, красный лук","Қызанақ, қияр, фета, зәйтүн, қызыл пияз",1890,220,"g","v"],
["🥩","Ташкент","Ташкент салаты","Говядина, зелёная редька, морковь, лук, пряный соус","Сиыр еті, жасыл шалғам, сәбіз, пияз, дәмдеуішті тұздық",2290,210,"g","h"],
["🍅","Овощной «Дастархан»","«Дастархан» көкөніс салаты","Хрустящие сезонные овощи, свежая зелень, льняное масло","Маусымдық қытырлақ көкөністер, балғын көк, зығыр майы",1390,200,"g","v"],
["🥔","Оливье по-домашнему","Үйдегідей оливье","Классика с отварной курицей и зелёным горошком","Қайнатылған тауық еті мен жасыл бұршақ қосылған классика",1590,200,"g",""],
["🥬","Руккола с говядиной","Рукколалы сиыр еті салаты","Тёплая говядина, руккола, черри, бальзамик, пармезан","Жылы сиыр еті, руккола, черри, бальзамик, пармезан",2590,220,"g","n"],
["🍤","Креветки с авокадо","Асшаян мен авокадо салаты","Тигровые креветки, авокадо, манго, цитрусовая заправка","Жолақты асшаян, авокадо, манго, цитрус тұздығы",2890,210,"g","n"],
["🧀","Свёкла с козьим сыром","Ешкі ірімшігі қосылған қызылша","Запечённая свёкла, козий сыр, грецкий орех, мёд","Пісірілген қызылша, ешкі ірімшігі, грек жаңғағы, бал",1990,190,"g","v"]
],
p:[
["🍜","Лагман","Лағман","Тянутая лапша, говядина, болгарский перец, насыщенный бульон","Созылған кеспе, сиыр еті, болгар бұрышы, қою сорпа",2190,400,"g","h"],
["🍲","Шурпа из баранины","Қой етінен шұрпа","Наваристый бульон, картофель, морковь, свежая зелень","Қою сорпа, картоп, сәбіз, балғын көк",2390,400,"g","h"],
["🥣","Борщ с пампушками","Пампушкамен борщ","Говядина, свёкла, капуста, сметана и чесночные пампушки","Сиыр еті, қызылша, қырыққабат, қаймақ және сарымсақты пампушка",1790,400,"g",""],
["🍗","Куриная лапша","Тауық етті кеспе сорпа","Домашняя лапша, куриный бульон, яйцо, зелень","Үйдің кеспесі, тауық сорпасы, жұмыртқа, көк",1490,350,"g",""],
["🍄","Грибной крем-суп","Саңырауқұлақ крем-сорпасы","Шампиньоны, сливки, трюфельное масло, крутоны","Шампиньон, кілегей, трюфель майы, сухарик",1690,300,"g","v"],
["🥘","Солянка мясная","Етті солянка","Три вида мяса, оливки, лимон, сметана","Ет үш түрі, зәйтүн, лимон, қаймақ",2090,350,"g",""],
["🌶️","Харчо","Харчо","Острый суп с говядиной, рисом и грецким орехом","Сиыр еті, күріш және грек жаңғағы бар ащы сорпа",1990,350,"g","s"],
["🍛","Мастава","Мастава","Суп с рисом, бараниной и овощами","Күріш, қой еті және көкөніс қосылған сорпа",1890,400,"g",""]
],
m:[
["🍖","Бешбармак","Бешбармақ","Конина и говядина, домашняя лапша, лук, наваристый бульон","Жылқы мен сиыр еті, үйдің кеспесі, пияз, қою сорпа",3990,450,"g","h"],
["🥘","Куырдак","Қуырдақ","Обжаренная баранина с картофелем и луком по-казахски","Қазақша қуырылған қой еті, картоп және пияз",3190,350,"g","h"],
["🍚","Плов","Палау","Рассыпчатый рис, говядина, морковь, нут, чеснок","Борпылдақ күріш, сиыр еті, сәбіз, ноқат, сарымсақ",2590,350,"g",""],
["🥟","Манты","Мәнті","Пять паровых манты с бараниной и тыквой, сметана","Қой еті мен асқабақ қосылған бес бу мәнті, қаймақ",2290,300,"g","h"],
["🥩","Стейк рибай","Рибай стейкі","Мраморная говядина на гриле, картофель, перечный соус","Грильдегі мәрмәр сиыр еті, картоп, бұрыш тұздығы",8900,300,"g",""],
["🐟","Лосось на гриле","Грильдегі албырт","Стейк лосося, овощи гриль, лимонное масло","Албырт стейкі, грильдегі көкөніс, лимон майы",5490,280,"g","n"],
["🍗","Курица в сливочном соусе","Кілегейлі тұздықтағы тауық","Куриная грудка, сливочно-грибной соус, рис басмати","Тауық төсі, кілегей-саңырауқұлақ тұздығы, басмати күріші",2890,320,"g",""],
["🥟","Домашние пельмени","Үйдегі пельмендер","Лепим вручную: говядина и баранина, сметана, зелень","Қолдан жасалған: сиыр және қой еті, қаймақ пен көк",2190,300,"g",""]
],
d:[
["🍯","Медовик","Бал торты","Нежные медовые коржи и сметанный крем","Жұмсақ бал қабаттары және қаймақ кремі",1490,150,"g","h"],
["🍰","Чизкейк Нью-Йорк","Нью-Йорк чизкейгі","Классический сливочный чизкейк с ягодным соусом","Жидек тұздығымен классикалық кілегейлі чизкейк",1690,140,"g","v"],
["☕","Тирамису","Тирамису","Маскарпоне, савоярди, эспрессо и какао","Маскарпоне, савоярди, эспрессо және какао",1790,150,"g","h"],
["🥮","Наполеон","Наполеон","Хрустящие слои теста и заварной крем","Қытырлақ қамыр қабаттары және заварной крем",1390,160,"g","v"],
["🍨","Пломбир","Пломбир балмұздағы","Три шарика: ваниль, шоколад, клубника","Үш шар: ваниль, шоколад, құлпынай",990,120,"g","v"],
["🍯","Чак-чак с мёдом","Бал қосылған чак-чак","Традиционный десерт из хрустящих полосок теста с мёдом","Бал құйылған қытырлақ қамыр жолақтарынан жасалған дәстүрлі тәтті",1190,150,"g","v"],
["🍫","Шоколадный фондан","Шоколад фондан","Тёплый кекс с жидким центром и шариком мороженого","Ортасы сұйық жылы кекс және бір шар балмұздақ",1990,140,"g","n"],
["🍎","Яблочный штрудель","Алмалы штрудель","Тонкое тесто, яблоки, корица, ванильный соус","Жұқа қамыр, алма, даршын, ваниль тұздығы",1490,160,"g","v"]
],
b:[
["🥛","Айран","Айран","Освежающий холодный кисломолочный напиток","Салқын, сергітетін ұйытқы сусын",590,300,"ml","h"],
["🐪","Шубат","Шұбат","Натуральное верблюжье молоко с лёгкой кислинкой","Жеңіл қышқылтым табиғи түйе сүті",1190,300,"ml","n"],
["🐎","Кумыс","Қымыз","Кобылье молоко, ферментированное по традиции","Дәстүр бойынша ашытылған бие сүті",1090,300,"ml",""],
["🍵","Чай по-казахски","Сүтті қазақша шай","Крепкий чёрный чай с горячим молоком и маслом","Ыстық сүт пен май қосылған қою қара шай",790,500,"ml","h"],
["🫖","Чайник чая","Шай (шәйнек)","Чёрный, зелёный или фруктовый на выбор","Қара, жасыл немесе жеміс шайы таңдауыңызша",990,600,"ml",""],
["☕","Американо","Американо","Двойной эспрессо с горячей водой","Ыстық су қосылған қос эспрессо",890,250,"ml",""],
["☕","Капучино","Капучино","Эспрессо и нежная молочная пенка","Эспрессо және жұмсақ сүт көбігі",1190,300,"ml","h"],
["🥛","Латте","Латте","Много молока, мало кофе, ваниль по желанию","Сүт көп, кофе аз, қалауыңызша ваниль",1290,350,"ml",""],
["🍋","Домашний лимонад","Үйдегі лимонад","Лимон, мята, сода, лёд","Лимон, жалбыз, сода, мұз",1190,400,"ml",""],
["🍓","Ягодный морс","Жидек морсы","Клюква, смородина, малина, мало сахара","Мүкжидек, қарақат, таңқурай, қанты аз",790,300,"ml",""],
["🍊","Свежевыжатый апельсин","Жаңа сығылған апельсин шырыны","Сок из спелых апельсинов, без сахара","Піскен апельсиннен қантсыз шырын",1590,250,"ml","n"]
],
a:[
["🍷","Красное вино, бокал","Қызыл шарап, бокал","Мерло, сухое, Испания","Мерло, құрғақ, Испания",2490,150,"ml",""],
["🥂","Белое вино, бокал","Ақ шарап, бокал","Совиньон блан, сухое, Новая Зеландия","Совиньон блан, құрғақ, Жаңа Зеландия",2490,150,"ml",""],
["🍾","Игристое, бокал","Көпіршікті шарап, бокал","Просекко брют, Италия","Просекко брют, Италия",2790,150,"ml",""],
["🍺","Светлое пиво","Ашық сыра","Разливное, нефильтрованное","Құйма, сүзілмеген",1590,500,"ml",""],
["🍺","Тёмное пиво","Қара сыра","Бархатный вкус с нотами карамели","Карамель иісі бар барқыт дәм",1790,500,"ml",""],
["🥃","Коньяк","Коньяк","Выдержка 5 лет, с долькой лимона","5 жылдық, лимон тілімімен",2290,50,"ml",""],
["🥃","Виски","Виски","Односолодовый, выдержка 12 лет","Бір бидайлы, 12 жылдық",2790,50,"ml",""],
["🍹","Мохито","Мохито","Ром, лайм, мята, сода","Ром, лайм, жалбыз, сода",2990,300,"ml","h"],
["🍊","Апероль Шприц","Апероль Шприц","Апероль, просекко, апельсин","Апероль, просекко, апельсин",3290,300,"ml","n"],
["🍸","Водка","Арақ","Премиум, подаётся охлаждённой","Премиум, салқындатылып беріледі",990,50,"ml",""]
]};
var MENU=[],BYID={};
CATS.forEach(function(c){RAW[c.k].forEach(function(r,i){
  var o={id:c.k+(i+1),cat:c.k,h:c.h,e:r[0],ru:r[1],kk:r[2],rud:r[3],kkd:r[4],price:r[5],qty:r[6],unit:r[7],tags:r[8]};
  MENU.push(o);BYID[o.id]=o;
});});
BYID.c1={id:"c1",e:"🍱",ru:"Бизнес-ланч",kk:"Бизнес-ланч",price:2990};
BYID.c2={id:"c2",e:"👨‍👩‍👧‍👦",ru:"Семейный сет",kk:"Отбасылық сет",price:12900};

var SPECIALS=[
 {cls:"big c-blue",e:"🍱",ru:"Бизнес-ланч",kk:"Бизнес-ланч",rud:"Суп дня, горячее блюдо и напиток. Пн–Пт, с 12:00 до 16:00.",kkd:"Күн сорпасы, ыстық тағам және сусын. Дс–Жм, 12:00–16:00.",price:2990,old:4200,badge:"−29%",add:"c1"},
 {cls:"big c-red",e:"👨‍👩‍👧‍👦",ru:"Семейный сет",kk:"Отбасылық сет",rud:"Бешбармак на 4 персоны, 2 салата, самса и морс.",kkd:"4 адамға бешбармақ, 2 салат, самса және морс.",price:12900,old:16800,badge:"−23%",add:"c2"},
 {cls:"small c-gold",e:"☕",ru:"Счастливые часы",kk:"Бақытты сағаттар",rud:"−20% на кофе и десерты каждый день с 15:00 до 17:00.",kkd:"Күн сайын 15:00–17:00 аралығында кофе мен тәттіге −20%."},
 {cls:"small c-card",e:"🎂",ru:"День рождения",kk:"Туған күн",rud:"Десерт и свеча в подарок имениннику при заказе от 10 000 ₸.",kkd:"10 000 ₸-дан тапсырыс бергенде туған күн иесіне тәтті мен шам сыйға."},
 {cls:"small c-green",e:"💳",ru:"Бонусная карта",kk:"Бонус картасы",rud:"5% бонусами с каждого заказа, а в день рождения 10%.",kkd:"Әр тапсырыстан 5% бонус, ал туған күні 10%."},
 {cls:"small c-card",e:"🛵",ru:"Бесплатная доставка",kk:"Тегін жеткізу",rud:"По Алматы при заказе от 8 000 ₸. Меньше — 700 ₸.",kkd:"Алматы бойынша 8 000 ₸-дан тапсырыс бергенде. Одан аз болса — 700 ₸."}
];
var REVIEWS=[
 {n:"Айгерим К.",ru:"Бешбармак как у бабушки! Мясо нежное, бульон ароматный. Доставили горячим за 35 минут.",kk:"Бешбармақ әжемдікіндей! Еті жұмсақ, сорпасы хош иісті. 35 минутта ыстықтай жеткізді."},
 {n:"Дмитрий С.",ru:"Лагман и самса просто огонь. Персонал вежливый, зал уютный. Ходим семьёй каждые выходные.",kk:"Лағман мен самса керемет. Қызметкерлер сыпайы, зал жайлы. Демалыс сайын отбасымызбен барамыз."},
 {n:"Асель Т.",ru:"Брала семейный сет на день рождения мамы. Все были в восторге, а десерт в подарок стал приятным бонусом.",kk:"Анамның туған күніне отбасылық сет алдым. Бәрі риза болды, сыйға берілген тәтті жағымды бонус болды."}
];

/* ---------- state ---------- */
var $=function(s){return document.querySelector(s)},$$=function(s){return Array.prototype.slice.call(document.querySelectorAll(s))};
var lang="ru";try{lang=localStorage.getItem("lang")||(navigator.language&&navigator.language.indexOf("kk")===0?"kk":"ru")}catch(e){}
if(lang!=="ru"&&lang!=="kk")lang="ru";
var cart={};try{cart=JSON.parse(localStorage.getItem("cart")||"{}")||{}}catch(e){cart={}}
Object.keys(cart).forEach(function(k){if(!BYID[k]||!(cart[k]>0))delete cart[k]});
var st={cat:"z",q:"",f:"all"};
var t=function(k){return T[lang][k]!==undefined?T[lang][k]:(T.ru[k]||k)};
var money=function(n){return n.toLocaleString("ru-RU").replace(/[\u00a0\u202f]/g," ")+" ₸"};
var nm=function(o){return o[lang]};
var saveCart=function(){try{localStorage.setItem("cart",JSON.stringify(cart))}catch(e){}};
var toastT;function toast(m){var el=$("#toast");el.textContent=m;el.classList.add("show");clearTimeout(toastT);toastT=setTimeout(function(){el.classList.remove("show")},2600)}

/* ---------- language ---------- */
function applyLang(){
  document.documentElement.lang=lang;
  document.title=t("title");
  var md=document.querySelector('meta[name="description"]');if(md)md.setAttribute("content",t("desc"));
  $$("[data-i18n]").forEach(function(el){el.textContent=t(el.getAttribute("data-i18n"))});
  $$("[data-i18n-ph]").forEach(function(el){el.setAttribute("placeholder",t(el.getAttribute("data-i18n-ph")))});
  $$(".lang button").forEach(function(b){b.setAttribute("aria-pressed",String(b.getAttribute("data-lang")===lang))});
  renderChips();renderTabs();renderMenu();renderSpecials();renderReviews();renderTicker();renderCart();
}
$$(".lang button").forEach(function(b){b.addEventListener("click",function(){lang=b.getAttribute("data-lang");try{localStorage.setItem("lang",lang)}catch(e){}applyLang()})});

/* ---------- ticker ---------- */
function renderTicker(){
  var names=MENU.filter(function(m){return m.tags.indexOf("h")>-1}).map(function(m){return m[lang]});
  var h=names.map(function(n){return "<span>"+n+"</span>"}).join("");
  $("#ticker").innerHTML=h+h;
}

/* ---------- menu ---------- */
var FILTERS=[["all","f_all"],["h","f_h"],["v","f_v"],["s","f_s"],["n","f_n"]];
function renderChips(){
  $("#chips").innerHTML=FILTERS.map(function(f){return '<button class="chip" data-f="'+f[0]+'" aria-pressed="'+(st.f===f[0])+'">'+t(f[1])+'</button>'}).join("");
}
function renderTabs(){
  $("#tabs").innerHTML=CATS.map(function(c){return '<button class="tab" role="tab" data-cat="'+c.k+'" aria-selected="'+(!st.q&&st.cat===c.k)+'"><span>'+c.e+'</span>'+c[lang]+'</button>'}).join("");
}
var TAGS={h:["🔥","tg_h"],v:["🌿","tg_v"],s:["🌶️","tg_s"],n:["✨","tg_n"]};
function ctrl(id){
  var q=cart[id]||0;
  return q?'<div class="step"><button data-dec="'+id+'" aria-label="−">−</button><span>'+q+'</span><button data-inc="'+id+'" aria-label="+">+</button></div>':'<button class="add" data-add="'+id+'">'+t("add")+'</button>';
}
function renderMenu(){
  var q=st.q.trim().toLowerCase();
  var list=MENU.filter(function(m){
    if(q){ if((m.ru+" "+m.kk+" "+m.rud+" "+m.kkd).toLowerCase().indexOf(q)<0)return false }
    else if(m.cat!==st.cat)return false;
    if(st.f!=="all"&&m.tags.indexOf(st.f)<0)return false;
    return true;
  });
  $("#note18").classList.toggle("show",list.some(function(m){return m.cat==="a"}));
  if(!list.length){$("#grid").innerHTML='<div class="empty">'+t("empty")+'</div>';return}
  $("#grid").innerHTML=list.map(function(m,i){
    var tags=m.tags.split("").filter(Boolean).map(function(k){return '<span class="tag" title="'+t(TAGS[k][1])+'">'+TAGS[k][0]+' '+t(TAGS[k][1])+'</span>'}).join("");
    var cat=q?'<span class="catlbl">'+CATS.filter(function(c){return c.k===m.cat})[0][lang]+'</span>':"";
    return '<article class="dish" style="--i:'+Math.min(i,14)+';--h:'+m.h+'">'+
      '<div class="pic" aria-hidden="true"><span>'+m.e+'</span></div>'+
      '<div><div class="nm"><h3>'+m[lang]+'</h3><i class="lead"></i><b>'+money(m.price)+'</b></div>'+
      '<p>'+m[lang==="ru"?"rud":"kkd"]+'</p>'+
      '<div class="meta"><span class="w">'+m.qty+' '+t(m.unit)+'</span>'+tags+cat+'<span class="ctrl" data-ctrl="'+m.id+'">'+ctrl(m.id)+'</span></div></div></article>';
  }).join("");
}
$("#chips").addEventListener("click",function(e){var b=e.target.closest("[data-f]");if(!b)return;st.f=b.getAttribute("data-f");renderChips();renderMenu()});
$("#tabs").addEventListener("click",function(e){var b=e.target.closest("[data-cat]");if(!b)return;st.cat=b.getAttribute("data-cat");st.q="";$("#q").value="";renderTabs();renderMenu();b.scrollIntoView({inline:"center",block:"nearest",behavior:"smooth"})});
$("#q").addEventListener("input",function(e){st.q=e.target.value;renderTabs();renderMenu()});

/* ---------- specials / reviews ---------- */
function renderSpecials(){
  $("#bento").innerHTML=SPECIALS.map(function(s){
    var pr=s.price?'<div class="pr"><b>'+money(s.price)+'</b><s>'+money(s.old)+'</s></div><button class="btn gold" data-add="'+s.add+'" style="align-self:flex-start">'+t("sp_btn")+'</button>':"";
    return '<article class="sp '+s.cls+'">'+(s.badge?'<span class="tagbig">'+s.badge+'</span>':"")+'<span class="em">'+s.e+'</span><h3>'+s[lang]+'</h3><p>'+s[lang==="ru"?"rud":"kkd"]+'</p>'+pr+'</article>';
  }).join("");
}
function renderReviews(){
  $("#rv").innerHTML=REVIEWS.map(function(r){return '<blockquote><div class="stars" aria-label="5/5">★★★★★</div><p>'+r[lang]+'</p><cite>'+r.n+'</cite></blockquote>'}).join("");
}

/* ---------- cart ---------- */
function totals(){
  var sub=0,n=0;Object.keys(cart).forEach(function(id){sub+=BYID[id].price*cart[id];n+=cart[id]});
  var type=($('input[name="otype"]:checked')||{}).value||"delivery";
  var del=(type==="delivery"&&sub>0&&sub<8000)?700:0;
  return {sub:sub,n:n,del:del,total:sub+del,type:type};
}
var cartBtn=$("#cartBtn");
function setQty(id,q){
  if(q<=0)delete cart[id];else cart[id]=Math.min(q,99);
  saveCart();
  $$('[data-ctrl="'+id+'"]').forEach(function(el){el.innerHTML=ctrl(id)});
  renderCart();
  cartBtn.classList.remove("bump");void cartBtn.offsetWidth;cartBtn.classList.add("bump");
}
function renderCart(){
  var T0=totals();
  $("#cartN").textContent=T0.n;
  var fab=$("#fab");
  $("#fabN").textContent=T0.n+" "+t("items");$("#fabT").textContent=money(T0.sub);
  fab.classList.toggle("show",T0.n>0&&!$("#drawer").classList.contains("show"));
  var ids=Object.keys(cart);
  $("#cartBody").innerHTML=ids.length?ids.map(function(id){
    var o=BYID[id];
    return '<div class="line"><span class="em">'+o.e+'</span><div><b>'+o[lang]+'</b><small>'+money(o.price)+' × '+cart[id]+' = '+money(o.price*cart[id])+'</small></div><div class="step"><button data-dec="'+id+'" aria-label="−">−</button><span>'+cart[id]+'</span><button data-inc="'+id+'" aria-label="+">+</button></div></div>';
  }).join(""):'<p style="text-align:center;color:var(--mut);padding:40px 10px"><span style="font-size:56px;display:block">🍽️</span>'+t("cart_empty")+'</p>';
  $("#cartFoot").style.display=ids.length?"block":"none";
  $("#sSub").textContent=money(T0.sub);
  $("#sDel").textContent=T0.type==="delivery"?(T0.del?money(T0.del):t("free")):"—";
  $("#sTot").textContent=money(T0.total);
  $("#addrFld").style.display=T0.type==="delivery"?"block":"none";
}
document.addEventListener("click",function(e){
  var a=e.target.closest("[data-add],[data-inc],[data-dec]");
  if(!a)return;
  var id=a.getAttribute("data-add")||a.getAttribute("data-inc")||a.getAttribute("data-dec");
  var cur=cart[id]||0;
  if(a.hasAttribute("data-add")){setQty(id,cur+1);toast("✓ "+BYID[id][lang])}
  else if(a.hasAttribute("data-inc"))setQty(id,cur+1);
  else setQty(id,cur-1);
});
function openCart(){$("#drawer").classList.add("show");$("#shade").classList.add("show");renderCart()}
function closeCart(){$("#drawer").classList.remove("show");$("#shade").classList.remove("show");renderCart()}
cartBtn.addEventListener("click",openCart);$("#fab").addEventListener("click",openCart);
$("#closeCart").addEventListener("click",closeCart);$("#shade").addEventListener("click",closeCart);
document.addEventListener("keydown",function(e){if(e.key==="Escape"){closeCart();$("#modal").classList.remove("show")}});
$$('input[name="otype"]').forEach(function(r){r.addEventListener("change",renderCart)});

/* ---------- forms ---------- */
function bad(input,cond){var f=input.closest(".fld");f.classList.toggle("bad",cond);return cond}
function phoneBad(v){return v.replace(/\D/g,"").length<10}
$("#orderForm").addEventListener("submit",function(e){
  e.preventDefault();
  var T0=totals();if(!T0.n)return;
  var b1=bad($("#oName"),!$("#oName").value.trim());
  var b2=bad($("#oPhone"),phoneBad($("#oPhone").value));
  var b3=T0.type==="delivery"?bad($("#oAddr"),!$("#oAddr").value.trim()):false;
  if(b1||b2||b3)return;
  var num=Math.floor(1000+Math.random()*9000);
  $("#mEm").textContent="🎉";$("#mT").textContent=t("ok_t");
  $("#mP").textContent=t("ok_num")+" №"+num+". "+t(T0.type==="delivery"?"eta_del":T0.type==="pickup"?"eta_pick":"eta_hall");
  cart={};saveCart();$$("[data-ctrl]").forEach(function(el){el.innerHTML=ctrl(el.getAttribute("data-ctrl"))});
  this.reset();closeCart();$("#modal").classList.add("show");
});
$("#mClose").addEventListener("click",function(){$("#modal").classList.remove("show")});
$("#modal").addEventListener("click",function(e){if(e.target===this)this.classList.remove("show")});
try{$("#bkDate").min=new Date().toISOString().slice(0,10)}catch(e){}
$("#bkForm").addEventListener("submit",function(e){
  e.preventDefault();
  var r=[bad($("#bkName"),!$("#bkName").value.trim()),bad($("#bkPhone"),phoneBad($("#bkPhone").value)),bad($("#bkDate"),!$("#bkDate").value)];
  if(r.indexOf(true)>-1)return;
  $("#mEm").textContent="🪑";$("#mT").textContent=t("bk_ok_t");$("#mP").textContent=t("bk_ok");
  $("#modal").classList.add("show");this.reset();$("#bkTime").value="19:00";$("#bkGuests").value=2;
});
var rating=0;
$("#rate").addEventListener("click",function(e){var b=e.target.closest("button");if(!b)return;rating=+b.getAttribute("data-v");$$("#rate button").forEach(function(x){x.classList.toggle("on",+x.getAttribute("data-v")<=rating)})});
$("#fbForm").addEventListener("submit",function(e){
  e.preventDefault();
  if(bad($("#fbText"),!$("#fbText").value.trim()))return;
  toast(t("fb_ok"));this.reset();rating=0;$$("#rate button").forEach(function(x){x.classList.remove("on")});
});

/* ---------- misc ---------- */
$("#burger").addEventListener("click",function(){$("#nav").classList.toggle("open")});
$("#nav").addEventListener("click",function(e){if(e.target.tagName==="A")this.classList.remove("open")});
var io=new IntersectionObserver(function(es){es.forEach(function(en){
  if(!en.isIntersecting)return;io.unobserve(en.target);
  var el=en.target,to=parseFloat(el.getAttribute("data-count")),dec=el.hasAttribute("data-dec"),plus=el.hasAttribute("data-plus"),t0=null;
  function fmt(v){return (dec?v.toFixed(1):Math.round(v).toLocaleString("ru-RU").replace(/[\u00a0\u202f]/g," "))+(plus&&v>=to?"+":"")}
  function tick(ts){if(!t0)t0=ts;var p=Math.min((ts-t0)/1500,1),e=1-Math.pow(1-p,3);el.textContent=fmt(to*e);if(p<1)requestAnimationFrame(tick)}
  requestAnimationFrame(tick);
})},{threshold:.4});
$$("[data-count]").forEach(function(el){io.observe(el)});

applyLang();
})();
