import { render, screen, fireEvent } from "@testing-library/react";
import { signIn, useSession } from "next-auth/react";
import{RouterContext}from'next/dist/shared/lib/router-context';
import { SubscribeButton } from ".";
import { createMockRouter } from "../../test-utils/createMockRouter";

jest.mock("next-auth/react");

const useSessionMocked = jest.mocked(useSession);

describe("SubscribeButton component", () => {
  it("renders correctly", () => {
    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SubscribeButton />);

    expect(screen.getByText("Subscribe now")).toBeInTheDocument();
  });

  it("redirects user to sign in when not authenticated", () => {
    const signInMocked = jest.mocked(signIn);

    useSessionMocked.mockReturnValueOnce({
      data: null,
      status: "unauthenticated",
    });

    render(<SubscribeButton />);

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(signInMocked).toHaveBeenCalled();
  });


  it("redirects to posts when user already has a subscription", () => {
    const pushMocked = jest.fn();

    useSessionMocked.mockReturnValueOnce({
      data: {
        user: { name: "John Doe", email: "john.doe@example.com" },
        activeSubscription: "fake-active-subscription",
        expires: "fake-expires",
      },
      status: "authenticated",
    });

    render(
        <RouterContext.Provider value={createMockRouter({push: pushMocked})}>
            <SubscribeButton />
        </RouterContext.Provider>
    );

    const subscribeButton = screen.getByText("Subscribe now");

    fireEvent.click(subscribeButton);

    expect(pushMocked).toBeCalledWith('/posts')

  });
});
