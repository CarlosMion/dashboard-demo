import "@testing-library/jest-dom";

import palette from "@/theme/config/palette";

const mockUseTheme = jest.fn().mockReturnValue({
  palette,
});

jest.mock("@mui/material", () => ({
  ...jest.requireActual("@mui/material"),
  useTheme: mockUseTheme,
}));
