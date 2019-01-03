"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MAX_NAME_LENGTH = 50;
exports.tenantValidation = {
    name: {
        error: 'Name can only contain letters',
        validate: (name) => name && name.trim() && /^[A-Z]+$/i.test(name) && name.length <= 50,
    }
};
//# sourceMappingURL=tenant.validation.js.map