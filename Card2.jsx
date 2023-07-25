import React from "react";

export default function Card2(props){
    return(
        <section className="presentation2">

        <div className="cover2">
             <img src={props.src} alt="img" />
        </div>

        <div className="introdaction2">
            <div className="introtext2">
            <h1>{props.title}</h1>

            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Libero quasi laudantium voluptatem quis neque aperiam <br /> minima consequatur numquam temporibus eveniet!
            </p>

        </div>
        </div>


    </section>
    )
}