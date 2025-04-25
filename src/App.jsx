import MatchManagement from "./components/MatchManagement";


function App() {
  return (
    <div className="bg-main">
      <main className="w-full h-screen flex justify-between items-center p-4">
        {/* <div className="w-[30%] h-screen"></div> */}
        <MatchManagement />
      </main>
    </div>
  );
}

export default App;