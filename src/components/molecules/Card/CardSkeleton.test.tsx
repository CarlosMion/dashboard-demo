import { render } from "@/utils/testUtils";
import CardSkeleton from "./CardSkeleton";

describe("CardSkeleton", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<CardSkeleton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders all skeleton elements", () => {
    const { container } = render(<CardSkeleton />);
    const skeletons = container.querySelectorAll(".MuiSkeleton-root");
    expect(skeletons).toHaveLength(8);
  });

  it("renders with correct variant", () => {
    const { container } = render(<CardSkeleton />);
    expect(container.firstChild).toHaveAttribute("variant", "dark");
  });

  it("applies correct styles to container", () => {
    const { container } = render(<CardSkeleton />);
    const gridContainer = container.firstChild;
    expect(gridContainer).toHaveClass("MuiGrid2-root");
    expect(gridContainer).toHaveClass("MuiGrid2-container");
  });
});
