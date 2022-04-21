import React, { useState, useEffect } from "react";
import "./styles.css";

export default function App() {
  const [toggleCollapse, setToggleCollapse] = useState(false);
  useEffect(() => {}, [toggleCollapse]);
  return (
    <>
      <div className="wrapper">
        <pearson-datepicker></pearson-datepicker>
        <button onClick={() => setToggleCollapse(!toggleCollapse)}>
          toggleCollapse
        </button>
        {toggleCollapse ? (
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Et
            molestie ac feugiat sed lectus vestibulum mattis. Vitae et leo duis
            ut. Fermentum et sollicitudin ac orci phasellus egestas. Non sodales
            neque sodales ut etiam sit amet. Eget mi proin sed libero enim sed
            faucibus turpis. Nisi quis eleifend quam adipiscing vitae proin
            sagittis. Aliquam sem et tortor consequat id porta nibh venenatis.
            Fames ac turpis egestas integer. Pellentesque pulvinar pellentesque
            habitant morbi. Ultricies integer quis auctor elit sed vulputate mi
            sit amet. Massa eget egestas purus viverra accumsan in. Sociis
            natoque penatibus et magnis dis parturient montes nascetur
            ridiculus. Ut ornare lectus sit amet est. Proin sed libero enim sed
            faucibus turpis. Faucibus in ornare quam viverra. Velit egestas dui
            id ornare arcu odio ut. Sem fringilla ut morbi tincidunt augue
            interdum velit euismod in. Massa sapien faucibus et molestie ac
            feugiat sed. Elit ut aliquam purus sit amet. Mauris commodo quis
            imperdiet massa. Eu consequat ac felis donec et odio. Accumsan sit
            amet nulla facilisi. Nunc pulvinar sapien et ligula ullamcorper
            malesuada proin. Facilisis volutpat est velit egestas dui. Malesuada
            proin libero nunc consequat interdum varius sit amet. Sed felis eget
            velit aliquet sagittis id. Risus in hendrerit gravida rutrum quisque
            non tellus orci ac. Mattis nunc sed blandit libero volutpat. At
            ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget.
            Tortor aliquam nulla facilisi cras fermentum odio. Tortor at risus
            viverra adipiscing at in tellus. Etiam erat velit scelerisque in.
            Quis eleifend quam adipiscing vitae. Mauris ultrices eros in cursus
            turpis massa tincidunt dui. Iaculis nunc sed augue lacus viverra.
            Proin nibh nisl condimentum id. Nibh tellus molestie nunc non.
            Commodo elit at imperdiet dui accumsan. Justo donec enim diam
            vulputate ut pharetra. Scelerisque mauris pellentesque pulvinar
            pellentesque habitant morbi tristique senectus. Consectetur libero
            id faucibus nisl tincidunt eget nullam non. Diam quis enim lobortis
            scelerisque fermentum dui. Mauris vitae ultricies leo integer
            malesuada nunc vel risus. Mattis pellentesque id nibh tortor id.
            Lorem dolor sed viverra ipsum nunc aliquet. Facilisi cras fermentum
            odio eu. Aliquet porttitor lacus luctus accumsan tortor posuere ac
            ut. Condimentum lacinia quis vel eros donec ac odio tempor. Ipsum
            faucibus vitae aliquet nec ullamcorper. Ullamcorper sit amet risus
            nullam eget felis eget. Eros donec ac odio tempor orci dapibus. Quis
            varius quam quisque id diam vel quam elementum pulvinar. Nulla
            aliquet porttitor lacus luctus accumsan. Feugiat pretium nibh ipsum
            consequat nisl vel. Cras tincidunt lobortis feugiat vivamus at.
            Neque viverra justo nec ultrices dui sapien. Donec pretium vulputate
            sapien nec sagittis aliquam. Facilisis leo vel fringilla est
            ullamcorper eget nulla facilisi etiam. A scelerisque purus semper
            eget duis at tellus at. Risus viverra adipiscing at in tellus. Eu
            volutpat odio facilisis mauris sit amet. Donec ac odio tempor orci
            dapibus. Risus viverra adipiscing at in tellus integer feugiat
            scelerisque. Praesent tristique magna sit amet purus. In ante metus
            dictum at tempor. Tempor orci eu lobortis elementum. Vel fringilla
            est ullamcorper eget nulla. Nunc mi ipsum faucibus vitae. Pharetra
            pharetra massa massa ultricies mi quis. Ut aliquam purus sit amet
            luctus. Amet commodo nulla facilisi nullam vehicula. Sed risus
            pretium quam vulputate dignissim suspendisse in est. Parturient
            montes nascetur ridiculus mus mauris vitae ultricies. Eget nullam
            non nisi est sit amet. Vestibulum lorem sed risus ultricies
            tristique nulla. Integer eget aliquet nibh praesent tristique magna
            sit amet purus. Laoreet suspendisse interdum consectetur libero id.
            Neque vitae tempus quam pellentesque nec nam aliquam sem. Nunc
            congue nisi vitae suscipit tellus mauris a diam. Amet luctus
            venenatis lectus magna fringilla urna. Viverra aliquet eget sit amet
            tellus cras adipiscing enim eu. Orci eu lobortis elementum nibh
            tellus molestie nunc non blandit. Tincidunt praesent semper feugiat
            nibh sed. Urna nec tincidunt praesent semper feugiat nibh. Sit amet
            consectetur adipiscing elit. Sit amet est placerat in. Risus feugiat
            in ante metus dictum at tempor commodo ullamcorper. Pellentesque nec
            nam aliquam sem et tortor consequat. Justo eget magna fermentum
            iaculis eu non diam phasellus.
          </div>
        ) : (
          <></>
        )}
        <div></div>
      </div>
    </>
  );
}
