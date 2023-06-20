import { render, screen } from '@testing-library/react';
import ReserveSection from './components/ReserveSection';
import AboutSection from './components/AboutSection';
import {useUserDetailsContext} from "./components/UserContext"

test ('Renders ReserveForm headings',()=>{
  render(<AboutSection/>);
  const heading = screen.getByText('Little Lemon');
  expect(heading).toBeInTheDocument();
})

test ('Renders ReserveForm headings',()=>{
  render(<ReserveSection/>);
  const formHeading = screen.getByText('Find your table for any occassion');
  expect(formHeading).toBeInTheDocument();
})

