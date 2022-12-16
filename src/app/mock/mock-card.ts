import {Card} from "../models/card";

export const Cards: Card[] = [
  {
    subtitle: '1 месяц',
    title: "Для тех, кто пробует",
    priceNew: 299,
    priceOld: 499,
    perMonth: 'в месяц',
    buttonText: 'Начать 7 дней бесплатно',
    condition: 'Ежемесячная оплата',
  },
  {
    subtitle: '1 год',
    title: "Для тех, кто настроен серьезно",
    priceNew: 249,
    priceOld: 499,
    perMonth: 'в месяц',
    buttonText: 'Купить подписку',
    condition: 'При оплате 2990 ₽ за год',
    discount: 50,
  },
  {
    subtitle: '50 лет',
    title: "Для тех, кто ищет максимальную выгоду",
    priceNew: 41,
    priceOld: 499,
    perMonth: 'в месяц',
    buttonText: 'Купить подписку',
    condition: 'При оплате 24 990 ₽ навсегда',
    discount: 92,
  }
];
