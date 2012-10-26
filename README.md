EtherCalc on OpenShift
======================

This git repository helps you get up and running quickly w/ a EtherCalc installation
on OpenShift. There is no Redis support in opensift for now, so this will fallback on
using disk based json data. I am not sure this will survive a reboot.
 
Running on OpenShift
----------------------------

Create an account at http://openshift.redhat.com/

Create a nodejs-0.6 application (you can call your application whatever you want)

    rhc app create -a ethercalc -t nodejs-0.6

Add this upstream ethercalc repo

    cd ethercalc
    git remote add upstream -m master git://github.com/mscherer/ethercalc-openshift.git
    git pull -s recursive -X theirs upstream master
    # note that the git pull above can be used later to pull updates to Ethercalc
    
Then push the repo upstream

    git push

That's it, you can now checkout your application at :

    http://ethercalc-$yournamespace.rhcloud.com


