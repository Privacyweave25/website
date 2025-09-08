import { useRef, useState } from "react";

const VideoSection = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlay = () => {
        const el = videoRef.current;
        if (!el) return;
        if (el.paused) {
            el.play();
            setIsPlaying(true);
        } else {
            el.pause();
            setIsPlaying(false);
        }
    };

    return (
        <section className="bg-[#F6F4F0] py-12 md:py-16 lg:py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-center mb-6">See PrivacyWeave in Action</h2>
                <div className="max-w-5xl mx-auto aspect-video rounded-xl overflow-hidden shadow border border-[#0a2c5a]/10 bg-black relative">
                    {/* Replace src with your local mp4 placed under /public/assets/video */}
                    <video ref={videoRef} className="w-full h-full" controls playsInline>
                        <source src="/assets/video/overview.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <button
                        aria-label={isPlaying ? "Pause" : "Play"}
                        onClick={togglePlay}
                        className="absolute left-4 bottom-4 px-3 py-1.5 text-sm rounded-md bg-white/90 text-[#0a2c5a] hover:bg-white shadow"
                    >
                        {isPlaying ? "Pause" : "Play"}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default VideoSection;


