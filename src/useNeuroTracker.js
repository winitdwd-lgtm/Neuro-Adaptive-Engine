import { useState, useEffect, useRef } from 'react';

export function useNeuroTracker() {
    const [struggleScore, setStruggleScore] = useState(0);
    const points = useRef([]);

    useEffect(() => {
        let decayTimer;
        let analysisTimer;

        const handleMouseMove = (e) => {
            points.current.push({ x: e.clientX, y: e.clientY });
        };

        analysisTimer = setInterval(() => {
            const currentPoints = points.current;

            if (currentPoints.length > 5) {
                let pathLength = 0;

                for (let i = 1; i < currentPoints.length; i++) {
                    const dx = currentPoints[i].x - currentPoints[i - 1].x;
                    const dy = currentPoints[i].y - currentPoints[i - 1].y;
                    pathLength += Math.sqrt(dx * dx + dy * dy);
                }

                const startPoint = currentPoints[0];
                const endPoint = currentPoints[currentPoints.length - 1];
                const dxNet = endPoint.x - startPoint.x;
                const dyNet = endPoint.y - startPoint.y;
                const netDisplacement = Math.sqrt(dxNet * dxNet + dyNet * dyNet);

                // THE NEW MATH: Calculate the "Efficiency Ratio"
                // (We add + 1 to prevent a mathematical error of dividing by zero)
                const efficiencyRatio = pathLength / (netDisplacement + 1);

                // If they moved their mouse a decent amount (Path > 50) 
                // AND their path was twice as long as the actual ground they covered (Ratio > 2.0)...
                // We know they are wiggling/struggling!
                if (pathLength > 50 && efficiencyRatio > 2.0) {
                    setStruggleScore(prev => Math.min(prev + 30, 100)); // Increased help speed slightly
                }
            }

            points.current = [];
        }, 500);

        decayTimer = setInterval(() => {
            setStruggleScore(prev => {
                if (prev > 0) return Math.max(prev - 5, 0);
                return 0;
            });
        }, 200);

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(analysisTimer);
            clearInterval(decayTimer);
        };
    }, []);

    return struggleScore;
}