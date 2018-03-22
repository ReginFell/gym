export const validate = values => {
    const errors = {};
    if (!values.text) {
        errors.text = 'Поле обязательно для заполнения!';
    } else if (values.text.length < 6) {
        errors.text = 'Текст должен быть не менее 15 символов!'
    }
    return errors
};