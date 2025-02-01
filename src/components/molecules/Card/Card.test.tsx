import { render, screen } from "@/utils/testUtils";
import Card from "./Card";
import { useGetUserByIdQuery } from "@/api/requests/getUserByIdentifier";

// Mock the API hook
jest.mock("../../../api/requests/getUserByIdentifier", () => ({
  useGetUserByIdQuery: jest.fn(),
}));

describe("Card", () => {
  const mockCard = {
    id: "1",
    userId: "user1",
    cardNumber: 4111111111111111,
    balance: 1000,
    expirationDate: "2025-12-01",
  };

  const mockUser = {
    id: "user1",
    fullName: "John Doe",
  };

  beforeEach(() => {
    (useGetUserByIdQuery as jest.Mock).mockReturnValue({
      data: mockUser,
      isLoading: false,
    });
  });

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<Card card={mockCard} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays card balance correctly", () => {
    render(<Card card={mockCard} />);
    expect(screen.getByText("$1,000.00")).toBeInTheDocument();
  });

  it("displays cardholder name", () => {
    render(<Card card={mockCard} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
  });

  it("displays formatted expiration date", () => {
    render(<Card card={mockCard} />);
    expect(screen.getByText("12/25")).toBeInTheDocument();
  });

  it("shows skeleton while loading", () => {
    (useGetUserByIdQuery as jest.Mock).mockReturnValue({
      isLoading: true,
    });
    const { container } = render(<Card card={mockCard} />);
    expect(container.querySelector(".MuiSkeleton-root")).toBeInTheDocument();
  });

  it("applies dark variant by default", () => {
    const { container } = render(<Card card={mockCard} />);
    expect(container.firstChild).toHaveAttribute("variant", "dark");
  });

  it("applies light variant when specified", () => {
    const { container } = render(<Card card={mockCard} variant="light" />);
    expect(container.firstChild).toHaveAttribute("variant", "light");
  });
});
