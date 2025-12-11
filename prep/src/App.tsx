import "./App.css";
import { Routes, Route, Outlet } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/TodoListPage";
import TodoDetailPage from "@/pages/TodoDetailPage";

function AuthLayout() {
  return (
    <div>
      <header>Auth!</header>
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage />}></Route>
      <Route path="/counter" element={<CounterPage />} />
      <Route path="/todolist" element={<TodoListPage />} />
      <Route path="/todolist/:id" element={<TodoDetailPage />} />
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<SignInPage />}></Route>
        <Route path="/sign-up" element={<SignUpPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
