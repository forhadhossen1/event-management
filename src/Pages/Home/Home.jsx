
import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/banner1.jpg'
import OurService from '../../Components/OurService';
const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <div className="hero min-h-[92vh]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">We create <br />You <br /> Celebrate</h1>
                        <p className="mb-5">Planning a Wedding, Proposal, or Event in our busy city is not so easy.</p>

                    </div>
                </div>
            </div>
            <div className='md:container md:mx-auto'>
                <h2 className="text-5xl font-semibold text-center py-16">Our Service</h2>
                <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3'>
                    {
                        services.map(service => <OurService key={service.id} services={service}></OurService>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;