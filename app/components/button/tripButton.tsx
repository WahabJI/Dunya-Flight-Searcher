import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

//this component is for the header at the top of the screen
    const tripButton = (props: any) => {    
    let [plan, setPlan] = useState('startup')

    return (
        <div>
            <RadioGroup value={plan} onChange={setPlan}>
                <div className="flex flex-row gap-x-9 ml-1 mt-6 mr-3">
                    <RadioGroup.Option value={"roundtrip"}>
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Roundtrip</button>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="one-way">
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>One-Way</button>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="multi-city">
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Multi-City</button>
                    )}
                    </RadioGroup.Option>
                </div>
            </RadioGroup>
            
            {/* <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='1'>
            </input>      */}
            {/* <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='2'>
            </input>        
            <input className = "border-deep_marine hover:bg-deep_marine accent-deep_marine text-white border-2 text-center text-sm font-bold rounded-full w-6 h-6 ml-1 mt-6" type="radio" value='3'>
            </input>            */}
        </div>
    );
};

export default tripButton; 