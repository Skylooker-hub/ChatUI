import { StyledOption, StyledSelect } from "./style";

export interface ISelectProps {
  children: React.ReactNode;
  [key: string]: any;
}

export interface IOptionProps {
  children: React.ReactNode;
  [key: string]: any;
}

function Select({ children, ...rest }: ISelectProps) {
  return <StyledSelect {...rest}>{children}</StyledSelect>;
}

function Option({ children, ...rest }: IOptionProps) {
  return <StyledOption {...rest}>{children}</StyledOption>;
}

Select.Option = Option;

export default Select;
