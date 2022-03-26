import Avatar from "components/Avatar/Avatar";
import Badge from "components/Badge/Badge";
import { MenuIcon, MenuItems, StyledMenuItem, StyledNavBar } from "./style";
import profileImage from "assets/images/face-male-1.jpg";
import 'styled-components/macro';
import {
  faCog,
  faCommentDots,
  faEllipsis,
  faFolder,
  faStickyNote,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

interface INavBarProps {
  [key: string]: any;
}

interface IMenuItemProps {
  /** fontAwesome图标 react组件 */
  icon: any;
  /** 是否为激活状态 */
  active?: boolean;
  /** 是否展示徽标 */
  showBadge?: boolean;
  [key: string]: any;
}

function NavBar({ ...rest }: INavBarProps) {
  return (
    <StyledNavBar {...rest}>
      <Avatar src={profileImage} status="online" />
      <MenuItems>
        <MenuItem icon={faCommentDots} active showBadge />
        <MenuItem icon={faUser} />
        <MenuItem icon={faFolder} />
        <MenuItem icon={faStickyNote} />
        <MenuItem icon={faEllipsis} />
        <MenuItem icon={faCog} css={`align-self: end;`} />
      </MenuItems>
    </StyledNavBar>
  );
}

function MenuItem({
  icon,
  active = false,
  showBadge = false,
  ...rest
}: IMenuItemProps) {
  return (
    <StyledMenuItem active={active} {...rest}>
      <a href="#">
        <Badge show={showBadge}>
          <MenuIcon $active={active} icon={icon} />
        </Badge>
      </a>
    </StyledMenuItem>
  );
}

export { NavBar, MenuItem };
