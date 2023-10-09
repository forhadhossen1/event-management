
import { useLoaderData } from 'react-router-dom';
import bannerImg from '../../assets/banner1.jpg'
import OurService from '../../Components/OurService';
import Gallery from '../../Components/Gallery';
import OurInfo from '../../Components/OurInfo';
import Footer from '../../Components/Footer';
import Clients from '../../Components/Clients';
const Home = () => {

    const services = useLoaderData()

    return (
        <div>
            <div className="hero min-h-[92vh]" style={{ backgroundImage: `url(${bannerImg})` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md" data-aos="fade-up"
                        data-aos-duration="3000" >
                        <h1 className="mb-5 text-5xl font-bold text-black">We create <br />You <br /> Celebrate</h1>
                        <p className="mb-5">Planning a Wedding, Proposal, or Event in our busy city is not so easy.</p>

                    </div>
                </div>
            </div>

            <div className='bg-slate-200'>
                <div className='md:max-w-5xl md:mx-auto'>
                    <h2 className="text-5xl font-semibold text-center pt-16">Our <span className='text-orange-700'> Service</span></h2>
                    <h2 className="font-semibold text-center py-5">If you want, you can find your favorite event from here and contact us</h2>
                    <div className='gap-5 grid md:grid-cols-2 lg:grid-cols-3'>
                        {
                            services.map(service => <OurService key={service.id} services={service}></OurService>)
                        }
                    </div>
                </div>
            </div>

            <Gallery></Gallery>
            <OurInfo></OurInfo>
            <Clients></Clients>
            <Footer></Footer>
        </div>
    );
};

export default Home;