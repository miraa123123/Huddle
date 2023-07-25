import React from "react";
import coverimg from "../images/illustration-mockups.svg"


export default function MainContent(){
    return(
        <main className="bg">
            <section className="presentation">
                <div className="introdaction">
                    <div className="introtext">
                    <h1>Build The Community <br /> Your Fans Will Love</h1>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. <br /> Libero quasi laudantium voluptatem quis neque aperiam <br /> minima consequatur numquam temporibus eveniet!
                    </p>

                    <div className="btn-div">
                    <button className="btn2">Get Started For Free</button>
                    </div>
                </div>
                </div>

                <div className="cover">
                <img src={coverimg} alt="img" />
            </div>
            </section>
        </main>
    )
}