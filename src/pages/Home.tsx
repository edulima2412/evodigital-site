import Header from "@/shared/components/layout/Header";

import Hero from "@/features/home/components/Hero";
import Stats from "@/features/home/components/Stats";
import Services from "@/features/home/components/Services";
import Portfolio from "@/features/home/components/Portfolio";
import Why from "@/features/home/components/Why";
import About from "@/features/home/components/About";
import Process from "@/features/home/components/Process";
import FAQ from "@/features/home/components/FAQ";
import CTA from "@/features/home/components/CTA";

export default function Home() {

    return (

        <>

            <Header />

            <Hero />

            <Stats />

            <Services />

            <Portfolio />

            <Why />

            <About />

            <Process />

            <FAQ />

            <CTA />

        </>

    );

}