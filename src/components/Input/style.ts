import styled from "styled-components";

const StyledInput = styled.input`
  display: block;
  width: 100%;
  height: 48px;
  border: none;
  background: none;
  color: ${({theme}) => theme.palette.common.greyDark};
  font-size: ${({theme}) => theme.fontSize.medium};

  &::placeholder {
    color: ${({theme}) => theme.palette.common.grey3};
  }
`;

const Prefix = styled.div`
  margin-right: 16px;
`;

const Suffix = styled.div`
  margin-left: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.common.grey2};
  border-radius: 24px;
  padding: 0 30px;
`;

export { StyledInput, Prefix, Suffix, InputContainer };
