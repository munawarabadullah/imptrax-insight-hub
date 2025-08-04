import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface PatternCaptchaProps {
  onVerify: (verified: boolean) => void;
  className?: string;
}

const COLORS = {
  red: 'bg-red-500',
  blue: 'bg-blue-500', 
  green: 'bg-green-500',
  yellow: 'bg-yellow-500'
} as const;

type ColorKey = keyof typeof COLORS;

interface GridSquare {
  id: number;
  color: ColorKey;
  isClicked: boolean;
}

export const PatternCaptcha = ({ onVerify, className }: PatternCaptchaProps) => {
  const [grid, setGrid] = useState<GridSquare[]>([]);
  const [targetColor, setTargetColor] = useState<ColorKey>('green');
  const [isVerified, setIsVerified] = useState(false);
  const [showResult, setShowResult] = useState(false);

  // Generate random 4x4 grid
  const generateGrid = () => {
    const colors: ColorKey[] = ['red', 'blue', 'green', 'yellow'];
    const newGrid: GridSquare[] = [];
    
    for (let i = 0; i < 16; i++) {
      newGrid.push({
        id: i,
        color: colors[Math.floor(Math.random() * colors.length)],
        isClicked: false
      });
    }
    
    setGrid(newGrid);
    setIsVerified(false);
    setShowResult(false);
  };

  useEffect(() => {
    generateGrid();
  }, []);

  const handleSquareClick = (id: number) => {
    if (isVerified || showResult) return;

    const updatedGrid = grid.map(square => 
      square.id === id 
        ? { ...square, isClicked: !square.isClicked }
        : square
    );
    setGrid(updatedGrid);
  };

  const verifyPattern = () => {
    const targetSquares = grid.filter(square => square.color === targetColor);
    const clickedTargetSquares = targetSquares.filter(square => square.isClicked);
    const incorrectClicks = grid.filter(square => 
      square.isClicked && square.color !== targetColor
    );

    const isCorrect = clickedTargetSquares.length === targetSquares.length && 
                     incorrectClicks.length === 0 &&
                     targetSquares.length > 0;

    setIsVerified(isCorrect);
    setShowResult(true);
    onVerify(isCorrect);

    if (!isCorrect) {
      setTimeout(() => {
        generateGrid();
      }, 2000);
    }
  };

  return (
    <div className={cn("p-6 border border-input rounded-lg bg-card", className)}>
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold text-foreground mb-2">
          Security Verification
        </h3>
        <p className="text-sm text-muted-foreground">
          Click all the <span className="font-bold uppercase text-green-600">{targetColor}</span> squares
        </p>
      </div>

      <div className="grid grid-cols-4 gap-2 mb-4 max-w-48 mx-auto">
        {grid.map((square) => (
          <button
            key={square.id}
            type="button"
            onClick={() => handleSquareClick(square.id)}
            className={cn(
              "w-12 h-12 border-2 border-border rounded transition-all duration-200",
              COLORS[square.color],
              square.isClicked && "ring-2 ring-ring ring-offset-2",
              isVerified && square.color === targetColor && "ring-2 ring-green-500 ring-offset-2"
            )}
            disabled={showResult}
          />
        ))}
      </div>

      <div className="text-center">
        {!showResult ? (
          <button
            type="button"
            onClick={verifyPattern}
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Verify
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2">
            {isVerified ? (
              <>
                <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-green-600 text-sm font-medium">Verified!</span>
              </>
            ) : (
              <>
                <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-red-600 text-sm font-medium">Try again...</span>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};