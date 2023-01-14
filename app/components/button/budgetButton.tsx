import { RadioGroup } from '@headlessui/react'
import { useState } from 'react'

//this component is for the header at the top of the screen
    const budgetButton = (props: any) => {    
    let [plan, setPlan] = useState('startup')

    return (
        <div className='mx-auto absolute justify-center'>
            <RadioGroup value={plan} onChange={setPlan}>
                <div className="flex flex-row justify-evenly w-full gap-x-5 mt-4 mb-4 my-3 text-center">
                <RadioGroup.Option value="Backpacker">
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Backpacker</button>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Mid-Range">
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Mid-Range</button>
                    )}
                    </RadioGroup.Option>
                    <RadioGroup.Option value="Splurger">
                    {({ checked }) => (
                        <button type = "button" className={checked ? 'rounded-lg border-2 w-auto border-shallow_aqua bg-shallow_aqua px-2 py-1 hover:opacity-80' : ''}>Splurger</button>
                    )}
                    </RadioGroup.Option>
                </div>
            </RadioGroup>
        </div>
    );
};

export default budgetButton;