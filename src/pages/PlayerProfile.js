import PlayerImg from "../assets/dhoni.png";
import { TableStat } from "../components";
import 'tailwindcss/tailwind.css'


export const PlayerProfile = () => {
  return (
    <>
      <div class="shadow-2xl mx-20 mt-5 rounded-lg h-32 sm:h-48 md:h-64 lg:h-96 bg-gradient-to-r from-amber-500 to-pink-500 relative ...">
        <div className="absolute bottom-0 left-0 ml-10 mb-10">
          <h1 className="text-red-500 text-4xl">M.S. Dhoni</h1>
          <p className="text-slate-400 text-3xl">
            India <span>| Wicket Keeper</span>
          </p>
        </div>
        <div class="w-60 absolute bottom-0 right-10 ...">
          <img src={PlayerImg} alt="Logo" />
        </div>
      </div>
      


      <div className="bg-red-50 rounded-lg mx-20 mt-5 shadow-xl">
        <div class="grid grid-cols-3 gap-4 font-medium">
          <div className="p-4 bg-red-100 m-3 rounded-lg">
            <h2>FULL NAME</h2>
            <p>Mahendra Singh Dhoni</p>
          </div>
          <div className="p-4 bg-red-100 m-3 rounded-lg">
            <h2>BORN</h2>
            <p>July 07, 1981, Ranchi, Bihar</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>AGE</h2>
            <p>41y 240d</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>HIGHEST RUNS</h2>
            <p>102*</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>BATTING STYLE</h2>
            <p>Right hand Bat</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>BOWLING STYLE</h2>
            <p>Right arm Medium</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>FIELDING POSITION</h2>
            <p>Wicketkeeper</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>PLAYING ROLE</h2>
            <p>Wicketkeeper Batter</p>
          </div>
          <div className="p-4  bg-red-100 m-3 rounded-lg">
            <h2>ALSO KNOWN AS</h2>
            <p>Mahi</p>
          </div>
        </div>
      </div>



      <div className="bg-red-50 rounded-lg mx-20 mt-5 p-3 shadow-xl">
        <p className="text-center font-medium">Player Statistics Analysis</p>
      </div>



      <div className="shadow-xl rounded-lg mx-20 mt-5 mb-5">
        <TableStat />
      </div>
    </>
  )
}
