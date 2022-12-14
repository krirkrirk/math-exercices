export enum NodeType {
  number,
  variable,
  operator,
  function,
}

export interface Node {
  type: NodeType;
  tex: string;
  toString: () => string;
}
