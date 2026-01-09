"use client";

import { useState } from "react";
import Image from "next/image";
import { Quote, ArrowLeft, ArrowRight, Star } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TestimonialCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isFlipping, setIsFlipping] = useState(false);
    const [direction, setDirection] = useState<"next" | "prev">("next");

    const testimonials = [
        {
            id: 1,
            name: "Sterline Cryer",
            role: "Trustpilot Review",
            image: "/client_sterline.png",
            quote: "I had a great experience at Trademark Engine! My customer service representative was exceptional! She was professional and knowledgeable when explaining the process of how to copyright my work. She supported me until my work was ready for review. Trademark Engine is well deserving of a 5-star rating."
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Founder, TechStart",
            image: "/client_michael.png",
            quote: "Our experience getting a trademark was incredibly smooth. They handled everything from the search to the filing, and kept us updated every step of the way. Highly recommend Trademark Engine for anyone needing fast, reliable results!"
        },
        {
            id: 3,
            name: "Sarah Johnson",
            role: "Creative Director",
            image: "/client_sarah.png",
            quote: "The interface is so intuitive compared to the USPTO website. I was able to file my application in under 20 minutes. The team answered all my questions promptly. Worth every penny for the peace of mind."
        }
    ];

    const handleNext = () => {
        if (isFlipping) return;
        setIsFlipping(true);
        setDirection("next");
        setTimeout(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            setIsFlipping(false);
        }, 600); // Match animation duration
    };

    const handlePrev = () => {
        if (isFlipping) return;
        setIsFlipping(true);
        setDirection("prev");
        setTimeout(() => {
            setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            setIsFlipping(false);
        }, 600);
    };

    return (
        <section className="py-24 bg-[#fff7ed] overflow-hidden perspective-1000">
            <div className="container mx-auto px-4 md:px-8">
                <div className="text-center mb-16">
                    <span className="text-[#ea580c] font-bold uppercase tracking-wider text-sm mb-2 block">Success Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900">
                        Customer Reviews & Testimonials
                    </h2>
                    <p className="text-slate-600 mt-4">See why thousands trust Trademark Engine.</p>
                </div>

                <div className="relative max-w-5xl mx-auto h-[600px] flex items-center justify-center">
                    {/* The Book/Card Container */}
                    <div className={cn(
                        "relative w-full h-full md:h-[500px] transition-transform duration-700 transform-style-3d",
                        isFlipping && direction === "next" ? "animate-page-flip-next" : "",
                        isFlipping && direction === "prev" ? "animate-page-flip-prev" : ""
                    )}>
                        {/* Current Card Content */}
                        <div className="absolute inset-0 bg-white rounded-2xl shadow-xl flex flex-col md:flex-row overflow-hidden backface-hidden">
                            {/* Image Side */}
                            <div className="md:w-2/5 relative h-64 md:h-full bg-slate-100">
                                <Image
                                    src={testimonials[currentIndex].image}
                                    alt={testimonials[currentIndex].name}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                            </div>

                            {/* Text Side */}
                            <div className="md:w-3/5 p-8 md:p-12 flex flex-col relative bg-white">
                                <Quote className="w-10 h-10 text-[#ea580c] mb-6" />

                                <p className="text-lg md:text-xl text-slate-700 leading-relaxed mb-auto">
                                    {testimonials[currentIndex].quote}
                                </p>

                                <div className="mt-8 pt-8 border-t border-slate-100">
                                    <h4 className="font-bold text-slate-900">{testimonials[currentIndex].name}</h4>
                                    <p className="text-sm text-slate-500 mb-6">{testimonials[currentIndex].role}</p>

                                    <div className="flex gap-4">
                                        <button
                                            onClick={handlePrev}
                                            className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-white hover:bg-[#ea580c] transition-colors"
                                            aria-label="Previous testimonial"
                                        >
                                            <ArrowLeft className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={handleNext}
                                            className="w-10 h-10 bg-[#1e293b] rounded-lg flex items-center justify-center text-white hover:bg-[#ea580c] transition-colors"
                                            aria-label="Next testimonial"
                                        >
                                            <ArrowRight className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Stack Effect (Pages behind) */}
                        <div className="absolute top-4 left-4 w-full h-full bg-white/50 rounded-2xl -z-10 shadow-lg transform -rotate-2"></div>
                        <div className="absolute top-8 left-8 w-full h-full bg-white/30 rounded-2xl -z-20 shadow-lg transform -rotate-4"></div>
                    </div>
                </div>

                <style jsx global>{`
          .perspective-1000 {
            perspective: 1000px;
          }
          .transform-style-3d {
            transform-style: preserve-3d;
          }
          .backface-hidden {
            backface-visibility: hidden;
          }
          
           /* Simpler fade/scale for smoother "book" feel */
           .animate-page-flip-next {
             animation: pageFlip 0.6s ease-in-out;
           }

           @keyframes pageFlip {
             0% { transform: perspective(1000px) rotateY(0deg); opacity: 1; }
             50% { transform: perspective(1000px) rotateY(-10deg) scale(0.95); opacity: 0.8; }
             100% { transform: perspective(1000px) rotateY(0deg); opacity: 1; }
           }
        `}</style>
            </div>
        </section>
    );
}
