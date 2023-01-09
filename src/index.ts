import { fractionAndIntegerSum } from "./exercises/calcul/fractions/fractionAndIntegerSum";
import { fractionsProduct } from "./exercises/calcul/fractions/fractionsProduct";
import { fractionsSum, getFractionsSum } from "./exercises/calcul/fractions/fractionsSum";
import { simplifyFraction } from "./exercises/calcul/fractions/simplifyFraction";
import { allIdentities } from "./exercises/calculLitteral/distributivity/allIdentities";
import { doubleDistributivity } from "./exercises/calculLitteral/distributivity/doubleDistributivity";
import { simpleDistributivity } from "./exercises/calculLitteral/distributivity/simpleDistributivity";
import { equationType1Exercise } from "./exercises/calculLitteral/equation/equationType1Exercise";
import { equationType2Exercise } from "./exercises/calculLitteral/equation/equationType2Exercise";
import { equationType3Exercise } from "./exercises/calculLitteral/equation/equationType3Exercise";
import { equationType4Exercise } from "./exercises/calculLitteral/equation/equationType4Exercise";
import { factoType1Exercise } from "./exercises/calculLitteral/factorisation/factoType1Exercise";
import { exercises } from "./exercises/exercises";
import { powersDivision } from "./exercises/powers/powersDivision";
import { powersPower } from "./exercises/powers/powersPower";
import { powersProduct } from "./exercises/powers/powersProduct";
import { simplifySquareRoot } from "./exercises/squareRoots/simpifySquareRoot";
import { randint } from "./mathutils/random/randint";
import { Rational, RationalConstructor } from "./numbers/rationals/rational";
import { SquareRoot } from "./numbers/reals/squareRoot";
import { Affine } from "./polynomials/affine";
import { Polynomial } from "./polynomials/polynomial";
import { latexParse } from "./tree/latexParser/latexParse";
import { VariableNode } from "./tree/nodes/variables/variableNode";

// exercises.forEach((exo) => {
//   console.log(exo.instruction, exo.generator(10));
// });
console.log(powersPower.generator(10));
console.log(powersProduct.generator(10));

console.log(powersDivision.generator(10));

export { exercises };
