import { render, screen } from '@testing-library/react';
import { useSession } from 'next-auth/react';
import { SignInButton } from '.';

jest.mock('next-auth/react')
const useSessionMocked = jest.mocked(useSession);

describe('SignInButton component', () => {
  it('renders correctly when user is not authenticated', () => {
    useSessionMocked.mockReturnValueOnce( { data: null, status: "unauthenticated" });

    render(<SignInButton />)

    expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
  })

  it('renders correctly when user is authenticated', () => {
    useSessionMocked.mockReturnValueOnce(
      {data:{
        user: {name: 'John Doe', email: 'john.doe@example.com'}, 
        expires: 'fake-expires'
      }, 
        status: "authenticated"
    }
    )

    render(<SignInButton />)

    expect(screen.getByText('John Doe')).toBeInTheDocument()
  })
})