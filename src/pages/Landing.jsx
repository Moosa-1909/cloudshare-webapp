import { useClerk, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { features } from "../assets/data.js";
import CTASection from "../components/landing/CTASection.jsx";
import FeaturesSection from "../components/landing/FeaturesSection.jsx";
import Footer from "../components/landing/Footer.jsx";
import HeroSection from "../components/landing/HeroSection";
import { useEffect } from "react";

const Landing = () => {
    const {openSignIn, openSignUp} = useClerk();
    const {isSignedIn} = useUser();
    const navigate = useNavigate();

    useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }
    }, [isSignedIn, navigate]);

    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>
            <FeaturesSection features={features}/>
            <CTASection openSignUp={openSignUp} />
            <Footer />
        </div>
    )
}

export default Landing;