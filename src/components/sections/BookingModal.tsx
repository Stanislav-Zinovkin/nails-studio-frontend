'use client'
import { useState } from 'react';

export default function BookingModal({ isOpen, onClose, t }: any) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', rodoConsert: false });
    const [shouldHideBooksy, setShouldHideBooksy] = useState(false);

    if (!isOpen) return null;

    const isFormStarted = formData.name.length > 0 || formData.email.length > 0 || formData.phone.length > 0;

    const handleFocus = () => setShouldHideBooksy(true);
    const handleBlur = () => {
        if (!isFormStarted) setShouldHideBooksy(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        //  fetch for backend
        alert(t.bookingModal.success);
        onClose();
        setFormData({ name: '', email: '', phone: '', service: '', date: '', rodoConsert: false  });
        setShouldHideBooksy(false);
    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#10069F]/15 backdrop-blur-md animate-fadeIn" onClick={onClose}>
            <div className="bg-[#FDF5E6] w-full max-w-md rounded-[40px] p-8 md:p-12 relative shadow-2xl border border-[#10069F]/5" onClick={(e) => e.stopPropagation()}>
                
                <button onClick={onClose} className="absolute top-8 right-8 text-[#10069F]/30 hover:text-[#10069F] transition-colors text-xl font-light">✕</button>

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

                    <button type="submit" className="w-full bg-[#10069F] text-white rounded-2xl py-5 uppercase tracking-[0.25em] text-[11px] font-bold hover:bg-[#0c0580] transition-all shadow-lg shadow-[#10069F]/20 mt-4">
                        {t.bookingModal.submitBtn}
                    </button>
                </form>

                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${shouldHideBooksy ? 'max-h-0 opacity-0 mt-0' : 'max-h-60 opacity-100 mt-8'}`}>
                    <div className="flex items-center gap-4 mb-6">
                        <div className="h-[1px] bg-[#10069F]/10 flex-grow"></div>
                        <span className="text-[10px] text-[#10069F]/30 uppercase tracking-[0.3em]">{t.bookingModal.or}</span>
                        <div className="h-[1px] bg-[#10069F]/10 flex-grow"></div>
                    </div>

                    <a href="https://booksy.com/..." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full border border-[#10069F]/20 text-[#10069F]/60 rounded-2xl py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-[#10069F]/5 hover:text-[#10069F] transition-all">
                        {t.bookingModal.booksyLink}
                    </a>
                </div>
            </div>
        </div>
    );
}