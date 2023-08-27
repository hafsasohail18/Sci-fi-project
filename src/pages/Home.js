import React from "react";
import Header from "../Components/Home/Header";
import BackgroundVideo from "../Components/Home/BgVideo";
import ImageData from "../Components/Home/ImageData";
import Feature from "../Components/Home/feature";
import Footer from "../Components/Home/Footer";
import SubscriptionForm from "../Components/Home/SubscriptionForm";



function Home() {
    return (
        <>
        <Header />
        <BackgroundVideo />
        <ImageData />
        <Feature/>
        <SubscriptionForm />
        <Footer />
        </>
    )
}

export default Home;