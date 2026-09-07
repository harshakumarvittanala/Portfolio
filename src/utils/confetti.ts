import confetti from 'canvas-confetti';

export const triggerConfetti = () => {
  try {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#06b6d4', '#10b981', '#8b5cf6', '#3b82f6', '#ec4899']
    });
  } catch {
    // Fallback if canvas-confetti is not loaded
  }
};

export const triggerHireConfetti = () => {
  try {
    const end = Date.now() + 1.5 * 1000;
    const colors = ['#06b6d4', '#10b981', '#f59e0b', '#8b5cf6'];

    (function frame() {
      confetti({
        particleCount: 4,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 4,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch {
    // Ignore fallback
  }
};

