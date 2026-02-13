import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  size?: 'large' | 'medium' | 'small';
}

export default function Hero({ title, subtitle, imageSrc, imageAlt, size = 'large' }: HeroProps) {
  const heights = {
    large: 'h-[70vh] min-h-[500px]',
    medium: 'h-[50vh] min-h-[400px]',
    small: 'h-[40vh] min-h-[300px]',
  };

  return (
    <section className={`relative ${heights[size]} flex items-center justify-center overflow-hidden`}>
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 drop-shadow-lg">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto drop-shadow">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
