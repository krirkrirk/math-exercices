import { RationalConstructor } from "../../../numbers/rationals/rational";
import { latexParse } from "../../../tree/latexParser/latexParse";
import { AddNode } from "../../../tree/nodes/operators/addNode";
import { MultiplyNode } from "../../../tree/nodes/operators/multiplyNode";
import { Exercise, Question } from "../../exercise";
import { getDistinctQuestions } from "../../utils/getDistinctQuestions";

export const fractionsProduct: Exercise = {
  id: "fractionsProduct",
  connector: "=",
  instruction: "Calculer la forme irréductible :",
  label: "Produits de fractions",
  levels: ["4", "3", "2", "1"],
  section: "Fractions",
  isSingleStep: false,
  generator: (nb: number) => getDistinctQuestions(getFractionsProduct, nb),
};

export function getFractionsProduct(): Question {
  const rational = RationalConstructor.randomIrreductible();
  const rational2 = RationalConstructor.randomIrreductible();
  const statementTree = new MultiplyNode(rational.toTree(), rational2.toTree());
  const answerTree = rational.multiply(rational2).toTree();
  const question: Question = {
    statement: latexParse(statementTree),
    answer: latexParse(answerTree),
  };
  return question;
}
