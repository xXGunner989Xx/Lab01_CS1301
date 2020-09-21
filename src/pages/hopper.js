import React, { Component } from "react";
import Appbar from "../Components/Appbar";

const hopper = () => {
  return (
    <body>
      <header>
        <Appbar />
      </header>
      <main className="content">
        <h1>The Hopper</h1>
        <p>
          A hopper/loader contains the paintball supply for a marker, much as
          magazines contain the ammunition on a regular rifle. With few
          exceptions, hoppers are all mounted above the marker, and most use
          gravity as the ultimate force to get the balls in the marker. That is
          to say, if most hoppers are turned upside down, the marker will not be
          fed with balls and will cease to fire. There are three main types:
          Gravity Feed, Agitated Feed, and Force Feed loaders. Gravity Feed
          hoppers often get jammed up with balls at the feed neck, which can
          result in a marker 'dry firing' (firing without paint) or chopping
          balls due to the timing of the ball entering the marker. This is
          detrimental to the speed and performance of the marker. Agitated Feed
          hoppers improve on the Gravity method of feeding the marker. Some use
          simple agitation levers or paddles inside the hopper to shake up the
          balls and guide them down the feed neck. Others (sometimes
          colloquially known as 'revies') use a paddle wheel inside the hopper
          to force any balls reaching the bottom of the hopper into the feed
          neck. Agitated Feeders need gravity to keep the balls rolling toward
          the bottom of the hopper before they can reach the loading mechanism.
          The 'Revo' with 'Z-Board' uses an electric motor to spin the paddle
          wheel at high speed and this method remains one of the fastest loading
          systems as of March 2013. Force Feed loaders create a stack of paint
          balls leading into the marker. Most of these hoppers maintain a
          constant tension on the ball stack to ensure that once a paintball is
          fired, a new one immediately takes its place. A special feed tube is
          sometimes used to allow placement of a hopper below the chamber,
          giving the marker a much lower profile. Any hopper-based loading
          system still relies on gravity to get paint into the drive portion of
          the loader itself. The 'Warp' loader uses an electric motor to rotate
          two silicone discs with ball-shaped divots, which add each ball to a
          stack headed down the feed tube into the chamber. Helical Feed loaders
          are a form of Force Feed loader which use helix (or coil) shaped
          clips. In most designs, each clip is preloaded (typically before a
          match begins) with paintballs which are stacked under constant
          pressure to ensure a continuous feed of balls into the chamber. One
          drawback to this pressure is that paintballs stored in the clip will
          become deformed over time, causing jams or inaccuracy. Using a feed
          tube, these loaders can be mounted under a barrel. Helical feed
          loaders can fire continuously in any orientation. The 'Q-Loader'
          system uses a spring-driven clip, eliminating the potential noise of a
          motor-driven system. The 'Q-Loader' system is capable of loading 100
          balls in less than 3 seconds, though breakage can occur at higher
          spring tensions. There is some confusion about the term 'loader'. A
          loader typically refers to a powered or constant-pressure system,
          whereas gravity feed systems are generally referred to only as a
          hopper. In short, a loader system may include a hopper, and a hopper
          may function using gravity without any loader at all, but the two
          terms are often used interchangeably.
        </p>
        <img src="./VIR-22379-2.jpg" alt="A Virtue Spire III" />
      </main>
    </body>
  );
};
export default hopper;
