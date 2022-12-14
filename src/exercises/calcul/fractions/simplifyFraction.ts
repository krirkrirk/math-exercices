import { RationalConstructor } from "../../../numbers/rationals/rational";
import { latexParse } from "../../../tree/latexParser/latexParse";
import { Exercise, Question } from "../../exercise";
import { getDistinctQuestions } from "../../utils/getDistinctQuestions";

export const simplifyFraction: Exercise = {
  id: "simplifySqrt",
  connector: "=",
  instruction: "Simplifier :",
  label: "Simplification de fractions",
  levels: ["4", "3", "2"],
  isSingleStep: false,
  section: "Fractions",
  generator: (nb: number) => getDistinctQuestions(getSimplifyFraction, nb),
};

export function getSimplifyFraction(): Question {
  const rational = RationalConstructor.randomSimplifiable(10);
  const question: Question = {
    statement: latexParse(rational.toTree()),
    answer: latexParse(rational.simplify().toTree()),
  };
  return question;
}
