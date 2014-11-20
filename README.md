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

Keep specificity as low as possible. Write in specificity order - from general to specific, low specificity to high specificity, global to localized.

Abstract common patterns when possible into reusable structures (loosely OOCSS based)

* Settings - variables and configuration switches 
* Tools - mixins and functions
* Generic - normalize/reset, other global rules such as box-sizing (could be part of Base)
* Base - type selectors
* Objects - structural patterns, no visual design (e.g. media object)
* Components - UI components, visual
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

* Style classes, rather than id's. If an id must be styled, use an attribute selector: [id="identifier"]

* RULE: 1 property per line, 1 prop selectors all 1 line
* RULE: Related selectors on 1 line (.foo, .foo-bar)
* RULE: Don't use vendor prefixes in authored stylesheets. Use a mixin or autoprefixer
* RULE: always use quotes, even when they're optional, double quotes
* RULE: If using a preprocessor, put media queries with (below) their rulesets rather than in a separate file. If not using a preprocessor, put them in separate files
* RULE: If a selector will work without it being nested, don't nest it. Nesting child selectors (>) and psuedo-selectors/elements (:) is always OK. Never more than 3-deep.
* RULE: Avoid chaining selectors when possible to keep specificity low
* RULE: Avoid location-specific selectors (e.g. .sidebar .sub-nav)
* RULE: if you need to style an id, use an attribute selector [id="header"], now it has the same specificity as a class
* RULE: Use js- prefixed classes (or data attributes like date-js="something" - need to review data-attribute spec) for JavaScript hooks. Don't ever style these
* RULE: Separate compound class names with hyphens, all lowercase
* RULE: use .class .unrelated-class to select unrelated classes used in conjunction (e.g. if you NEED a case where something exists inside something else)
* RULE: group related classes in markup (e.g. class="panel panel-large bio" rather than class="panel bio panel-large")
* RULE: Include both the base class and modifier class on an element - extend base rather than duplicating properties for variations of a class (e.g. class="btn btn-primary")
* RULE: Do not use IDs unless absolutely necessary (e.g. form elements, aria attribute targets)
* RULE: Don't use qualified selectors (e.g. input.btn). Use .btn for portability (can use on input, button, a, etc).
* RULE: When naming components with JS dependencies, add a data attribute "data-component", e.g. data-component="gallery". The component name can then be easily referenced in the JS
* RULE: !important is OK when used with intent rather than to fix a specificity issue (e.g. helpers/states where you would only apply the class when you're absolutely sure you want its properties)
* RULE: Don't add a class to absolutely everything you need to style. Example - for lists, don't add a class to each list item. Instead, class the ul/ol and use a child selector (e.g. .list-vertical > li rather than .list-vertical .list-item) 
* RULE: For "state" selectors, prefix them with ".is-" (e.g. .is-open, .is-active)
* RULE: Prefix subcomponents with the component's class name (e.g. .module, .module-body is a subcomponent of module)
* RULE: Use SCSS syntax when writing Sass
* RULE: Use box-sizing: border-box
* RULE: Use rems and px for fonts, em for typography bottom margins and media queries
* RULE: Don't put a unit on line-height
* RULE: Image filenames should match class naming and indicate their purpose, e.g. icon-twitter.png, bg-hero-home.jpg
* RULE: hex values should be lowercase (#fff rather than #FFF)
* RULE: name objects and components from generic to specific (e.g. list-vertical, list-inline vs vertical-list, inline-list; .nav, .nav-primary, .nav-secondary )
* RULE: All components should be namespaced
* RULE: Use a separate Sass partial for each object and component (e.g. _objectname.scss, _componentname.scss)
* RULE: Don't use vendor mixin libraries (Compass, etc), it's an unnecessary dependency and you likely only need a handful of what they provide anyway. Instead write your own or extract what you need.
* RULE: Never qualify your class selectors with the element type (e.g. div.my-class) 
* RULE: Media Queries order from small to large, we use a mobile-first approach unless the client/project requires otherwise 

## Format & Style

### Selectors

### Comments

* RULE: /** */ comment style for long comments
* RULE: /*---------*\ #SECTON-TITLE \*----------*/
* RULE: If using a preprocessor, use // for comments you do not want to include in the compiled files

## Considerations

* CONSIDER: chaining a class with itself to increase specificity if needed (e.g. .module.module) rather than nesting which also introduces location dependence
* CONSIDER: Modifying rules at the base levels will affect things further the layers, so extend rather than modifying unless a global change is necessary. Existing classes should be backward compatible

## TODO

* TODO: Pull in rules from our existing CSS standards
* TODO: Create Sass rules for mixins, extends, placeholders (should we even use extends, placeholders, and nesting?)
* TODO: Create folder structure for our own and vendor components
* TODO: Create rules/variables for z-index scale (see medium's css post)
* TODO: Create rules for naming media queries in Sass
* TODO: Create rules for no-js styling
* TODO: Rules/process for IE<9 in responsive/mobile-first sites
* TODO: Decide about linting and which rules to apply
* TODO: RULE(s) for variable naming...
* TODO: RULE for modifier and subcomponent (self-contained components/modules) naming
* TODO: Think about how to bundle our styles - 1 file, multiple? Try for 3 or fewer css references per page (all, section, page)
* TODO: Decide on icon approach - svg, png fallback, and tools to enable that process
* TODO: Variable naming conventions ($type-small or $fontsize-small vs $font-small, etc, colors, ...) CSS variable semantics: [property]-[value]--[component] (e.g. $color-gray-light)
* TODO: Consider prefixing helpers/utility with u-, and mixins with m-
* TODO: Consider whether component isolation may be a better approach than abstracting reusable objects. Maybe objects should be a very limited set of single responsibility classes/modules (e.g. pipe list)
* TODO: determine if we'll use libsass or ruby-sass
* TODO: determine if we'll use any package management tools like Bower