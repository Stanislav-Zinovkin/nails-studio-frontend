import { services } from '@/data/services';

export default function StepServices({ onSelect, getServiceName, t }: any ){
    return (
        <div className='animate-fadeIn'>
                        <p className='text-[10px] uppercase tracking-[0.3em] text-[#10069F]/40'>{t.pricesPage.title}
                        </p>
                        <div className='space-y-2 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar'>
                            {services.map((service) => (
                                <button 
                                 key={service.id}
                                 type="button"
                                 onClick={() => 
                                    onSelect(service.id)
                                 }
                                 className='w-full flex justify-between items-center px-6 py-4 bg-white/40 border border-[#10069F]/5 rounded-2xl hover:bg-white hover:border-[#10069F]/20 transition-all group'>
                                    <span className='text-[#10069F] text-sm uppercase tracking-wider group-hover:translate-x-1 transition-transform'>
                                        {getServiceName(service.translationKey)}
                                    </span>
                                    <span className='text-[#10069F]/50 text-xs font-medium'>
                                    {service.price} zł
                                    </span>
                                 </button>
                            ))}
                        </div>
                    </div>
    );
}