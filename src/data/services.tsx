export interface Service {
    id: string;
    translationKey: string;
    duration: number;
    category: string;
}

export const services: Service[] = [
    { id: 'man-hybrid', translationKey: 'hybrid', duration: 90, category: 'manicure' },
    { id: 'man-gel', translationKey: 'gel', duration: 120, category: 'manicure' },
    { id: 'man-ext', translationKey: 'extension', duration: 150, category: 'manicure' },

    { id: 'ped-disk', translationKey: 'pododisk', duration: 60, category: 'pedicure' },
    { id: 'ped-hybrid', translationKey: 'pdHybrid', duration: 100, category: 'pedicure' },

    { id: 'mav-classic', translationKey: 'mavexClassic', duration: 90, category: 'mavex' },
]