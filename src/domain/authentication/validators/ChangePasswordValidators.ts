import * as yup from 'yup';

export default yup.object().shape({
    old_password: yup.string().email().required(),
    password: yup.string().required(),
    confirmation_password: yup.string().required(),
});