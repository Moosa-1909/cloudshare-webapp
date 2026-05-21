import { useClerk, useUser } from "@clerk/react";
import { useNavigate } from "react-router-dom";
import { features, pricingPlans } from "../assets/data.js";
import CTASection from "../components/landing/CTASection.jsx";
import FeaturesSection from "../components/landing/FeaturesSection.jsx";
import Footer from "../components/landing/Footer.jsx";
import HeroSection from "../components/landing/HeroSection";
import PricingSection from "../components/landing/PricingSection.jsx";
import { use, useEffect } from "react";
// import TestimonialSection from "../components/landing/TestimonialsSection.jsx";

const Landing =() => { 
    const {openSignIn, openSignUp} = useClerk();

console.log("openSignIn =", openSignIn);
console.log("openSignUp =", openSignUp);
    const {isSignedIn} = useUser();
    const navigate = useNavigate();
   useEffect(() => {
        if (isSignedIn) {
            navigate("/dashboard");
        }
   }, [isSignedIn, navigate]);
    console.log(features);
    return (
        <div className="landing-page bg-gradient-to-b from-gray-50 to-gray-100">
            {/* Hero section*/}
            <HeroSection openSignIn={openSignIn} openSignUp={openSignUp}/>
            {/* Features section*/}
            <FeaturesSection features={features}/>
            {/* Pricing section*/}
            <PricingSection  pricingPlans={pricingPlans}/>
            {/* Testimonials section
            <TestimonialSection /> */}
            {/* CTA section*/}
            <CTASection />
            {/* Footer section*/}
            <Footer />
            </div>
    )
}
export default Landing;