import { useState } from "react";
import { Play, ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";
import SectionHeading from "@/components/SectionHeading";
import Reveal from "@/components/Reveal";
import { churchInfo } from "@/lib/siteInfo";

const VideoGallery = () => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const getEmbedUrl = (videoId: string) =>
    `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;

  return (
    <Section tone="muted">
      <SectionHeading
        eyebrow="Watch & Worship"
        title="Latest from our services"
        subtitle="Experience the power of God's Word and worship from our recent gatherings."
      />

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 md:grid-cols-2">
        {churchInfo.videos.map((video, index) => (
          <Reveal key={video.id} delay={index * 120}>
            <div
              className="group h-full overflow-hidden rounded-2xl border border-border bg-card shadow-soft transition-all duration-500 ease-out-expo hover:-translate-y-1 hover:shadow-lift"
              onMouseEnter={() => setHoveredVideo(video.id)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden bg-secondary">
                {hoveredVideo === video.id ? (
                  <iframe
                    src={getEmbedUrl(video.id)}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-secondary/70 via-secondary/10 to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="flex h-16 w-16 items-center justify-center rounded-full bg-background/90 text-secondary shadow-lift backdrop-blur transition-transform duration-500 ease-out-expo group-hover:scale-110">
                        <Play className="ml-1 h-7 w-7 fill-current" />
                      </span>
                    </div>
                  </>
                )}
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-foreground">{video.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{video.description}</p>
                <a
                  href={`https://www.youtube.com/watch?v=${video.id}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Watch on YouTube
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default VideoGallery;
