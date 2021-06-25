import {client} from "../actions";

const getAll = () => {
    return client.get("/products");
};

const get = id => {
    return client.get(`/products/${id}`);
};

const create = data => {
    return client.post("/products", data);
};

const update = (id, data) => {
    return client.put(`/products/${id}`, data);
};

const remove = id => {
    return client.delete(`/products/${id}`);
};

const removeAll = () => {
    return client.delete(`/products`);
};

const findByTitle = title => {
    return client.get(`/products?title=${title}`);
};

const ProductService = {
    getAll,
    get,
    create,
    update,
    remove,
    removeAll,
    findByTitle
};

export default ProductService;