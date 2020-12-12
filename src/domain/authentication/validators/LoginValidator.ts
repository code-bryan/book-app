import * as yup from 'yup';
import LoginRequest from '../senders/LoginRequest';

export default yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required()
});