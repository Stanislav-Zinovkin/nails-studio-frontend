'use client'

import React from "react"


interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    t: any; 
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, t }) => {
    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm" 
            onClick={onClose}
        >
            <div 
                className="bg-[#FDF5E6] w-full max-w-sm rounded-[32px] p-10 relative shadow-xl border border-[#10069F]/5" 
                onClick={(e) => e.stopPropagation()}
            >
               <button 
                    onClick={onClose} 
                    className="absolute top-6 right-8 text-[#10069F]/40 hover:text-[#10069F] transition-colors text-2xl font-light"
                >
                    ✕
               </button>

               <h2 className="text-xl font-sans font-light mb-10 text-[#10069F] uppercase tracking-[0.3em] text-center">
                    {t.nav.contacts}
               </h2>

               <div className="space-y-10">
                {/*Phone-number*/}
                <div className="flex flex-col items-center text-center group">
                    <span className="text-[9px] text-[#10069F]/40 uppercase tracking-[0.25em] mb-2 font-medium">
                        {t.contactModal.phone}
                    </span>
                    <a href="tel:+48607104718" className="text-lg text-[#10069F] hover:opacity-60 transition-all duration-300 tracking-wide font-sans">
                        +48 607 104 718
                    </a>
                </div>

                {/*Instagram*/}
                <div className="flex flex-col items-center text-center group">
                    <span className="text-[9px] text-[#10069F]/40 uppercase tracking-[0.25em] mb-2 font-medium">
                        {t.contactModal.insta}
                    </span>
                    <a 
                        href="https://www.instagram.com/vitamosondz_nailspace_manicure" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-lg text-[#10069F] hover:opacity-60 transition-all duration-300 tracking-wide font-sans"
                    >
                        @vitamosondz_nailspace
                    </a>
                </div>

                {/*Location*/}
                <div className="flex flex-col items-center text-center group">
                    <span className="text-[9px] text-[#10069F]/40 uppercase tracking-[0.25em] mb-2 font-medium">
                        {t.contactModal.location}
                    </span>
                    <a href="https://www.google.com/maps/dir/?api=1&destination=Owczarska+1,+Poznan,+Poland"
                       target="blank"
                       rel="noopener noreferrer"
                       className="text-lg text-[#10069F] hover:opacity-60 transition-all duration-300 tracking-wide font-sans">
                        {t.contactModal.address}
                    </a>
                </div>
               </div>
            </div>
        </div>
    );
};

export default ContactModal;