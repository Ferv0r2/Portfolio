import { useEffect, useState } from "react";

export const useTutorial = () => {
  const [isTutorial, setIsTutorial] = useState<boolean>(false);
  const [tutorialIndex, setTutorialIndex] = useState<number>(0);

  useEffect(() => {
    localStorage.getItem("Tutorial") || window.innerWidth < 1440
      ? setIsTutorial(false)
      : setIsTutorial(true);
  }, []);

  const onTutorialSkip = () => {
    localStorage.setItem("Tutorial", "Done");
    setIsTutorial(false);
    setTutorialIndex(0);
  };

  const onPrev = () => {
    setTutorialIndex(tutorialIndex - 1);
  };

  const onNext = () => {
    setTutorialIndex(tutorialIndex + 1);
  };

  return {
    isTutorial,
    tutorialIndex,
    onTutorialSkip,
    onPrev,
    onNext,
  };
};
