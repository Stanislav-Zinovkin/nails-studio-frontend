'use client'

import { useState } from 'react';
import StepServices from '../booking/StepServices';
import StepCalendar from '../booking/StepCalendar';
import StepContactForm from '../booking/StepContactForm';
import BooksyLink from '../booking/BooksyBooking';
import StepTime from '../booking/StepTime';
import { sendBooking } from '@/services/bookingService';
import { services } from '@/data/services';

export default function BookingModal({ isOpen, onClose, locale, t }: any) {
    const [step, setStep] = useState<number | 'success'>(1);
    const [isLoading, setIsLoading] = useState(false);
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [selectedService, setSelectedService] = useState<any>(null);
    const [selectedTime, setSelectedTime] = useState<string | null>(null);
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', date: '', time: '', rodoConsert: false, serviceId: 'id' });

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
        setIsLoading(true);
    const form = e.currentTarget as HTMLFormElement;    
    const hpFieldValue = (form.elements.namedItem('hp_field') as HTMLInputElement)?.value || ""; 
    let displayDate = formData.date;
    if (formData.date) {
        const dateObj = new Date(formData.date);
        displayDate = dateObj.toLocaleDateString('uk-UA',{
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
    const serviceData = services.find(s => s.id === formData.serviceId);
    const serviceName = serviceData ? (t.pricesPage.services[serviceData.translationKey] || serviceData.translationKey)
                                    : formData.serviceId;
        const bookingDetails = {
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            service: serviceName,
            date: displayDate,
            time: formData.time,
            rodoConsert: formData.rodoConsert,
            hp_field: hpFieldValue,
        };
        try {
            await sendBooking(bookingDetails);
            setStep('success');
        } catch(error) {
            alert("Something gone wrong Try again later")
        } finally {
            setIsLoading(false);
        }
        onClose();
        setStep(1);

    };

    return (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-[#10069F]/15 backdrop-blur-md animate-fadeIn" onClick={handleClose}>
            <div className="bg-[#F5F5F7] w-full max-w-md rounded-[40px] p-8 md:p-12 pt-6 relative shadow-2xl border border-[#10069F]/5" onClick={(e) => e.stopPropagation()}>
                
                
                <button onClick={handleClose} className="absolute top-5 right-8 text-[#10069F]/30 hover:text-[#10069F] transition-colors text-xl font-light z-50 p-2 cursor-pointer">✕</button>
                
                {step === 1 && <><StepServices t={t} getServiceName={getServiceName} onSelect={(id: string) => {setFormData({...formData, serviceId: id}); setStep(2);}}/>
                <BooksyLink t={t}/></>}
                {step === 2 && <StepCalendar t={t} locale={locale} date={formData.date} onSelect={(d: string) => setFormData({...formData, date: d})} onNext={() => setStep(3)} onBack={() => setStep(1)} />}
                {step === 3 && <StepTime t={t} selectedTime={formData.time} onSelect={(time: string) => setFormData({...formData, time: time})} onNext={() => setStep(4)} onBack={() => setStep(2)}/>}    
                {step === 4 && <StepContactForm t={t} formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} onBack={() => setStep(2)} handleFocus={() => setShouldHideBooksy(true)} handleBlur={() => setShouldHideBooksy(false)} />}

            </div>
        </div>
    );
}