export interface Question {
  id: number;
  position: number;
  section: number;

  title: string;
  question_note: string;
  question_image: {
    "url": string,
    "caption": string,
    "copyright": string,
  };
  answer_image: {
    "url": string,
    "caption": string,
    "copyright": string,
  };
  answer_note: string;
  answers: [];
  next_question: string;
}
