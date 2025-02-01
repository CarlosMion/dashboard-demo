import { render } from "@/utils/testUtils";
import SoarTaskIcon from "./SoarTaskIcon";
import palette from "@/theme/config/palette";

describe("SoarTaskIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<SoarTaskIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<SoarTaskIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", palette.text?.primary);
    });
  });

  it("meets accessibility requirements", () => {
    const { container } = render(<SoarTaskIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
