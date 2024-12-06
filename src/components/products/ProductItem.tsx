import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
    return (
        <article>
            <div>
                <img src={product.image} alt="" />
            </div>
            <div>
                <div>
                    <h3>{product.name}</h3>
                    <h4>{product.description}</h4>
                </div>
                <div>
                    <p>
                        <Link>{product.price}</Link>
                    </p>
                </div>
            </div>
        </article>
    )
}
