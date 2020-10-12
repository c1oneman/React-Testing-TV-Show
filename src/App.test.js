
import React from "react";
import App from "./App";
import { render, waitFor } from "@testing-library/react";

import { fetchShow as mockFetchShow } from "./api/fetchShow";

test("App fetches episodes and renders them", async () => {
  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/select a season.../i)).toBeTruthy();
});
