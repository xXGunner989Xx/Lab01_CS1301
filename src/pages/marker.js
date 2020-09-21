import React from "react";
import "../App.css";
import { Toolbar, Typography, IconButton, Paper } from "@material-ui/core";
import Sidebar from "../Components/Sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Appbar from "../Components/Appbar";

const marker = () => {
  return (
    <body>
      <header>
        <Appbar />
      </header>
      <main className="content">
        <h1>The Marker</h1>
        <p>
          A paintball marker, also known as a paintball gun, paint gun, or
          simply marker, is an air gun used in the shooting sport of paintball,
          and the main piece of paintball equipment. Paintball markers use
          compressed gas, such as carbon dioxide (CO<sub>2</sub>) or compressed
          air (HPA), to propel dye-filled gel capsules called paintballs through
          the barrel and quickly strike a target. The term "marker" is derived
          from its original use as a tool for forestry personnel to mark trees
          and ranchers to mark wandering cattle. The muzzle velocity of
          paintball markers is approximately 90 m/s (300 ft/s); most paintball
          fields restrict speed to 280-300 fps, and small indoor fields may
          further restrict it down to 250 fps. While greater muzzle velocity is
          possible, it has been ruled unsafe for use on most commercial
          paintball fields. When paintballs hit an object at high speed they
          have the potential to cause damage; a paintball colliding with human
          skin, even protected by cloth, may cause bruising or further tissue
          damage. However, the damage depends on the paintball's velocity,
          distance, its impact angle, whether it breaks, and which part of the
          body it hits. Because of the potential for serious soft tissue damage,
          paintball players must wear a quality paintball mask to protect their
          eyes, mouth, and ears when barrel blocking devices are not preventing
          paintball markers from firing.
        </p>
        <p>
          Paintball markers fall into two categories based on the method of
          operation: mechanical and electropneumatic.
        </p>
        <p>
          Mechanically operated paintball markers operate using solely
          mechanical means, and as such do not use electro-pneumatic solenoids
          controlled by an electronic board to fire. In electromagnetic designs,
          the trigger, instead of being mechanically linked to the action of the
          marker, simply activates an electronic micro-switch (or more recently,
          a magnetic or optical sensor). That information is passed through
          control circuitry to a computer-controlled solenoid valve which can
          open and close very quickly and precisely, allowing gas to move into
          or out of various pressure chambers in the marker to move the bolt and
          fire the paintball. This disconnect of the trigger from the action
          allows electronic trigger pulls to be very short in length and very
          lightweight (similar to a mouse click; the mechanisms are virtually
          identical), which dramatically increases rate-of-fire over a fully
          mechanical design. Solenoid-controlled gas valve designs also allow
          for reduced weight of internal parts, which both lightens overall
          weight and reduces the time it takes for the marker to cycle through
          firing a single paintball.
        </p>
        <img
          src="./GOG-SHK-Blem-BlackGreyPink-2.jpg"
          alt="Smart Parts Shocker RSX"
        />
      </main>
    </body>
  );
};
export default marker;
