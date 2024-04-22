"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateblogInput = exports.createblogInput = exports.signinInput = exports.signupInput = void 0;
const zod_1 = require("zod");
exports.signupInput = zod_1.z.object({
    username: (0, zod_1.string)().email(),
    password: (0, zod_1.string)().min(6),
    name: (0, zod_1.string)().optional(),
});
exports.signinInput = zod_1.z.object({
    username: (0, zod_1.string)().email(),
    password: (0, zod_1.string)().min(6),
});
exports.createblogInput = zod_1.z.object({
    title: (0, zod_1.string)(),
    content: (0, zod_1.string)(),
});
exports.updateblogInput = zod_1.z.object({
    title: (0, zod_1.string)(),
    content: (0, zod_1.string)(),
    id: zod_1.z.number(),
});
