import React from "react";

export default function Card(props){
    return(
        <section className="presentation2">

        <div className="introdaction2">
            <div className="introtext2">
            <h1>{props.title}</h1>

            <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Libero quasi laudantium voluptatem quis neque aperiam <br /> minima consequatur numquam temporibus eveniet!
            </p>

        </div>
        </div>

        <div className="cover2">
        <img src={props.src} alt="img" />

    </div>
    </section>
    )
}