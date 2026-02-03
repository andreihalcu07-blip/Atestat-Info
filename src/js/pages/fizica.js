// Fizica - Calculator functions

function showPhysicsComparison(type) {
    const contents = document.querySelectorAll('.comparison-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`comparison-${type}`).classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function calculateWavelength() {
    const frequency = parseInt(document.getElementById('frequency-input').value);
    const c = 300000;
    const wavelength = c / frequency;
    
    document.getElementById('wavelength-result').innerHTML = `
        <strong>Rezultat:</strong><br>
        Frecvență: ${frequency} MHz = ${frequency * 1e6} Hz<br>
        Lungime undă: $\\lambda = \\frac{c}{f} = ${wavelength.toFixed(2)}$ m = ${(wavelength * 100).toFixed(2)} cm<br>
        <small>$c = 3 \\times 10^8$ m/s (viteza luminii)</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('wavelength-result'));
}

function calculateHeat() {
    const power = parseInt(document.getElementById('heat-power').value);
    const time = parseFloat(document.getElementById('heat-time').value);
    
    const joules = power * time * 3600;
    const calories = joules / 4.184;
    const btu = power * time * 3.412;
    
    document.getElementById('heat-result').innerHTML = `
        <strong>Căldură Generată:</strong><br>
        Putere: ${power}W $\\times$ Timp: ${time}h<br>
        Energia: ${joules.toLocaleString()} J<br>
        Căldură: ${calories.toLocaleString()} cal<br>
        Căldură: ${btu.toFixed(0)} BTU<br>
        <small>$Q = P \\times t$ (Energie = Putere $\\times$ Timp)</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('heat-result'));
}

function calculateDoppler() {
    const frequency = parseInt(document.getElementById('doppler-freq').value);
    const sourceVel = parseInt(document.getElementById('doppler-source-vel').value);
    const direction = document.getElementById('doppler-direction').value;
    const soundVel = 343;
    
    let observedFreq;
    if (direction === 'approach') {
        observedFreq = frequency * (soundVel + sourceVel) / soundVel;
    } else {
        observedFreq = frequency * (soundVel - sourceVel) / soundVel;
    }
    
    const change = ((observedFreq - frequency) / frequency * 100).toFixed(2);
    
    document.getElementById('doppler-result').innerHTML = `
        <strong>Efect Doppler:</strong><br>
        Frecvență originală: ${frequency} Hz<br>
        Frecvență observată: ${observedFreq.toFixed(0)} Hz<br>
        Schimbare: ${change}%<br>
        Direcție: ${direction === 'approach' ? 'Se apropie' : 'Se depărtează'}<br>
        <small>$f' = f \\cdot \\frac{v \\pm v_{\\text{source}}}{v}$</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('doppler-result'));
}
