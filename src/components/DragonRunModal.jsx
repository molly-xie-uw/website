import { useEffect, useRef } from 'react';
import DragonMiniGame from './DragonMiniGame.jsx';

export default function DragonRunModal({ open, onClose }) {
  const closeButtonRef = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/45 p-3 backdrop-blur-sm md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dragon-run-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div className="max-h-[94vh] w-full max-w-7xl overflow-y-auto rounded-[2rem] border border-[#6f7b69] bg-[#40483F] p-6 text-[#FFFDF8] shadow-2xl md:p-8">
        <div className="mb-8 flex items-start justify-between gap-6">
          <div>
            <h2 id="dragon-run-title" className="font-display text-4xl font-bold tracking-tight text-[#FFFDF8] md:text-5xl">
              Hidden Dragon Run
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-7 text-[#d7e2cf]">
              A tiny skill game inspired by the simple games I play to unwind.
            </p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#FFFDF8]/20 bg-[#40483F] text-2xl font-bold text-[#FFFDF8] transition hover:border-[#A9B8A0] hover:bg-[#4b554a]"
            aria-label="Close Dragon Run"
          >
            X
          </button>
        </div>
        <DragonMiniGame />
      </div>
    </div>
  );
}
