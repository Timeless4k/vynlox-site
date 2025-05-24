import { motion, useInView, Variants } from "framer-motion"
import { useRef, forwardRef } from "react"

type MarginType = `${number}px` | `${number}%`

interface AnimateOnScrollProps {
  children: React.ReactNode
  animation?: 
    | "fadeIn" 
    | "fadeUp" 
    | "fadeDown" 
    | "fadeLeft" 
    | "fadeRight"
    | "fadeInUp" 
    | "fadeInDown" 
    | "fadeInLeft" 
    | "fadeInRight"
    | "scaleIn"
    | "scaleUp"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "rotateIn"
    | "flipIn"
    | "bounceIn"
    | "elasticIn"
    | "zoomIn"
    | "zoomOut"
    | "blur"
    | "stagger"
  delay?: number
  duration?: number
  className?: string
  threshold?: number
  margin?: MarginType
  once?: boolean
  staggerChildren?: number
  ease?: string | number[]
  scale?: number
  rotate?: number
  blur?: number
  x?: number
  y?: number
  disabled?: boolean
  onAnimationStart?: () => void
  onAnimationComplete?: () => void
}

const createEasing = {
  // Predefined easing functions
  smooth: [0.25, 0.1, 0.25, 1],
  snappy: [0.68, -0.55, 0.265, 1.55],
  gentle: [0.25, 0.46, 0.45, 0.94],
  bouncy: [0.68, -0.6, 0.32, 1.6],
  elastic: [0.175, 0.885, 0.32, 1.275],
}

const animations: Record<string, Variants> = {
  // Basic fades
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeDown: {
    hidden: { opacity: 0, y: -30 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 },
  },

  // Enhanced fades with more distance
  fadeInUp: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInDown: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 },
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },

  // Scale animations
  scaleIn: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  },

  // Slide animations
  slideUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  },
  slideLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },
  slideRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  },

  // Rotation animations
  rotateIn: {
    hidden: { opacity: 0, rotate: -180, scale: 0.8 },
    visible: { opacity: 1, rotate: 0, scale: 1 },
  },
  flipIn: {
    hidden: { opacity: 0, rotateY: -90, scale: 0.8 },
    visible: { opacity: 1, rotateY: 0, scale: 1 },
  },

  // Special effects
  bounceIn: {
    hidden: { opacity: 0, scale: 0.3 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    },
  },
  elasticIn: {
    hidden: { opacity: 0, scale: 0.6, rotate: -5 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25
      }
    },
  },
  zoomIn: {
    hidden: { opacity: 0, scale: 0.5 },
    visible: { opacity: 1, scale: 1 },
  },
  zoomOut: {
    hidden: { opacity: 0, scale: 1.2 },
    visible: { opacity: 1, scale: 1 },
  },
  blur: {
    hidden: { opacity: 0, filter: "blur(10px)" },
    visible: { opacity: 1, filter: "blur(0px)" },
  },

  // Stagger container
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
}

// Custom hook for advanced animations
export const useScrollAnimation = (
  animation: string = "fadeIn",
  options: Partial<AnimateOnScrollProps> = {}
) => {
  const ref = useRef(null)
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: (options.margin ?? "-100px") as MarginType,
    amount: options.threshold ?? 0.1,
  })

  return {
    ref,
    isInView,
    variants: animations[animation],
    initial: "hidden",
    animate: isInView ? "visible" : "hidden",
  }
}

const AnimateOnScroll = forwardRef<HTMLDivElement, AnimateOnScrollProps>(({
  children,
  animation = "fadeIn",
  delay = 0,
  duration = 0.6,
  className = "",
  threshold = 0.1,
  margin = "-50px" as MarginType,
  once = true,
  staggerChildren,
  ease = "smooth",
  scale,
  rotate,
  blur,
  x,
  y,
  disabled = false,
  onAnimationStart,
  onAnimationComplete,
}, forwardedRef) => {
  const internalRef = useRef(null)
  const ref = forwardedRef || internalRef
  
  const isInView = useInView(ref as any, { 
    once, 
    margin,
    amount: threshold,
  })

  // If disabled, render children without animation
  if (disabled) {
    return <div className={className}>{children}</div>
  }

  // Get base animation
  let animationVariants = animations[animation]

  // Apply custom overrides
  if (scale !== undefined || rotate !== undefined || blur !== undefined || x !== undefined || y !== undefined) {
    animationVariants = {
      hidden: {
        ...animationVariants.hidden,
        ...(scale !== undefined && { scale }),
        ...(rotate !== undefined && { rotate }),
        ...(blur !== undefined && { filter: `blur(${blur}px)` }),
        ...(x !== undefined && { x }),
        ...(y !== undefined && { y }),
      },
      visible: {
        ...animationVariants.visible,
        scale: 1,
        rotate: 0,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      },
    }
  }

  // Handle ease
  const easeValue = typeof ease === "string" && ease in createEasing 
    ? createEasing[ease as keyof typeof createEasing]
    : ease

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={animationVariants}
      transition={{
        duration,
        delay,
        ease: easeValue,
        ...(staggerChildren && { staggerChildren }),
      }}
      className={className}
      onAnimationStart={onAnimationStart}
      onAnimationComplete={onAnimationComplete}
    >
      {children}
    </motion.div>
  )
})

AnimateOnScroll.displayName = "AnimateOnScroll"

// Utility components for common patterns
export const FadeInSection = ({ children, ...props }: Omit<AnimateOnScrollProps, 'animation'>) => (
  <AnimateOnScroll animation="fadeIn" {...props}>
    {children}
  </AnimateOnScroll>
)

export const SlideUpSection = ({ children, ...props }: Omit<AnimateOnScrollProps, 'animation'>) => (
  <AnimateOnScroll animation="slideUp" {...props}>
    {children}
  </AnimateOnScroll>
)

export const ScaleInSection = ({ children, ...props }: Omit<AnimateOnScrollProps, 'animation'>) => (
  <AnimateOnScroll animation="scaleIn" {...props}>
    {children}
  </AnimateOnScroll>
)

export const StaggerContainer = ({ children, ...props }: Omit<AnimateOnScrollProps, 'animation'>) => (
  <AnimateOnScroll animation="stagger" staggerChildren={0.1} {...props}>
    {children}
  </AnimateOnScroll>
)

// Higher-order component for wrapping elements
export const withScrollAnimation = (
  Component: React.ComponentType<any>,
  animationProps: Partial<AnimateOnScrollProps> = {}
) => {
  return function WrappedComponent(props: any) {
    return (
      <AnimateOnScroll {...animationProps}>
        <Component {...props} />
      </AnimateOnScroll>
    )
  }
}

export default AnimateOnScroll