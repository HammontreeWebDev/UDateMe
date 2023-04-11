import React from "react";

// components:
import PartnerProfileNavBar from "../components/PartnerProfileNavBar";

// TODO: finish page nav bar functionality -- quiz should be a modal... maybe have partners profiles show up as cards to click on in order to access information.. possibly another page? -- then finish logout button functionality...

const PartnerProfile = () => {
    return (
        <>
            <header>
                <PartnerProfileNavBar />
            </header>
            {/* <main>
                <section>
                    <p>
                        This is the Partner Profile Page!
                    </p>
                </section>
            </main> */}
        </>
    )
}

export default PartnerProfile;