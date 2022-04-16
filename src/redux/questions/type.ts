export enum ManipulateTypes {
  ADD = 'add',
  EDIT = 'edit',
}

export interface Question {
  id: string;
  question: string;
  answer: string;
}

export interface QuestionsState {
  questions: Question[];
  isLoading: boolean;
  manipulateType: ManipulateTypes | null;
  manipulateFormValues: Question;
}
