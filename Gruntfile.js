'use strict';

const _ = require('lodash');
const glob = require('glob');
const path = require('path');

const GRUNT_CONFIG_DIR = path.join(process.cwd(), 'grunt/config');
const GRUNT_TASK_DIR = path.join(process.cwd(), 'grunt/task');

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);

	//
	// Load external configuration files
	//
	require('load-grunt-config')(grunt, {
		configPath: GRUNT_CONFIG_DIR,
		data: {
			pkg: grunt.file.readJSON('package.json')
		}
	});

	//
	// Load external task defintions
	//
	var tasks = glob.sync(GRUNT_TASK_DIR + '/**/*.js');
	_.forEach(tasks, function (filename) {
		require(filename)(grunt);
	});
};
