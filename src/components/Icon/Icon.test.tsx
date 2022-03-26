import { render } from "@testing-library/react";
import { ReactComponent as SmileIcon } from "assets/icon/smile.svg";
import Icon from "./Icon";

it("render Avatar", () => {
  render(<Icon icon={SmileIcon} />);
});
