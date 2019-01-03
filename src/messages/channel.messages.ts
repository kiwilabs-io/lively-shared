const actions = {
    create: 'channel:create',
    join: 'channel:join',
    leave: 'channel:leave',
    getAll: 'channel:getAll',
    get: 'channel:get'
}

const events = {
    created: 'channel:created',
    joined: 'channel:joined',
    left: 'channel:left'
}

export const channelMessages = {
    actions,
    events
}