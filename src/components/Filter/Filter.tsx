import { StyledAction, StyledFilters, StyledFilter } from "./style";
import Text from "../Text/Text";

export interface IFilterProps {
  children: React.ReactNode;
  [key: string]: any;
}

export interface IFiltersProps {
  children: React.ReactNode;
  label: string;
  [key: string]: any;
}

export interface IActionProps {
  children: React.ReactNode;
  label: string;
  [key: string]: any;
}

function Filter({ children, ...rest }: IFilterProps) {
  return <StyledFilter {...rest}>{children}</StyledFilter>;
}

function Filters({ label, children, ...rest }: IFiltersProps) {
  return (
    <StyledFilters {...rest}>
      <Text type="secondary"> {label}：</Text>
      {children}
    </StyledFilters>
  );
}

function Action({ label, children, ...rest }: IActionProps) {
  return (
    <StyledAction {...rest}>
      <Text type="secondary"> {label}：</Text>
      {children}
    </StyledAction>
  );
}

Filter.Filters = Filters;

Filter.Action = Action;

export default Filter;
