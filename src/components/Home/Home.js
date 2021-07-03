import {useEffect} from "react";
import { getProduct } from '../App.action'
import {connect} from "react-redux";

const Home = ({fetchProduct, product}) => {

    useEffect(() => {
        fetchProduct()
    },[], {})

    return (
        <div class="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <div className="col">
                    <div className="card shadow-sm">
                        <svg className="bd-placeholder-img card-img-top" width="100%" height="225" role="img" aria-label="Placeholder"
                             preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c"></rect>
                            <text x="50%" y="50%" fill="#eceeef" dy=".3em"></text>
                        </svg>

                        <div className="card-body">
                            <p className="card-text"></p>
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="btn-group">
                                    <button type="button" className="btn btn-sm btn-outline-secondary">A1</button>
                                    <button type="button" className="btn btn-sm btn-outline-secondary">A2</button>
                                </div>
                                <small className="text-muted">{product.toString()}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({ product: state.product })
const mapDispatchToProps = { fetchProduct : getProduct  }
const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer;