"use client"

import { useEffect, useRef, useCallback } from "react"

interface Particle {
    x: number
    y: number
    originalX: number
    originalY: number
    vx: number
    vy: number
    size: number
    opacity: number
    hue: number
    pulsePhase: number
}

interface InteractiveBackgroundProps {
    isDark: boolean
}

export default function InteractiveBackground({ isDark }: InteractiveBackgroundProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | null>(null)
    const particlesRef = useRef<Particle[]>([])
    const mouseRef = useRef({ x: 0, y: 0 })
    const dimensionsRef = useRef({ width: 0, height: 0 })

    const createParticles = useCallback((width: number, height: number) => {
        const particles: Particle[] = []
        const particleCount = 15

        for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: Math.random() * width,
            y: Math.random() * height,
            originalX: Math.random() * width,
            originalY: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.5,
            vy: (Math.random() - 0.5) * 0.5,
            size: Math.random() * 60 + 40,
            opacity: Math.random() * 0.3 + 0.1,
            hue: Math.random() * 60 + 200, // Blue to purple range
            pulsePhase: Math.random() * Math.PI * 2,
        })
        }

        return particles
    }, [])

    const updateParticles = useCallback(() => {
        const { width, height } = dimensionsRef.current
        const mouse = mouseRef.current

        particlesRef.current.forEach((particle) => {
        // Calculate distance to mouse
        const dx = particle.x - mouse.x
        const dy = particle.y - mouse.y
        const distance = Math.sqrt(dx * dx + dy * dy)
        const repelRadius = 150

        // Repulsion force
        if (distance < repelRadius && distance > 0) {
            const force = (repelRadius - distance) / repelRadius
            const angle = Math.atan2(dy, dx)
            const repelStrength = force * 2

            particle.vx += Math.cos(angle) * repelStrength
            particle.vy += Math.sin(angle) * repelStrength
        }

        // Gentle drift towards original position
        const returnForce = 0.02
        particle.vx += (particle.originalX - particle.x) * returnForce
        particle.vy += (particle.originalY - particle.y) * returnForce

        // Apply friction
        particle.vx *= 0.95
        particle.vy *= 0.95

        // Update position
        particle.x += particle.vx
        particle.y += particle.vy

        // Wrap around edges
        if (particle.x < -particle.size) {
            particle.x = width + particle.size
            particle.originalX = width + particle.size
        }
        if (particle.x > width + particle.size) {
            particle.x = -particle.size
            particle.originalX = -particle.size
        }
        if (particle.y < -particle.size) {
            particle.y = height + particle.size
            particle.originalY = height + particle.size
        }
        if (particle.y > height + particle.size) {
            particle.y = -particle.size
            particle.originalY = -particle.size
        }

        // Update pulse phase for breathing effect
        particle.pulsePhase += 0.02
        })
    }, [])

    const drawParticles = useCallback(
        (ctx: CanvasRenderingContext2D, themeIsDark: boolean) => {
        const { width, height } = dimensionsRef.current
        const mouse = mouseRef.current

        // Clear canvas
        ctx.clearRect(0, 0, width, height)
        ctx.fillStyle = isDark ? "#111827" : "#fff";
        ctx.fillRect(0, 0, width, height);

        // Draw cursor lens effect with theme-appropriate colors
        // const lensRadius = 100
        // const gradient = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, lensRadius)

        // if (isDark) {
        //     gradient.addColorStop(0, "rgba(59, 130, 246, 0.1)")
        //     gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        // } else {
        //     gradient.addColorStop(0, "rgba(59, 130, 246, 0.05)")
        //     gradient.addColorStop(1, "rgba(59, 130, 246, 0)")
        // }

        // ctx.fillStyle = gradient
        // ctx.fillRect(0, 0, width, height)

        // Draw particles with theme-appropriate styling
        particlesRef.current.forEach((particle) => {
            const pulseOpacity = particle.opacity + Math.sin(particle.pulsePhase) * 0.1

            // Adjust colors and opacity based on theme
            const baseOpacity = isDark ? pulseOpacity : pulseOpacity * 0.6
            const hue = isDark ? particle.hue : particle.hue - 40 // Shift to darker blues in light mode
            const saturation = isDark ? 70 : 80
            const lightness = isDark ? 60 : 35 // Much darker in light mode

            // Create gradient for particle
            const particleGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size,
            )

            particleGradient.addColorStop(0, `hsla(${hue}, ${saturation}%, ${lightness}%, ${baseOpacity})`)
            particleGradient.addColorStop(
            0.7,
            `hsla(${hue + 20}, ${saturation + 10}%, ${lightness + 10}%, ${baseOpacity * 0.5})`,
            )
            particleGradient.addColorStop(1, `hsla(${hue}, ${saturation}%, ${lightness}%, 0)`)

            // Draw particle with glow effect
            ctx.save()
            // ctx.globalCompositeOperation = "source-over"
            // ctx.filter = "blur(2px)"

            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
            ctx.fillStyle = particleGradient
            ctx.fill()

            ctx.restore()

            // Draw inner core
            ctx.save()
            // ctx.globalCompositeOperation = "source-over"

            const coreGradient = ctx.createRadialGradient(
            particle.x,
            particle.y,
            0,
            particle.x,
            particle.y,
            particle.size * 0.3,
            )

            const coreLightness = isDark ? 80 : 25
            coreGradient.addColorStop(0, `hsla(${hue}, 90%, ${coreLightness}%, ${baseOpacity * 0.8})`)
            coreGradient.addColorStop(1, `hsla(${hue}, 90%, ${coreLightness}%, 0)`)

            ctx.beginPath()
            ctx.arc(particle.x, particle.y, particle.size * 0.3, 0, Math.PI * 2)
            ctx.fillStyle = coreGradient
            ctx.fill()

            ctx.restore()
        })
        },
        [isDark],
    )

    const animate = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d", { alpha: false })
        if (!ctx) return

        updateParticles()
        drawParticles(ctx, isDark)

        animationRef.current = requestAnimationFrame(animate)
    }, [updateParticles, isDark])

    const handleResize = useCallback(() => {
        const canvas = canvasRef.current
        if (!canvas) return

        const { innerWidth, innerHeight } = window
        canvas.width = innerWidth
        canvas.height = innerHeight

        dimensionsRef.current = { width: innerWidth, height: innerHeight }

        // Recreate particles for new dimensions
        particlesRef.current = createParticles(innerWidth, innerHeight)
    }, [createParticles])

    const handleMouseMove = useCallback((e: MouseEvent) => {
        mouseRef.current = { x: e.clientX, y: e.clientY }
    }, [])

    useEffect(() => {
        const canvas = canvasRef.current
        if (!canvas) return
    
        handleResize()
        animate()
    
        window.addEventListener("resize", handleResize)
        window.addEventListener("mousemove", handleMouseMove)
    
        return () => {
            if (animationRef.current) {
            cancelAnimationFrame(animationRef.current)
            }
            window.removeEventListener("resize", handleResize)
            window.removeEventListener("mousemove", handleMouseMove)
            }
        }, [animate, handleResize, handleMouseMove, isDark])

    useEffect(() => {
        // Force a redraw when theme changes by reinitializing particles
        const { width, height } = dimensionsRef.current
        particlesRef.current = createParticles(width, height)
    }, [isDark])

    return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0" />
}
