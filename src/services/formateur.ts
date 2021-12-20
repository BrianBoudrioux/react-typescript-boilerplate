import api from './api';

const formateurService = {
    getAll: async () => {
        return await api.get('/formateurs');
    },
    getById: async (id: number) => {
        return await api.get('/formateurs/' + id);
    }
    // other service method
}

export default formateurService;