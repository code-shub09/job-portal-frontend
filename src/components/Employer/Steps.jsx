import React from "react";

const Steps = ({ stepsList, StepNum, setStepNum }) => {
  function handleStep(num) {
    console.log("stepNum:", num);
    setStepNum(num);
    console.log("stepNum:", num, StepNum);

    return;
  }

  return (
    <div className="flex mt-6 justify-between">
      {stepsList.map((step, index) => {
        let stepCss='w-12 h-12 border cursor-pointer rounded-full m-auto flex items-center justify-center '
        // completed
        if((index+1)<StepNum){
          stepCss+='bg-blue-600 text-white border-blue-600'
        }
        // in process
        if((index+1)==StepNum){
          stepCss+='bg-blue-100 text-blue-700 border-blue-500';
        }
        
        if((index+1)<StepNum){
          stepCss+= 'bg-white text-gray-400 border-gray-300'
        }


        return <div className="flex " key={index}>
          <div className="flex flex-col ">
            <div
              className={stepCss}
              onClick={() => {
                handleStep(step.stepNum);
              }}
            >
              {step.stepNum}
            </div>
            <span>{step.stepDetail}</span>
          </div>
          {index != 2 && (
            <div className="flex flex-wrap item-center content-center">
              <hr className="w-24 border-t-2 border-gray-300  mx-6" />
            </div>
          )}
        </div>;
      })}
    </div>
  );
};

export default Steps;
