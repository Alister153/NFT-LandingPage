import Image from "next/image";
import { useContext } from "react";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { screenWidth } from ".";
const drop = require("../images/drop.png");
const catOps = require("../images/cat-ops.png");
const pig = require("../images/pig.png");
const ape = require("../images/ape.png");
const pimp = require("../images/pimp.png");
const spongebob = require("../images/spongebob.png");

const Main = () => {
  const [screenW, setScreenW] = useContext(screenWidth);
  return (
    <div className="main pt-12">
      <header className="header--wrapper">
        <div className="left-wrapper">
          <div className="market">
            <div className="gradient"></div>
            <h1 className="text-4xl lg:text-8xl">
              <div></div>NFT MARKET
            </h1>
          </div>
          <div className="discounts">
            <figure className="drop--wrapper">
              <Image
                className="drop"
                alt="drop"
                src={drop}
                width="100px"
                height="100px"
                layout="intrinsic"
              />
            </figure>
            <h1 className="text-4xl lg:text-8xl">WITH DISCOUNTS</h1>
            <div>
              <h1 className="text-xl lg:text-4xl">-50%</h1>
            </div>
          </div>
          <div className="btns-details">
            <div className="wrapper">
              <div className="w-full flex justify-center my-5">
                <button className="buy mx-5">Buy NFTs</button>
                <button className="gallery mx-5">Gallery</button>
              </div>
              <p className="details w-full px-5 lg:px-0">
                An NFT, or Non-Fungible Token, is a unit of account that creates
                a digital impression of any unique item. Among them may be:
                paintings, photos, videos, music, gifs.
              </p>
            </div>
          </div>
        </div>
        <div className="ops-wrapper">
          <div className="hazard">
            <figure>
              <Image src={catOps} alt="catOps" />
            </figure>
          </div>
        </div>
      </header>
      <main className="carousel-wrapper py-20 lg:py-0">
        <div className="carousel">
          <div className="item">
            <div className="item-wrapper">
              <figure>
                <Image src={pig} alt="Pig" />
              </figure>
            </div>
          </div>
          <div className="item">
            <div className="item-wrapper">
              <figure>
                <Image src={ape} alt="Ape" />
              </figure>
            </div>
          </div>
          <div className="item">
            <div className="item-wrapper">
              <figure>
                <Image src={pimp} alt="Pimp" />
              </figure>
            </div>
          </div>
        </div>
        <div className="more">
          <div>{screenW > 500 ? <BsChevronRight /> : <BsChevronDown />}</div>
          <p>MORE</p>
        </div>
      </main>
      <div className="spongebob">
        <figure>
          <Image src={spongebob} alt="Spongebob" />
        </figure>
      </div>
    </div>
  );
};

export default Main;
