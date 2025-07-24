import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-full">
        <div className="flex flex-row bg-sky-500 h-1/3 w-full">
          <div className="bg-amber-500 h-full w-full">
            <div>
              <h1>27°</h1>
            </div>
          </div>

          <div className="bg-emerald-500 w-full h-full"></div>
        </div>

        <div className="bg-red-500 h-2/3 w-full"></div>
      </div>
    </>
  );
}

export default App
