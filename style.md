## Style Guide  


Routes should have a leading ``/`` before the path.
````js
Router.go('/path/to/destination')
````


## Refactor Guide  
Convert href links to buttons.

````html
<!-- before -->
<a id="fooLink" href="http://www.foo.com">Foo</a>

<!-- after -->
<button id="fooBtn" onClick="Router.go('http://www.foo.com')">Foo</button>
````
