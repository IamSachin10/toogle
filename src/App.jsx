import { useState } from "react";

function App() {
  const [isSwitchOn, setSwitch] = useState(false);
  const handleSwitch = () => {
    setSwitch(!isSwitchOn);
  };
  const basicPlan = isSwitchOn ? 19.99 : 199.99;
  const professionalPlan = isSwitchOn ? 24.99 : 249.99;
  const masterPlan = isSwitchOn ? 39.99 : 399.99;

  return (
    <>
      {/* Toggle btn */}
      <header className="flex flex-col justify-center items-center  gap-4 mb-8 text-grayishBlue">
        <h1 className="text-grayish font-bold text-2xl">our pricing</h1>
        <div className="flex gap-4 font-bold">
          <p>annually</p>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onClick={handleSwitch}
            />
            <div className="w-11 h-6 bg-linearGradient peer-focus:outline-none  rounded-full peer dark:bg-linearGradient peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:linearGradient peer-checked:bg-linearGradient"></div>
            <span className="ml-3 text-sm font-medium "></span>
          </label>
          <p>monthly</p>
        </div>
      </header>
      {/* cards */}
      <div className="sm:flex sm:text-xl ">
        {/* basic plan */}
        <section className=" flex flex-col justify-center items-center gap-5 shadow-xl bg-white text-grayish w-60 rounded-lg sm:w-72 sm:rounded-none">
          <h2 className="font-bold mt-5 ">basic</h2>
          <p className="text-4xl font-bold text-darkGrayish sm:text-6xl">{`$${basicPlan}`}</p>
          <div className="capitalize w-[100%] text-center font-medium">
            <p className="  border-y-2 border-inherit border-solid mx-4 py-2">
              500 gb storage
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              2 users allowed
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              {" "}
              send up to 3GB
            </p>
          </div>
          <button className=" uppercase bg-linearGradient text-lightGrayishBlue font-bold py-1  rounded mb-5 px-12">
            learn more
          </button>
        </section>
        {/* professional plan  */}
        <section className=" flex flex-col justify-center items-center gap-5 shadow-xl bg-linearGradient text-white  w-60 rounded-lg mt-4 sm:mt-0 sm:w-80 sm:py-5">
          <h2 className="font-bold mt-5">professional</h2>
          <p className="text-4xl font-bold sm:text-6xl">{`$${professionalPlan}`}</p>
          <div className="capitalize w-[100%] text-center">
            <p className="  border-y-2 border-inherit border-solid mx-4 py-2">
              1 TB storage
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              5 users allowed
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              Send up to 10 GB
            </p>
          </div>
          <button className=" uppercase  bg-white text-blue-300 font-bold py-1  rounded mb-5 px-12">
            learn more
          </button>
        </section>
        {/* Master */}
        <section className=" flex flex-col justify-center items-center gap-5 shadow-xl bg-white text-grayish w-60 rounded-lg mt-4 sm:mt-0 sm:w-72 sm:rounded-none">
          <h2 className="font-bold mt-5 ">master</h2>
          <p className="text-4xl font-bold text-darkGrayish sm:text-6xl">{`$${masterPlan}`}</p>
          <div className="capitalize w-[100%] text-center">
            <p className="  border-y-2 border-inherit border-solid mx-4 py-2">
              2 tb storage
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              10 users allowed
            </p>
            <p className="border-inherit border-b-2 border-solid mx-4 py-2">
              send up to 20 gb
            </p>
          </div>
          <button className=" uppercase bg-linearGradient text-lightGrayishBlue  py-1  rounded mb-5 px-12">
            learn more
          </button>
        </section>
      </div>
    </>
  );
}

export default App;
