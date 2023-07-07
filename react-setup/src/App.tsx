import React, { useRef } from "react";

import "./App.css";

const Heading: React.FunctionComponent<{
  title?: string;
  forwardedRef?: React.Ref<HTMLHeadingElement>;
}> = ({ title = "Hello", forwardedRef }) => <h2 ref={forwardedRef}>{title}</h2>;

interface BoxProps {
  children: React.ReactElement;
}

const Box: React.FunctionComponent<BoxProps> = ({ children }) => {
  return <div className="Box">{children}</div>;
};

function App() {
  const inputRef = useRef<HTMLDivElement>(null);

  console.log(inputRef.current);

  return (
    <div>
      <div>Hi</div>
      <Heading forwardedRef={inputRef} />
      <Box>
        <Heading />
      </Box>
    </div>
  );
}

export default App;
