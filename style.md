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

## Schema Conventions
- no fields named 'id'


## Naming Conventions
- no variable names less then 5 characters long
- variables names should be more than 7 characters, preferably
- use camelCase
- feel free to variations on Suffix Apps Hungarian notation (http://www.joelonsoftware.com/articles/Wrong.html)
- 
