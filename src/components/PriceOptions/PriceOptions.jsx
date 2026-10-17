import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "PowerFit Gym",
            "category": "Premium",
            "price": 2500,
            "duration": "1 Month",
            "rating": 4.8,
            "location": "Dhanmondi, Dhaka",
            "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
            "features": [
                "Personal Trainer",
                "Modern Equipment",
                "Locker Room",
                "Free Wi-Fi"
            ],
            "facilities": ["Cardio", "Weightlifting", "Sauna"],
            "specialOffer": "20% off for new members",
            "openHours": "6:00 AM - 11:00 PM",
            "available": true
        },
        {
            "id": 2,
            "name": "FitZone Fitness Club",
            "category": "Standard",
            "price": 1500,
            "duration": "1 Month",
            "rating": 4.5,
            "location": "Mirpur, Dhaka",
            "image": "https://images.unsplash.com/photo-1534258936925-c58bed479fcb",
            "features": [
                "Group Workout",
                "Certified Trainers",
                "Changing Room"
            ],
            "facilities": ["Cardio", "Weightlifting", "Yoga"],
            "specialOffer": "Free fitness assessment",
            "openHours": "6:00 AM - 10:00 PM",
            "available": true
        },
        {
            "id": 3,
            "name": "Iron Paradise",
            "category": "Professional",
            "price": 3500,
            "duration": "1 Month",
            "rating": 4.9,
            "location": "Gulshan, Dhaka",
            "image": "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
            "features": [
                "One-to-One Coaching",
                "Nutrition Planning",
                "Premium Equipment",
                "Body Composition Analysis"
            ],
            "facilities": ["Powerlifting", "CrossFit", "Cardio", "Recovery Zone"],
            "specialOffer": "Free nutrition consultation",
            "openHours": "5:00 AM - 12:00 AM",
            "available": true
        },
        {
            "id": 4,
            "name": "Flex Fitness Studio",
            "category": "Basic",
            "price": 1000,
            "duration": "1 Month",
            "rating": 4.2,
            "location": "Uttara, Dhaka",
            "image": "https://images.unsplash.com/photo-1571902943202-507ec2618e8f",
            "features": [
                "Beginner Training",
                "Basic Equipment",
                "Flexible Membership"
            ],
            "facilities": ["Cardio", "Free Weights", "Stretching Area"],
            "specialOffer": "No joining fee",
            "openHours": "7:00 AM - 10:00 PM",
            "available": true
        },
        {
            "id": 5,
            "name": "Elite Athlete Club",
            "category": "Luxury",
            "price": 5000,
            "duration": "1 Month",
            "rating": 4.9,
            "location": "Banani, Dhaka",
            "image": "https://images.unsplash.com/photo-1534367610401-9f5ed68180aa",
            "features": [
                "Personal Trainer",
                "Swimming Pool",
                "Nutrition Plan",
                "Steam Bath",
                "Member Lounge"
            ],
            "facilities": ["Swimming", "Cardio", "Weightlifting", "Yoga"],
            "specialOffer": "Free gym bag with annual membership",
            "openHours": "5:00 AM - 11:30 PM",
            "available": true
        },
        {
            "id": 6,
            "name": "Urban Strength Gym",
            "category": "Standard",
            "price": 1800,
            "duration": "1 Month",
            "rating": 4.6,
            "location": "Mohammadpur, Dhaka",
            "image": "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
            "features": [
                "Group Classes",
                "Strength Coaching",
                "Digital Workout Tracking"
            ],
            "facilities": ["Weightlifting", "HIIT", "Cardio"],
            "specialOffer": "Bring a friend for free on weekends",
            "openHours": "6:00 AM - 10:30 PM",
            "available": true
        }
    ];

    return (
        <div className="p-10 text-center ">
            <h2 className="text-4xl mb-10">Best Price In Town</h2>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    )
}

export default PriceOptions;