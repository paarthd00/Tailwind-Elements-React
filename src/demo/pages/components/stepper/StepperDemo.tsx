import React from "react";
import Stepper from "../../../../lib/components/Stepper/Stepper";

export default function StepperPage() {
    let stepperExampleData: string[] = ["Take Photo", "Edit Photo", "Upload Photo"]
    return (
        <div>
            <h1>Stepper Page</h1>
            <Stepper dataArray={stepperExampleData} />
        </div>
    )
}