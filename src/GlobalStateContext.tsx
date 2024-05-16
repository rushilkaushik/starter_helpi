import React, { createContext, useContext, useState } from 'react';

interface GlobalState {
  answers: string[];
  setAnswers: React.Dispatch<React.SetStateAction<string[]>>;
  questions: string[];
  setQuestions: React.Dispatch<React.SetStateAction<string[]>>;
}

const GlobalStateContext = createContext<GlobalState | undefined>(undefined);

export const useGlobalState = (): GlobalState => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error('useGlobalState must be used within a GlobalStateProvider');
  }
  return context;
};

interface GlobalStateProviderProps {
  children: React.ReactNode;
}

export const GlobalStateProvider: React.FC<GlobalStateProviderProps> = ({ children }) => {
  const [answers, setAnswers] = useState<string[]>([]);
  const [questions, setQuestions] = useState<string[]>([]);

  const value: GlobalState = {
    answers,
    setAnswers,
    questions,
    setQuestions,
  };

  return (
    <GlobalStateContext.Provider value={value}>
      {children}
    </GlobalStateContext.Provider>
  );
};