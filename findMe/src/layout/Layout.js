import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
export default function Layout() {
  return (
    <>
      <Header />
      <main className="bg-slate-300 flex mt-[42px] w-full">
        <Navigation />
        <Outlet />
      </main>
    </>
  );
}
