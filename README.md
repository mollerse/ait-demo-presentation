# Ait: A Concatenative Language for Creative Programming

Demo given at FARM 2017

The slides can be viewed [here](http://mollerse.github.io/ait-demo-presentation/).

Clone repo and run `npm i && npm start` to see a local copy.

## Abstract

### Introduction

Creative programming is programming as a form of creative expression, rather than solving a given problem, and usually involve some kind of visual and/or aural component meant to be experienced. The purpose of creative programming are as varied as there are different programmers. Some use it as a tool for learning, others as a form of art or recreational programming.

Whatever the purpose when doing creative programming you often find yourself in some kind of continous process of exploration. Constantly experimenting, tweaking, and discovering new and interesting things about your creation. Using a programming language which is built to allow remixing and recombining existing parts, while staying out of your way as much as possible, would seem like a good way to facilitate such a process.

This is where Ait comes in. Ait is a language created to explore what concatenative languages can offer a programmer in the context of creative programming.

### Background and historical context

Concatenative programming got its start with a language called Forth. Created in the late 60s by Charles H. Moore, Forth had its golden age in the 70s and early 80s with widespread usage in embedded electronics. The language is centered around words, which are analogous to functions or procedures. Programs are constructed by composing these words. Because all words, or functions, take the same number and type of arguments, composing functions simply become a question of concatenating words. This is very similar to what we now know as tacit programming and is the origin of the name given to the family of languages decended from Forth; Concatenative Langues. The simple rules words adhere to is what gives Forth the characteristics which makes it interesting in the context of creative programming: Minimal syntax and rules and an easy way to construct and compose programs.

These characteristics also gave rise to a philosophy of programming, described in the book Thinking Forth. Written in 1984 by Leo Brodie, this book introduces an iterative process for developing programs, very similar to what we would call XP or Lean today. At the heart of this process is something the book calls "factoring", which is a set of guidelines for continously refining an evolving codebase.

Another language which shares alot of the same characteristics as Forth is a language called Joy. Created by Manfred von Thun in 2001, Joy combines the expressivity of functional languages with the simplicity of Forth. Still using concatenation as the method of composing programs, but with the added capability of evaluating quoted programs.

### Features

Targeted at programmers who work with browsers and the web, it is implemented in JavaScript as an interpreted language. Bindings to existing browser APIs, such as Canvas and the DOM, are available as modules you can import from the popular npm registry. Ait also features an easy to use FFI to create bindings to existing JavaScript code and APIs.

Taking the Forth philosophy to heart, Ait ships with a minimal standard library and the ability to create and import modules that extends the vocabulary of available words.

Ait also has the ability to evaluate quoted programs, like Joy, to give it more expressivity. This feature gives concatenative languages the ability to create higher order words, much in the same way as functional languages use higher order functions.

Being interpreted and having the interpreter implemented in JavaScript also enables browser based live coding. Allthough not the main focus of the language, it is a very interesting side-benefit of web-friendly languages. The below image is from a simple web-based Ait playground.

![A piece of Ait code with the resulting image on the side](https://gist.githubusercontent.com/mollerse/83d070cd6b1038951e21e3ac54ec6022/raw/2bc703d541fc84a78ec608ab90965a8452ed1464/illustration.png)

More information and code examples can be found at https://github.com/mollerse/ait-lang

### What does Ait offer the creative programmer?

Combining the extensibility from the module system and FFI, the expressivity of higher order functions and the syntactical ease of composition inherited from FORTH is where Ait fits in the ever growing world of programming languages.

The goal of this demonstration is to show how this combination of features impacts the creative process in a positive way. Walking through a piece of art made with Ait, I will show how the principles of factoring and ease of program construction through concatenation allows for a continous, exploratory process of remixing and experimentation.
