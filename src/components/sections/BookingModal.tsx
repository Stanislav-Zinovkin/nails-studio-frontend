'use client'

import { useState } from 'react';
import StepServices from '../booking/StepServices';
import StepCalendar from '../booking/StepCalendar';
import StepContactForm from '../booking/StepContactForm';
import BooksyLink from '../booking/BooksyBooking';

export default function BookingModal({ isOpen, onClose, locale, t }: any) {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', rodoConsert: false, serviceId: 'id' });

    const getServiceName = (key: string) => {
        return t.pricesPage.services[key] || key;
    }
    const [shouldHideBooksy, setShouldHideBooksy] = useState(false);
    const handleClose = () => {
        setStep(1);
        onClose();
    };

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
        setStep(1);

    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#10069F]/15 backdrop-blur-md animate-fadeIn" onClick={handleClose}>
            <div className="bg-[#FDF5E6] w-full max-w-md rounded-[40px] p-8 md:p-12 pt-6 relative shadow-2xl border border-[#10069F]/5" onClick={(e) => e.stopPropagation()}>
                
                
                <button onClick={handleClose} className="absolute top-5 right-8 text-[#10069F]/30 hover:text-[#10069F] transition-colors text-xl font-light z-50 p-2 cursor-pointer">✕</button>
                
                {step === 1 && <><StepServices t={t} getServiceName={getServiceName} onSelect={(id: string) => {setFormData({...formData, serviceId: id}); setStep(2);}}/>
                <BooksyLink t={t}/></>}
                {step === 2 && <StepCalendar t={t} locale={locale} date={formData.date} onSelect={(d: string) => setFormData({...formData, date: d})} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                {step === 3 && <StepContactForm t={t} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} onBack={() => setStep(2)} handleFocus={() => setShouldHideBooksy(true)} handleBlur={() => setShouldHideBooksy(false)} />}

            </div>
        </div>
    );
}