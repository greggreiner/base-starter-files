# build-script-gulp

testing build scripts and directory structures

## Directory Structure

src - source files
dist - build/distribution files

images - source images

styles - css, scss, less files

scripts - javascript files

views - html files

vendor - 3rd party scripts and styles, under respective directories

# CSS Guidelines

## Tools/Defaults

* Sass, SCSS syntax
* Normalize.css for our css reset
* Autoprefixer for vendor prefixes but, if we can't use, keep them to a minimum referencing caniuse.com for the latest
* Gulp for concatenation and minification
* Sourcemaps - coming soon...

## Architectural Considerations

xKeep specificity as low as possible. Write in specificity order - from general to specific, low specificity to high specificity, global to localized.

Abstract common patterns when possible into reusable structures (loosely OOCSS based)

Create a foundational structure but not so rigid that it can't adapt to the needs of a particular project 

* Settings - variables and configuration switches 
* Tools - mixins and functions
* Generic - normalize/reset, other global rules such as box-sizing (could be part of Base)
* Base - type selectors
* Objects - structural patterns, no visual design (e.g. media object)
* Components - UI components, visual (e.g. )
* Helpers - helpers, utilities, states

Settings and Tools are only needed if we're using a preprocessor, otherwise Generic/Base is the starting point.

SMACSS approach:

* Base - normalize/reset and type selectors
* Layout - header, footer, grids, sidebars, wrappers (major content containers, hold pieces of content together)
* Module - content blocks, patterns, components
* State - variations with a JavaScript dependency (is-open, is-closed, is-hidden, ...)
* Theme - user-configurable items

Settings and tools are included only when using a preprocessor

## Authoring Rules & Considerations

* xRULE: 1 property per line, 1 prop selectors all 1 line
* xRULE: Don't use vendor prefixes in authored stylesheets. Use a mixin or autoprefixer
* xRULE: always use quotes, even when they're optional, double quotes
* xRULE: If using a preprocessor, put media queries with (below) their rulesets rather than in a separate file. If not using a preprocessor, put them in separate files
* xRULE: If a selector will work without it being nested, don't nest it. Nesting child selectors (>) and psuedo-selectors/elements (:) is always OK. Never more than 3-deep.
* xRULE: Avoid chaining selectors when possible to keep specificity low
* xRULE: Avoid location-specific selectors (e.g. .sidebar .sub-nav)
* xRULE: if you need to style an id, use an attribute selector [id="header"], now it has the same specificity as a class
* xRULE: Use js- prefixed classes (or data attributes like date-js="something" - need to review data-attribute spec) for JavaScript hooks. Don't ever style these
* xRULE: Separate compound class names with hyphens, all lowercase
* xRULE: use .class .unrelated-class to select unrelated classes used in conjunction (e.g. if you NEED a case where something exists inside something else)
* xRULE: Include both the base class and modifier class on an element - extend base rather than duplicating properties for variations of a class (e.g. class="btn btn-primary")
* xRULE: Do not use IDs unless absolutely necessary (e.g. form elements, aria attribute targets)
* xRULE: Don't use qualified selectors (e.g. input.btn). Use .btn for portability (can use on input, button, a, etc).
* xRULE: When naming components with JS dependencies, add a data attribute "data-component", e.g. data-component="gallery". The component name can then be easily referenced in the JS
* xRULE: !important is OK when used with intent rather than to fix a specificity issue (e.g. helpers/states where you would only apply the class when you're absolutely sure you want its properties)
* xRULE: Don't add a class to absolutely everything you need to style. Example - for lists, don't add a class to each list item. Instead, class the ul/ol and use a child selector (e.g. .list-vertical > li rather than .list-vertical .list-item) 
* xRULE: Use SCSS syntax when writing Sass
* xRULE: Use box-sizing: border-box
* xRULE: Use rems and px for fonts, em for typography bottom margins and media queries
* xRULE: Don't put a unit on line-height (e.g. use line-height: 1.5 rather than line-height: 1.5%)
* xRULE: Image filenames should match class naming and indicate their purpose, e.g. icon-twitter.png, bg-hero-home.jpg
* xRULE: hex values should be lowercase (#fff rather than #FFF)
* xRULE: name objects and components from generic to specific (e.g. list-vertical, list-inline vs vertical-list, inline-list; .nav, .nav-primary, .nav-secondary )
* xRULE: All components should be namespaced
* xRULE: Use a separate Sass partial for each object and component (e.g. _objectname.scss, _componentname.scss)
* xRULE: Don't use vendor mixin libraries (Compass, etc), it's an unnecessary dependency and you likely only need a handful of what they provide anyway. Instead write your own or extract what you need.
* xRULE: Never qualify your class selectors with the element type (e.g. div.my-class) 
* xRULE: Media Queries order from small to large, we use a mobile-first approach unless the client/project requires otherwise 
* [HTML]RULE: group related classes in markup (e.g. class="panel panel-large bio" rather than class="panel bio panel-large")
* xRULE: For "state" selectors, prefix them with ".is-" (e.g. .is-open, .is-active)
* RULE: Prefix subcomponents with the component's class name (e.g. .module, .module-body is a subcomponent of module)

## Format & Style

### Selectors

### Comments

* xRULE: /** */ comment style for long comments
* xRULE: /*---------*\ #SECTON-TITLE \*----------*/
* xRULE: If using a preprocessor, use // for comments you do not want to include in the compiled files

## Considerations

* CONSIDER: chaining a class with itself to increase specificity if needed (e.g. .module.module) rather than nesting which also introduces location dependence
* CONSIDER: Modifying rules at the base levels will affect things further the layers, so extend rather than modifying unless a global change is necessary. Existing classes should be backward compatible

## TODO

* TODO: Create folder structure for our own and vendor components
* TODO: Decide on icon approach - svg, png fallback, and tools to enable that process
* TODO: determine if we'll use libsass or ruby-sass
* TODO: determine if we'll use any package management tools like Bower
