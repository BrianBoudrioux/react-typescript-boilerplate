import apprenantService from './apprenant';
import formateurService from './formateur';
import promoService from './promo';
import reservationService from './reservation';
import salleService from './salle';
import { user } from '../store/actions/user.action';

import api from './api';

const signIn = async (user: Omit<user, "accessToken">): Promise<user> => {
    return await api.post('/admin/auth', user);
}

export {signIn, apprenantService, formateurService, promoService, reservationService, salleService};