import React from "react";
import { useSelector } from "react-redux";

import { Footer, Header, TodoList, ToggleAll } from "..";
import { StyledTodoApp, StyledMain, GlobalStyle } from "./style";

const App = () => {
  const todos = useSelector((state) => state.todos);

  return (
    <StyledTodoApp className="todoapp">
      <GlobalStyle />
      <Header />

      {todos.length > 0 && [
        <StyledMain className="main" key="main">
          <ToggleAll />
          <TodoList />
        </StyledMain>,
        <Footer key="footer" />,
      ]}
    </StyledTodoApp>
  );
};

export default App;
