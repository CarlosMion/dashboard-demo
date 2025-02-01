import { render, screen, fireEvent } from "@/utils/testUtils";
import AmountInput from "./AmountInput";

describe("AmountInput", () => {
  const defaultProps = {
    value: "",
    onChange: jest.fn(),
    onDismiss: jest.fn(),
  };

  it("renders correctly and matches snapshot", () => {
    const { container } = render(<AmountInput {...defaultProps} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it("displays the provided value", () => {
    render(<AmountInput {...defaultProps} value="100" />);
    expect(screen.getByRole("textbox")).toHaveValue("100");
  });

  it("calls onChange when value changes", () => {
    render(<AmountInput {...defaultProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.change(input, { target: { value: "50" } });
    expect(defaultProps.onChange).toHaveBeenCalledWith("50");
  });

  it("calls onDismiss when Escape key is pressed", () => {
    render(<AmountInput {...defaultProps} />);
    const input = screen.getByRole("textbox");
    fireEvent.keyDown(input, { key: "Escape" });
    expect(defaultProps.onDismiss).toHaveBeenCalled();
  });

  it("calls onDismiss when clicking away with empty value", () => {
    render(<AmountInput {...defaultProps} value="" />);
    fireEvent.click(document.body);
    expect(defaultProps.onDismiss).toHaveBeenCalled();
  });

  it("does not call onDismiss when clicking away with a value", () => {
    render(<AmountInput {...defaultProps} value="100" />);
    jest.clearAllMocks();
    fireEvent.click(document.body);
    expect(defaultProps.onDismiss).not.toHaveBeenCalled();
  });

  it("applies animation class when animate prop is true", () => {
    const { container } = render(<AmountInput {...defaultProps} animate />);
    expect(container.firstChild).toHaveClass("growIn");
  });
});
