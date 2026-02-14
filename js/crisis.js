// Crisis Center Interactive Script
document.addEventListener('DOMContentLoaded', function() {
    initializeCrisisCenter();
});

// Emergency Solutions Database
const emergencySolutions = {
    'hacked': {
        title: 'Account Hacked Emergency',
        steps: [
            {
                title: 'Step 1: Secure Your Account',
                content: `
                    <div class="alert alert-danger">
                        <i class="bi bi-exclamation-triangle"></i> <strong>URGENT:</strong> Take these actions immediately!
                    </div>
                    <h5><i class="bi bi-shield-lock"></i> Immediate Actions:</h5>
                    <ul class="list-group list-group-flush mb-3">
                        <li class="list-group-item"><strong>Change your password</strong> immediately</li>
                        <li class="list-group-item">Use "Forgot Password" on the platform</li>
                        <li class="list-group-item">Enable two-factor authentication (2FA)</li>
                        <li class="list-group-item">Check for unfamiliar devices</li>
                    </ul>
                    <div class="d-grid gap-2">
                        <button class="btn btn-outline-primary" onclick="alert('Password reset guide opened')">
                            <i class="bi bi-key"></i> Show Password Reset Guide
                        </button>
                    </div>
                `
            },
            {
                title: 'Step 2: Check for Damage',
                content: `
                    <h5><i class="bi bi-search"></i> What to Look For:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <ul>
                                <li>Unauthorized posts or messages</li>
                                <li>Connected apps and services</li>
                                <li>Account setting changes</li>
                            </ul>
                        </div>
                        <div class="col-md-6">
                            <ul>
                                <li>Unfamiliar transactions</li>
                                <li>New email rules</li>
                                <li>Changed security questions</li>
                            </ul>
                        </div>
                    </div>
                    <div class="alert alert-warning">
                        <i class="bi bi-lightbulb"></i> Take screenshots of anything suspicious as evidence.
                    </div>
                `
            },
            {
                title: 'Step 3: Report to Platform',
                content: `
                    <h5><i class="bi bi-flag"></i> Reporting Process:</h5>
                    <div class="row g-3">
                        <div class="col-md-4">
                            <a href="https://www.facebook.com/hacked" target="_blank" class="btn btn-outline-primary w-100">
                                <i class="bi bi-facebook"></i> Facebook
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="https://support.google.com/accounts/answer/6294825" target="_blank" class="btn btn-outline-danger w-100">
                                <i class="bi bi-google"></i> Google
                            </a>
                        </div>
                        <div class="col-md-4">
                            <a href="https://help.instagram.com/149494825257596" target="_blank" class="btn btn-outline-info w-100">
                                <i class="bi bi-instagram"></i> Instagram
                            </a>
                        </div>
                    </div>
                    <div class="mt-3">
                        <h6>Include in your report:</h6>
                        <ul>
                            <li>Date and time of the incident</li>
                            <li>What changes you've observed</li>
                            <li>Any evidence collected</li>
                        </ul>
                    </div>
                `
            },
            {
                title: 'Step 4: Protect Other Accounts',
                content: `
                    <h5><i class="bi bi-shield-check"></i> Prevent Future Hacks:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h6><i class="bi bi-check-circle text-success"></i> Do:</h6>
                                    <ul>
                                        <li>Use unique passwords</li>
                                        <li>Enable 2FA everywhere</li>
                                        <li>Use a password manager</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h6><i class="bi bi-x-circle text-danger"></i> Don't:</h6>
                                    <ul>
                                        <li>Reuse passwords</li>
                                        <li>Share login details</li>
                                        <li>Ignore security alerts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            },
            {
                title: 'Step 5: Get Professional Help',
                content: `
                    <h5><i class="bi bi-telephone"></i> Contact Authorities:</h5>
                    <div class="row g-3">
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body text-center">
                                    <i class="bi bi-shield text-primary display-6"></i>
                                    <h6 class="mt-2">National Cyber Security</h6>
                                    <p class="mb-2">Report cyber crimes</p>
                                    <button class="btn btn-danger" onclick="alert('Calling 108...')">
                                        <i class="bi bi-telephone"></i> Call 108
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card">
                                <div class="card-body text-center">
                                    <i class="bi bi-bank text-success display-6"></i>
                                    <h6 class="mt-2">Bank Emergency</h6>
                                    <p class="mb-2">If money was lost</p>
                                    <button class="btn btn-success" onclick="alert('Contact your bank immediately!')">
                                        <i class="bi bi-telephone"></i> Call Bank
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    'bullying': {
        title: 'Cyberbullying Emergency',
        steps: [
            {
                title: 'Step 1: Don\'t Respond',
                content: `
                    <div class="alert alert-info">
                        <i class="bi bi-chat-dots"></i> <strong>Important:</strong> Don't engage with the bully.
                    </div>
                    <p>Responding often escalates the situation. Take a deep breath and follow these steps:</p>
                    <ul>
                        <li><strong>Don't reply</strong> to messages</li>
                        <li><strong>Don't retaliate</strong> online</li>
                        <li><strong>Don't delete</strong> evidence</li>
                    </ul>
                `
            },
            {
                title: 'Step 2: Save Evidence',
                content: `
                    <h5><i class="bi bi-camera"></i> Collect Proof:</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h6>Screenshot Everything:</h6>
                                    <ul>
                                        <li>Messages</li>
                                        <li>Comments</li>
                                        <li>Posts</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card mb-3">
                                <div class="card-body">
                                    <h6>Document Details:</h6>
                                    <ul>
                                        <li>Dates & times</li>
                                        <li>Usernames</li>
                                        <li>Platforms used</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    },
    'scam': {
        title: 'Financial Scam Emergency',
        steps: [
            {
                title: 'Step 1: Contact Bank',
                content: `
                    <div class="alert alert-danger">
                        <i class="bi bi-exclamation-triangle"></i> <strong>URGENT:</strong> Act immediately if money was involved!
                    </div>
                    <h5><i class="bi bi-bank"></i> Immediate Actions:</h5>
                    <ol>
                        <li><strong>Call your bank</strong> - use the 24/7 emergency number</li>
                        <li><strong>Freeze your cards</strong> - request immediate card freeze</li>
                        <li><strong>Report the transaction</strong> - as fraudulent</li>
                        <li><strong>Change online banking</strong> passwords</li>
                    </ol>
                    <button class="btn btn-danger mt-2" onclick="alert('Call your bank immediately!')">
                        <i class="bi bi-telephone"></i> Emergency Bank Contact
                    </button>
                `
            }
        ]
    },
    'privacy': {
        title: 'Privacy Breach Emergency',
        steps: [
            {
                title: 'Step 1: Assess the Damage',
                content: `
                    <h5><i class="bi bi-eye-slash"></i> What Information Was Exposed?</h5>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check1">
                                <label class="form-check-label" for="check1">
                                    Personal address
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check2">
                                <label class="form-check-label" for="check2">
                                    Phone number
                                </label>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check3">
                                <label class="form-check-label" for="check3">
                                    Financial information
                                </label>
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" id="check4">
                                <label class="form-check-label" for="check4">
                                    Private photos/videos
                                </label>
                            </div>
                        </div>
                    </div>
                `
            }
        ]
    }
};

let currentProblem = null;
let currentStep = 0;

function initializeCrisisCenter() {
    // Problem selection
    document.querySelectorAll('.problem-card').forEach(card => {
        card.addEventListener('click', function() {
            selectProblem(this);
        });
    });
    
    // Step navigation
    document.getElementById('prevStep')?.addEventListener('click', goToPrevStep);
    document.getElementById('nextStep')?.addEventListener('click', goToNextStep);
    
    // Reset guide
    document.getElementById('resetGuide')?.addEventListener('click', resetGuide);
    
    // Form submission
    document.getElementById('reportForm')?.addEventListener('submit', function(e) {
        e.preventDefault();
        generateReport();
    });
}

function selectProblem(card) {
    // Remove active class from all cards
    document.querySelectorAll('.problem-card').forEach(c => {
        c.classList.remove('active');
    });
    
    // Add active class to selected card
    card.classList.add('active');
    
    // Get problem type
    currentProblem = card.getAttribute('data-problem');
    currentStep = 0;
    
    // Show solution guide
    const guideSection = document.getElementById('solutionGuide');
    guideSection.style.display = 'block';
    
    // Update problem title
    const problemTitle = document.getElementById('problemTitle');
    if (emergencySolutions[currentProblem]) {
        problemTitle.textContent = emergencySolutions[currentProblem].title;
    } else {
        problemTitle.textContent = 'Emergency Help Guide';
    }
    
    // Scroll to guide
    guideSection.scrollIntoView({ behavior: 'smooth' });
    
    // Load first step
    loadStep(0);
    
    // Update progress steps
    updateProgressSteps();
}

function loadStep(stepIndex) {
    if (!currentProblem || !emergencySolutions[currentProblem]) {
        showNoSolution();
        return;
    }
    
    const steps = emergencySolutions[currentProblem].steps;
    if (stepIndex < 0 || stepIndex >= steps.length) {
        showCompletion();
        return;
    }
    
    currentStep = stepIndex;
    
    // Update step content
    const stepContent = document.getElementById('stepContent');
    stepContent.innerHTML = `
        <div class="step-header mb-4">
            <h4 class="text-primary">${steps[stepIndex].title}</h4>
            <p class="text-muted">Step ${stepIndex + 1} of ${steps.length}</p>
        </div>
        <div class="step-body">
            ${steps[stepIndex].content}
        </div>
    `;
    
    updateNavigationButtons();
    
    updateProgressSteps();
}

function goToPrevStep() {
    if (currentStep > 0) {
        loadStep(currentStep - 1);
    }
}

function goToNextStep() {
    if (!currentProblem || !emergencySolutions[currentProblem]) return;
    
    const steps = emergencySolutions[currentProblem].steps;
    
    if (currentStep < steps.length - 1) {
        loadStep(currentStep + 1);
    } else {
        showCompletion();
    }
}

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevStep');
    const nextBtn = document.getElementById('nextNext');
    
    if (!prevBtn || !nextBtn) return;
    
    prevBtn.disabled = currentStep === 0;
    
    if (!currentProblem || !emergencySolutions[currentProblem]) return;
    
    const steps = emergencySolutions[currentProblem].steps;
    
    if (currentStep === steps.length - 1) {
        nextBtn.innerHTML = 'Get Help <i class="bi bi-telephone"></i>';
        nextBtn.className = 'btn btn-danger';
    } else {
        nextBtn.innerHTML = 'Next <i class="bi bi-arrow-right"></i>';
        nextBtn.className = 'btn btn-primary';
    }
}

function updateProgressSteps() {
    // Remove active class from all steps
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Add active class to current step
    const currentStepElement = document.querySelector(`.step[data-step="${currentStep + 1}"]`);
    if (currentStepElement) {
        currentStepElement.classList.add('active');
    }
    
    // Add completed class to previous steps
    for (let i = 0; i < currentStep; i++) {
        const stepElement = document.querySelector(`.step[data-step="${i + 1}"]`);
        if (stepElement) {
            stepElement.classList.add('completed');
        }
    }
}

function resetGuide() {
    // Reset UI
    document.querySelectorAll('.problem-card').forEach(c => {
        c.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    // Hide solution guide
    document.getElementById('solutionGuide').style.display = 'none';
    
    // Reset variables
    currentProblem = null;
    currentStep = 0;
    
    // Scroll back to problem selector
    document.querySelector('.problem-selector').scrollIntoView({ behavior: 'smooth' });
}


