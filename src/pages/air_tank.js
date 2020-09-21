import React, { Component } from "react";
import Appbar from "../Components/Appbar";

const air_tank = () => {
  return (
    <body>
      <header>
        <Appbar />
      </header>
      <main className="content">
        <h1>The Air Tank</h1>
        <p>
          Paintball markers are powered by the expansion of gas stored in a
          compressed gas bottle. The two most common forms of compressed gas are
          carbon dioxide and high-pressure air (HPA). The newer high-pressure
          air (HPA) paintball markers use compressed air or nitrogen (N
          <sub>2</sub>) for propulsion, to attempt to offset issues with other
          types of propellants such as CO<sub>2</sub>. Due to nitrogen's low
          critical point, when pure nitrogen or air (which is 78% nitrogen) is
          compressed, it remains in gaseous form unless the temperature goes
          well below −140 °C (−220 °F).There are two different kinds of HPA
          tanks in paintball. There are aluminium tanks which are preferred by
          younger players because while aluminium tanks are heavy and only hold
          about 21 MPa (3,000 psi), they are also much cheaper to buy (at about
          USD $50, only slightly more than CO<sub>2</sub> tanks). The second
          kind of tank is made from carbon fiber, which is much lighter and
          stronger than aluminium (being able to contain 31 MPa or 4,500 psi and
          in some rare cases 35 MPa or 5,100 psi, as opposed to only 14 MPa or
          2,100 psi that an aluminium tank will hold). Generally, carbon fiber
          tanks are preferred by more experienced players and buyers with a
          larger budget, because the qualities are very reliable and have proven
          themselves worthy of their generally hefty price tags. HPA tanks are
          generally filled from specially designed air compressors which are
          made to create extremely high pressures (unlike shop compressors).
          Although HPA tanks may, in theory, be refilled from other sources such
          as a conventional scuba tank or an average general-purpose air
          compressor, the pressure available from these sources is far below the
          pressure that HPA tanks are designed for. For example, shop
          compressors create around 6,900–13,800 hPa (100–200 psi) range, an
          order of magnitude less than HPA tanks are designed for (typically in
          the range of 21–31 MPa or 3,000–4,500 psi). HPA tanks are filled from
          a nipple instead of the ASA valve, which allows them to be filled
          while the tank is still attached to the paintball marker.
        </p>
        <img
          src="./ninja-standard-50-ci-4500-psi-lite-air-tank-grey.jpg"
          alt="Ninja 50in/4500psi Carbon Fiber Air Tank"
        />
      </main>
    </body>
  );
};
export default air_tank;
