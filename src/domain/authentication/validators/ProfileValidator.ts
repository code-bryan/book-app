import * as yup from 'yup';

export default yup.object().shape({
    name: yup.string().required(),
    lastname: yup.string().required(),
    email: yup.string().email().required(),
});