# Website Starter Files

Starter files for a new website project

## Directory Structure

src - source files
dist - build/distribution files

images - source images

styles - css, scss files

scripts - javascript files

views - html files

lib - 3rd party/vendor scripts and styles, under respective directories

# CSS Guidelines

## Tools/Defaults

* Sass, SCSS syntax
* Autoprefixer for vendor prefixes but, if we can't use, keep them to a minimum referencing caniuse.com for the latest
* Gulp for concatenation and minification
* Using Ruby Sass currently for the latest features. Switch to Libsass when feature parity is available

## Architectural Considerations

* Keep specificity as low as possible. Write in specificity order - from general to specific, low specificity to high specificity, global to localized.
* Abstract common patterns when possible into reusable structures (loosely OOCSS based)

### Create a foundational structure but not so rigid that it can't adapt to the needs of a particular project 

* Settings - variables, conditionals, functions, and mixins [only if using a preprocessor]
* Base - normalize/reset, universals such as box-sizing, type selectors
* Layout - wrappers, grids, generic containers, header, footer, main content
* Objects - structural patterns, no visual design (e.g. media object)
* Components - UI components
* Utilities - helpers & states

## Authoring Rules & Considerations

* 1 property per line; single property selectors on one line
* Don't use vendor prefixes in authored stylesheets. Use a mixin or autoprefixer
* Always use quotes, even when they're optional (double quotes)
* If using a preprocessor, put media queries with (below) their rulesets rather than in a separate file. If not using a preprocessor, put them in separate files
* If a selector will work without it being nested, don't nest it. Nesting child selectors (>) and psuedo-selectors/elements (:) is always OK. Never more than 3-deep.
* Avoid chaining selectors when possible to keep specificity low
* Avoid location-specific selectors (e.g. .sidebar .sub-nav)
* If you need to style an id, use an attribute selector [id="header"], now it has the same specificity as a class
* Use js- prefixed classes (or data attributes like data-js="something") for JavaScript hooks. Don't ever style these.
* Separate compound class names with hyphens, all lowercase
* Include both the base class and modifier class on an element - extend base rather than duplicating properties for variations of a class (e.g. class="btn btn-primary")
* Do not use IDs unless absolutely necessary (e.g. form elements, aria attribute targets)
* Don't use qualified selectors (e.g. input.btn). Use .btn for portability (can use on input, button, a, etc).
* When naming components with JS dependencies, add a data attribute "data-component", e.g. data-component="gallery". The component name can then be easily referenced in the JS
* !important is OK when used with intent rather than to fix a specificity issue (e.g. helpers/states where you would only apply the class when you're absolutely sure you want its properties)
* Don't add a class to absolutely everything you need to style. Example - for lists, don't add a class to each list item. Instead, class the ul/ol and use a child selector (e.g. .list-vertical > li rather than .list-vertical .list-item) 
* Use SCSS syntax when writing Sass
* Use box-sizing: border-box
* Use rems and px for fonts, em for margins, padding, media queries
* Don't put a unit on line-height (e.g. use line-height: 1.5 rather than line-height: 1.5%)
* Image filenames should match class naming and indicate their purpose, e.g. icon-twitter.png, bg-hero-home.jpg
* hex values should be lowercase (#fff rather than #FFF)
* Name objects and components from generic to specific (e.g. list-vertical, list-inline vs vertical-list, inline-list; .nav, .nav-primary, .nav-secondary )
* All components should be namespaced
* Use a separate Sass partial for each object and component (e.g. _objectname.scss, _componentname.scss)
* Don't use vendor mixin libraries (Compass, etc), it's an unnecessary dependency and you likely only need a handful of what they provide anyway. Instead write your own or extract what you need.
* Never qualify your class selectors with the element type (e.g. div.my-class) 
* Media Queries order from small to large, we use a mobile-first approach unless the client/project requires otherwise 
* Group related classes in markup (e.g. class="panel panel-large bio" rather than class="panel bio panel-large")
* For "state" selectors, prefix them with ".is-" (e.g. .is-open, .is-active)
* Prefix subcomponents with the component's class name (e.g. .module, .module-body is a subcomponent of module)