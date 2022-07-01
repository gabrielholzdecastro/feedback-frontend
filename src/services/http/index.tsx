import axios from "axios";

export async function getPessoa() {
    if (await axios.get('http://localhost:4000/pessoas'))
        return await axios.get('http://localhost:4000/pessoas');
    else
        return null;
}

export async function getSetor() {
    if (await axios.get('http://localhost:4000/setores'))
        return await axios.get('http://localhost:4000/setores');
    else
        return null;
}

export async function getFeedback() {
    if (await axios.get('http://localhost:4000/feedbacks'))
        return await axios.get('http://localhost:4000/feedbacks');
    else
        return null;
}