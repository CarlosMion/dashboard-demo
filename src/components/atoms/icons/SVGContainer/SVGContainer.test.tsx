import { render } from "@/utils/testUtils";
import SVGContainer from "./SVGContainer";

describe("SVGContainer", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <SVGContainer width={24} height={24}>
        <path d="M0 0h24v24H0z" />
      </SVGContainer>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("applies default props correctly", () => {
    const { container } = render(
      <SVGContainer>
        <path d="M0 0h24v24H0z" />
      </SVGContainer>
    );
    const svg = container.firstChild;
    expect(svg).toHaveAttribute("viewBox", "0 0 24 24");
  });

  it("applies custom dimensions", () => {
    const { container } = render(
      <SVGContainer width={32} height={32}>
        <path d="M0 0h32v32H0z" />
      </SVGContainer>
    );
    const svg = container.firstChild;
    expect(svg).toHaveAttribute("viewBox", "0 0 32 32");
  });

  it("meets accessibility requirements", () => {
    const { container } = render(
      <SVGContainer width={24} height={24}>
        <path d="M0 0h24v24H0z" />
      </SVGContainer>
    );
    const svg = container.firstChild;
    expect(svg).toHaveAttribute("role", "img");
    expect(svg).toHaveAttribute("aria-hidden", "true");
  });
});
