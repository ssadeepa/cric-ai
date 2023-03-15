import {SearchPlayer} from "../components"

import Player1Img from "../assets/8.png";
import Player2Img from "../assets/kholiProf.png";
import vsImg from "../assets/10.jpg";

export const PlayerComparision = () => {
  return (
    <>
      <div class="grid grid-cols-3 gap-4 mx-20 mt-4">
        <div className="mr-6 ml-1">
          < SearchPlayer />
        </div>

        <div className=""></div>
        <div className="ml-6 mr-1">
          < SearchPlayer />
        </div>
      </div>

      <div className="mx-10 p-6">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-red-100 rounded-xl shadow-lg m-5 mt-2">
            <div className="PlayerbarLeft">
              <div className="PlayerbarItem">
                <span className="PlayerbarTitle">KUSAL MENDIS</span>
                <img className="" src={Player1Img} alt="player1 image" />
              </div>
            </div>
          </div>

          <div className="">
            <div className="">
              <div className="text-center m-5 mt-6">
                <span className="text-2xl font-medium bg-emerald-400 p-3 rounded-lg">
                  PLAYER COMPARISION
                </span>
                <img className="mt-7" src={vsImg} alt="vs image" />
              </div>
            </div>
          </div>

          <div className=" bg-green-100 rounded-xl shadow-lg m-5 mt-2">
            <div className="PlayerbarRight">
              <div className="PlayerbarItem">
                <span className="PlayerbarTitle">VIRAT KOHLI</span>
                <img
                  className="w-full h-auto"
                  src={Player2Img}
                  alt="player2 image"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="text-right flex flex-col">
              <div className="m-5">
                <span className=" p-2 rounded-lg shadow-2xl">Kusal Medis</span>
              </div>
              <div className="m-5">
                <span className=" p-2 rounded-lg shadow-2xl">
                  This is the text inside box 2.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center flex flex-col">
              <div className="m-5">
                <span className=" p-2  bg-emerald-400 rounded-lg shadow-xl">
                  FULL NAME
                </span>
              </div>
              <div className="m-5">
                <span className=" p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BORN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  AGE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BATTING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  BOWLING STYLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  FIELD POSITION
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  PLAYING ROLE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  ECONOMY RATE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  STRIKE RATE
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  WICKETS TAKEN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  CATCHES TAKEN
                </span>
              </div>
              <div className="m-5">
                <span className="p-2  bg-emerald-400 rounded-lg shadow-xl">
                  RANKING
                </span>
              </div>

              {/* <h3 className="m-5  bg-red-100 rounded-lg shadow-2xl">
                FULL NAME
              </h3>
              <h3 className="m-5">BORN</h3>
              <h3 className="m-5">AGE</h3>
              <h3 className="m-5">BATTING STYLE</h3>
              <h3 className="m-5">BOWLING STYLE</h3>
              <h3 className="m-5">FIELD POSITION</h3>
              <h3 className="m-5">PLAYING ROLE</h3>
              <h3 className="m-5">AVERAGE</h3>
              <h3 className="m-5">ECONOMY RATE</h3>
              <h3 className="m-5">STRIKE RATE</h3>
              <h3 className="m-5">WICKETS TAKEN</h3>
              <h3 className="m-5">CATCHES TAKEN</h3> */}
            </div>
          </div>

          <div>
            <div className="text-left flex flex-col">
              <div className="m-5">
                <span className=" p-2 bg-red-100 rounded-lg shadow-2xl">
                  Virat Kholi
                </span>
              </div>
              <div className="m-5">
                <span className=" p-2 rounded-lg shadow-2xl">
                  This is the text inside box 2.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
              <div className="m-5">
                <span className="p-2 rounded-lg shadow-2xl">
                  This is the text inside box 3.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
