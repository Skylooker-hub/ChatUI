import { StyledText } from "components/Text/style";
import styled from "styled-components";

const StyledFilter = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  align-items: center;
`;

const StyledFilters = styled.div``;

const StyledAction = styled.div`
  justify-self: end;
  ${StyledText} {
    padding-right: 1rem;
  }
`;

export { StyledFilter, StyledFilters, StyledAction };
