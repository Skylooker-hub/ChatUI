import Icon from "components/Icon/Icon";
import { InputContainer, Prefix, StyledInput, Suffix } from "./style";
import { ReactComponent as SearchIcon } from "assets/icon/search.svg";
import { useTheme } from "styled-components";

interface IInputProps {
  placeholder?: string;
  prefix?: any;
  suffix?: any;
  [key: string]: any;
}

function Input({
  placeholder = "请输入内容...",
  prefix,
  suffix,
  ...rest
}: IInputProps) {
  return (
    <InputContainer {...rest}>
      {prefix && <Prefix>{prefix}</Prefix>}
      <StyledInput placeholder={placeholder} />
      {suffix && <Suffix>{suffix}</Suffix>}
    </InputContainer>
  );
}

function Search({ placeholder = "请输入搜索内容...", ...rest }) {

  const theme = useTheme();

  return (
    <Input
      placeholder={placeholder}
      prefix={<Icon icon={SearchIcon} color={theme.palette.common.grey3} width={18} height={18} />}
      {...rest}
    />
  );
}

Input.Search = Search;

export default Input;
