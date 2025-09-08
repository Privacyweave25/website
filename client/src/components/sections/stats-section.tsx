import { useEffect, useRef, useState } from "react";

const useCounter = (to: number, durationMs = 1500) => {
    const [value, setValue] = useState(0);
    const started = useRef(false);
    const ref = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting && !started.current) {
                        started.current = true;
                        const start = performance.now();
                        const step = (t: number) => {
                            const p = Math.min(1, (t - start) / durationMs);
                            setValue(Math.floor(p * to));
                            if (p < 1) requestAnimationFrame(step);
                        };
                        requestAnimationFrame(step);
                    }
                });
            },
            { threshold: 0.4 }
        );
        observer.observe(node);
        return () => observer.disconnect();
    }, [to, durationMs]);

    return { value, ref } as const;
};

const StatNumber = ({ children, label }: { children: React.ReactNode; label: string }) => {
    return (
        <div className="flex flex-col items-center gap-2">
            <div className="text-5xl md:text-6xl font-extrabold text-white tracking-tight">{children}</div>
            <div className="text-white/80 text-base md:text-lg">{label}</div>
        </div>
    );
};

const GlassBox = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="backdrop-blur-md bg-white/10 text-white rounded-xl border border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.25)] p-6 md:p-7">
            {children}
        </div>
    );
};

const StatsSection = () => {
    const avgCost = useCounter(48, 1400); // render $4.8M as 4.8 -> 48/10
    const leaks = useCounter(412, 1400);
    const controls = useCounter(97, 1400);

    return (
        <section className="relative overflow-hidden">
            <div className="absolute inset-0 bg-[#0a2c5a]"></div>
            <div className="absolute inset-0 bg-[url('/assets/images/noise.png')] opacity-10 pointer-events-none"></div>

            <div className="container mx-auto px-4 py-16 md:py-24 relative">
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12">
                    {/* Left callout → points to $4.8M */}
                    <div className="hidden lg:block self-start relative">
                        <GlassBox>
                            <p className="text-lg leading-relaxed text-white">The average total cost of a data breach has reached a record high, encompassing direct incident response costs, regulatory fines, business disruption, and long-term reputational damage.</p>
                        </GlassBox>
                        <div className="absolute right-[-3rem] top-10 h-px w-12 bg-white/40"></div>
                    </div>

                    {/* Center numbers */}
                    <div className="flex flex-col items-center gap-12">
                        <div ref={avgCost.ref} className="flex items-center gap-6">
                            <StatNumber label="">
                                ${((avgCost.value || 0) / 10).toFixed(1)}M
                            </StatNumber>
                        </div>

                        <div ref={leaks.ref}>
                            <StatNumber label="">{leaks.value}%</StatNumber>
                        </div>

                        <div ref={controls.ref}>
                            <StatNumber label="">{controls.value}%</StatNumber>
                        </div>
                    </div>

                    {/* Right callout → points to 412% */}
                    <div className="hidden lg:block self-end relative -mt-10">
                        <GlassBox>
                            <p className="text-lg leading-relaxed text-white">Organizations have experienced a dramatic surge in AI-related security incidents, including model poisoning, prompt injection attacks, and adversarial machine learning exploits.</p>
                        </GlassBox>
                        <div className="absolute left-[-3rem] -top-6 h-px w-12 bg-white/40"></div>
                    </div>
                </div>

                {/* Bottom callout → points to 97% */}
                <div className="hidden lg:block relative mt-10">
                    <div className="absolute left-1/2 -translate-x-1/2 top-0 h-px w-[18rem] bg-white/30"></div>
                    <div className="max-w-4xl mx-auto mt-4">
                        <GlassBox>
                            <p className="text-lg leading-relaxed text-center text-white">An overwhelming majority of breached organizations admitted they had insufficient AI access controls and governance frameworks in place at the time of the incident.</p>
                        </GlassBox>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default StatsSection;


