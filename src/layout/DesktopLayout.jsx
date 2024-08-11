import { LeftBar } from "../Components";
import { HomePage } from "../pages";
import {RightBar} from "../Components";

const DesktopLayout = () => {
  return (
    <div className="flex">
      <aside className="w-1/5 hidden sm:block bg-deep-plum ">
        <LeftBar />
      </aside>

      <main className="w-full relative sm:w-3/5 sm:px-5 lg:px-20 xl:px-40 bg-white">
        <HomePage />
      </main>

      <aside className="w-1/5 hidden sm:block bg-deep-plum">
        <RightBar />
      </aside>
    </div>
  );
};
export default DesktopLayout;
