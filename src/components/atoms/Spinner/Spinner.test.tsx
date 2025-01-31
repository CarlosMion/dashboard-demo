import { render } from "@/utils/testUtils";
import Spinner from "./Spinner";

describe("Spinner", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("meets accessibility requirements", () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toHaveAttribute("role", "progressbar");
    expect(container.firstChild).toHaveAttribute("aria-busy", "true");
  });

  it("applies custom size when provided", () => {
    const { container } = render(<Spinner width={40} height={40} />);
    expect(container.firstChild).toHaveStyle({ width: "40px", height: "40px" });
  });
});
