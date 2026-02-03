/**
 * Calculator Module
 * Gestionează toți calculatoarele de pe pagini
 */

import { DOMUtils } from '../utils/dom.js';
import { MathUtils } from '../utils/math.js';

export const CalculatorModule = {
    init() {
        this.setupCalculators();
    },

    /**
     * Setup toți calculatoarele pe pagină
     */
    setupCalculators() {
        // Wavelength Calculator
        const waveBtn = document.querySelector('button[onclick*="calculateWavelength"]');
        if (waveBtn) {
            waveBtn.addEventListener('click', () => this.calculateWavelength());
        }

        // FLOPS Calculator
        const flopsBtn = document.querySelector('button[onclick*="calculateFLOPS"]');
        if (flopsBtn) {
            flopsBtn.addEventListener('click', () => this.calculateFLOPS());
        }

        // Transfer Calculator
        const transferBtn = document.querySelector('button[onclick*="calculateTransfer"]');
        if (transferBtn) {
            transferBtn.addEventListener('click', () => this.calculateTransfer());
        }

        // Frame Time Calculator
        const frameBtn = document.querySelector('button[onclick*="calculateFrameTime"]');
        if (frameBtn) {
            frameBtn.addEventListener('click', () => this.calculateFrameTime());
        }

        // Heat Calculator
        const heatBtn = document.querySelector('button[onclick*="calculateHeat"]');
        if (heatBtn) {
            heatBtn.addEventListener('click', () => this.calculateHeat());
        }

        // Doppler Calculator
        const dopplerBtn = document.querySelector('button[onclick*="calculateDoppler"]');
        if (dopplerBtn) {
            dopplerBtn.addEventListener('click', () => this.calculateDoppler());
        }
    },

    /**
     * Wavelength Calculator
     */
    calculateWavelength() {
        const input = DOMUtils.getValue('#frequency-input');
        if (!input) return;

        const wavelength = MathUtils.calculateWavelength(parseInt(input));
        const result = DOMUtils.select('#wavelength-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Rezultat:</strong><br>
                Frecvență: ${input} MHz = ${parseInt(input) * 1e6} Hz<br>
                Lungime undă: $\\lambda = \\frac{c}{f} = ${wavelength.toFixed(2)}$ m = ${(wavelength * 100).toFixed(2)} cm<br>
                <small>$c = 3 \\times 10^8$ m/s (viteza luminii)</small>
            `;
            DOMUtils.renderMath(result);
        }
    },

    /**
     * FLOPS Calculator
     */
    calculateFLOPS() {
        const cores = parseInt(DOMUtils.getValue('#cores-input'));
        const freq = parseFloat(DOMUtils.getValue('#freq-input'));
        
        if (!cores || !freq) return;

        const tflops = MathUtils.calculateFLOPS(cores, freq);
        const result = DOMUtils.select('#flops-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Rezultat Calcul FLOPS:</strong><br>
                Cores: ${cores} $\\times$ Frecvență: ${freq} GHz $\\times$ 2<br>
                <strong>Performance: ${tflops.toFixed(1)} TFLOPS</strong><br>
                = ${(tflops * 1e12).toLocaleString()} FLOPS<br>
                <small>$\\text{TFLOPS} = \\frac{\\text{Cores} \\times \\text{Frequency} \\times 2}{10^{12}}$</small>
            `;
            DOMUtils.renderMath(result);
        }
    },

    /**
     * Transfer Time Calculator
     */
    calculateTransfer() {
        const bandwidth = parseFloat(DOMUtils.getValue('#bandwidth-input'));
        const dataSize = parseFloat(DOMUtils.getValue('#data-size'));
        
        if (!bandwidth || !dataSize) return;

        const timeSeconds = MathUtils.calculateTransferTime(dataSize, bandwidth);
        const result = DOMUtils.select('#transfer-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Timp Transfer Dateilor:</strong><br>
                Bandwidth: ${bandwidth} GB/s<br>
                Dimensiune: ${dataSize} GB<br>
                <strong>Timp: ${timeSeconds.toFixed(2)} secunde (${(timeSeconds * 1000).toFixed(0)} ms)</strong><br>
                <small>$\\text{Timp} = \\frac{\\text{Dimensiune}}{\\text{Bandwidth}}$</small>
            `;
            DOMUtils.renderMath(result);
        }
    },

    /**
     * Frame Time Calculator
     */
    calculateFrameTime() {
        const fps = parseInt(DOMUtils.getValue('#fps-input'));
        if (!fps || fps <= 0) {
            const result = DOMUtils.select('#frametime-result');
            if (result) result.innerHTML = '<span style="color: #f59e0b;">Introduceți un FPS valid!</span>';
            return;
        }

        const frameTime = MathUtils.calculateFrameTime(fps);
        const result = DOMUtils.select('#frametime-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Rezultate pentru ${fps} FPS:</strong><br>
                Frame Time: <strong>${frameTime.toFixed(2)} ms</strong><br>
                <small>$\\text{Frame Time} = \\frac{1000\\text{ms}}{\\text{FPS}}$</small>
            `;
            DOMUtils.renderMath(result);
        }
    },

    /**
     * Heat Calculator
     */
    calculateHeat() {
        const power = parseInt(DOMUtils.getValue('#heat-power'));
        const time = parseFloat(DOMUtils.getValue('#heat-time'));
        
        if (!power || !time) return;

        const heat = MathUtils.calculateHeat(power, time);
        const result = DOMUtils.select('#heat-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Căldură Generată:</strong><br>
                Putere: ${power}W $\\times$ Timp: ${time}h<br>
                Energia: ${heat.joules.toLocaleString()} J<br>
                Căldură: ${heat.calories.toLocaleString()} cal<br>
                Căldură: ${heat.btu.toFixed(0)} BTU<br>
                <small>$Q = P \\times t$ (Energie = Putere $\\times$ Timp)</small>
            `;
            DOMUtils.renderMath(result);
        }
    },

    /**
     * Doppler Calculator
     */
    calculateDoppler() {
        const frequency = parseInt(DOMUtils.getValue('#doppler-freq'));
        const sourceVel = parseInt(DOMUtils.getValue('#doppler-source-vel'));
        const direction = DOMUtils.getValue('#doppler-direction');
        
        if (!frequency || !sourceVel) return;

        const isApproaching = direction === 'approach';
        const observedFreq = MathUtils.calculateDoppler(frequency, sourceVel, isApproaching);
        const change = ((observedFreq - frequency) / frequency * 100).toFixed(2);
        const result = DOMUtils.select('#doppler-result');
        
        if (result) {
            result.innerHTML = `
                <strong>Efect Doppler:</strong><br>
                Frecvență originală: ${frequency} Hz<br>
                Frecvență observată: ${observedFreq.toFixed(0)} Hz<br>
                Schimbare: ${change}%<br>
                Direcție: ${isApproaching ? 'Se apropie' : 'Se depărtează'}<br>
                <small>$f' = f \\cdot \\frac{v \\pm v_{\\text{source}}}{v}$</small>
            `;
            DOMUtils.renderMath(result);
        }
    }
};
