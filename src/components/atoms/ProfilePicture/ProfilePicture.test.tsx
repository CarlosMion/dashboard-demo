import { render, screen, fireEvent } from "@/utils/testUtils";
import ProfilePicture from "./ProfilePicture";
import { PIC_PROF_NAME } from "@/constants";

describe("ProfilePicture", () => {
  it("renders with default placeholder when no src provided", () => {
    render(<ProfilePicture />);
    const img = screen.getByTestId("profile-picture-img");
    expect(img).toHaveAttribute("src", expect.stringContaining(PIC_PROF_NAME));
    expect(img).toHaveAttribute("alt");
  });

  it("renders with provided src and meets accessibility requirements", () => {
    const testName = "test-image.jpg";
    const testSrc = `https://${testName}`;
    const testTitle = "User Profile";
    render(<ProfilePicture src={testSrc} title={testTitle} />);
    const img = screen.getByTestId("profile-picture-img");
    expect(img).toHaveAttribute("src", expect.stringContaining(testName));
    expect(img).toHaveAttribute("alt", testTitle);
  });

  it("is keyboard accessible when clickable", () => {
    const handleClick = jest.fn();
    render(<ProfilePicture onClick={handleClick} />);
    const avatar = screen.getByTestId("profile-picture-img").parentElement;
    expect(avatar).toHaveAttribute("tabIndex", "0");
    fireEvent.keyDown(avatar!, { key: "Enter" });
    expect(handleClick).toHaveBeenCalled();
  });

  it("calls onClick handler when clicked", () => {
    const handleClick = jest.fn();
    render(<ProfilePicture onClick={handleClick} />);
    const avatar = screen.getByTestId("profile-picture-img").parentElement;
    fireEvent.click(avatar!);
    expect(handleClick).toHaveBeenCalled();
  });

  it("falls back to placeholder on image error", () => {
    const invalidSrc = "https://invalid-image-url.jpg";
    render(<ProfilePicture src={invalidSrc} />);
    const img = screen.getByTestId("profile-picture-img");
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", expect.stringContaining(PIC_PROF_NAME));
  });

  it("uses custom fallback src when provided", () => {
    const fallBackName = "custom-fallback.jpg";
    const fallBackSrc = `https://${fallBackName}`;
    const invalidSrc = "https://invalid-image-url.jpg";
    render(<ProfilePicture src={invalidSrc} fallBackSrc={fallBackSrc} />);
    const img = screen.getByTestId("profile-picture-img");
    fireEvent.error(img);
    expect(img).toHaveAttribute("src", expect.stringContaining(fallBackName));
  });
});
