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
  focusMinutes: 0.1,
  setFocusMinutes: () => {},
  breakMinutes: 0.1,
  setBreakMinutes: () => {},
});

export default function TimerContextProvider({ children }: Props) {
  const [focusMinutes, setFocusMinutes] = useState<number>(0.1);
  const [breakMinutes, setBreakMinutes] = useState<number>(0.1);

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
