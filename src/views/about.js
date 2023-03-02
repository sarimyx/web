import React, { useEffect } from "react";
import mountainWalk from './../lib/media/me.MountainWalk.jpeg'

export const About = () => {

    useEffect(() => {
        document.title = "About | Sarimyx"
    }, [])

    return (
        <div class="PAGE">
            <h1>About</h1>
            <span class="underline"></span>

            <div class="transparent-container width-100">
                <img src={mountainWalk} class="selfie-wide textbox" alt="selfie"></img>
                <br />
            </div>

            <br />

            <div class="app-info">
                <h3>Briefly...</h3>
                <div class="textbox width-50">
                    <p class="secondary">
                        Hi! I'm a 22 year old developer currently based in Utah. I grew up with a strong background in finance & accounting, and nearly qualified as a professional accountant with the ICAEW in the UK. However, due to my growing interest in computer languages I soon decided to pursue the tech industry.
                    </p>
                </div>

                <div class="textbox width-50">
                    <p class="secondary">
                        I have always preferred self-taught approach over the standard 4-year currciculum, realizing that <strong>experience</strong> is ultiamtely what really matters. For this reason, I began my developer journey very soon after High-School, focusing on projects that matter most to me.
                    </p>
                </div>
            </div>

            <br />

            <div class="textbox width-20">
                <a href="/contact">
                    <p>Contact</p>
                </a>
            </div>

            <br />
            <br />

        </div>
    );

}