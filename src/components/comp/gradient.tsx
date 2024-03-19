import TailwindGradientGenerator from "./gradientGenerator/Tailwind";
import CSSGradientGenerator from "./gradientGenerator/css";

function GradientGenerator() {
  
 
  return (
   <div className="w-screen flex justify-center items-center">
    <CSSGradientGenerator/>
    {/* <TailwindGradientGenerator/> */}
   </div>
  );
}

export default GradientGenerator;