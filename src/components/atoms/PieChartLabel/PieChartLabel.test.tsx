import { render, screen } from "@/utils/testUtils";
import PieChartLabel from "./PieChartLabel";
import palette from "@/theme/config/palette";

const mockHtmlElements = () => {
  const originalCreateElement = document.createElement.bind(document);
  jest.spyOn(document, "createElement").mockImplementation((tagName) => {
    if (tagName === "text" || tagName === "tspan") {
      return originalCreateElement("span");
    }
    return originalCreateElement(tagName);
  });
};

describe("PieChartLabel", () => {
  beforeAll(() => {
    mockHtmlElements();
  });
  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <PieChartLabel
        cx={0}
        cy={0}
        midAngle={0}
        innerRadius={0}
        outerRadius={0}
        percent={0}
        name={""}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the correct label text", () => {
    const name = "Test Label";
    render(
      <PieChartLabel
        cx={0}
        cy={0}
        midAngle={0}
        innerRadius={0}
        outerRadius={0}
        percent={0}
        name={name}
      />
    );
    expect(screen.getByText(name)).toBeInTheDocument();
  });

  it("displays the correct value", () => {
    render(
      <PieChartLabel
        cx={0}
        cy={0}
        midAngle={0}
        innerRadius={0}
        outerRadius={0}
        percent={25}
        name={""}
      />
    );
    expect(screen.getByText("25%")).toBeInTheDocument();
  });

  it("applies the correct color to the indicator", () => {
    const { container } = render(
      <PieChartLabel
        cx={0}
        cy={0}
        midAngle={0}
        innerRadius={0}
        outerRadius={0}
        percent={0}
        name={""}
      />
    );
    const indicator = container.firstChild;
    expect(indicator).toHaveAttribute("fill", palette.common?.white);
  });

  it("handles zero value correctly", () => {
    render(
      <PieChartLabel
        cx={0}
        cy={0}
        midAngle={0}
        innerRadius={0}
        outerRadius={0}
        percent={0}
        name={""}
      />
    );
    expect(screen.getByText("0%")).toBeInTheDocument();
  });
});
