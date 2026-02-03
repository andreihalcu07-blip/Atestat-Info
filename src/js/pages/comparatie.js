// Comparatie - Comparison functions

function showComparison(type) {
    const contents = document.querySelectorAll('.comparison-content');
    contents.forEach(content => content.classList.remove('active'));
    document.getElementById(`comparison-${type}`).classList.add('active');
    
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}
