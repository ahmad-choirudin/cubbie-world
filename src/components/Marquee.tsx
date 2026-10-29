const text = "Dress your Cubbie • Find your form • Own your little world • ";

export default function Marquee() {
  return (
    <div className="mt-10 overflow-hidden border-y border-white/10 bg-white/5 py-4" aria-hidden="true">
      <div className="marquee flex w-max whitespace-nowrap font-d text-2xl font-bold uppercase text-ink/40">
        <span>{text.repeat(4)}</span>
        <span>{text.repeat(4)}</span>
      </div>
    </div>
  );
}
