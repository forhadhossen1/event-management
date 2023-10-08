import Footer from "../../Components/Footer";


const About = () => {

    const images = [
        "https://i.ibb.co/5nHGQH5/wed6.jpg",
        "https://i.ibb.co/TMFKDyD/parti4.jpg",
        "https://i.ibb.co/DKZkfP2/wed2.jpg",
        "https://i.ibb.co/qdtPqBC/wed3.jpg",
        "https://i.ibb.co/K9BPkHK/wed4.jpg",
        "https://i.ibb.co/VQJPxf9/parti5.jpg",
        "https://i.ibb.co/GJy2sTq/old1.jpg",
        "https://i.ibb.co/y5GTLbf/birthday1.jpg",
        "https://i.ibb.co/H7S24F6/retir2.jpg",
        "https://i.ibb.co/WKqLgzP/parti6.jpg",
        "https://i.ibb.co/HtYjfvH/wed1.jpg",
        "https://i.ibb.co/3CXSHnW/wed5.jpg"
    ];

    return (
        <div className="bg-slate-200">

            <h2 className="text-5xl font-semibold text-center pt-12">About Us</h2>
            <div className=" md:max-w-5xl md:mx-auto items-center pb-12">
                <div>
                    <h3 className="text-2xl font-bold py-6">Who We Are</h3>
                    <p className="text-gray-700 text-lg">
                        It is not so easy to manage an event in this busy city but we manage this event we manage the event according to the clients needs and at a certain rate we manage the event the way the client asks us to manage the event we manage the event in different ways for different events Charge Money We have been conducting various peoples events like time convenience and making their happy time much brighter.
                    </p>
                    <img src="https://i.ibb.co/WWBYH7Y/Rectangle-4284.png" alt="team" className="w-full h-96 my-5" />
                </div>


                <div className="py-12">
                    <div className="card lg:card-side ">
                        <figure><img src="https://i.ibb.co/chFznFh/user2.jpg" alt="Album" className="w-full" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">Manager</h2>
                            <p>Risk management is another vital aspect of a project managerss job. They identify potential issues and develop strategies to mitigate them, keeping projects on track. Budget management is equally critical; they allocate resources efficiently, preventing cost overruns.</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-bold py-6">Our Services</h3>
                    <ul className="list-disc pl-6 text-gray-700 text-lg">
                        <li>Event planning and management</li>
                        <li>Wedding coordination</li>
                        <li>Birthday party organization</li>
                        <li>Holiday event planning</li>
                        <li>Anniversary celebrations</li>
                        <li>Retirement party services</li>
                    </ul>
                </div>


                <div className="lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 sm:grid gap-4">
                    {images.map((imageUrl, index) => (
                        <div key={index} className="relative group">
                            <img
                                src={imageUrl}
                                alt={`Image ${index + 1}`}
                                className="w-full h-[150px] rounded-lg shadow-lg transition-transform transform group-hover:scale-105]"
                            />
                        </div>
                    ))}
                </div>

                <div>
                    <h3 className="text-2xl font-bold py-6">Pricing</h3>
                    <p className="text-gray-700 text-lg">
                        Our pricing varies depending on the type of event and your specific requirements.
                        We offer competitive rates to ensure that your event planning needs are met within
                        your budget. Please contact us for a customized quote.
                    </p>
                </div>

                <div>
                    <h3 className="text-2xl font-bold py-6">Contact Information</h3>
                    <p className="text-gray-700 text-lg">
                        You can reach us at any time for inquiries or to schedule a consultation. Our team
                        is available to assist you with your event planning needs.
                    </p>
                </div>
            </div>
            <Footer></Footer>
        </div>

    );
};

export default About;