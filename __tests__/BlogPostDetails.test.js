import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import BlogPostDetails from "../src/components/BlogPostDetails";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("BlogPostDetails Component", () => {
  const mockPost = {
    title: "Test Post",
    author: "John Doe",
    publishedAt: "2023-07-18T00:00:00Z",
    content: "This is a test post content...",
    description: "Test description...",
    url: "https://example.com/test-post",
    urlToImage: "https://example.com/test-image.jpg",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders post details correctly", () => {
    const mockLocation = { state: mockPost };
    const mockNavigate = jest.fn();

    require("react-router-dom").useLocation.mockReturnValue(mockLocation);
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <BlogPostDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Blog Post")).toBeInTheDocument();
    expect(screen.getByText(mockPost.title)).toBeInTheDocument();
    expect(screen.getByText(mockPost.author)).toBeInTheDocument();
    expect(
      screen.getByText(new Date(mockPost.publishedAt).toLocaleDateString())
    ).toBeInTheDocument();
    expect(screen.getByText(mockPost.description)).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Read Complete Article." })
    ).toHaveAttribute("href", mockPost.url);

    const postImage = screen.queryByAltText(mockPost.title);
    if (mockPost.urlToImage) {
      expect(postImage).toBeInTheDocument();
      expect(postImage).toHaveAttribute("src", mockPost.urlToImage);
    } else {
      expect(postImage).not.toBeInTheDocument();
    }
  });

  it("navigates back to home page on button click", () => {
    const mockNavigate = jest.fn();
    require("react-router-dom").useNavigate.mockReturnValue(mockNavigate);

    render(
      <MemoryRouter>
        <BlogPostDetails />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByTestId("back-btn"));

    expect(mockNavigate).toHaveBeenCalledWith("/");
  });

  it("renders error message when post is not available", () => {
    const mockLocation = { state: undefined };
    require("react-router-dom").useLocation.mockReturnValue(mockLocation);

    render(
      <MemoryRouter>
        <BlogPostDetails />
      </MemoryRouter>
    );

    expect(screen.getByText("Error loading post")).toBeInTheDocument();
  });
});
