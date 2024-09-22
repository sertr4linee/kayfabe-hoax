"use client"

import { useState, useEffect } from 'react';
import { motion } from "framer-motion";

const arrowEmojis = [
  '⬆️', '↗️', '➡️', '↘️',
  '⬇️', '↙️', '⬅️', '↖️',
  '↕️', '↔️', '↩️', '🔀',
  '⤴️', '⤵️', '🔃', '🔄'
];

const secretCombo = process.env.KEY;

export default function Component() {
  const [selectedEmojis, setSelectedEmojis] = useState('');
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const [attempts, setAttempts] = useState(0);
  const [isBlocked, setIsBlocked] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    if (isBlocked) {
      const timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setIsBlocked(false);
            setAttempts(0);
            clearInterval(timer);
            return 30;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [isBlocked]);

  const handleEmojiClick = (emoji: string, index: number) => {
    const newSelectedEmojis = selectedEmojis + emoji;
    setSelectedEmojis(newSelectedEmojis);
    setLastClicked(index);
    setTimeout(() => setLastClicked(null), 300);
  };

  const handleValidate = () => {
    if (isBlocked) {
      alert(`Vous êtes bloqué. Veuillez attendre ${timeLeft} secondes.`);
      return;
    }

    if (selectedEmojis === secretCombo) {
      window.location.href = 'https://gofile.io/d/j8gxAg';
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      alert('Combinaison incorrecte !');

      if (newAttempts >= 3) {
        setIsBlocked(true);
      }
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedEmojis(e.target.value);
  };

  const handleClear = () => {
    setSelectedEmojis('');
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">
        <input
          type="text"
          value={selectedEmojis}
          onChange={handleInputChange}
          className="w-full text-center text-2xl"
          placeholder="ཁྱེད་རང་དེར་འབྱོར་གྱི་རེད།"
        />
        
        <button onClick={handleClear} className="w-full">
          Clear
        </button>
        
        <div className="bg-gray-800 p-4 rounded-lg">
          <table className="w-full">
            <tbody>
              {Array(4).fill(null).map((_, rowIndex) => (
                <tr key={rowIndex}>
                  {Array(4).fill(null).map((_, colIndex) => {
                    const index = rowIndex * 4 + colIndex;
                    const emoji = arrowEmojis[index];
                    return (
                      <td key={colIndex} className="p-2 text-center">
                        <motion.button
                          onClick={() => handleEmojiClick(emoji, index)}
                          className="text-3xl hover:bg-gray-700 rounded p-2 transition-colors"
                          whileTap={{ scale: 0.9 }}
                          animate={lastClicked === index ? { scale: [1, 1.2, 1] } : {}}
                        >
                          {emoji}
                        </motion.button>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button onClick={handleValidate} className="w-full">
          {isBlocked ? `Blocked: ${timeLeft}s left` : 'Validate'}
        </button>
      </div>
    </div>
  );
}
