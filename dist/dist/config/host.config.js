"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_config_1 = require("./env.config");
if (env_config_1.isProduction)
    throw new Error('No production host URLs configured');
exports.webBaseUrl = 'localhost:3000';
exports.apiBaseUrl = 'http://localhost:1337';
//# sourceMappingURL=host.config.js.map