import {
  maskCardNumber,
  formatMoney,
  formatValidThru,
  formatTransactionDate,
} from "../stringUtils";

describe("stringUtils", () => {
  describe("maskCardNumber", () => {
    it("masks middle 8 digits of card number", () => {
      expect(maskCardNumber(4111111111111111)).toBe("4111 **** **** 1111");
    });
  });

  describe("formatMoney", () => {
    it("formats positive numbers with USD currency symbol", () => {
      expect(formatMoney(1000)).toBe("$1,000.00");
    });

    it("formats negative numbers correctly", () => {
      expect(formatMoney(-1000)).toBe("-$1,000.00");
    });

    it("formats decimal numbers correctly", () => {
      expect(formatMoney(1000.5)).toBe("$1,000.50");
    });

    it("formats zero correctly", () => {
      expect(formatMoney(0)).toBe("$0.00");
    });
  });

  describe("formatValidThru", () => {
    beforeAll(() => {
      // Set timezone to UTC to ensure consistent date handling
      jest.useFakeTimers();
      jest.setSystemTime(new Date("2024-03-20T08:00:00Z"));
    });
    afterAll(() => {
      jest.useRealTimers();
    });
    it("formats date in MM/YY format", () => {
      expect(formatValidThru("2024-03-01")).toBe("03/24");
    });

    it("handles single digit months correctly", () => {
      expect(formatValidThru("2024-01-01")).toBe("01/24");
    });

    it("handles different date string formats", () => {
      expect(formatValidThru("2024/03/01")).toBe("03/24");
    });
  });

  describe("formatTransactionDate", () => {
    beforeAll(() => {
      // Set timezone to UTC to ensure consistent date handling
      jest.useFakeTimers();
      jest.setSystemTime(new Date("2024-03-20T12:00:00Z"));
    });

    afterAll(() => {
      jest.useRealTimers();
    });
    it("formats date in full format", () => {
      expect(formatTransactionDate("2024-03-20")).toBe("March 20, 2024");
    });

    it("handles single digit days correctly", () => {
      expect(formatTransactionDate("2024-03-05")).toBe("March 05, 2024");
    });

    it("handles different months correctly", () => {
      expect(formatTransactionDate("2024-12-20")).toBe("December 20, 2024");
    });

    it("handles different date string formats", () => {
      expect(formatTransactionDate("2024/03/20")).toBe("March 20, 2024");
    });
  });
});
