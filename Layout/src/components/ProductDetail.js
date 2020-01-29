import React, { Component } from "react"
import ProductContents from "./ProductContents"
import axios from "axios"


class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = {
            res: []
        }
    }
    componentDidMount = () => {
        this.getProducts()
    }
    getProducts = async () => {
        const productDetailUrl = `http://127.0.0.1:3002/Product/Detail/${this.props.productID}`
        const res = await axios.get(productDetailUrl)
        this.setState({ res: res.data })
    }
    render() {
        return (
            <>
                <ProductContents data={this.state.res} />
            </>
        )
    }
}

export default ProductDetail;