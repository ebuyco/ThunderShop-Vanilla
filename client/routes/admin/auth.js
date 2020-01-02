const express = require('express');

const { handleErrors } = require('./middlewares');
const usersRepo = require('../../configs/users');
const signupTemplate = require('../../views/admin/auth/signup');
const siginTemplate = require('../../views/admin/auth/signin');

const { requireEmail , requirePassword, requirePasswordConfirmation,
        requireEmailExists, requireValidPasswordForUser
} = require('./validation');


