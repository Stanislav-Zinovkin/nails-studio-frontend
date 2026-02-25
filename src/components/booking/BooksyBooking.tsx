export default function BooksyLink({ t }: any) {
  return (
    <div className="animate-fadeIn mt-8">
      <div className="flex items-center gap-4 mb-6">
        <div className="h-[1px] bg-[#10069F]/10 flex-grow"></div>
        <span className="text-[10px] text-[#10069F]/30 uppercase tracking-[0.3em]">
          {t.bookingModal.or}
        </span>
        <div className="h-[1px] bg-[#10069F]/10 flex-grow"></div>
      </div>

      <a 
        href="https://booksy.com/pl-pl/283628_nailspace-vita-mosondz_paznokcie_15608_poznan#ba_s=sh_1" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="flex items-center justify-center w-full border border-[#10069F]/20 text-[#10069F]/60 rounded-2xl py-4 uppercase tracking-[0.2em] text-[10px] hover:bg-[#10069F]/5 hover:text-[#10069F] transition-all"
      >
        {t.bookingModal.booksyLink}
      </a>
    </div>
  );
}