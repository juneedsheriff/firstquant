import Image from "next/image";
import type { StoryBlock } from "@/lib/content";

/** Visual case study: images, text and video blocks in the order they appear on the project's Behance page. */
export function ProjectStory({ blocks, name }: { blocks: StoryBlock[]; name: string }) {
  let n = 0;
  return (
    <section aria-labelledby="story-title" className="bg-white py-14 md:py-20 lg:py-28">
      <div className="container-fq max-w-5xl">
        <h2 id="story-title" className="display-md text-ink">The work</h2>
        <div className="mt-8 space-y-4 md:mt-12 md:space-y-6">
          {blocks.map((block, i) => {
            if (block.kind === "text") return <TextBlock key={i} block={block} />;
            if (block.kind === "embed") return <EmbedBlock key={i} block={block} name={name} />;
            const count = block.images.length;
            const cols = count === 1 ? "" : count === 2 || count === 4 ? "md:grid-cols-2" : "md:grid-cols-2 lg:grid-cols-3";
            return (
              <div key={i} className={`grid items-start gap-4 md:gap-6 ${cols}`}>
                {block.images.map((img) => {
                  n += 1;
                  return (
                    <Image
                      key={img.src}
                      src={img.src}
                      alt={img.alt ?? `${name}, image ${n}`}
                      width={img.w}
                      height={img.h}
                      sizes={count === 1 ? "(min-width: 1024px) 64rem, 100vw" : "(min-width: 1024px) 22rem, (min-width: 768px) 50vw, 100vw"}
                      // Small single images stay near their real size instead of stretching and blurring.
                      style={count === 1 ? { maxWidth: Math.round(img.w * 1.25) } : undefined}
                      className="mx-auto h-auto w-full rounded-2xl bg-mist md:rounded-xl"
                    />
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const isSubheading = (line: string) => line.length <= 40 && /[A-Z]/.test(line) && !/[a-z]/.test(line);

// Behance subheads are set in capitals; show them in sentence case, keeping acronyms such as TG.
const ACRONYMS = new Set(["TG", "USP", "CSR", "BHK"]);
const sentenceCase = (line: string) =>
  line
    .toLowerCase()
    .replace(/\b[a-z]+\b/g, (w) => (ACRONYMS.has(w.toUpperCase()) ? w.toUpperCase() : w))
    .replace(/^[^a-z]*[a-z]/, (m) => m.toUpperCase());

function TextBlock({ block }: { block: Extract<StoryBlock, { kind: "text" }> }) {
  const long = block.body.length > 3 || block.body.some((l) => l.startsWith("•"));
  // Group consecutive "• " lines into lists.
  const parts: (string | string[])[] = [];
  for (const line of block.body) {
    if (line.startsWith("•")) {
      const item = line.replace(/^•\s*/, "");
      const last = parts[parts.length - 1];
      if (Array.isArray(last)) last.push(item);
      else parts.push([item]);
    } else parts.push(line);
  }
  return (
    <div className={`mx-auto py-6 md:py-14 ${long ? "max-w-3xl" : "max-w-2xl text-center"}`}>
      {block.title ? <h3 className="font-display text-2xl font-semibold text-ink [font-stretch:112%] md:text-3xl">{block.title}</h3> : null}
      <div className={`space-y-4 text-base leading-relaxed text-steel md:text-lg ${block.title ? "mt-4" : ""}`}>
        {parts.map((part, i) =>
          Array.isArray(part) ? (
            <ul key={i} className="space-y-2">
              {part.map((item) => (
                <li key={item} className="flex gap-3">
                  <span aria-hidden="true" className="mt-3 size-1.5 shrink-0 rounded-full bg-signal" />
                  {item}
                </li>
              ))}
            </ul>
          ) : isSubheading(part) ? (
            <h4 key={i} className="pt-4 text-base font-semibold text-ink">{sentenceCase(part)}</h4>
          ) : (
            <p key={i}>{part}</p>
          ),
        )}
      </div>
    </div>
  );
}

function EmbedBlock({ block, name }: { block: Extract<StoryBlock, { kind: "embed" }>; name: string }) {
  const audio = block.ratio < 15;
  const portrait = block.ratio > 100;
  return (
    <div className="mx-auto w-full" style={{ maxWidth: portrait ? 420 : undefined }}>
      <div
        className="relative overflow-hidden rounded-xl bg-midnight"
        style={audio ? { height: 64 } : { paddingBottom: `${block.ratio}%` }}
      >
        <iframe
          src={block.src}
          title={`${name}: ${block.title.toLowerCase()}`}
          loading="lazy"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 size-full border-0"
        />
      </div>
    </div>
  );
}
