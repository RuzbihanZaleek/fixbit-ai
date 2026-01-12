import { useEffect, useRef, useState } from "react";
import { Star } from "lucide-react";

interface Testimonial {
  author: string;
  title: string;
  company: string;
  text: string;
  rating: number;
  image: string;
}

interface HorizontalTestimonialScrollProps {
  testimonials: Testimonial[];
  scrollSpeed?: number;
}

export default function HorizontalTestimonialScroll({
  testimonials,
  scrollSpeed = 1,
}: HorizontalTestimonialScrollProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Smooth horizontal auto-scroll effect
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let animationFrameId: number;
    let scrollPosition = 0;

    const animate = () => {
      if (!isHovering && scrollContainer) {
        // Increment scroll position
        scrollPosition += scrollSpeed;

        // Get the width of a single set of testimonials
        const singleSetWidth = scrollContainer.scrollWidth / 2;

        // Reset to start when we reach the end for seamless loop
        if (scrollPosition >= singleSetWidth) {
          scrollPosition = 0;
        }

        scrollContainer.scrollLeft = scrollPosition;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(animate);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isHovering, scrollSpeed]);

  return (
    <div className="w-full">
      {/* Horizontal Scrolling Container */}
      <div
        ref={scrollContainerRef}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        className="flex gap-6 overflow-x-hidden pb-2"
        style={{
          scrollBehavior: "auto",
          WebkitOverflowScrolling: "touch",
        }}
      >
        {/* Render testimonials twice for infinite loop effect */}
        {[...testimonials, ...testimonials].map((testimonial, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-96 bg-white border border-border rounded-lg p-6 hover:shadow-lg hover:border-primary transition-all duration-300 hover:-translate-y-1"
          >
            {/* Stars Rating */}
            <div className="flex gap-1 mb-3">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>

            {/* Testimonial Text */}
            <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
              "{testimonial.text}"
            </p>

            {/* Author Info */}
            <div className="flex items-center gap-3">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-xs flex-shrink-0">
                {testimonial.image}
              </div>

              <div className="min-w-0">
                <p className="font-semibold text-foreground text-sm truncate">
                  {testimonial.author}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {testimonial.title}
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  {testimonial.company}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Info Text */}
      {/* <p className="text-center text-sm text-muted-foreground mt-6">
        ⏸️ Hover to pause • Scroll continues automatically
      </p> */}
    </div>
  );
}
