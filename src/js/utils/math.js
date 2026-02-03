/**
 * Math Utilities
 * Calculatoare și formule matemetice
 */

export const MathUtils = {
    /**
     * Calculează lungimea undei
     * λ = c / f
     */
    calculateWavelength(frequencyMHz) {
        const c = 300000; // km/s = 3×10^8 m/s
        return c / frequencyMHz;
    },

    /**
     * Calculează FLOPS
     * FLOPS = Cores × Frequency × 2
     */
    calculateFLOPS(cores, frequencyGHz) {
        return cores * frequencyGHz * 2; // TFLOPS
    },

    /**
     * Calculează transfer date
     * Time = Size / Bandwidth
     */
    calculateTransferTime(sizeGB, bandwidthGBps) {
        return sizeGB / bandwidthGBps; // seconds
    },

    /**
     * Calculează energia
     * Energy = Power × Time
     */
    calculateEnergy(powerW, hours) {
        return (powerW * hours * 3600) / 1000; // kWh
    },

    /**
     * Calculează căldură generată
     * Q = m × c × ΔT
     */
    calculateHeat(powerW, hours) {
        const joules = powerW * hours * 3600;
        return {
            joules: joules,
            calories: joules / 4.184,
            btu: powerW * hours * 3.412
        };
    },

    /**
     * Efect Doppler
     * f' = f × (v ± v_source) / v
     */
    calculateDoppler(frequencyHz, sourceVelMps, isApproaching = true) {
        const soundVel = 343; // m/s
        const sign = isApproaching ? 1 : -1;
        return frequencyHz * (soundVel + sign * sourceVelMps) / soundVel;
    },

    /**
     * Frame time din FPS
     * FrameTime = 1000 / FPS (ms)
     */
    calculateFrameTime(fps) {
        return 1000 / fps;
    },

    /**
     * Bandwidth Calculator
     */
    calculateBandwidth(width, height, fps, bitsPerPixel) {
        const pixelsPerFrame = width * height;
        const bitsPerFrame = pixelsPerFrame * bitsPerPixel;
        const bitsPerSecond = bitsPerFrame * fps;
        return {
            megabits: bitsPerSecond / 1000000,
            gigabits: bitsPerSecond / 1000000000,
            gigabytes: (bitsPerSecond * 3600) / 8 / (1024 * 1024 * 1024)
        };
    }
};
