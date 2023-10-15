import { styled } from "@mui/material";

export const HeaderStyle = styled("header")<{ $size?: "lg" | "md" | "sm" }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  height: 4rem;
  background-color: #fff;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.1);
  & h1 {
    font-size: ${({ $size }) => ($size === "lg" ? "1.5rem" : "1.25rem")};
    font-weight: 700;
  }
`;
