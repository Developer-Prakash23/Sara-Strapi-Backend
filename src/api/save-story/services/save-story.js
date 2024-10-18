'use strict';

/**
 * save-story service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::save-story.save-story');
