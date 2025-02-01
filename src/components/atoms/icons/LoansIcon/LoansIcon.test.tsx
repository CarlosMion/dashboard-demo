import { render } from "@/utils/testUtils";
import LoansIcon from "./LoansIcon";
import palette from "@/theme/config/palette";

describe("LoansIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<LoansIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom dimensions", () => {
    const { container } = render(<LoansIcon width={32} height={32} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("applies custom fill color", () => {
    const customFill = "#FF0000";
    const { container } = render(<LoansIcon fill={customFill} />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", customFill);
    });
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<LoansIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", palette.grey?.[100]);
    });
  });
});
