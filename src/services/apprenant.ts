import api from './api';

const apprenantService = {
    getAll: async () => {
        return await api.get('/apprenants');
    },
    getById: async (id: number) => {
        return await api.get('/apprenants/' + id);
    }
    // other service method
}

export default apprenantService;