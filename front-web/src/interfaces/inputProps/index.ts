export interface InputProps {
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  maxLength?: number;
}
