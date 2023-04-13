import React from "react";
import { useNaviagate } from "react-router-dom";
import { ethers } from "ethers";

import { money } from "../assets";
import { customButton, FormField } from "../components";
import { checkIfImage } from "../utils";

const CreateCampaign = () => {
    const navigate = useNaviagate();
    const [isLoading, setIsLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        title: "",
        description: "",
        target: "",
        deadline: "",
        image: "",
    });

    const handleSubmit = () => {};

    return (
        <div className="bg-[#1c1c24] flex justify-center items-center flex-col rounded-[10px] sm:p-10 p-4">
            {isLoading && "Loader..."}
            <div className="flex justify-center items-center p-[16px] sm:min-w-[380px] bg-[#3a3a43] rounded-[10px]">
                <h1 className="font-epilogue font-bold sm:text-[25px] text-[18px] leading-[38px] text-white">
                    Start a Campaign
                </h1>
            </div>

            <form
                onSubmit={handleSubmit}
                className="w-full mt-[65px] flex flex-col gap-[30px]"
            >
                <div className="flex flex-wrap gap-[40px]">
                    <FormField
                        labelName="Your name *"
                        placeholder="John Doe"
                        inputType="text"
                        value={form.name}
                        handleChange={() => {}}
                    />
                    <FormField
                        labelName="Campaign Title *"
                        placeholder="Write a Title"
                        inputType="text"
                        value={form.title}
                        handleChange={() => {}}
                    />
                </div>
            </form>
        </div>
    );
};

export default CreateCampaign;
