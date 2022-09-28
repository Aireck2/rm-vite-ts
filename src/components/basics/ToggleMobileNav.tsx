import { FC } from "react";
import { CloseMenu } from "./Icons/CloseMenu";
import { HamMenu } from "./Icons/HamMenu";

interface Props {
  open?: boolean;
}
const ToggleMobileNav: FC<Props> = ({ open = false }) => {
  return open ? <CloseMenu /> : <HamMenu />;
};

export default ToggleMobileNav;
