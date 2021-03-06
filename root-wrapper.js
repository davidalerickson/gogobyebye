import React from "react";
import { MDXProvider } from "@mdx-js/react";
import {
  Headings,
  Code,
  Blockquote,
  PrismSetup,
} from "./src/components/Complete";
import GlobalStyle from "./src/css/GlobalStyle";

const components = {
  //All logic goes here
  h2: Headings.myH2,
  h4: Headings.myH4,
  inlineCode: Code,
  blockquote: Blockquote,
  pre: PrismSetup,
};

export const wrap = ({ element }) => {
  return(
  <>
    <GlobalStyle />
    <MDXProvider components={components}>{element}</MDXProvider>
  </>
  )
};
