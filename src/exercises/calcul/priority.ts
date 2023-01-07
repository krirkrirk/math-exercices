import { Latex } from "../../latex/latex";
import { randint } from "../../mathutils/random/randint";
import { Interval } from "../../sets/intervals/intervals";
import { Exercise, Question } from "../exercise";
import { getDistinctQuestions } from "../utils/getDistinctQuestions";

/**
 * a*b ±c±d
 * a/b ±c±d
 */
export const priorityExercise: Exercise = {
  connector: "=",
  instruction: "Simplifier : ",
  label: "Priorités opératoires",
  levels: ["6", "5", "4"],
  section: "Calculs",
  generator: (nb: number) => getDistinctQuestions(getPriorityQuestions, nb),
};

export function getPriorityQuestions(): Question {
  const nbOfTerms = randint(3, 5);
  const max = 20;
  const terms = [];
  const interval = new Interval(`[[${-max}; ${max}]]`).exclude(0);
  for (let i = 0; i < nbOfTerms; i++) {
    terms.push(interval.getRandomElement());
  }
  const tex = new Latex("");
  terms.forEach((term) => tex.add(term));
  const statement = tex.toTex();
  const answer = terms.reduce((acc, curr) => acc + curr).toString();
  const question: Question = { statement, answer };
  return question;
}