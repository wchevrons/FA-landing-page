:root {
    --primary: #32CD32;
    --white: #FFFFFF;
    --dark: #1A1A1A;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background-color: var(--white);
    color: var(--dark);
    overflow-x: hidden;
    min-height: 100vh;
    position: relative;
}

.background-animation {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    overflow: hidden;
}

.line {
    position: absolute;
    height: 1px;
    background: var(--primary);
    opacity: 0.15;
    animation: moveLine linear infinite;
}

@keyframes moveLine {
    0% { transform: translateY(0) translateX(-50%); }
    100% { transform: translateY(100vh) translateX(0); }
}

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.logo {
    width: 80px;
    height: 80px;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeIn 0.8s ease-out forwards 0.3s;
}

.logo-circle {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
}

.logo-circle::after {
    content: '';
    position: absolute;
    width: 60%;
    height: 60%;
    border-radius: 50%;
    border: 2px solid var(--primary);
    animation: pulse 3s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.2); opacity: 0.5; }
}

h1 {
    font-family: 'Kanit', sans-serif;
    font-size: clamp(2rem, 5vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1rem;
    line-height: 1.2;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards 0.5s;
}

.subtext {
    font-size: clamp(1rem, 2vw, 1.25rem);
    font-weight: 400;
    margin-bottom: 3rem;
    color: #666;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards 0.7s;
}

.countdown {
    display: flex;
    gap: 1rem;
    margin: 3rem 0;
    opacity: 0;
    transform: translateY(20px);
    animation: fadeInUp 0.8s ease-out forwards 0.9s;
}

.countdown-item {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.countdown-value {
    font-family: 'Kanit', sans-serif;
    font-size: clamp(2rem, 6vw, 3.5rem);
    font-weight: 800;
    color: var(--primary);
    margin-bottom: 0.25rem;
    min-width: 80px;
}

.countdown-label {
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #999;
}

.launch-date {
    font-size: 0.9rem;
    color: #777;
    margin-top: 3rem;
    opacity: 0;
    animation: fadeIn 1s ease-out forwards 1.1s;
}

@keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
}

@keyframes fadeInUp {
    from { 
        opacity: 0;
        transform: translateY(20px);
    }
    to { 
        opacity: 1;
        transform: translateY(0);
    }
}

@media (max-width: 768px) {
    .countdown {
        gap: 0.5rem;
    }
    
    .countdown-value {
        min-width: 60px;
        font-size: 1.8rem;
    }
}
