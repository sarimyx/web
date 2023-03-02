import selfie from './../lib/media/me.InCar.jpg'

export const Home = () => {
    return (
        <div class="PAGE">

            <br />

            <div class="transparent-container width-100">
                <img src={selfie} class="selfie textbox" alt="selfie"></img>
                <div class="app-info">
                    <h2 class="indent">Hi there,</h2>
                    <p class="indent bolder bigger">
                        Nice to meet you – I'm Sarim.
                    </p>
                    <p class="indent bolder">
                        I'm a web & app developer based in Utah, USA. I've worked on a variety of interesting projects over the years and gained a diverse set of skills.
                    </p>
                    <p class="indent">
                        My focus lies heavily on user experience & bridging its gap with complex functionality.
                    </p>
                    <p class="indent">
                        Feel free to look around & check out some notable projects below!
                    </p>
                </div>
            </div>

            <br />
            <br />

            <h1>Projects</h1>
            <span class="underline"></span>

            <br />

            <div class="transparent-container width-100">
                <img src="https://cdn.quraniclabs.com/media/book" class="selfie textbox" alt="selfie"></img>
                <div class="app-info">
                    <h3 class="indent">QuranicLabs</h3>
                    <p class="indent">
                        QuranicLabs is a tech-based pursuit to facilitate adherents of the beliefs espoused by the United Submitters International (USI) - an organization founded in Tucson, AZ. As the creator & sole developer involved, I managed to create a wide suite of tools & solutions to enhance information access.
                    </p>
                    <p class="secondary indent lighter"> <span class="bolder whiten padding-right">Skills involved</span> JavaScript • Node.js • React.js • Discord.js • Express.js • Swift • SwiftUI • HTML/CSS </p>
                </div>
            </div>

            <p class="secondary lighter"> Key Projects </p>
            <a href="https://quraniclabs.com/" target="_blank" rel="noreferrer">
                <button>Website Portal</button>
            </a>
            <a href="https://quraniclabs.com/api" target="_blank" rel="noreferrer">
                <button>Public API</button>
            </a>
            <a href="https://apps.apple.com/us/app/quraniclabs/id6444260632" target="_blank" rel="noreferrer">
                <button>iOS App</button>
            </a>
            <a href="https://quraniclabs.com/discord" target="_blank" rel="noreferrer">
                <button>Discord Bot</button>
            </a>

            <br />
            <br />
            <br />

            <span class="underline"></span>

            <br />

            <div class="transparent-container width-100">
                <img src="https://cdn.quraniclabs.com/media/lightbulb.png" class="selfie textbox" alt="selfie"></img>
                <div class="app-info">
                    <h3 class="indent"> JSON </h3>
                    <p class="indent">
                        JSON Excel tool is designed to bridge the gap between the two popular data formats and make conversions between them easier & more efficient - something very few online tools/apps offer (particularly with larger datasets).
                    </p>
                    <p class="secondary indent"> <span class="bolder whiten padding-right">Skills involved</span> JavaScript • Node.js </p>
                </div>
            </div>

            <br />

            <span class="underline"></span>

            <br />
            <br />
            <br />

        </div>
    )
}