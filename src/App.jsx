import "./index.css";
import "./App.css";
import { Progress } from "@/components/ui/progress";
import { useState, useEffect } from "react";
import NumberFlow from "@number-flow/react";
import Chart from "@/utils/chart";

function App() {
  function ExtraData({ title, value }) {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      setTimeout(() => {
        setProgress(Math.random() * 100);
      }, 100);
    }, []);

    return (
      <div className="bg-neutral-0 h-2/3 rounded-3xl text-neutral-800">
        <div className="text-start">
          <h1 className="text-md mb-1 opacity-80">{title}</h1>
          <h1 className="mb-0.5 text-xl">{value}</h1>
          <Progress
            value={progress}
            className="w-80% [&>div]:bg-[var(--progress-bar)]"
          />
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="overflow-hidden h-screen w-full text-neutral-50 font-inter">
        <div className="flex flex-row bg-[#5d9ce6] h-1/3 w-full">
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
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="text-neutral-50 self-center text-lg">Sunny</p>
              </div>
            </div>

            <p className="text-xs opacity-70 text-left ">Today 25 Jul</p>
          </div>

          <div className="w-full h-full flex items-center justify-center">
            <div className="sun"></div>
          </div>
        </div>

        <div className=" pt-10">
          <div className="w-full flex justify-center">
            <Chart />
          </div>

          <div className="grid grid-cols-3 px-8 py-7 gap-7 sm:grid-cols-4">
            <ExtraData title="Feels like" value="30°" />
            <ExtraData title="Wind" value="8 km/h" />
            <ExtraData title="Humidity" value="40%" />
            <ExtraData title="UV Index" value="12" />
            <ExtraData title="Precipitation" value="1.4 cm" />
            <ExtraData title="Pressure" value="1012 hPa" />
            <ExtraData title="Visibility" value="17.2 km" />
            <ExtraData title="Sunrise" value="07:19" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
