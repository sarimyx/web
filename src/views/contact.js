import React, { useEffect } from "react"

export const Contact = () => {

    useEffect(() => {
        document.title = "Contact | Sarimyx"
    }, [])

    return (

        <div class="PAGE">
            <h1>Contact</h1>
            <span class="underline"></span>

            <br />

            <h3>Email</h3>
            <div class="textbox width-50">
                <a href="mailto:hey@sarimyx.com">
                    <p class="secondary">
                        Shoot me a mail at <span class="purpled lighter">hey@sarimyx.com</span>
                    </p>
                </a>
            </div>

            <br />

            <h3>Social Media</h3>
            <div class="textbox width-50">
            <a href="https://linked.com/in/sarimyx">
                    <p class="secondary">
                        LinkedIn: <span class="purpled lighter">@sarimyx</span>
                    </p>
                </a>
                <a href="https://instagram.com/sarimyx">
                    <p class="secondary">
                        Instagram: <span class="purpled lighter">@sarimyx</span>
                    </p>
                </a>
                <a href="https://twitter.com/sarimyx">
                    <p class="secondary">
                        Twitter: <span class="purpled lighter">@sarimyx</span>
                    </p>
                </a>
                <a href="https://reddit.com/sarimyx">
                    <p class="secondary">
                        Reddit: <span class="purpled lighter">u/sarimyx</span>
                    </p>
                </a>
                <a href="https://youtube.com/@sarimyx">
                    <p class="secondary">
                        YouTube: <span class="purpled lighter">@sarimyx</span>
                    </p>
                </a>
            </div>

        </div>

    );

}