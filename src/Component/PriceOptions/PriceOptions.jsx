import { useState } from "react";
import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {
    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 25,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Standard operating hours access",
                "1 guest pass per month"
            ],
            "description": "A simple plan for occasional gym-goers."
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 50,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "Access to group classes",
                "Extended operating hours access",
                "5 guest passes per month"
            ],
            "description": "Ideal for regular fitness enthusiasts."
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 75,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "Free Wi-Fi",
                "2 personal training sessions per month",
                "Access to sauna and steam room",
                "Discount on gym merchandise",
                "Access to swimming pool"
            ],
            "description": "Perfect for serious gym-goers seeking extra benefits."
        },
        {
            "id": 4,
            "name": "VIP Plan",
            "price": 100,
            "currency": "USD",
            "features": [
                "Access to gym equipment",
                "Free Wi-Fi",
                "Unlimited personal training sessions",
                "Access to sauna, steam room, and jacuzzi",
                "Nutrition consultation and meal planning",
                "Unlimited guest passes",
                "Private locker"
            ],
            "description": "The ultimate plan for those wanting a premium experience."
        }
    ];
    
    
    return (
        <div className="m-12">
            <h2 className="text-5xl mb-5 text-center font-bold">Best Prices in the Town</h2>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {priceOptions.map(option => <PriceOption key={option.id} option={option} ></PriceOption> )} 
            </div>
        </div>
    );
};

export default PriceOptions;
