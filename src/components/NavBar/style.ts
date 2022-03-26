import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { activeBar } from "util/mixin";
import { StatusIcon, StyledAvatar } from "components/Avatar/style";

interface IStyledMenuItemProps {
  active: boolean;
}

interface IMenuIconProps {
  $active: boolean;
}

const StyledNavBar = styled.nav`
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100px;
  height: 100vh;
  background-color: ${({theme}) => theme.palette.common.darkPurple };
  padding: 30px 0;

  ${StyledAvatar} {
    justify-self: center;
    ${StatusIcon} {
      &::before {
        background-color: ${({theme}) => theme.palette.common.darkPurple };
      }
    }
  }
`;

const MenuItems = styled.div`
  display: grid;
  grid-template-rows: repeat(5, minmax(auto, 88px)) 1fr;
`;

const StyledMenuItem = styled.div<IStyledMenuItemProps>`
  & > a {
    width: 100%;
    height: 74px;

    display: flex;
    justify-content: center;
    align-items: center;
    ${activeBar()};
    ${({ active }) =>
      active
        ? ""
        : css`
            &::after,
            &::before {
              height: 0;
            }
          `}
  }
`;

// FontAwesomeIcon 需有class属性
const MenuIcon = styled(FontAwesomeIcon)<IMenuIconProps>`
  color: ${({theme}) => theme.palette.common.white};
  font-size: 24px;
  opacity: ${({ $active }) => ($active ? 1 : 0.3)};
`;

export { StyledNavBar, StyledMenuItem, MenuIcon, MenuItems };
