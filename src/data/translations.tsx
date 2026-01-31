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
      title: "Nails Space",
      subtitle: "Twoje piękno w Twoich rękach",
      cta: "Dowiedz się więcej",
    },
    aboutPage: {
      title: "Nails Space",
      subtitle: "Estetyka i profesjonalna pielęgnacja w każdym detalu",
      philosophy: {
        title: "Filozofia marki",
        desc: "Nails Space to miejsce, w którym manicure staje się rytuałem dbałości o siebie. Wierzymy, że zadbane dłonie są subtelnym symbolem pewności siebie i indywidualności. Łącząc wieloletnie doświadczenie na polskim rynku z najwyższymi standardami obsługi, stworzyliśmy przestrzeń, w której nowoczesne techniki spotykają się z nieskazitelną estetyką.",
      },
      safety: {
        title: "Standardy bezpieczeństwa i innowacje",
        items: [
          { title: "Kontrola sanitarna", text: "Wieloetapowa dezynfekcja instrumentów i rygorystyczne przestrzeganie norm sanitarnych." },
          { title: "Wyposażenie technologiczne", text: "Potężne systemy polimeryzacji i ergonomiczny fotel do pedicure klasy premium." },
          { title: "Dobór materiałów", text: "Wyłącznie certyfikowane produkty segmentu premium dla Twojego bezpieczeństwa." }
        ]
      },
      cta: "Umów się na wizytę"
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
      title: "Nails Space",
      subtitle: "Твоя краса у твоїх руках",
      cta: "Дізнатись більше",
    },
    aboutPage: {
      title: "Nails Space",
      subtitle: "Естетика та професійний догляд у кожній деталі",
      philosophy: {
        title: "Філософія бренду",
        desc: "Nails Space — це простір, де манікюр перетворюється на ритуал турботи про себе. Ми переконані, що доглянуті руки — це тихий символ впевненості та індивідуальності. Поєднавши багаторічний досвід на ринку Польщі з найвищими стандартами сервісу, ми створили місце, де сучасні техніки зустрічаються з бездоганною естетикою.",
      },
      safety: {
        title: "Стандарти безпеки та інновації",
        items: [
          { title: "Санітарний контроль", text: "Багаторівнева дезінфекція інструментів та суворе дотримання санітарних норм." },
          { title: "Технологічне оснащення", text: "Потужні системи полімеризації та преміальне ергономічне крісло для педикюру." },
          { title: "Вибір матеріалів", text: "Виключно сертифікована продукція преміум-сегмента для вашої безпеки." }
        ]
      },
      cta: "Записатися на візит"
    }
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
      title: "Nails Space",
      subtitle: "Your beauty in your hands",
      cta: "Learn more",
    },
    aboutPage: {
      title: "Nails Space",
      subtitle: "Aesthetics and professional care in every detail",
      philosophy: {
        title: "Brand Philosophy",
        desc: "Nails Space is a sanctuary where manicure transforms into a self-care ritual. We believe that well-groomed hands are a subtle symbol of confidence and individuality. Combining years of experience in the Polish market with the highest service standards, we created a space where modern techniques meet flawless aesthetics.",
      },
      safety: {
        title: "Safety Standards & Innovations",
        items: [
          { title: "Sanitary Control", text: "Multi-stage instrument disinfection and strict adherence to sanitary norms." },
          { title: "Advanced Equipment", text: "High-performance curing systems and a premium ergonomic pedicure chair." },
          { title: "Premium Materials", text: "Only certified premium products for your health and safety." }
        ]
      },
      cta: "Book an appointment"
    }
  }
};

export type Locale = 'pl' | 'ua' | 'en';