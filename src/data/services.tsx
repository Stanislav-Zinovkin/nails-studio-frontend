export interface Service {
    id: string;
    translationKey: string;
    duration: number;
    price: string;
    category: string;
}

export const services: Service[] = [
// MANICURE
  { id: 'm1', translationKey: 'hybrid', duration: 90, price: '150', category: 'manicure' },
  { id: 'm2', translationKey: 'gel', duration: 120, price: '170', category: 'manicure' },
  { id: 'm3', translationKey: 'extension', duration: 150, price: 'od 190', category: 'manicure' },
  { id: 'm4', translationKey: 'classic', duration: 60, price: '100', category: 'manicure' },
  { id: 'm5', translationKey: 'withColor', duration: 75, price: '110', category: 'manicure' },

  // PEDICURE
  { id: 'p1', translationKey: 'pododisk', duration: 60, price: '130', category: 'pedicure' },
  { id: 'p2', translationKey: 'pdColor', duration: 80, price: '150', category: 'pedicure' },
  { id: 'p3', translationKey: 'pdHybrid', duration: 100, price: '170', category: 'pedicure' },

  // MAVEX
  { id: 'mx1', translationKey: 'mavexClassic', duration: 60, price: '170', category: 'mavex' },
  { id: 'mx2', translationKey: 'mavexColor', duration: 80, price: '190', category: 'mavex' },
  { id: 'mx3', translationKey: 'mavexHybrid', duration: 100, price: '210', category: 'mavex' },

  // EXTRAS
  { id: 'e1', translationKey: 'removal', duration: 30, price: '100', category: 'extras' },
  { id: 'e2', translationKey: 'repair', duration: 15, price: '20', category: 'extras' },
]