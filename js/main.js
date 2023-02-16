const getRandomPositiveInteger = (a, b) => {
  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));
  const result = Math.floor(Math.random() * (max - min + 1) + min);
  return result;
};

getRandomPositiveInteger(1, 10);

const getRandomPositiveFloat = (a, b, digits = 2) => {
  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));
  const result = Math.random() * (max - min) + min;
  return +result.toFixed(digits);
};

getRandomPositiveFloat(1.5, 11.5, 4);


const getRandomArrayElement = (elements) => elements[getRandomPositiveInteger(0, elements.length - 1)];

const SIMILAR_OFFER_COUNT = 10;
const MIN_PRICE = 100;
const MAX_PRICE = 10000;
const MAX_COUNT_ROOMS = 5;
const MAX_COUNT_GUESTS = 4;
const MIN_LATITUDE = 35.65000;
const MAX_LATITUDE = 35.70000;
const MIN_LONGITUDE = 139.70000;
const MAX_LONGITUDE = 139.80000;

const listOfferTitle = [
  'Квартира в посуточную аренду',
  'Сдаю двухкомнатную квартиру',
  'Сдается 1-комнатная квартира на длительный срок',
  'Квартира-студия',
  'Снять жилье в Крыму без посредников',
  'Апартаменты посуточно',
  'Офис в центре Минска недорого',
  'Продается земельный участок с домом',
  'Аренда склада, открытой площадки',
  'Отличное здание под магазин в частном секторе'
];

const objectTypes = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const checkTimes = ['12:00', '13:00', '14:00'];
const listFeatures = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];

const listDescriptions = [
  'Отличное помещение которое подойдет для магазина. (Сейчас сдается в аренду как магазин продуктов). Отличное расположение, центр (Единственный магазин который находится в данном поселке, также близлежащие поселки не имеют своего магазина)',
  'Сдается НОВАЯ уютная однокомнатная квартира в новом доме от собственника. КВАРТИРА ТЕПЛАЯ - АВТОНОМНОЕ ОТОПЛЕНИЕ. В шаговой доступности пляжи: "Адмиральская лагуна" в 15 минутах пешком; пляжи Казачья бухта, Омега, Парк Победы в 5-15 минутах на машине/общественном транспорте.',
  'Без кoмисcий и дoплaт! Мероприятия категорически запрещены! Соответствует фотографиям. В реальности ещё лучше!!! Пoсуточная кваpтирa в прекрасном районе.',
  'Сдаю на 1 месяц однокомнатную квартиру, 40 кв.м.<цена указана до конца апреля>. С двуспальной кроватью и двуспальным диваном, кресла со столиком, мини-кухня, душ, туалет, холодильник, телевизор, чайник, шкаф, сушилка для одежды, фен, полотенца, туалетная бумага, мыло. Панорамные окна, балкон с видом на море.',
  'Уютная чистая квартира в стиле лофт, с новым ремонтом со всей необходимой техникой и мебелью для проживания в Киевский районе, в шаговой доступности главный автовокзал Симферополя, Областная Онкологическая больница, очень красивый Ботанический сад имени В.И. Вернадского, Симферопольское водохранилище, рынок, супермаркет "ПУД", транспортная развязка во все направления. В вашем распоряжении-эл.чайник,микроволновка,WI-FI,холодильник,телевизор.парковка для автомобиля, 2 спальных места на первом и втором уровне! ',
  'Сдaм 2xкомнатную квартиpу в Сeваcтопoле у моpя ( Паpк Пoбeды). B квapтире еcть вcё для кoмфoртнoгo проживaния.Cпaльных меcт 6 (2+2+2).Pядом Пapк Пoбeды,Аквамaрин,aквапapк Зурбaгaн,мaгазины,бapы.Цeна apенды мoжeт изменятся в зaвисимoсти от мecяцa,ceзона.',
  'Сдается 1кк квартира (отдельно стоящий домик) в районе 5 км Балаклавского шоссе. До рынка (самый большой продовольственный и непродовольственный рынки города) и остановки (конечной большого количества городского транспорта, уехать можно в любой конец города и в пригород) 5-7 минут ходьбы, отдельный вход, красивый внутренний дворик, всегда есть возможность спокойно припарковать автомобиль.',
  'Сдам шикарную квартиру в Гурзуфе на последнем 13 этаже в комплексе "Белый дом". В квартире есть вся необходимая мебель и техника, джакузи, а также посуда, постельное белье и полотенца для Вашего комфортного отдыха. Три спальни (шторы бдэк-аут) и кабинет, устойчивый wi-fi ac, большие современные ТВ с НТВ+, проектор и экран в кабинете, три с/у. В гостиной и кабинете звуковые ресиверы и колонки. Есть парковочные места.',
  'Квартира в самом центре Симферополя в шаговой доступности бары, рестораны, магазины, аптеки, рынок и т.д. В квартире евро ремонт, всегда чисто и не прокурено. Есть все для комфортабельного проживания.',
  'Частный сектор!!! Собственник!!!! Удобное месторасположение!!! Оплата зависит от количества суток, сезона аренды и количества гостей... Праздничные и выходные дни дороже,стоимость уточняйте.Звонить до 22 часов.... Отдельный однокомнатный уютный дом со всеми удобствами для 2-3 человек. Дети с 4 лет.... Без животных!!!!!!! Есть всё необходимое для комфортного проживания и отдыха: удобные спальные места. Предоставляется постельное белье,полотенца.'
];
const listPhotos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

const getElementsNotRepeat = (arr) => {
  const array = arr.slice();
  const result = [];
  for(let i = 0; i < getRandomPositiveInteger(1, array.length); i++) {
    const element = getRandomArrayElement(array);
    const indexSearchedFeature = array.indexOf(element);

    const swap = array[0];
    array[0] = array[indexSearchedFeature];
    array[indexSearchedFeature] = swap;

    array.shift();
    result.push(element);
  }
  return result;
};

const createOffer = (id) => {
  const randomLat = getRandomPositiveFloat(MIN_LATITUDE, MAX_LATITUDE, 5);
  const randomLng = getRandomPositiveFloat(MIN_LONGITUDE, MAX_LONGITUDE, 5);
  return {
    author: {
      avatar: `img/avatars/user${(id < 10) ? `0${id}` : id}.png`
    },
    offer: {
      title: getRandomArrayElement(listOfferTitle),
      address: `${randomLat}, ${randomLng}`,
      price: getRandomPositiveInteger(MIN_PRICE, MAX_PRICE),
      type: getRandomArrayElement(objectTypes),
      rooms: getRandomPositiveInteger(1, MAX_COUNT_ROOMS),
      guests: getRandomPositiveInteger(1, MAX_COUNT_GUESTS),
      checkin: getRandomArrayElement(checkTimes),
      checkout: getRandomArrayElement(checkTimes),
      features: getElementsNotRepeat(listFeatures),
      description: getRandomArrayElement(listDescriptions),
      photos: getElementsNotRepeat(listPhotos)
    },
    location: {
      lat: randomLat,
      lng: randomLng
    }
  };
};

const getOffers = (count) => Array.from({length: count}, (_, offerIndex) => createOffer(offerIndex + 1));
getOffers(SIMILAR_OFFER_COUNT);
