import { useEffect, useState } from 'react';

interface TypingAnimationProps {
  words: string[];
  typingSpeed?: number;
  erasingSpeed?: number;
  delayBetweenWords?: number;
}

export default function TypingAnimation({
  words,
  typingSpeed = 100,
  erasingSpeed = 60,
  delayBetweenWords = 1500,
}: TypingAnimationProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentFullWord = words[currentWordIndex];

    if (isDeleting) {
      // Erasing characters
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, erasingSpeed);
    } else {
      // Typing characters
      timer = setTimeout(() => {
        setCurrentText((prev) => currentFullWord.slice(0, prev.length + 1));
      }, typingSpeed);
    }

    // Switch to deleting mode when full word is typed
    if (!isDeleting && currentText === currentFullWord) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, delayBetweenWords);
    }

    // Switch to next word when word is fully erased
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, typingSpeed, erasingSpeed, delayBetweenWords]);

  return (
    <span className="inline-flex items-center">
      <span className="bg-gradient-to-r from-violet-600 via-fuchsia-500 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400 bg-clip-text text-transparent font-bold">
        {currentText}
      </span>
      <span className="ml-1 inline-block w-[3px] h-6 md:h-8 bg-violet-600 dark:bg-violet-400 animate-[pulse_1s_infinite] rounded-full" />
    </span>
  );
}
