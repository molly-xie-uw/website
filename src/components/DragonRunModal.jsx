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
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-900/40 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="dragon-run-title" onMouseDown={(event) => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="max-h-[92vh] w-full max-w-4xl overflow-y-auto rounded-3xl border border-slate-100 bg-white p-5 shadow-2xl md:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id="dragon-run-title" className="font-display text-2xl font-bold text-slate-800">Hidden Dragon Run</h2>
            <p className="mt-1 text-sm text-slate-500">A tiny skill game inspired by the simple games I play to unwind.</p>
          </div>
          <button ref={closeButtonRef} type="button" onClick={onClose} className="rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-700 transition hover:border-matcha-400 hover:text-matcha-700" aria-label="Close Dragon Run">
            X
          </button>
        </div>
        <DragonMiniGame />
      </div>
    </div>
  );
}
