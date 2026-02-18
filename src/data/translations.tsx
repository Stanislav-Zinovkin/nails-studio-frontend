import PricesPage from "@/app/prices/page";
import { title } from "process";
import { text } from "stream/consumers";

export const translations = {
  pl: {
    nav: {
      services: "Usługi",
      gallery: "Galeria",
      prices: "Cennik",
      contacts: "Kontakt",
      bookvisit: "Zapisz się",
    },
    hero: {
      title: "Nail Space",
      subtitle: "Twoje piękno w Twoich rękach",
      cta: "Dowiedz się więcej",
    },
    aboutPage: {
      title: "Nail Space",
      subtitle: "Estetyka i profesjonalna pielęgnacja w każdym detalu",
      philosophy: {
        title: "Filozofia marki",
        desc: "Nail Space to miejsce, w którym manicure staje się rytuałem dbałości o siebie. Wierzymy, że zadbane dłonie są subtelnym symbolem pewności siebie i indywidualności. Łącząc wieloletnie doświadczenie na polskim rynku z najwyższymi standardami obsługi, stworzyliśmy przestrzeń, w której nowoczesne techniki spotykają się z nieskazitelną estetyką.",
      },
      safety: {
        title: "Standardy bezpieczeństwa i innowacje",
        items: [
          { title: "Kontrola sanitarna", text: "Wieloetapowa dezynfekcja instrumentów i rygorystyczne przestrzeganie norm sanitarnych." },
          { title: "Wyposażenie technologiczne", text: "Potężne systemy polimeryzacji i ergonomiczny fotel do pedicure klasy premium." },
          { title: "Dobór materiałów", text: "Wyłącznie certyfikowane produkty segmentu premium dla Twojego bezpieczeństwa." }
        ]
      },
      readMore: {
        text: "Rozwiń"
      },
      cta: "Umów się na wizytę"
    },
    pricesPage: {
      title: "Cennik",
      categories: {
        popular: "Popularne usługi",
        manicure: "Manicure",
        pedicure: "Pedicure (PodoDisk)",
        mavex: "System MAVEX (SPA)",
        extras: "Dodatki"
      },
      services: {
        hybrid: "Manicure hybrydowy",
        gel: "Manicure żelowy",
        extension: "Przedłużanie paznokci",
        classic: "Manicure klasyczny",
        withColor: "Z malowaniem",
        removal: "Ściągnięcie hybrydy",
        repair: "Naprawa jednego paznokcia",
        pododisk: "PodoDysk",
        pdHybrid: "PodoDysk + Hybryda",
        pdColor: "PodoDysk + Malowanie",
        mavexClassic: "Mavex",
        mavexColor: "Mavex + Malowanie",
        mavexHybrid: "Mavex + Hybryda"
  }
    }
  },

  ua: {
    nav: {
      services: "Послуги",
      gallery: "Галерея",
      prices: "Ціни",
      contacts: "Контакти",
      bookvisit: "Записатись",
    },
    hero: {
      title: "Nail Space",
      subtitle: "Твоя краса у твоїх руках",
      cta: "Дізнатись більше",
    },
    aboutPage: {
      title: "Nail Space",
      subtitle: "Естетика та професійний догляд у кожній деталі",
      philosophy: {
        title: "Філософія бренду",
        desc: "Nail Space — це простір, де манікюр перетворюється на ритуал турботи про себе. Ми переконані, що доглянуті руки — це тихий символ впевненості та індивідуальності. Поєднавши багаторічний досвід на ринку Польщі з найвищими стандартами сервісу, ми створили місце, де сучасні техніки зустрічаються з бездоганною естетикою.",
      },
      safety: {
        title: "Стандарти безпеки та інновації",
        items: [
          { title: "Санітарний контроль", text: "Багаторівнева дезінфекція інструментів та суворе дотримання санітарних норм." },
          { title: "Технологічне оснащення", text: "Потужні системи полімеризації та преміальне ергономічне крісло для педикюру." },
          { title: "Вибір матеріалів", text: "Виключно сертифікована продукція преміум-сегмента для вашої безпеки." }
        ]
      },
      readMore: {
        text: "Читай більше"
      },
      cta: "Записатися на візит"
    },
    pricesPage: {
     title: "Прайс-лист",
     categories: {
       popular: "Популярні послуги",
       manicure: "Манікюр",
       pedicure: "Педикюр (PodoDisk)",
       mavex: "Система MAVEX (SPA)",
       extras: "Додатково"
     },
     services: {
       hybrid: "Манікюр гібридний",
       gel: "Манікюр гелевий",
       extension: "Нарощування нігтів",
       classic: "Класичний манікюр",
       withColor: "З покриттям лаком",
       removal: "Зняття гібриду",
       repair: "Ремонт нігтя",
       pododisk: "PodoDisk (обробка стопи)",
       pdHybrid: "PodoDisk + Гібрид",
       pdColor: "PodoDisk + Лак",
       mavexClassic: "Mavex (кератолітичний педикюр)",
       mavexColor: "Mavex + Лак",
       mavexHybrid: "Mavex + Гібрид"
     }
},
  },

  en: {
    nav: {
      services: "Services",
      gallery: "Gallery",
      prices: "Prices",
      contacts: "Contacts",
      bookvisit: "Book now",
    },
    hero: {
      title: "Nail Space",
      subtitle: "Your beauty in your hands",
      cta: "Learn more",
    },
    aboutPage: {
      title: "Nail Space",
      subtitle: "Aesthetics and professional care in every detail",
      philosophy: {
        title: "Brand Philosophy",
        desc: "Nail Space is a sanctuary where manicure transforms into a self-care ritual. We believe that well-groomed hands are a subtle symbol of confidence and individuality. Combining years of experience in the Polish market with the highest service standards, we created a space where modern techniques meet flawless aesthetics.",
      },
      safety: {
        title: "Safety Standards & Innovations",
        items: [
          { title: "Sanitary Control", text: "Multi-stage instrument disinfection and strict adherence to sanitary norms." },
          { title: "Advanced Equipment", text: "High-performance curing systems and a premium ergonomic pedicure chair." },
          { title: "Premium Materials", text: "Only certified premium products for your health and safety." }
        ]
      },
      readMore: {
        text: "Read more"
      },
      cta: "Book an appointment"
    },
    pricesPage: {
      title: "Price List",
      categories: {
        popular: "Popular Services",
        manicure: "Manicure",
        pedicure: "Pedicure (PodoDisk)",
        mavex: "MAVEX System (SPA)",
        extras: "Add-ons"
      },
      services: {
        hybrid: "Hybrid Manicure",
        gel: "Gel Manicure",
        extension: "Nail Extensions",
        classic: "Classic Manicure",
        withColor: "With Nail Polish",
        removal: "Hybrid Removal",
        repair: "Single Nail Repair",
        pododisk: "PodoDisk (Foot Treatment)",
        pdHybrid: "PodoDisk + Hybrid",
        pdColor: "PodoDisk + Polish",
        mavexClassic: "Mavex (Callus Removal)",
        mavexColor: "Mavex + Polish",
        mavexHybrid: "Mavex + Hybrid"
  }
},
  }
};

export type Locale = 'pl' | 'ua' | 'en';