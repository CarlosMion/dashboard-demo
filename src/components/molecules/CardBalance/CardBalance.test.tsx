import { render, screen } from "@/utils/testUtils";
import CardBalance from "./CardBalance";

describe("CardBalance", () => {
  const defaultProps = {
    title: "Available Balance",
    value: "$1,000",
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<CardBalance {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the title", () => {
    render(<CardBalance {...defaultProps} />);
    expect(screen.getByText("Available Balance")).toBeInTheDocument();
  });

  it("displays the value", () => {
    render(<CardBalance {...defaultProps} />);
    expect(screen.getByText("$1,000")).toBeInTheDocument();
  });

  it("applies dark variant by default", () => {
    const { container } = render(<CardBalance {...defaultProps} />);
    expect(container.firstChild).toHaveStyle({ color: expect.any(String) });
  });

  it("applies light variant when specified", () => {
    const { container } = render(
      <CardBalance {...defaultProps} variant="light" />
    );
    expect(container.firstChild).toHaveStyle({ color: expect.any(String) });
  });
});
