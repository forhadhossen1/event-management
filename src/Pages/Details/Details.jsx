import { useLoaderData, useParams } from "react-router-dom";

const Details = () => {

    const services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const service = services.find(service => service.id === idInt);
    return (
        <div className="bg-slate-300">
            <h2 className="text-3xl font-bold text-center py-10">{service.name} Details</h2>
            <div className="card md:max-w-5xl md:mx-auto bg-base-100">
                <figure className="px-10 pt-10">
                    <img src={service.image_url} alt="service image" className="rounded-lg h-[400px] w-full" />
                </figure>
                <div className="card-body  text-center">
                    <h2 className="card-title text-2xl font-bold">{service.name}</h2>
                    <p className="text-xl font-bold text-start">Price : {service.price} $</p>
                    <p className="text-start">{service.long_description}</p>
                    <div className="card-actions flex justify-center">
                        <button className="btn btn-primary">Contact Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;