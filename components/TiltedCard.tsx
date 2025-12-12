
import React, { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface TiltedCardProps {
  imageSrc: string;
  altText?: string;
  captionText?: string;
  subCaptionText?: string;
  containerHeight?: string | number;
  containerWidth?: string | number;
  imageHeight?: string | number;
  imageWidth?: string | number;
  rotateAmplitude?: number;
  scaleOnHover?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  displayOverlayContent?: boolean;
  overlayContent?: React.ReactNode;
  behindGlow?: boolean;
  mobileTilt?: boolean;
  showPattern?: boolean;
}

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  subCaptionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  rotateAmplitude = 12,
  scaleOnHover = 1.1,
  showMobileWarning = false,
  showTooltip = true,
  displayOverlayContent = false,
  overlayContent = null,
  behindGlow = false,
  mobileTilt = false,
  showPattern = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]));
  const scale = useSpring(1, { stiffness: 200, damping: 10 });

  function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
    scale.set(1);
  }

  // Mobile Tilt Logic
  useEffect(() => {
    if (!mobileTilt) return;

    const handleDeviceOrientation = (event: DeviceOrientationEvent) => {
      if (!ref.current) return;
      const { beta, gamma } = event;
      if (beta == null || gamma == null) return;

      const yPct = (Math.min(Math.max(beta - 45, -45), 45) / 45) * 0.5; // Tilt back/forth
      const xPct = (Math.min(Math.max(gamma, -45), 45) / 45) * 0.5; // Tilt left/right

      x.set(xPct);
      y.set(yPct);
    };

    if (window.DeviceOrientationEvent && /Mobi|Android/i.test(navigator.userAgent)) {
      // Note: Requesting permission might be needed for iOS 13+
      window.addEventListener('deviceorientation', handleDeviceOrientation);
    }
    return () => {
      window.removeEventListener('deviceorientation', handleDeviceOrientation);
    };
  }, [x, y, mobileTilt]);

  return (
    <motion.div
      ref={ref}
      className="relative z-10 flex flex-col items-center justify-center transition-all duration-200 ease-linear"
      style={{
        height: containerHeight,
        width: containerWidth,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Behind Glow Effect - Recreated logic */}
      {behindGlow && (
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] rounded-full blur-[50px] opacity-40 z-[-1]"
          style={{ background: 'linear-gradient(135deg, #3b82f6 0%, #a855f7 100%)' }}
        />
      )}

      <motion.div
        className="relative h-full w-full rounded-[20px] shadow-2xl overflow-hidden bg-black"
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: "preserve-3d",
        }}
      >
        <motion.img
          src={imageSrc}
          alt={altText}
          className="absolute h-full w-full object-cover rounded-[20px]"
          style={{
            transform: "translateZ(50px)",
          }}
        />

        {/* Icon Pattern - subtle grid/dot overlay */}
        {showPattern && (
          <div
            className="absolute inset-0 z-[1] opacity-20 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              transform: "translateZ(60px)"
            }}
          />
        )}

        {displayOverlayContent && overlayContent && (
          <motion.div
            className="absolute top-0 left-0 z-[2] h-full w-full"
            style={{
              transform: "translateZ(75px)",
            }}
          >
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {/* User Info / Tooltip */}
      {showTooltip && (
        <motion.div
          className="absolute z-[1] -bottom-16 opacity-0 transition-opacity duration-300 group-hover:opacity-100 sm:opacity-100"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          {captionText && (
            <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
              {captionText}
            </h3>
          )}
          {subCaptionText && (
            <p className="text-sm text-gray-400 text-center">{subCaptionText}</p>
          )}
        </motion.div>
      )}
    </motion.div>
  );
}
