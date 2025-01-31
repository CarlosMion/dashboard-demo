import { render } from "@/utils/testUtils";
import CardFlag from "./CardFlag";

describe("CardFlag", () => {
  it("renders with default variant and matches snapshot", () => {
    const { container } = render(<CardFlag />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with dark variant", () => {
    jest.clearAllMocks();
    const { container } = render(<CardFlag variant="dark" />);
    const circles = container.querySelectorAll("div");
    expect(circles).toHaveLength(3); // 2 circles + 1 container
  });

  it("renders with light variant and matches snapshot", () => {
    const { container } = render(<CardFlag variant="light" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders with proper ARIA role", () => {
    const { container } = render(<CardFlag />);
    expect(container.firstChild).toHaveAttribute("role", "presentation");
  });
});
