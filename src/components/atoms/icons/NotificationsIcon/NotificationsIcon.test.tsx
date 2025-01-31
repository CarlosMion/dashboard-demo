import { render } from "@/utils/testUtils";
import NotificationsIcon from "./NotificationsIcon";
import palette from "@/theme/config/palette";

describe("NotificationsIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<NotificationsIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom dimensions", () => {
    const { container } = render(<NotificationsIcon width={32} height={32} />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("applies custom fill color", () => {
    const customFill = "#FF0000";
    const { container } = render(<NotificationsIcon fill={customFill} />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute("fill", customFill);
    });
  });

  it("uses theme color when no fill provided", () => {
    const { container } = render(<NotificationsIcon />);
    const paths = container.querySelectorAll("path");
    paths.forEach((path) => {
      expect(path).toHaveAttribute(
        "fill",
        (palette.primary as unknown as { main: string })?.main
      );
    });
  });
});
