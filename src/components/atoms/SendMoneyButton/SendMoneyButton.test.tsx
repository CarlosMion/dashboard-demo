import { render, screen, fireEvent } from "@/utils/testUtils";
import SendMoneyButton from "./SendMoneyButton";
import { toast } from "react-toastify";

// Mock react-toastify
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

const toastMock = jest.spyOn(toast, "success");

describe("SendMoneyButton", () => {
  it("renders correctly and matches snapshot", () => {
    const { container } = render(<SendMoneyButton />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the correct translated text", () => {
    render(<SendMoneyButton />);
    expect(screen.getByText("Send")).toBeInTheDocument();
  });

  it("renders the SendIcon", () => {
    render(<SendMoneyButton />);
    expect(screen.getByRole("img", { hidden: true })).toBeInTheDocument();
  });

  it("shows success toast when clicked", () => {
    render(<SendMoneyButton />);
    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(toast.success).toHaveBeenCalledWith("Money sent successfully");
  });

  it("shows success toast only once per click", () => {
    render(<SendMoneyButton />);
    const button = screen.getByRole("button");
    jest.clearAllMocks();
    fireEvent.click(button);
    fireEvent.click(button);
    expect(toastMock).toHaveBeenCalledTimes(2);
  });
});
