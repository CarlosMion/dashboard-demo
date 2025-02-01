import { render } from "@/utils/testUtils";
import AreaChart from "./AreaChart";
import { PropsWithChildren } from "react";

const originalError = console.error;
beforeAll(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  console.error = (...args: any[]) => {
    // if (args[0].includes("Warning: Invalid DOM property")) return;
    if (args[0].includes("incorrect casing")) return;
    originalError.call(console, ...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

const mockHtmlElements = () => {
  const originalCreateElement = document.createElement.bind(document);
  jest.spyOn(document, "createElement").mockImplementation((tagName) => {
    if (
      tagName === "linearGradient" ||
      tagName === "stop" ||
      tagName === "defs"
    ) {
      return originalCreateElement("span");
    }
    return originalCreateElement(tagName);
  });
};

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: PropsWithChildren) => (
    <div>{children}</div>
  ),
  AreaChart: ({ children }: PropsWithChildren) => <div>{children}</div>,
  Area: () => <div>Area</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  CartesianGrid: () => <div>CartesianGrid</div>,
  Tooltip: () => <div>Tooltip</div>,
}));

describe("AreaChart", () => {
  beforeAll(() => {
    mockHtmlElements();
  });
  const mockData = [
    { date: "2024-01", balance: 1000 },
    { date: "2024-02", balance: 1500 },
  ];

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<AreaChart data={mockData} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders all chart components", () => {
    const { getByText } = render(<AreaChart data={mockData} />);
    expect(getByText("Area")).toBeInTheDocument();
    expect(getByText("XAxis")).toBeInTheDocument();
    expect(getByText("YAxis")).toBeInTheDocument();
    expect(getByText("CartesianGrid")).toBeInTheDocument();
    expect(getByText("Tooltip")).toBeInTheDocument();
  });
});
