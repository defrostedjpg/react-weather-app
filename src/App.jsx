import './App.css'

function App() {

  return (
    <>
      <div className="h-screen w-full text-neutral-50 font-inter">
        <div className="flex flex-row bg-sky-300 h-1/3 w-full">
          <div className="h-full w-full flex flex-col items-start justify-center px-6 gap-10 pt-10">
            <div>
              <div className="flex flex-row justify-start items-center">
                <svg
                  className="mt-0.5 mr-1 opacity-80"
                  width="12px"
                  height="12px"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g>
                    <path fill="none" d="M0 0h24v24H0z" />
                    <path
                      fill="#fafafa"
                      d="M1.923 9.37c-.51-.205-.504-.51.034-.689l19.086-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.475.553-.717.07L11 13 1.923 9.37zm4.89-.2l5.636 2.255 3.04 6.082 3.546-12.41L6.812 9.17z"
                    />
                  </g>
                </svg>
                <p className="text-neutral-50 font-xs opacity-80">
                  New York, USA
                </p>
              </div>

              <h1 className="text-8xl font-roboto">27°</h1>

              <div className="flex flex-row justify-start items-center mt-1">
                <svg
                  className="self-center mt-0.5 mr-1"
                  width="18px"
                  height="18px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 3V4M12 20V21M4 12H3M6.31412 6.31412L5.5 5.5M17.6859 6.31412L18.5 5.5M6.31412 17.69L5.5 18.5001M17.6859 17.69L18.5 18.5001M21 12H20M16 12C16 14.2091 14.2091 16 12 16C9.79086 16 8 14.2091 8 12C8 9.79086 9.79086 8 12 8C14.2091 8 16 9.79086 16 12Z"
                    stroke="#fafafa"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p className="text-neutral-50 self-center text-lg">Sunny</p>
              </div>
            </div>

            <p className="text-xs opacity-70 text-left ">Today 25 Jul</p>
          </div>

          <div className="bg-emerald-500 w-full h-full flex items-center justify-center">
            <div class="sun"></div>
          </div>
        </div>

        <div className="bg-red-500 h-2/3 w-full"></div>
      </div>
    </>
  );
}

export default App
