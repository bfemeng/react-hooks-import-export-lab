import "@testing-library/jest-dom";
import { render } from "@testing-library/react";


test("it is exported as a default export", () => {
  try {
    expect(() => render(<NavBar />)).not.toThrow();
  } catch (e) {
    throw new Error("Make sure to export this component!");
  }
});

function NavBar () {
  return (
    <nav>
      <a href="#home">I'm a link!</a>
    </nav>
  );
}

export default NavBar;
