import { Outlet } from "@tanstack/react-router";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[transparent] text-[#2d2d2d]">
      {/* Page Content */}
      <main className="flex-grow w-full">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
