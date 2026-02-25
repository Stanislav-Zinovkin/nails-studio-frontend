import { useState } from 'react';

export default function StepContactForm ({ formData, setFormData, handleSubmit, handleFocus, handleBlur, onBack, t}: any) {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        setIsSubmitting(true);
        try {
            await handleSubmit(e);
        }finally{
            setIsSubmitting(false);
        }
    };
    return (
        <div className='animate-fadeIn '>        
                    <h2 className="font-tenor text-2xl text-[#10069F] uppercase tracking-[0.2em] text-center mb-10">
                    {t.bookingModal.title}
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="group">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#10069F]/40 ml-4 mb-1 block">
                            {t.bookingModal.nameLabel}
                        </label>
                        <input 
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            type="text" 
                            className="w-full bg-white/60 border border-[#10069F]/10 rounded-2xl px-6 py-3.5 outline-none focus:border-[#10069F]/30 focus:bg-white transition-all text-[#10069F]" 
                        />
                    </div>

                    <div className="group">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#10069F]/40 ml-4 mb-1 block">
                            {t.bookingModal.emailLabel}
                        </label>
                        <input 
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            type="email" 
                            className="w-full bg-white/60 border border-[#10069F]/10 rounded-2xl px-6 py-3.5 outline-none focus:border-[#10069F]/30 focus:bg-white transition-all text-[#10069F]" 
                        />
                    </div>

                    <div className="group">
                        <label className="text-[9px] uppercase tracking-[0.2em] text-[#10069F]/40 ml-4 mb-1 block">
                            {t.bookingModal.phoneLabel}
                        </label>
                        <input 
                            required
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            type="tel" 
                            className="w-full bg-white/60 border border-[#10069F]/10 rounded-2xl px-6 py-3.5 outline-none focus:border-[#10069F]/30 focus:bg-white transition-all text-[#10069F]" 
                        />
                    </div>
                    <div className='space-y-3 px-2 mb-6'>
                        <label className='flex items-start gap-3 cursor-pointer group'>
                            <input 
                                type="checkbox"
                                required
                                checked={formData.rodoConsert}
                                onChange={(e) => setFormData({...formData, rodoConsert: e.currentTarget.checked})}
                                className="mt-1 w-4 h-4 border-[#10069F]/20 rounded accent-[#10069F]"
                                />
                                <span className='text-[10px] text-[#10069F]/60 leading-tight'>
                                  {t.bookingModal.rodoText} <a href="/privacy-policy" className="underline hover:text-[#10069F]">{t.bookingModal.privacyPolicyLink}</a>
                                </span>
                        </label>
                    </div>

                    <button type="submit" disabled={isSubmitting} className="w-full bg-[#10069F] text-white rounded-2xl py-5 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-[#0c0580] transition-all shadow-lg shadow-[#10069F]/20 mt-4">
                        {isSubmitting ? '...' : t.bookingModal.submitBtn}
                    </button>
                    <button type='button' onClick={onBack} className="w-full text-[#10069F]/40 text-[9px] uppercase tracking-widest mt-2">
                        Translate: Back button
                    </button>
                </form>
                </div> 
    )
}