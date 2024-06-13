import { connect } from 'starknet';

export const connectWallet = async () => {
    try {
        const { account, starknet } = await connect({ modalMode: 'fullscreen' });
        if (account) {
            return { account, starknet };
        } else {
            throw new Error('Failed to connect to ArgentX');
        }
    } catch (error) {
        console.error('Error connecting to ArgentX:', error);
        return null;
    }
};