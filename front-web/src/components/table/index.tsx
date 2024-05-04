import React from "react";
import { TableProps, CalculationsArray } from "../../interfaces/tableProps";

const Table: React.FC<CalculationsArray> = ({ calculations }) => {
  return (
    <div className="bg-white dark:bg-black p-4 rounded-lg shadow-md ">
      <h2 className="text-2xl font-semibold text-gray-800 mb-10 dark:text-white">
        Tabela de Cálculos
      </h2>
      <table className="table-fixed w-full">
        <thead>
          <tr>
            <th className="w-1/4 border">1° Número</th>
            <th className="w-1/4 border">2° Número</th>
            <th className="w-1/4 border">Soma</th>
          </tr>
        </thead>
        <tbody>
          {calculations.map((calculation: TableProps) => (
            <tr className="border-t">
              <td className="border p-2 ">{calculation.firstNumber}</td>
              <td className="border p-2 ">{calculation.secondNumber}</td>
              <td className="border p-2 ">{calculation.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default Table;
