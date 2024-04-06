import { ThemeContext } from '@/context/themeContext';
import { WorkoutContext } from '@/context/workoutContext';
import { RegisterWorkoutContext } from '@/context/RegisterWorkoutContext';

import { useContext } from 'react';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  return context;
}

export const useWorkout = () => {
  const context = useContext(WorkoutContext);
  return context;
}

export const useRegisterWorkout = () => {
  const context = useContext(RegisterWorkoutContext);
  return context;
}