/**@jsxImportSource @emotion/react */
import { jsx, css } from "@emotion/react";
import tw from 'twin.macro';

// @emotion/react only
export const nav_link = css`
  color: red;
  background-color: blue;
`;


// Tailwindcss with @emotion/styled
export const Button = tw.button`bg-green-400`;

export const Heading = tw.h1`text-blue-500 text-2xl p-2`;
export const BigHeading = tw(Heading)`text-4xl`;
export const ContainerSC = tw.div`container mx-auto`;
export const NavLinkSC = tw.button`
  bg-green-300
  rounded-sm
  p-1
  m-1
`;

// Tailwindcss with @emotion/react --> can't get this working correctly
