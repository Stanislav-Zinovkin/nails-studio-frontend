import { uk, pl, enGB } from 'date-fns/locale';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const locales: Record<string, any> = { ua: uk, pl: pl, en: enGB};

export default function StepCalendar({ date, onSelect, onNext, onBack, locale, t}: any) {
    const activeLocale = locales[locale] || pl;

    return (
        <div className='animate-fadeIn flex flex-col items-center'>
                        <h2 className='font-tenor text-2xl text-[#10069F] uppercase tracking-[0.2em] text-center mb-6'>
                            {t.bookingModal.pickDate}
                        </h2>
                        <div className='bg-white/50 rounded-[30px] p-4 border border-[#10069F]/5 mb-6'>
                           <DayPicker 
                              mode='single'
                              selected={date ? new Date(date) : undefined}
                              onSelect={(d) => d && onSelect(d.toISOString())}
                              locale={activeLocale}
                              disabled={{ before: new Date()}}

                              />
                        </div>

                        {date && (
                            <button
                                onClick={onNext}
                               className='w-full bg-[#10069F] text-white rounded-2xl py-4 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-[#0c0580] transition-all'>
                                {t.bookingModal.confirmDate}
                               </button>
                        )}
                        <button
                        type='button'
                        onClick={onBack}
                        className='mt-4 text-[#10069F]/40 text-[9px] uppercase tracking-widest hover:text-[#10069F]'
                        >
                           {t.common.back} 
                        </button>

                    </div>
    );
}