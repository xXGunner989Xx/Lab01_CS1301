import React from "react";
import "../App.css";
import { Toolbar, Typography, IconButton, Paper } from "@material-ui/core";
import Sidebar from "../Components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../Components/Appbar";

const home = () => {
  return (
    <body>
      <header>
        <Appbar />
      </header>
      <main className="content">
        <h1>So what is paintball, anyways?</h1>
        <p>
          Paintball is a competitive team shooting sport in which players
          eliminate opponents from play by hitting them with spherical
          dye-filled gelatin capsules called paintballs that break upon impact.
          Paintballs are usually shot using low-energy air weapons called
          paintball markers that are powered by compressed air or carbon dioxide
          and were originally designed for remotely marking trees and cattle.
          The game was initially developed in May 1981 in New Hampshire by Hayes
          Noel, a Wall Street stock trader, and Charles Gaines, an outdoorsman
          and writer. A debate arose between them about whether a city-dweller
          had the instinct to survive in the woods against a man who had spent
          his youth hunting, fishing, and building cabins. The two men chanced
          upon an advertisement for a paint gun in a farm catalogue and were
          inspired to use it to settle their argument with 10 other men all in
          individual competition, eventually creating the sport of paintball.
          The sport is played for recreation and is also played at a formal
          sporting level with organized competition that involves major
          tournaments, professional teams, and players. Paintball technology is
          also used by military forces, law enforcement, paramilitary, and
          security organizations to supplement military or other training. Games
          can be played on indoor or outdoor fields of varying sizes. A playing
          field may have natural or artificial terrain which players use for
          tactical cover. Game types and goals vary, but include capture the
          flag, elimination, defending or attacking a particular point or area,
          or capturing objects of interest hidden in the playing area. Depending
          on the variant played, games can last from minutes to hours, or even
          days in "scenario play". The legality of the sport and use of
          paintball markers varies among countries and regions. In most areas
          where regulated play is offered, players are required to wear
          protective masks, use barrel-blocking safety equipment, and strictly
          enforce safe game rules.
        </p>
        <p>
          Paintball equipment used my depend on the game type, including:
          woodsball, speedball, scenario, etc. Despite the differences in these
          game types, every player will utilizize these basic components:
          A&nbsp;<strong>marker, hopper, air tank,</strong> and{" "}
          <strong>paint.</strong>
        </p>
        <p>
          On the following pages, these core utilities will be defined in
          greater detail.
        </p>
        <img src="./HOMEPAGE_1600x.jpg" alt="5v5 Speedball" />
      </main>
    </body>
  );
};
export default home;
