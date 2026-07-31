import Header from "@/shared/components/layout/Header";
import Footer from "@/shared/components/layout/Footer";
import SEO from "@/shared/components/layout/SEO";
import WhatsAppButton from "@/shared/components/layout/WhatsAppButton";

import Hero from "@/features/home/components/Hero";
import Stats from "@/features/home/components/Stats";
import Services from "@/features/home/components/Services";
import Portfolio from "@/features/home/components/Portfolio";
import Why from "@/features/home/components/Why";
import About from "@/features/home/components/About";
import Process from "@/features/home/components/Process";
import FAQ from "@/features/home/components/FAQ";
import CTA from "@/features/home/components/CTA";
import ContactForm from "@/features/home/components/ContactForm";
import Pricing from "@/features/home/components/Pricing";

export default function Home() {

    return (

        <>
            <SEO />
            <Header />

            <Hero />

            <Stats />

            <Services />

            <Portfolio />

            <Pricing />

            <Why />

            <About />

            <Process />

            <FAQ />

            <CTA />

            <ContactForm />

            <Footer />
            <WhatsAppButton />
        </>

    );

}