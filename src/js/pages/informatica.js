// Informatica - Calculator functions

function calculateFLOPS() {
    const cores = parseInt(document.getElementById('cores-input').value);
    const freq = parseFloat(document.getElementById('freq-input').value);
    const flops = cores * freq * 2;
    const tflops = flops;
    
    document.getElementById('flops-result').innerHTML = `
        <strong>Rezultat Calcul FLOPS:</strong><br>
        Cores: ${cores} $\\times$ Frecvență: ${freq} GHz $\\times$ 2<br>
        <strong>Performance: ${tflops.toFixed(1)} TFLOPS</strong><br>
        = ${(flops * 1e12).toLocaleString()} FLOPS<br>
        <small>$\\text{TFLOPS} = \\frac{\\text{Cores} \\times \\text{Frequency} \\times 2}{10^{12}}$</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('flops-result'));
}

function calculateTransfer() {
    const bandwidth = parseFloat(document.getElementById('bandwidth-input').value);
    const dataSize = parseFloat(document.getElementById('data-size').value);
    const timeSeconds = dataSize / bandwidth;
    const timeMs = timeSeconds * 1000;
    
    document.getElementById('transfer-result').innerHTML = `
        <strong>Timp Transfer Dateilor:</strong><br>
        Bandwidth: ${bandwidth} GB/s<br>
        Dimensiune: ${dataSize} GB<br>
        <strong>Timp: ${timeSeconds.toFixed(2)} secunde (${timeMs.toFixed(0)} ms)</strong><br>
        <small>$\\text{Timp} = \\frac{\\text{Dimensiune}}{\\text{Bandwidth}}$</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('transfer-result'));
}

function calculateComplexity() {
    const n = parseInt(document.getElementById('input-size').value);
    const algo = document.getElementById('algo-select').value;
    let complexity = 0;
    let label = '';
    
    switch(algo) {
        case 'linear': complexity = n; label = '$O(n)$'; break;
        case 'log': complexity = Math.log2(n); label = '$O(\\log n)$'; break;
        case 'nlogn': complexity = n * Math.log2(n); label = '$O(n \\log n)$'; break;
        case 'quadratic': complexity = n * n; label = '$O(n^2)$'; break;
    }
    
    document.getElementById('complexity-result').innerHTML = `
        <strong>Analiza Complexitate:</strong><br>
        Input: ${n} elemente<br>
        Algoritm: ${label}<br>
        <strong>Operații estimate: ${Math.round(complexity).toLocaleString()}</strong><br>
        <small>Mai mic = mai rapid</small>
    `;
    if (typeof renderMathInElement !== 'undefined') renderMathInElement(document.getElementById('complexity-result'));
}
