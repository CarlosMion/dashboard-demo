import { render } from "@/utils/testUtils";
import CardsIcon from "./CardsIcon";
import palette from "@/theme/config/palette";

describe("CardsIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<CardsIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom width and height", () => {
    const { container } = render(<CardsIcon width={32} height={32} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("applies custom fill color", () => {
    const customFill = "#FF0000";
    const { container } = render(<CardsIcon fill={customFill} />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", customFill);
    });
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<CardsIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", palette.common?.mustardYellow);
    });
  });
});
