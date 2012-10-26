#!/bin/env node
var path = process.env.OPENSHIFT_HOMEDIR + process.env.OPENSHIFT_REPO_DIR + 'node_modules/ethercalc'

// needed until https://github.com/audreyt/ethercalc/pull/17 is merged
process.env.PORT = process.env.OPENSHIFT_INTERNAL_PORT
process.env.VCAP_APP_HOST = process.env.OPENSHIFT_INTERNAL_IP 

require(path + '/app');

