import { useState } from "react";
import { Play, Volume2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { churchInfo } from "@/lib/siteInfo";

const VideoGallery = () => {
  const [hoveredVideo, setHoveredVideo] = useState<string | null>(null);

  const handleMouseEnter = (videoId: string) => {
    setHoveredVideo(videoId);
  };

  const handleMouseLeave = () => {
    setHoveredVideo(null);
  };

  const getEmbedUrl = (videoId: string) => {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}`;
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Latest Videos</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Experience the power of God's Word and worship from our recent services
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {churchInfo.videos.map((video, index) => (
            <Card
              key={video.id}
              className="hover:shadow-glow transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => handleMouseEnter(video.id)}
              onMouseLeave={handleMouseLeave}
            >
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black rounded-t-lg overflow-hidden">
                  {hoveredVideo === video.id ? (
                    <iframe
                      src={getEmbedUrl(video.id)}
                      title={video.title}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <img
                        src={video.thumbnail}
                        alt={video.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                          <Play className="h-8 w-8 text-primary-foreground ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-2 left-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1">
                        <Volume2 className="h-3 w-3 text-white" />
                        <span className="text-white text-xs">Hover to play</span>
                      </div>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary mb-2">{video.title}</h3>
                  <p className="text-muted-foreground">{video.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground mb-4">
            Hover over videos to preview • Click to watch on YouTube
          </p>
          <div className="flex justify-center gap-4">
            {churchInfo.videos.map((video) => (
              <a
                key={video.id}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-secondary transition-colors text-sm underline"
              >
                Watch on YouTube
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoGallery;
