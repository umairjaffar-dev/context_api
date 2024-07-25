import { twMerge } from "tailwind-merge";
import { useContext } from "react";
import { ThemeContext } from "../hooks/ThemeProvider";

const Home = () => {
  const themeContext = useContext(ThemeContext);

  const handleToggleTheme = () => {
    themeContext?.toggleTheme(
      themeContext?.theme === "light" ? "dark" : "light"
    );
    // console.log("theme", themeContext?.theme);
  };

  const darkTheme = themeContext?.theme === "dark" && "bg-gray-900";
  return (
    <div
      className={twMerge(
        "w-screen h-screen grid grid-rows-[auto_1fr] gap-2 bg-gray-100",
        darkTheme
      )}
    >
      <div className="w-full h-16 px-10 border-b border-b-gray-500 flex justify-between items-center">
        <p className="text-md font-semibold text-violet-500">LoGo</p>
        <button
          onClick={handleToggleTheme}
          className={twMerge(
            "text-sm text-violet-500 cursor-pointer bg-gray-900 rounded-md px-2 py-1 capitalize",
            darkTheme
          )}
        >
          mode
        </button>
      </div>
    </div>
  );
};

export default Home;
