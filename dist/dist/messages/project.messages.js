"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const actions = {
    get: 'project:get',
    getAll: 'project:getAll',
    create: 'project:create',
    join: 'project:join',
    leave: 'project:leave',
};
const events = {
    created: 'project:created',
    joined: 'project:joined',
    left: 'project:left',
};
exports.projectMessages = {
    actions,
    events,
};
//# sourceMappingURL=project.messages.js.map