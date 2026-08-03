// ---- Official Instagram Embed Helper ----
// Renders Instagram's official iframe embed for seamless reel playback.

function getReelEmbedUrl(reelUrl: string): string {
  const match = reelUrl.match(/(?:reel|p)\/([A-Za-z0-9_-]+)/);
  if (match && match[1]) {
    return `https://www.instagram.com/reel/${match[1]}/embed`;
  }
  return reelUrl.endsWith("/embed") ? reelUrl : `${reelUrl.replace(/\/$/, "")}/embed`;
}

export default function InstagramEmbed({ reelUrl }: { reelUrl: string }) {
  const embedUrl = getReelEmbedUrl(reelUrl);

  return (
    <div className="relative w-full h-full min-h-[320px] sm:min-h-[420px] bg-black flex items-center justify-center overflow-hidden rounded-xl">
      <iframe
        src={embedUrl}
        className="w-full h-full min-h-[320px] sm:min-h-[420px] border-0 rounded-xl"
        frameBorder="0"
        scrolling="no"
        allowTransparency={true}
        allow="encrypted-media"
        title="Instagram Reel Embed"
      />
    </div>
  );
}
