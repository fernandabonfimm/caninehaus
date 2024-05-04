export interface CalculatorProps {
  firstNumber: number;
  setFirstNumber: React.Dispatch<React.SetStateAction<number>>;
  secondNumber: number;
  // React.Dispatch é um tipo que recebe um parâmetro do tipo React.SetStateAction e não retorna nada
  setSecondNumber: React.Dispatch<React.SetStateAction<number>>;
  handleAdd: () => void;
  result: number;
  calculations: {
    firstNumber: number;
    secondNumber: number;
    result: number;
  }[];
}
