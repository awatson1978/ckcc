## active-user-demo

An ActiveRecord reference implementation using Meteor, AutoForms, and aiming for a Day Made of Glass user interface. Part of the Glass UI subproject of the Clinical Meteor Track.

=========================
#### Installation  
The ActiveRecord package is a meta-package comprised of a number of sub-packages.  The easiest way to install it is to:

````sh
  meteor add glass:active-record
````

=========================
#### Configure The Schema

Once installed, you'll need to configure a schema. Add the following to a file in the /lib directory, and it should generate the rest of the ActiveRecord pattern.

````js
Posts = new Meteor.Collection('posts');

PostsSchema = new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  url: {
    type: String,
    label: "Web Address - http://www.widget.com"
  },
  imageUrl: {
    type: String,
    label: "Image Url - http://www.widget.com/cog.jpg"
  },
  description: {
    type: String,
    label: "Description"
  }
});
Posts.attachSchema(PostsSchema);
````

=========================
#### Advanced Installation

As mentioned above, ActiveRecord is a meta-package, and comprised of many sub-packages. If you want to create custom cards, and make modifications, it's recommended to install the individuals packages.

````sh
meteor add glass:ui-styling
meteor add glass:active-record-core
meteor add glass:active-record-new
meteor add glass:active-record-edit
meteor add glass:active-record-preview
meteor add glass:active-record-list
meteor add glass:active-record-table
meteor add glass:active-record-imagegrid
meteor add glass:active-record-header
meteor add glass:active-record-footer
````

=========================
#### Install ActiveForm

Install the ActiveForm pattern with the folowing packges:

````
# turn-key installation
meteor add glass:active-form

# simple-schema based pattern
meteor add glass:ui-styling
meteor add glass:active-record-core
meteor add glass:active-form-upsert
meteor add glass:active-table
````

=========================
#### Install ActiveForm

Download the reference app, fork the repository, and tinker with the underlying packages.

````
git clone http://github.com/awatson1978/active-record-demo
cd active-record-demo
meteor
````

=========================
#### Licensing  

Code is MIT.  Use as you will.
Corning Day Made of Glass video is copyright Corning; all rights reserved.
