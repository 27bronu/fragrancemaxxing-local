import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-[811px] w-full">
      <div className="max_padd_container relative top-32 xs:top-52">
        <h1 className="h1 capitalize max-w-[37rem]">Fragrance Maxxing</h1>
        <p className="text-gray-50 regular-16 mt-6 max-w-[33rem] ">
          Welcome to my fragrance store!
        </p>
        <div className="flexStart !items-center gap-x-4 my-10"></div>
        <div className="max-xs:flex-col flex gap-2">
          <NavLink to={"/men"} className={"btn_dark_rounded flexCenter"}>
            Shop now
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Hero;
