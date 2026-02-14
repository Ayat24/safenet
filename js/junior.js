// Simple Avatar Selector
document.addEventListener('DOMContentLoaded', () => {
    
    // Avatar Selection
    const avatars = {
        boy: "Assets/images/boy.png",
        girl: "Assets/images/girl.png",
        robot: "Assets/images/robo.png"
    };
    
    // Add click events to avatar buttons
    document.querySelectorAll('.avatar-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.avatar-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const selected = btn.dataset.avatar;
            const heroImg = document.querySelector('.hero-character img');
            if (heroImg && avatars[selected]) heroImg.src = avatars[selected];
        });
    });
    
    // Quiz Answer Handler
    document.querySelectorAll('.choice-btn, .scenario-option').forEach(btn => {
        btn.addEventListener('click', () => {
            const isCorrect = btn.dataset.choice === 'right' || btn.dataset.correct === 'true';
            
            // Show result
            const feedback = btn.closest('.quiz-content, .scenario-content')?.querySelector('.feedback');
            if (feedback) {
                feedback.style.display = 'block';
                const alertDiv = feedback.querySelector('.alert');
                const strongText = feedback.querySelector('strong');
                
                if (isCorrect) {
                    alertDiv.className = 'alert alert-success';
                    strongText.textContent = 'Correct!';
                    btn.style.background = '#d4edda';
                    btn.style.borderColor = '#c3e6cb';
                } else {
                    alertDiv.className = 'alert alert-danger';
                    strongText.textContent = 'Try Again!';
                    btn.style.background = '#f8d7da';
                    btn.style.borderColor = '#f5c6cb';
                }
            }
        });
    });
});
