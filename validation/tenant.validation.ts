const MAX_NAME_LENGTH = 50;

export const tenantValidation = {
    name: {
        error: 'Name can only contain letters',
        validate: (name) => name && name.trim() && /^[A-Z]+$/i.test(name) && name.length <= 50,
    }
}