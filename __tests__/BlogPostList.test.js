import React from "react";
import {
  render,
  fireEvent,
  screen,
  waitFor,
  getByTestId,
} from "@testing-library/react";
import { useQuery } from "react-query";
import { MemoryRouter } from "react-router-dom";
import BlogPostList from "../src/components/BlogPostList";
import "@testing-library/jest-dom/extend-expect";

jest.mock("react-query");

describe("BlogPostList Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockData = {
    articles: [
      { id: 1, title: "Post 1" },
      { id: 2, title: "Post 2" },
    ],
    totalResults: 2,
  };

  const setupMockUseQuery = (mockReturnValue) => {
    useQuery.mockReturnValue({
      data: mockData,
      ...mockReturnValue,
    });
  };

  it("renders loader when loading", () => {
    setupMockUseQuery({ isLoading: true });
    render(
      <MemoryRouter>
        <BlogPostList />
      </MemoryRouter>
    );
    expect(screen.getByTestId("loader")).toBeInTheDocument();
  });

  it("renders error message when there is an error", () => {
    setupMockUseQuery({ isError: true });
    render(
      <MemoryRouter>
        <BlogPostList />
      </MemoryRouter>
    );
    expect(screen.getByText("Error loading posts")).toBeInTheDocument();
  });

  it("renders blog post items when data is fetched", () => {
    setupMockUseQuery({});
    render(
      <MemoryRouter>
        <BlogPostList />
      </MemoryRouter>
    );
    expect(screen.getByText("Post 1")).toBeInTheDocument();
    expect(screen.getByText("Post 2")).toBeInTheDocument();
  });

  it("handles pagination correctly", async () => {
    setupMockUseQuery({});
    const { getByText } = render(
      <MemoryRouter>
        <BlogPostList />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("Next"));

    expect(useQuery).toHaveBeenCalledWith(
      ["posts", 1, 10],
      expect.any(Function),
      { keepPreviousData: true }
    );
  });

  it("changes page size correctly", () => {
    setupMockUseQuery({});
    render(
      <MemoryRouter>
        <BlogPostList />
      </MemoryRouter>
    );

    fireEvent.change(screen.getByDisplayValue("10"), {
      target: { value: "5" },
    });

    expect(screen.getByDisplayValue("5")).toBeInTheDocument();
  });
});
