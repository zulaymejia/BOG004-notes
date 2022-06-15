import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import  Login  from "../components/login";
import Notes from "../components/notes";
import { Router, Route, Routes } from "react-router-dom";
import { createMemoryHistory } from 'history';
import '@testing-library/jest-dom'
// import {Router} from '../componentes/App.js'

jest.mock("../firebase/firebaseConfig.js");
test("router", async () => {
    const history = createMemoryHistory({ initialEntries: [''] });
  render(<Router navigator={history} location={history.location} > <Routes>
    <Route path="" element={<Login/>} />
        <Route path="/notes" element={<Notes/>} />
   </Routes></Router>);
  fireEvent.click(screen.getByText("Ingresar con google"));
  await waitFor(() => screen.getByText(/Wolcome My Notes/i));
  expect(screen.getByText(/Wolcome My Notes/i)).toBeInTheDocument();
  expect(history.location.pathname).toBe('/notes');
});
