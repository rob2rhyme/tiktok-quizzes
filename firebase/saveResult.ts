// firebase/saveResult.ts
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

type QuizResult = {
  personalityType: string;
  celebrity: string;
  suggestion: string;
  answers: string[];
};

export async function saveQuizResult(result: QuizResult) {
  try {
    await addDoc(collection(db, 'quizResults'), {
      ...result,
      createdAt: Timestamp.now(),
    });
  } catch (error) {
    console.error("Error saving result:", error);
  }
}
