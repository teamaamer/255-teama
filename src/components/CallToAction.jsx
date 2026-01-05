import React from "react";
import { PhoneOff } from "lucide-react";
import Container from "./layout/Container";
import LinkButtonFill from "./buttons/LinkButtonFill";
import FadeInRight from "./animations/FadeInRight";
import FadeInLeft from "./animations/FadeInLeft";
import FadeInBottom from "./animations/FadeInBottom";

const CallToAction = () => {
  return (
    <Container className="my-24 flex flex-col text-center items-center gap-8">
      <FadeInRight>
        <p className="leading-relaxed max-w-[600px]">
          Ready to empower your brand and inspire change? Contact us today, and let us create
          tailored solutions that drive your success.
        </p>
      </FadeInRight>
      <FadeInLeft>
        <h1 className="text-8xl font-bold mb-4 text-slate-200">Let&apos;s Talk!</h1>
      </FadeInLeft>
      <FadeInBottom className="w-full lg:w-1/4 max-w-[300px]">
        <LinkButtonFill href="/contact">
          Contact Us!
          <PhoneOff size={24} className="ml-2" />
        </LinkButtonFill>
      </FadeInBottom>
    </Container>
  );
};

export default CallToAction;
