import { render } from "@/utils/testUtils";
import UserTransactionIcon from "./UserTransactionIcon";
import palette from "@/theme/config/palette";

describe("UserTransactionIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<UserTransactionIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom dimensions", () => {
    const { container } = render(
      <UserTransactionIcon width={32} height={32} />
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("applies custom fill color", () => {
    const customFill = "#FF0000";
    const { container } = render(<UserTransactionIcon fill={customFill} />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", customFill);
    });
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<UserTransactionIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", palette.common?.teal);
    });
  });

  it("meets accessibility requirements", () => {
    const { container } = render(<UserTransactionIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
