import { useState } from 'react';

export default function StepContactForm ({ formData, setFormData, handleSubmit, handleFocus, handleBlur, onBack, t}: any) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);
        try {
           await handleSubmit(e);
           setIsSuccess(true);
        } catch(err: any) {
            if (err.message === 'SLOT_ALREADY_OCCUPIED') {
                setError("Цей час уже зайнятий. Будь ласка, оберіть інший слот.");
            } else if (err.message === 'TOO_MANY_REQUESTS') {
                setError(t.bookingModal.errorSlotTaken);
            } else {
                setError(t.bookingModal.errorGeneral);
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className='animate-fadeIn text-center py-10'>
                <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500 text-3xl shadow-sm border border-green-100">
                    ✓
                </div>
                <h2 className="font-tenor text-2xl text-[#10069F] uppercase tracking-widest mb-4">
                    {t.bookingModal.successTitle}
                </h2>
                <p className="text-[#10069F]/60 text-sm leading-relaxed mb-8">
                    {t.bookingModal.successMessage}
                </p>
                <button 
                    onClick={() => window.location.reload()} 
                    className="text-[#10069F] text-[10px] uppercase tracking-widest font-bold underline cursor-pointer"
                >
                    {t.common?.close}
                </button>
            </div>
        );
    }

    return (
        <div className='animate-fadeIn'>        
            <h2 className="font-tenor text-2xl text-[#10069F] uppercase tracking-[0.2em] text-center mb-10">
                {t.bookingModal.title}
            </h2>

            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-100 text-red-500 rounded-2xl text-[10px] uppercase tracking-wider text-center animate-shake">
                    ⚠️ {error}
                </div>
            )}

            <form onSubmit={onSubmit} className={`space-y-4 ${isSubmitting ? 'opacity-50 pointer-events-none' : ''} transition-opacity`}>
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
                            checked={formData.rodoConsent}
                            onChange={(e) => setFormData({...formData, rodoConsent: e.currentTarget.checked})}
                            className="mt-1 w-4 h-4 border-[#10069F]/20 rounded accent-[#10069F]"
                        />
                        <span className='text-[10px] text-[#10069F]/60 leading-tight'>
                          {t.bookingModal.rodoText} <a href="/privacy-policy" className="underline hover:text-[#10069F]">{t.bookingModal.privacyPolicyLink}</a>
                        </span>
                    </label>
                    <input type='text' name='hp_field' style={{display: 'none'}} tabIndex={-1} autoComplete='off'/>
                </div>

                <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full bg-[#10069F] text-white rounded-2xl py-5 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-[#0c0580] transition-all shadow-lg shadow-[#10069F]/20 mt-4 cursor-pointer flex justify-center items-center"
                >
                    {isSubmitting ? (
                        <span className="flex items-center gap-2">
                            <span className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            {t.bookingModal.loadingText || "..."}
                        </span>
                    ) : t.bookingModal.submitBtn}
                </button>

                <button 
                    type='button' 
                    onClick={onBack} 
                    className="w-full text-[#10069F]/40 text-[9px] uppercase tracking-widest mt-2 cursor-pointer"
                >
                    {t.common.back}
                </button>
            </form>
        </div> 
    );
}