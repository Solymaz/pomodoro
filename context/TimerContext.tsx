import React, { useState, createContext } from "react";

type TimerContextType = {
  focusMinutes: number;
  setFocusMinutes: (focusMinutes: number) => void;
  breakMinutes: number;
  setBreakMinutes: (breakMinutes: number) => void;
};

type Props = {
  children: JSX.Element;
};

export const TimerContext = createContext<TimerContextType>({
  focusMinutes: 20,
  setFocusMinutes: () => {},
  breakMinutes: 5,
  setBreakMinutes: () => {},
});

export default function TimerContextProvider({ children }: Props) {
  const [focusMinutes, setFocusMinutes] = useState<number>(20);
  const [breakMinutes, setBreakMinutes] = useState<number>(5);

  return (
    <TimerContext.Provider
      value={{
        focusMinutes,
        setFocusMinutes,
        breakMinutes,
        setBreakMinutes,
      }}
    >
      {children}
    </TimerContext.Provider>
  );
}
