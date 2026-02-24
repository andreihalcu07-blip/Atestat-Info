/**
 * Interactive Quiz System
 * Auto-transforms static quiz sections into clickable, scored quizzes.
 * Works as standalone script (no ES module dependency).
 * Detects #quiz section, parses questions from existing HTML, adds interactivity.
 */

(function () {
    'use strict';

    // Prevent double-init
    if (window.__QUIZ_INITIALIZED__) return;

    function initQuiz() {
        const quizSection = document.getElementById('quiz');
        if (!quizSection) return;

        window.__QUIZ_INITIALIZED__ = true;
        console.log('📝 Quiz system initializing...');

        const container = quizSection.querySelector('.container');
        if (!container) return;

        const cards = container.querySelectorAll('.card');
        if (!cards.length) return;

        // ── State ──
        let totalQuestions = 0;
        let answeredCount = 0;
        let correctCount = 0;

        // Data structure for each question
        const questions = [];

        cards.forEach(function (card) {
            const details = card.querySelector('details');
            if (!details) return;

            // Parse correct answer letter from details content
            // Pattern: <strong>b)</strong> or <strong>b) Text</strong>
            var detailP = details.querySelector('p');
            var detailText = detailP ? detailP.innerHTML : details.innerHTML;
            var match = detailText.match(/<strong>\s*([a-dA-D])\)/);
            if (!match) return;

            var correctLetter = match[1].toLowerCase();
            var explanation = detailP ? detailP.innerHTML : detailText;

            // Get options list
            var optionsList = card.querySelector('ul.specs-list');
            if (!optionsList) return;

            var items = optionsList.querySelectorAll('li');
            if (!items.length) return;

            totalQuestions++;

            // Store question data
            var questionData = {
                card: card,
                correctLetter: correctLetter,
                explanation: explanation,
                items: items
            };
            questions.push(questionData);

            // Remove <details> element
            details.remove();

            // Mark card as quiz question
            card.classList.add('quiz-question-card');

            // Transform list items into interactive options
            items.forEach(function (li) {
                var text = li.textContent.trim();
                var letterMatch = text.match(/^([a-dA-D])\)/);
                if (!letterMatch) return;

                var letter = letterMatch[1].toLowerCase();
                li.classList.add('quiz-option');
                li.setAttribute('data-letter', letter);
                li.setAttribute('role', 'button');
                li.setAttribute('tabindex', '0');

                // Click handler
                li.addEventListener('click', function () {
                    handleAnswer(questionData, li, letter);
                });

                // Keyboard support (Enter / Space)
                li.addEventListener('keydown', function (e) {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handleAnswer(questionData, li, letter);
                    }
                });
            });
        });

        if (!totalQuestions) return;

        // ── Create Score Bar ──
        var scoreBar = document.createElement('div');
        scoreBar.className = 'quiz-score-bar';
        scoreBar.innerHTML =
            '<p>Scor: <span class="quiz-score-count"><strong>0</strong> / ' + totalQuestions + '</span></p>' +
            '<div class="quiz-progress-track"><div class="quiz-progress-fill"></div></div>';

        // Insert before the first card
        var sectionTitle = container.querySelector('.section-title');
        if (sectionTitle && sectionTitle.nextSibling) {
            container.insertBefore(scoreBar, sectionTitle.nextSibling);
        } else {
            container.insertBefore(scoreBar, container.firstChild);
        }

        // ── Create Retry Button ──
        var retryBtn = document.createElement('button');
        retryBtn.className = 'quiz-retry-btn';
        retryBtn.textContent = '↻ Încearcă din nou';
        retryBtn.addEventListener('click', resetQuiz);
        container.appendChild(retryBtn);

        console.log('✓ Quiz initialized: ' + totalQuestions + ' questions');

        // ── Handle Answer ──
        function handleAnswer(qData, clickedLi, letter) {
            // Ignore if already answered
            if (qData.card.classList.contains('quiz-answered')) return;

            qData.card.classList.add('quiz-answered');
            answeredCount++;

            var isCorrect = letter === qData.correctLetter;

            if (isCorrect) {
                correctCount++;
                clickedLi.classList.add('quiz-correct');
            } else {
                clickedLi.classList.add('quiz-wrong');
                // Highlight the correct answer
                qData.items.forEach(function (item) {
                    if (item.getAttribute('data-letter') === qData.correctLetter) {
                        item.classList.add('quiz-correct');
                    }
                });
            }

            // Disable all options in this question
            qData.items.forEach(function (item) {
                item.classList.add('quiz-disabled');
            });

            // Show explanation
            var explDiv = document.createElement('div');
            explDiv.className = 'quiz-explanation';
            explDiv.innerHTML = qData.explanation;
            qData.card.appendChild(explDiv);

            // Update score display
            updateScore();

            // Check completion
            if (answeredCount === totalQuestions) {
                showFinalResult();
            }
        }

        // ── Update Score Display ──
        function updateScore() {
            var countEl = scoreBar.querySelector('.quiz-score-count');
            if (countEl) {
                countEl.innerHTML = '<strong>' + correctCount + '</strong> / ' + totalQuestions;
            }

            var fill = scoreBar.querySelector('.quiz-progress-fill');
            if (fill) {
                fill.style.width = Math.round((answeredCount / totalQuestions) * 100) + '%';
            }
        }

        // ── Show Final Result ──
        function showFinalResult() {
            scoreBar.classList.add('quiz-complete');

            var percent = Math.round((correctCount / totalQuestions) * 100);
            var resultClass, emoji, message;

            if (percent === 100) {
                resultClass = 'quiz-result-great';
                emoji = '🏆';
                message = 'Excelent! Toate răspunsurile corecte!';
            } else if (percent >= 60) {
                resultClass = 'quiz-result-good';
                emoji = '👍';
                message = 'Bine! Revizuiește conceptele la care ai greșit.';
            } else {
                resultClass = 'quiz-result-retry';
                emoji = '📖';
                message = 'Recitește secțiunea de teorie și încearcă din nou.';
            }

            var resultDiv = document.createElement('div');
            resultDiv.className = 'quiz-final-result ' + resultClass;
            resultDiv.innerHTML =
                '<h3>' + emoji + ' ' + percent + '% — ' + correctCount + ' / ' + totalQuestions + ' corecte</h3>' +
                '<p>' + message + '</p>';

            container.appendChild(resultDiv);

            // Show retry button
            retryBtn.classList.add('visible');
        }

        // ── Reset Quiz ──
        function resetQuiz() {
            answeredCount = 0;
            correctCount = 0;

            // Remove result & retry
            var finalResult = container.querySelector('.quiz-final-result');
            if (finalResult) finalResult.remove();
            retryBtn.classList.remove('visible');

            // Reset score bar
            scoreBar.classList.remove('quiz-complete');
            updateScore();
            var fill = scoreBar.querySelector('.quiz-progress-fill');
            if (fill) fill.style.width = '0%';

            // Reset all questions
            questions.forEach(function (qData) {
                qData.card.classList.remove('quiz-answered');

                // Remove explanation
                var expl = qData.card.querySelector('.quiz-explanation');
                if (expl) expl.remove();

                // Reset options
                qData.items.forEach(function (item) {
                    item.classList.remove('quiz-correct', 'quiz-wrong', 'quiz-disabled');
                });
            });
        }
    }

    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initQuiz);
    } else {
        initQuiz();
    }
})();
