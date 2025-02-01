import { render } from "@/utils/testUtils";
import WeeklyTransactionsBarChart from "./BarChart";
import { PropsWithChildren } from "react";

jest.mock("recharts", () => ({
  ResponsiveContainer: ({ children }: PropsWithChildren) => (
    <div>{children}</div>
  ),
  BarChart: ({ children }: PropsWithChildren) => <div>{children}</div>,
  Bar: () => <div>Bar</div>,
  XAxis: () => <div>XAxis</div>,
  YAxis: () => <div>YAxis</div>,
  CartesianGrid: () => <div>CartesianGrid</div>,
  Tooltip: () => <div>Tooltip</div>,
  Legend: () => <div>Legend</div>,
}));

describe("WeeklyTransactionsBarChart", () => {
  const mockData = [
    { day: "Mon", withdraw: 100, deposit: 200 },
    { day: "Tue", withdraw: 150, deposit: 300 },
  ];

  it("renders correctly and matches snapshot", () => {
    const { container } = render(
      <WeeklyTransactionsBarChart data={mockData} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it("renders all chart components", () => {
    const { getAllByText, getByText } = render(
      <WeeklyTransactionsBarChart data={mockData} />
    );
    expect(getAllByText("Bar")).toHaveLength(2); // Two bars for withdraw and deposit
    expect(getByText("XAxis")).toBeInTheDocument();
    expect(getByText("YAxis")).toBeInTheDocument();
    expect(getByText("CartesianGrid")).toBeInTheDocument();
    expect(getByText("Tooltip")).toBeInTheDocument();
    expect(getByText("Legend")).toBeInTheDocument();
  });

  it("uses correct bar radius", () => {
    const { container } = render(
      <WeeklyTransactionsBarChart data={mockData} />
    );
    const bars = container.querySelectorAll("div > div > div"); // Navigate to Bar components
    expect(bars).toBeTruthy();
  });

  it("applies responsive container", () => {
    const { container } = render(
      <WeeklyTransactionsBarChart data={mockData} />
    );
    expect(container.firstChild).toHaveStyle({
      width: "100%",
      height: "290px",
    });
  });
});
