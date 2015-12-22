## California Kids Cancer Comparison (CKCC) Demo

Rewrite of the CRFs and Clinical-Trials apps, with a modularized package-based component/microservice architecture.

![Travis Status](https://travis-ci.org/awatson1978/ckcc.svg?branch=multiuser)

=========================
#### Installation  
Copy the application to your computer and run it locally:

````sh
  git clone https://github.com/awatson1978/ckcc
  cd ckcc
  meteor
````


=========================
#### Development

This app uses the starrynight utility for fetching packages and running QA scripts, so you'll need to install that.

````sh
  # or be adventures, and use the starrynight fetch command, which uses the .meteor/repo file
  npm install -g starrynight
````

Next, you'll want to fetch all of the packages in ``.meteor/packages`` directory into ``/packages`` so you can develop on them locally.
````sh
  cd ckcc

  # fetch the latest version of the packages, by parsing the contents of the .meteor/repo file
  starrynight fetch

  # if there are any problems, make sure the submodules are linked correctly
  git submodule foreach git pull origin master

````

When you first run the application, you can initialize the database like so:
````sh
INITIALIZE=true meteor
````


If you're running a local installation of Mongo, and working on inter-app functionality, you may want to specify the ``MONGO_URL``, like so:
````sh
MONGO_URL="mongodb://localhost:27017/MyAppDatabase" meteor
````


=========================
#### Testing  
Copy the application to your computer and run it locally:

````sh
  # run all the acceptance tests with the following
  starrynight run-tests --framework nightwatch

  # if you're working with packages, and can't a test command isn't found
  # you may want to to try regenerating the .meteor/nightwatch.json config file
  starrynight generate --autoconfig
````

=========================
#### Deployment
Be sure to set the ROOT_URL with the appropriate prefix when deploying behind a proxy server.  The tests probably wont run successfully if you specify a ROOT_URL override.  

````sh
ROOT_URL="http://localhost:3000/forms" meteor
````


=========================
#### Licensing  

Code is MIT.  Use as you will.
Corning Day Made of Glass video is copyright Corning; all rights reserved.
