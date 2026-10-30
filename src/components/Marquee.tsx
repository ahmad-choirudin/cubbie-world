const words = ["Dress your Cubbie", "Find your form", "Own your little world"];

function Row() {
  return (
    <span className="flex shrink-0 items-center">
      {Array.from({ length: 3 })
        .flatMap(() => words)
        .map((w, i) => (
          <span key={i} className="flex items-center">
            <span>{w}</span>
            <span className="mx-8 inline-block h-2 w-2 bg-acc md:mx-12" />
          </span>
        ))}
    </span>
  );
}

export default function Marquee() {
  return (
    <div className="mt-10 overflow-hidden border-y border-edge py-5" aria-hidden="true">
      <div className="marquee display flex w-max whitespace-nowrap text-3xl text-ink/25 md:text-5xl">
        <Row />
        <Row />
      </div>
    </div>
  );
}
