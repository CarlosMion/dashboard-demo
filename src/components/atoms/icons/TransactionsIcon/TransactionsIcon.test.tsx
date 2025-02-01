import { render } from "@/utils/testUtils";
import TransactionsIcon from "./TransactionsIcon";
import palette from "@/theme/config/palette";

describe("TransactionsIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<TransactionsIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom dimensions", () => {
    const { container } = render(<TransactionsIcon width={32} height={32} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("applies custom fill color", () => {
    const customFill = "#FF0000";
    const { container } = render(<TransactionsIcon fill={customFill} />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", customFill);
    });
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<TransactionsIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", palette.grey?.[100]);
    });
  });

  it("meets accessibility requirements", () => {
    const { container } = render(<TransactionsIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
