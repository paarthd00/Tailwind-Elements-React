import React, { useState } from "react";

export default function Stepper({ dataArray }: { dataArray: string[] }) {

    const [currentStep, setCurrentStep] = useState(0);

    const handleStepperNext = () => {
        if (currentStep < dataArray.length - 1) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handleStepperBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    return (
        <div className="flex flex-col gap-5">
            <div className="flex justify-center w-full">
                {
                    dataArray && dataArray.length > 0 &&
                    dataArray.map((data: string, index: number) => {
                        return (
                            <span className={`${index < dataArray.length - 1 && 'w-[100%]'} 
                            ${currentStep >= index ? 'opacity-100' : 'opacity-50'}
                            flex items-center`}>
                                <span className={`ms-3 rounded-full inline bg-primary-100 px-[1em] py-[1em] text-center align-baseline text-[1.125rem] font-bold leading-none text-primary-700`}>{index + 1}</span>
                                <span className="whitespace-nowrap px-3">{data}</span>
                                {
                                    index !== dataArray.length - 1 &&
                                    <span className={`w-[100%] h-[.05rem] ${currentStep > index ? 'bg-white' : 'bg-slate-500'}`}>

                                    </span>

                                }
                            </span>

                        )
                    })
                }
            </div>
            <div className="flex justify-evenly">
                <button
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={handleStepperBack}>
                    Back
                </button>

                <button
                    className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    onClick={handleStepperNext}>
                    Next
                </button>
            </div>
        </div>
    )
}