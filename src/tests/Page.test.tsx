import { render } from "@testing-library/react";
import { NavbarProps } from "../components/navbar";
import { Page } from "../components/page";

jest.mock("../components/navbar", () => ({
  Navbar: () => <div data-testid="header" />,
}));

jest.mock("../components/sidebar", () => ({
  Sidebar: () => <div data-testid="sidebar" />,
}));

jest.mock("../components/dialogCreateNft", () => ({
  DialogCreateNft: () => <div data-testid="dialogCreateNft" />,
}));

jest.mock("../components/dialogCreateNftCollection", () => ({
  DialogCreateNftCollection: () => (
    <div data-testid="dialogCreateNftCollection" />
  ),
}));

// Page should render header, sidebar, dialogCreateNft and dialogCreateNftCollection
test("Page", () => {
  const { getByTestId } = render(
    <Page>
      <div></div>
    </Page>
  );
  expect(getByTestId("header")).toBeInTheDocument();
  expect(getByTestId("sidebar")).toBeInTheDocument();
  expect(getByTestId("dialogCreateNft")).toBeInTheDocument();
  expect(getByTestId("dialogCreateNftCollection")).toBeInTheDocument();
});

// When its homepage is true, it should not render the sidebar
test("Page with homepage", () => {
  const { queryByTestId } = render(
    <Page homepage>
      <div></div>
    </Page>
  );
  expect(queryByTestId("sidebar")).toBeNull();
});

// When its homepage is false, it should render the sidebar
test("Page without homepage", () => {
  const { queryByTestId } = render(
    <Page>
      <div></div>
    </Page>
  );
  expect(queryByTestId("sidebar")).not.toBeNull();
});
