import React from "react";

const GlanceCard = () => {
 return (
  <div className="flex w-full justify-center my-24 font-extrabold px-60 p-10">
    <div className="flex flex-col justify-between py-6 h-[400px] w-[1200px] bg-color_white rounded-xl px-60 p-10">
    <div className="text-2xl text-fuchsia-700 font-extrabold w-auto text-center">PURBANI GROUP AT A GLANCE</div>
    <div className="text-base text-inherit font-normal w-auto text-center">Purbani is one of the largest & oldest established 100% export oriented Textile conglomerates in Bangladesh since 1973 and doing business for more than 5 decades with empinence. It is a vertically integrated textile-manufacturing group and running with 13-bisiness unit invlolve in spinning. Yarn Dyeing, Fabrics Manufacturing & Dyeing, Ready Made Garments, Retail Clothing and Agriculture. </div>
    <div>
      <table>
        <tr>
          <th>ESTABLISHED IN</th>
        </tr>
      </table>
    </div>
    </div>
  </div>
 ) 
}

export default GlanceCard;