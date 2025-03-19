"use client";

import styled from "styled-components";

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export default function Header() {
  return (
    <Navbar>
      <h1 style={{ fontWeight: "600" }}>ModeHemsida</h1>
    </Navbar>
  );
}
