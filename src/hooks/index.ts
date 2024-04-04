import { ThemeContext } from '@/context/themeContext';
import { WorkoutContext } from '@/context/workoutContext';
import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  return context;
}