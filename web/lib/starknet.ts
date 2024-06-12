import { Provider, Contract } from 'starknet';

const provider = new Provider({ baseUrl: 'https://alpha4.starknet.io' });

//TODO: Reemplaza con la dirección de tu contrato, se puede obtener en starkscan.co
const contractAddress = 'DIRECCIÓN_DEL_CONTRATO_DESPLEGADO'; 

//TODO: Asegúrate de proporcionar la ruta correcta al ABI, debo hacer build
const abi = require('../../target/release/pokemonstarknetdnft.json');  

const contract = new Contract(abi, contractAddress, provider);

export default contract;