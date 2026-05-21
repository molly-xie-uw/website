export default function DragonMascot({ state = 'idle', className = '' }) {
  const isRise = state === 'rise';
  const isDescend = state === 'descend';
  const isHit = state === 'hit';
  const rotate = isRise ? '-10deg' : isDescend ? '10deg' : state === 'glide' ? '-2deg' : '0deg';

  return (
    <svg
      className={className}
      viewBox="0 0 120 90"
      fill="none"
      aria-hidden="true"
      style={{ transform: `rotate(${rotate})` }}
    >
      <path
        d="M25 61C36 78 69 74 72 49C75 24 48 20 44 42C41 58 58 58 63 48"
        fill="#A9B8A0"
        stroke="#40483F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M74 43C85 35 99 39 101 50C103 60 91 66 82 59C76 54 77 47 82 44"
        fill="#A9B8A0"
        stroke="#40483F"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M80 39L73 26M88 38L84 25" stroke="#40483F" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 43L61 39M72 37L64 33M75 32L70 27" stroke="#40483F" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="91" cy="48" r={isHit ? '1.4' : '2.4'} fill="#40483F" />
      {isHit ? (
        <path d="M88 45L94 51M94 45L88 51" stroke="#40483F" strokeWidth="2" strokeLinecap="round" />
      ) : null}
      <path d="M101 51C109 48 111 43 108 39" stroke="#40483F" strokeWidth="2" strokeLinecap="round" />
      <path
        d="M25 61C16 57 13 46 19 39C25 45 29 52 25 61Z"
        fill="#A9B8A0"
        stroke="#40483F"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M41 69L36 76M41 69L43 77M41 69L47 75" stroke="#40483F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M70 60L65 68M70 60L72 69M70 60L77 66" stroke="#40483F" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M45 50C53 56 62 56 69 50" stroke="#FFFDF8" strokeWidth="4" strokeLinecap="round" />
      {state === 'glide' ? <path d="M13 48H3M20 40H9" stroke="#A9B8A0" strokeWidth="2" strokeLinecap="round" /> : null}
      {isRise ? <path d="M29 77C25 82 20 84 16 84" stroke="#A9B8A0" strokeWidth="2" strokeLinecap="round" /> : null}
    </svg>
  );
}
