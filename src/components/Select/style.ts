import styled from "styled-components";
import CaretDown from "assets/icon/caret_down.svg";

const StyledSelect = styled.select`
  appearance: none;
  background-image: url(${CaretDown});
  background-repeat: no-repeat;
  background-position: right center;
  background-color: transparent;
  border: none;
  padding-right: 14px;
  font-size: ${({ theme }) => theme.fontSize.normal};
  color: ${({ theme }) => theme.palette.common.greyDark};

  ::-ms-expand {
    display: none;
  }
`;

const StyledOption = styled.option``;

export { StyledSelect, StyledOption };
