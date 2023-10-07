import { Link } from "react-router-dom";

const OurService = ({ services }) => {
    const { image_url, short_description, price, name, id } = services || {};
    return (
        <div>

            <div>
                <div className=" card card-compact bg-base-100 shadow-xl rounded-lg">
                    <figure><img src={image_url} alt="service img" className="w-full h-[300px]" /></figure>
                    <div className="card-body">
                        <h2 className="card-title font-bold">{name}</h2>
                        <p>{short_description}</p>
                        <p className="text-lg font-semibold">Price : {price} $</p>
                        <div className="card-actions justify-end">
                            <Link to={`/services/${id}`}>
                                <button className="btn btn-error">Show Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurService;