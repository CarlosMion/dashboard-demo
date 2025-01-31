import { render } from "@/utils/testUtils";
import SendIcon from "./SendIcon";

describe("SendIcon", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<SendIcon />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies custom width and height", () => {
    const { container } = render(<SendIcon width={24} height={24} />);
    const svg = container.firstChild;
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("applies custom fill color", () => {
    const { container } = render(<SendIcon fill="#FF0000" />);
    const path = container.querySelector("path");
    expect(path).toHaveAttribute("fill", "#FF0000");
  });

  it("meets accessibility requirements", () => {
    const { container } = render(<SendIcon />);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-busy", "false");
  });
});
