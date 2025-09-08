import React from "react";

const ComparisonSection = () => {
    return (
        <>
            <style dangerouslySetInnerHTML={{
                __html: `
                    @keyframes flicker-alert {
                        0%, 20% { 
                            opacity: 0;
                            transform: scale(0.8);
                        }
                        25%, 45% { 
                            opacity: 1;
                            transform: scale(1.1);
                        }
                        50%, 100% { 
                            opacity: 0;
                            transform: scale(0.8);
                        }
                    }
                    
                    .animate-flicker-1 {
                        animation: flicker-alert 3s ease-in-out infinite;
                        animation-delay: 0s;
                    }
                    
                    .animate-flicker-2 {
                        animation: flicker-alert 3s ease-in-out infinite;
                        animation-delay: 1s;
                    }
                    
                    .animate-flicker-3 {
                        animation: flicker-alert 3s ease-in-out infinite;
                        animation-delay: 2s;
                    }
                `
            }} />
            <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#154D71]">
                            See The Difference
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Real-time protection that transforms chaos into control
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        {/* Without Privacy Weave */}
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-red-50 to-red-100 border-2 border-red-200 hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-4 left-4 text-red-600 font-semibold text-sm uppercase tracking-wider">
                                Without Privacy Weave
                            </div>

                            <div className="mt-12 mb-8 h-48 flex items-center justify-center relative">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    {/* Alert boxes animation */}
                                    <div className="absolute top-4 left-4 bg-red-200 border border-red-400 px-3 py-2 rounded-lg text-red-800 text-xs font-semibold animate-flicker-1">
                                        DATA LEAK!
                                    </div>
                                    <div className="absolute top-20 right-8 bg-red-200 border border-red-400 px-3 py-2 rounded-lg text-red-800 text-xs font-semibold animate-flicker-2">
                                        BREACH ALERT!
                                    </div>
                                    <div className="absolute bottom-8 left-12 bg-red-200 border border-red-400 px-3 py-2 rounded-lg text-red-800 text-xs font-semibold animate-flicker-3">
                                        COMPLIANCE FAIL!
                                    </div>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                    <span>AI exposes sensitive customer data</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                    <span>Jailbreak attacks succeed easily</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                    <span>No visibility into data flows</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                    <span>Compliance violations and fines</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-red-500 font-bold text-lg">✗</span>
                                    <span>Lost customer trust</span>
                                </li>
                            </ul>
                        </div>

                        {/* With Privacy Weave */}
                        <div className="relative p-8 rounded-2xl bg-gradient-to-br from-green-50 to-green-100 border-2 border-green-200 hover:scale-105 transition-transform duration-300">
                            <div className="absolute top-4 left-4 text-green-600 font-semibold text-sm uppercase tracking-wider">
                                With Privacy Weave
                            </div>

                            <div className="mt-12 mb-8 h-48 flex items-center justify-center">
                                <div className="w-24 h-24 border-4 border-green-500 rounded-full flex items-center justify-center bg-green-100 animate-pulse">
                                    <span className="text-green-500 text-4xl font-bold">✓</span>
                                </div>
                            </div>

                            <ul className="space-y-4">
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span>All sensitive data automatically protected</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span>Attacks blocked in milliseconds</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span>Complete visibility and control</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span>Automatic compliance reporting</span>
                                </li>
                                <li className="flex items-center gap-3 text-gray-700">
                                    <span className="text-green-500 font-bold text-lg">✓</span>
                                    <span>Customer confidence secured</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ComparisonSection;
