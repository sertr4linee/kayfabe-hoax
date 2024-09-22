"use client"

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from "framer-motion";

const arrowEmojis = [
  '⬆️', '↗️', '➡️', '↘️',
  '⬇️', '↙️', '⬅️', '↖️',
  '↕️', '↔️', '↩️', '🔀',
  '⤴️', '⤵️', '🔃', '🔄'
];

const secretCombo = '⬅️➡️⬆️➡️➡️↔️⬆️⬇️⬇️⬇️➡️↗️🔀➡️⬆️↗️⬇️⬇️';

export default function Component() {
  const [selectedEmojis, setSelectedEmojis] = useState('');
  const [lastClicked, setLastClicked] = useState<number | null>(null);
  const router = useRouter();

  const handleEmojiClick = (emoji: string, index: number) => {
    const newSelectedEmojis = selectedEmojis + emoji;
    setSelectedEmojis(newSelectedEmojis);
    setLastClicked(index);
    setTimeout(() => setLastClicked(null), 300);
  };

  const handleValidate = () => {
    if (selectedEmojis === secretCombo) {
        window.location.href = 'https://gofile.io/d/j8gxAg';
    } else {
      alert('Combinaison incorrecte !');
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

        <button onClick={handleValidate}className="w-full">
          Validate
        </button>
      </div>
    </div>
  );
}
