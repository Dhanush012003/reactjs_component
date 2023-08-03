import React from "react";
import "./Moose.css";

export default function Moose(){
    return(
        <div className="Moose">
            <div className="para">
                <img src="https://images.unsplash.com/photo-1549471013-3364d7220b75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" alt="moose" height="150" width="150"></img>
                <p className='text'>My name is Sarah,and my Favorite animal is moose.<br></br>
                They can be up to 6.5 feet tall and weigh 1200 pounds.<br></br>
                Suprisingly,they're really good at swimming!!<br></br><a href='"https://en.wikipedia.org/wiki/Moose"'>its Wikipedia page.</a>
                </p>
            </div>
            <div>
            <h2>Moose are awesome because...</h2>
        <ol type="1">
          <li>They can swim really well</li>
          <li>They can make really funny noises</li>
          <li>They can close their nostrils</li>
        </ol>

       <h2>If I were a moose,I would..</h2>
          <ul>
            <li>Eat lots of lettuce</li>
            <li>Carry little animals on my antlers</li>
            <li>Swim to Alaska</li>
          </ul>

       <h2>Moose video</h2>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/5F7wsbvfcEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>
        </div>
    );
}