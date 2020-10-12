import React from "react";
import App from "../App";
import { render, waitFor } from "@testing-library/react";

import { fetchShow as mockFetchShow } from "../api/fetchShow";

jest.mock("../api/fetchShow");

test("App fetches episodes and renders them", async () => {
  mockFetchShow.mockResolvedValueOnce(mockData);
  const { queryAllByText } = render(<App />);

  expect(queryAllByText(/fetching data.../i)).toBeTruthy();
  await waitFor(() => {
    expect(queryAllByText(/summary/i)).toBeTruthy();
  });
});

const mockData = {
  image: { original: "original" },
  name: "name",
  summary: "<p>summary</p>",
  _embedded: {
    episodes: [
      {
        id: "1",
        image: { medium: "medium_image" },
        name: "name",
        season: 3,
        number: 2,
        summary: "<p>Summary</p>",
        runtime: 20,
      },
    ],
  },
};