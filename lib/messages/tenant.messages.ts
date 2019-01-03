const actions = {
    create: 'tenant:create',
    get: 'tenant:get',
    getAll: 'tenant:getAll',
    updateConfig: 'tenant-config:update',
    join: 'tenant:join',
    leave: 'tenant:leave',
    update: 'tenant:update',
}

const events = {
    updated: 'tenant:updated',
    updatedConfig: 'tenant-config:updated',
    joined: 'tenant:joined',
}

export const tenantMessages = {
    actions,
    events,
}