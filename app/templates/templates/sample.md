An h1 header
============

Paragraphs are separated by a blank line.

- 19^th^
- H~2~O

2nd paragraph. *Italic*, **bold**, and `monospace`. Itemized lists
look like:

	* this one
	* that one
	* the other one

Note that --- not considering the asterisk --- the actual text
content starts at 4-columns in.

> Block quotes are
> written like so.
>
> They can span multiple paragraphs,
> if you like.

Use 3 dashes for an em-dash. Use 2 dashes for ranges (ex., "it's all
in chapters 12--14"). Three dots ... will be converted to an ellipsis.
~~Unicode~~, free text is supported. ☺

- [x] @mentions, #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a complete item
- [ ] this is an incomplete item


An h2 header
------------

Here's a numbered list:

 1. first item
 2. second item
 3. third item

Note again how the actual text starts at 4 columns in (4 characters
from the left side). Here's a code sample:

		# Let me re-iterate ...
		for i in 1 .. 10 { do-something(i) }

As you probably guessed, indented 4 spaces. By the way, instead of
indenting the block, you can use delimited blocks, if you like:

~~~
define foobar() {
		print "Welcome to flavor country!";
}
~~~

(which makes copying & pasting easier). You can optionally mark the
delimited block for Pandoc to syntax highlight it:

~~~python
import time
# Quick, count to ten!
for i in range(10):
		# (but not *too* quick)
		time.sleep(0.5)
		print i
~~~



### An h3 header ###

Now a nested list:

 1. First, get these ingredients:

			* carrots
			* celery
			* lentils

 2. Boil some water.

 3. Dump everything in the pot and follow
		this algorithm:

				find wooden spoon
				uncover pot
				stir
				cover pot
				balance wooden spoon precariously on pot handle
				wait 10 minutes
				goto first step (or shut off burner when done)

		Do not bump wooden spoon or it will fall.

Notice again how text always lines up on 4-space indents (including
that last line which continues item 3 above).

Here's a link to [a website](http://foo.bar), to a [local
doc](local-doc.html), and to a [section heading in the current
doc](#an-h2-header). Here's a footnote [^1].

[^1]: Footnote text goes here.

Tables can look like this:


| h1    |    h2   |      h3 |
|:------|:-------:|--------:|
| 100   | [a][1]  | ![b][2] |
| *foo* | **bar** | ~~baz~~ |


size  material      color
----  ------------  ------------
9     leather       brown
10    hemp canvas   natural
11    glass         transparent

Table: Shoes, their sizes, and what they're made of

(The above is the caption for the table.) Pandoc also supports
multi-line tables:

--------  -----------------------
keyword   text
--------  -----------------------
red       Sunsets, apples, and
					other red or reddish
					things.

green     Leaves, grass, frogs
					and other things it's
					not easy being.
--------  -----------------------

A horizontal rule follows.

***

Here's a definition list:

apples
	: Good for making applesauce.
oranges
	: Citrus!
tomatoes
	: There's no "e" in tomatoe.

Again, text is indented 4 spaces. (Put a blank line between each
term/definition pair to spread things out more.)

Here's a "line block":

| Line one
|   Line too
| Line tree

and images can be specified like so:

Inline math equations go in like so: $\omega = d\phi / dt$. Display
math should get its own line and be put in in double-dollarsigns:

$$I = \int \rho R^{2} dV$$

And note that you can backslash-escape any punctuation characters
which you wish to be displayed literally, ex.: \`foo\`, \*bar\*, etc.

# EXC Components

## Text Input Numeric

A wrapper for `Kendo Numeric` component.

### API
| PROPERTY | TYPE | DEFAULT | DESCRIPTION |
| -------- | ---- | ------- | ----------- |
| `Bold` | `bool` | `false` | Display the value of the component with bold styling |
| `Decimals` | `int` || Forwards to the decimals property to `Kendo Numeric` component |
| `Disabled` | `bool` | `false`  | Forwards to the is-disabled property to `Kendo Numeric` component |
| `Format` | `string` | | Forwards to the format property to `Kendo Numeric` component |
| `Label` | `string` | | Enter the display value that will show on the label part of the component |
| `LabelWidth` | `int` | | The value in pixels that will indicate the minimum width of the label part of the component (overrides default) |
| `MinValue` | `int` | | Forwards to the **min-value** property to `Kendo Numeric` component |
| `MaxValue` | `int` | | Forwards to the **max-value** property to `Kendo Numeric` component |
| `PercentageWidth` | `decimal` | | Forwards to the **percentage-width** property to `Kendo Numeric` component |
| `RestrictDecimals` | `bool` | `false `| Forwards to the **restrict-decimals** property to `Kendo Numeric` component |
| `Spinners` | `bool` | `true `| Forwards to the **spinners** property to `Kendo Numeric` component |
| `StepValue` | `decimal` | `true `| Forwards to the **step-value** property to `Kendo Numeric` component |
| `Value` | `int|decimal` | | Forwards to the **value-text** property to `Kendo Numeric` component |
| `Width` | `int` | | Forwards to the **width** property to `Kendo Numeric` component |

| METHOD | TYPE | DEFAULT | DESCRIPTION |
| ------ | ---- | ------- | ----------- |
| `OnChangeCallback` | `function` | `undefined` | Executes the provided function after a change in the value of the dropdown field of the component. *Used for ItemChanged* |

#### Setup - *Import*

``` html
<!-- index.cshtml -->
<text-Input-Numeric argument="argument.TextInputNumeric"></text-Input-Numeric>
```

``` javascript
// index.cshtml

// Import Directive Files
@Scripts.Render(Danaos.Render("/Scripts/EXC/Common/Directives/Core/KendoNumericDirective.js"))
@Scripts.Render(Danaos.Render("/Scripts/EXC/Common/Directives/Core/TextInputDirective.js"))

// Register directives
registerDirective("danaos", 'kendoNumeric');
registerDirective("danaos", 'textInputNumeric');
```

#### Usage - *Example*
``` javascript
argument.TextInputNumeric = {};
argument.TextInputNumeric.Label = "Another brick in the wall";
argument.TextInputNumeric.MinValue = 1980;
argument.TextInputNumeric.MaxValue = 2500;
argument.TextInputNumeric.Value = scope.prefs.MinValueForComponent;
argument.TextInputNumeric.OnChangeCallback = (args) => {
    // Check for custom case
    if (args.NewModel.Value === 800)
        argument.TextInputNumeric.RejectChanges();
    else
        argument.TextInputNumeric.AcceptChanges();
};

```
## IndexedDB and Caching

## mitsos

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

Dillinger is a cloud-enabled, mobile-ready, offline-storage, AngularJS powered HTML5 Markdown editor.

  - Type some Markdown on the left
  - See HTML in the right
  - Magic

# New Features!

  - Import a HTML file and watch it magically convert to Markdown
  - Drag and drop images (requires your Dropbox account be linked)


You can also:
  - Import and save files from GitHub, Dropbox, Google Drive and One Drive
  - Drag and drop markdown and HTML files into Dillinger
  - Export documents as Markdown, HTML and PDF

Markdown is a lightweight markup language based on the formatting conventions that people naturally use in email.  As [John Gruber] writes on the [Markdown site][df1]

> The overriding design goal for Markdown's
> formatting syntax is to make it as readable
> as possible. The idea is that a
> Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

This text you see here is *actually* written in Markdown! To get a feel for Markdown's syntax, type some text into the left window and watch the results in the right.

### Tech

Dillinger uses a number of open source projects to work properly:

* [AngularJS] - HTML enhanced for web apps!
* [Ace Editor] - awesome web-based text editor
* [markdown-it] - Markdown parser done right. Fast and easy to extend.
* [Twitter Bootstrap] - great UI boilerplate for modern web apps
* [node.js] - evented I/O for the backend
* [Express] - fast node.js network app framework [@tjholowaychuk]
* [Gulp] - the streaming build system
* [Breakdance](http://breakdance.io) - HTML to Markdown converter
* [jQuery] - duh

And of course Dillinger itself is open source with a [public repository][dill]
 on GitHub.

### Installation

Dillinger requires [Node.js](https://nodejs.org/) v4+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ cd dillinger
$ npm install -d
$ node app
```

For production environments...

```sh
$ npm install --production
$ NODE_ENV=production node app
```

### Plugins

Dillinger is currently extended with the following plugins. Instructions on how to use them in your own application are linked below.

| Plugin | README |
| ------ | ------ |
| Dropbox | [plugins/dropbox/README.md] [PlDb] |
| Github | [plugins/github/README.md] [PlGh] |
| Google Drive | [plugins/googledrive/README.md] [PlGd] |
| OneDrive | [plugins/onedrive/README.md] [PlOd] |
| Medium | [plugins/medium/README.md] [PlMe] |
| Google Analytics | [plugins/googleanalytics/README.md] [PlGa] |


### Development

Want to contribute? Great!

Dillinger uses Gulp + Webpack for fast developing.
Make a change in your file and instantanously see your updates!

Open your favorite Terminal and run these commands.

First Tab:
```sh
$ node app
```

Second Tab:
```sh
$ gulp watch
```

(optional) Third:
```sh
$ karma test
```
#### Building for source
For production release:
```sh
$ gulp build --prod
```
Generating pre-built zip archives for distribution:
```sh
$ gulp build dist --prod
```
### Docker
Dillinger is very easy to install and deploy in a Docker container.

By default, the Docker will expose port 8080, so change this within the Dockerfile if necessary. When ready, simply use the Dockerfile to build the image.

```sh
cd dillinger
docker build -t joemccann/dillinger:${package.json.version}
```
This will create the dillinger image and pull in the necessary dependencies. Be sure to swap out `${package.json.version}` with the actual version of Dillinger.

Once done, run the Docker image and map the port to whatever you wish on your host. In this example, we simply map port 8000 of the host to port 8080 of the Docker (or whatever port was exposed in the Dockerfile):

```sh
docker run -d -p 8000:8080 --restart="always" <youruser>/dillinger:${package.json.version}
```

Verify the deployment by navigating to your server address in your preferred browser.

```sh
127.0.0.1:8000
```

#### Kubernetes + Google Cloud

See [KUBERNETES.md](https://github.com/joemccann/dillinger/blob/master/KUBERNETES.md)


### Todos

 - Write MORE Tests
 - Add Night Mode

License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)


   [dill]: <https://github.com/joemccann/dillinger>
   [git-repo-url]: <https://github.com/joemccann/dillinger.git>
   [john gruber]: <http://daringfireball.net>
   [df1]: <http://daringfireball.net/projects/markdown/>
   [markdown-it]: <https://github.com/markdown-it/markdown-it>
   [Ace Editor]: <http://ace.ajax.org>
   [node.js]: <http://nodejs.org>
   [Twitter Bootstrap]: <http://twitter.github.com/bootstrap/>
   [jQuery]: <http://jquery.com>
   [@tjholowaychuk]: <http://twitter.com/tjholowaychuk>
   [express]: <http://expressjs.com>
   [AngularJS]: <http://angularjs.org>
   [Gulp]: <http://gulpjs.com>

   [PlDb]: <https://github.com/joemccann/dillinger/tree/master/plugins/dropbox/README.md>
   [PlGh]: <https://github.com/joemccann/dillinger/tree/master/plugins/github/README.md>
   [PlGd]: <https://github.com/joemccann/dillinger/tree/master/plugins/googledrive/README.md>
   [PlOd]: <https://github.com/joemccann/dillinger/tree/master/plugins/onedrive/README.md>
   [PlMe]: <https://github.com/joemccann/dillinger/tree/master/plugins/medium/README.md>
   [PlGa]: <https://github.com/RahulHP/dillinger/blob/master/plugins/googleanalytics/README.md>
