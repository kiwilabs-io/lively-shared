"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions = {
    create: 'tenant:create',
    get: 'tenant:get',
    getAll: 'tenant:getAll',
    updateConfig: 'tenant-config:update',
    join: 'tenant:join',
    leave: 'tenant:leave',
    update: 'tenant:update',
};
const events = {
    updated: 'tenant:updated',
    updatedConfig: 'tenant-config:updated',
    joined: 'tenant:joined',
};
exports.tenantMessages = {
    actions,
    events,
};
//# sourceMappingURL=tenant.messages.js.map