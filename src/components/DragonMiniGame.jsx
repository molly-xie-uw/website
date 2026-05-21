import { useCallback, useEffect, useRef, useState } from 'react';
import DragonMascot from './DragonMascot.jsx';

const skillItems = [
  { name: 'Python', short: 'Py', description: 'Data analysis, Streamlit apps, and quick prototyping.', tag: 'SleepMatch' },
  { name: 'C', short: 'C', description: 'Memory, pointers, and precise low-level problem solving.', tag: 'Coursework' },
  { name: 'SQL', short: 'SQL', description: 'Querying structured data and shaping useful summaries.', tag: 'Data work' },
  { name: 'React', short: 'Re', description: 'Reusable UI components for polished web experiences.', tag: 'Portfolio' },
  { name: 'Streamlit', short: 'St', description: 'Turning Python analysis into interactive tools quickly.', tag: 'SleepMatch' },
  { name: 'Firebase', short: 'Fi', description: 'Auth, realtime data, and backend features for apps.', tag: 'MatchaMatch' },
  { name: 'Git', short: 'Gi', description: 'Version control and collaborative project workflow.', tag: 'Projects' },
  { name: 'Data Analysis', short: 'Da', description: 'Finding patterns, testing assumptions, and explaining results.', tag: 'Research' },
  { name: 'SOA Exam P', short: 'SO', description: 'Probability foundations for actuarial and risk reasoning.', tag: 'Credential' },
  { name: 'Responsible AI', short: 'AI', description: 'Evaluating AI systems with context, care, and tradeoffs.', tag: 'Interest' },
];

const prefersReducedMotion = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

const makeInitialObjects = () => {
  const collectibles = skillItems.map((skill, index) => ({
    id: skill.name,
    type: 'skill',
    skill,
    x: 520 + index * 185,
    y: 68 + (index % 4) * 44,
    collected: false,
  }));
  const obstacles = Array.from({ length: 8 }, (_, index) => ({
    id: `cloud-${index}`,
    type: index % 2 === 0 ? 'cloud' : 'wind',
    x: 650 + index * 245,
    y: 58 + ((index * 73) % 160),
  }));
  return [...collectibles, ...obstacles];
};

function Cloud({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 78 42" fill="none" aria-hidden="true">
      <path d="M17 30h42c9 0 14-5 14-12 0-6-5-10-11-10-3 0-6 1-8 3C50 4 43 2 36 5c-5 2-8 6-9 11-2-1-5-2-8-1-6 1-10 5-10 10 0 3 3 5 8 5Z" fill="#FFFDF8" stroke="#CFC3B0" strokeWidth="2" />
    </svg>
  );
}

function WindSwirl({ className = '', style }) {
  return (
    <svg className={className} style={style} viewBox="0 0 76 42" fill="none" aria-hidden="true">
      <path d="M7 24c18-12 31-12 38-2 4 6-1 12-8 10-4-1-5-5-3-8M23 14c13-8 25-8 36 0M45 29c7-4 15-5 24-2" stroke="#CFC3B0" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export default function DragonMiniGame() {
  const [objects, setObjects] = useState(makeInitialObjects);
  const [dragonY, setDragonY] = useState(130);
  const [velocity, setVelocity] = useState(0);
  const [status, setStatus] = useState('playing');
  const [collected, setCollected] = useState([]);
  const [message, setMessage] = useState('Float through the sky and collect the skills.');
  const frameRef = useRef(null);
  const yRef = useRef(130);
  const velocityRef = useRef(0);
  const statusRef = useRef('playing');
  const collectedRef = useRef(new Set());
  const objectsRef = useRef(makeInitialObjects());

  const restart = useCallback(() => {
    const freshObjects = makeInitialObjects();
    yRef.current = 130;
    velocityRef.current = 0;
    statusRef.current = 'playing';
    objectsRef.current = freshObjects;
    collectedRef.current = new Set();
    setDragonY(130);
    setVelocity(0);
    setObjects(freshObjects);
    setCollected([]);
    setStatus('playing');
    setMessage('Float through the sky and collect the skills.');
  }, []);

  const floatUp = useCallback(() => {
    if (statusRef.current === 'over') return;
    velocityRef.current = -6.8;
    setVelocity(-6.8);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === 'Space') {
        event.preventDefault();
        floatUp();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [floatUp]);

  useEffect(() => {
    const reduced = prefersReducedMotion();
    const speed = reduced ? 1.15 : 2.05;
    const gravity = reduced ? 0.21 : 0.32;
    const dragonX = 82;
    const dragonBox = { width: 62, height: 42 };

    const step = () => {
      if (statusRef.current !== 'over') {
        velocityRef.current += gravity;
        yRef.current = Math.max(20, Math.min(226, yRef.current + velocityRef.current));
        if (yRef.current >= 226) velocityRef.current = -2.8;

        const nextObjects = objectsRef.current.map((object) => ({ ...object, x: object.x - speed }));
        for (const object of nextObjects) {
          if (object.x < -120) object.x += 1900;
        }

        const dragonRect = { x: dragonX, y: yRef.current, width: dragonBox.width, height: dragonBox.height };
        let nextMessage = message;
        for (const object of nextObjects) {
          if (object.type === 'skill' && !object.collected) {
            const hit = Math.abs(object.x - (dragonRect.x + 34)) < 32 && Math.abs(object.y - (dragonRect.y + 24)) < 34;
            if (hit) {
              object.collected = true;
              collectedRef.current.add(object.skill.name);
              nextMessage = `Checkpoint unlocked: ${object.skill.name}`;
            }
          }
          if (object.type !== 'skill') {
            const hit = Math.abs(object.x - (dragonRect.x + 34)) < 40 && Math.abs(object.y - (dragonRect.y + 24)) < 30;
            if (hit) {
              statusRef.current = 'over';
              setStatus('over');
              nextMessage = 'You drifted off course — try again?';
            }
          }
        }

        objectsRef.current = nextObjects;
        setObjects(nextObjects);
        setDragonY(yRef.current);
        setVelocity(velocityRef.current);
        setCollected([...collectedRef.current]);
        setMessage(nextMessage);
      }
      frameRef.current = requestAnimationFrame(step);
    };

    frameRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameRef.current);
  }, [message]);

  const currentSkill = skillItems.find((skill) => skill.name === collected[collected.length - 1]);
  const dragonState = status === 'over' ? 'hit' : velocity < -1 ? 'rise' : velocity > 2 ? 'descend' : collected.length ? 'glide' : 'idle';

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-2xl font-bold text-[#FFFDF8]">Dragon Run</p>
          <p className="mt-1 text-lg text-[#d7e2cf]">Space / click / tap = float upward</p>
        </div>
        <button type="button" onClick={restart} className="rounded-2xl border border-[#FFFDF8]/20 bg-[#40483F] px-6 py-3 text-lg font-semibold text-[#FFFDF8] transition hover:border-[#A9B8A0] hover:bg-[#4b554a]">
          Restart
        </button>
      </div>

      <button
        type="button"
        onClick={floatUp}
        onPointerDown={floatUp}
        className="relative h-[360px] w-full overflow-hidden rounded-[2rem] border-4 border-[#A9B8A0] bg-[#F6F1E7] text-left shadow-[inset_0_2px_16px_rgba(64,72,63,0.12)] focus:outline-none focus:ring-2 focus:ring-[#A9B8A0]"
        aria-label="Dragon Run game area. Press Space or tap to float upward."
      >
        <div className="absolute left-7 top-7 z-20 rounded-full bg-[#FFFDF8]/95 px-6 py-3 text-xl font-bold text-[#40483F] shadow-md">
          {collected.length} / {skillItems.length} skills explored
        </div>
        <div className="absolute left-7 top-24 z-20 h-3 w-52 overflow-hidden rounded-full bg-[#CFC3B0]/60">
          <div className="h-full rounded-full bg-[#6F8A72] transition-all" style={{ width: `${(collected.length / skillItems.length) * 100}%` }} />
        </div>
        <p className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 text-lg font-semibold text-[#6b7168]">Press space or tap to glide</p>

        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#A9B8A0]/20 to-transparent" />
        <div className="absolute bottom-10 left-0 h-px w-full bg-[#CFC3B0]/75" />

        <div className="absolute left-[64px] z-10 h-24 w-32 transition-transform" style={{ top: dragonY }}>
          <DragonMascot state={dragonState} className="h-24 w-32" />
        </div>

        {objects.map((object) => {
          if (object.type === 'skill') {
            if (object.collected) return null;
            return (
              <div key={object.id} className="absolute flex h-14 w-14 items-center justify-center rounded-full border border-[#CFC3B0] bg-[#FFFDF8] text-lg font-bold text-[#6F8A72] shadow-md" style={{ left: object.x, top: object.y }}>
                {object.skill.short}
              </div>
            );
          }
          return object.type === 'cloud' ? (
            <Cloud key={object.id} className="absolute h-16 w-28 opacity-85" style={{ left: object.x, top: object.y }} />
          ) : (
            <WindSwirl key={object.id} className="absolute h-16 w-28 opacity-75" style={{ left: object.x, top: object.y }} />
          );
        })}

        {status === 'over' ? (
          <div className="absolute inset-0 z-30 flex items-center justify-center bg-[#FFFDF8]/75 backdrop-blur-sm">
            <div className="rounded-2xl border border-[#CFC3B0] bg-[#FFFDF8] p-5 text-center shadow-lg">
              <p className="font-display text-xl font-bold text-[#40483F]">You drifted off course — try again?</p>
              <button type="button" onClick={(event) => { event.stopPropagation(); restart(); }} className="mt-4 rounded-xl bg-[#6F8A72] px-4 py-2 text-sm font-bold text-white">
                Restart
              </button>
            </div>
          </div>
        ) : null}
      </button>

      <div className="grid gap-4 md:grid-cols-[1fr_1.4fr]">
        <div className="rounded-3xl border border-[#FFFDF8]/20 bg-[#40483F] p-6 text-[#FFFDF8]">
          <p className="text-xl font-bold text-[#FFFDF8]">{message}</p>
          {currentSkill ? (
            <p className="mt-4 text-lg leading-8 text-[#FFFDF8]">{currentSkill.description} <span className="font-bold text-[#d7e2cf]">Related: {currentSkill.tag}</span></p>
          ) : (
            <p className="mt-4 text-lg leading-8 text-[#d7e2cf]">Collect a floating skill icon to reveal a checkpoint card.</p>
          )}
        </div>
        <div className="flex flex-wrap gap-3 rounded-3xl border border-[#FFFDF8]/20 bg-[#40483F] p-6">
          {skillItems.map((skill) => (
            <span key={skill.name} className={`rounded-full border px-5 py-2 text-lg font-bold transition ${collected.includes(skill.name) ? 'border-[#A9B8A0] bg-[#6F8A72]/40 text-[#FFFDF8]' : 'border-[#FFFDF8]/20 text-[#d7e2cf]'}`}>
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
