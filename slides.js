import React, { Component } from 'react';
import { render } from 'react-dom';
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Fit,
  Link,
  Heading,
  Image,
  Layout,
  ListItem,
  List,
  Quote,
  Spectacle,
  Slide,
  Text
} from 'spectacle';
import theme from './theme';
import REPL from './runtime/repl';
const fs = require('fs');

const BigHeading = props => (
  <Heading caps size={1} {...props}>
    {props.children}
  </Heading>
);
const SmallHeading = props => (
  <Heading size={2} {...props}>
    {props.children}
  </Heading>
);
const AppearingBlock = props => (
  <Appear {...props}>
    <div>{props.children}</div>
  </Appear>
);

class Slides extends Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={['slide']} progress="none" controls={false}>
          <Slide className="title-slide" align="flex-start flex-start">
            <BigHeading>Ait</BigHeading>
            <SmallHeading>
              A Concatenative Language for Creative Programming
            </SmallHeading>
            <Text>Stian Veum Møllersen / @mollerse</Text>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Introduction</SmallHeading>
            <Text className="sub-header">&mdash; Hello!</Text>
            <div className="text-block">
              <Text className="text">I'm a web developer from Norway.</Text>
              <Appear>
                <Text className="text">
                  I love languages &mdash; programming, spoken or even artifical
                </Text>
              </Appear>
              <Appear>
                <Text className="text">
                  ... and that's kinda how I ended up here.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Concate-what?</SmallHeading>
            <Text className="sub-header">Mindwarping.</Text>
            <div className="text-block">
              <Text className="text">
                The defining trait of any concatenative language is the stack.
              </Text>
              <Appear>
                <Text className="text">
                  Every operation in a concatenative language does something to
                  the stack.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL mode="stack" />
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Genesis</SmallHeading>
            <Text className="sub-header">
              From whence hath Ait sprung forth?
            </Text>
            <div className="text-block">
              <Text className="text">
                Ait was an accident &mdash; a by-product of learning about
                Concatenative Languages.
              </Text>
              <Appear>
                <Text className="text">
                  It started with{' '}
                  <Link href="http://www.kevinalbrecht.com/code/joy-mirror/joy.html">
                    Joy
                  </Link>{' '}
                  and{' '}
                  <Link href="http://thinking-forth.sourceforge.net/">
                    Thinking Forth
                  </Link>
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Genesis</SmallHeading>
            <Text className="sub-header">
              From whence hath Ait sprung forth?
            </Text>
            <div className="text-block">
              <Text className="text">
                "The canvas is kinda like a shared stack."
              </Text>
              <Appear>
                <Text className="text">
                  "What are the effects of concatenative syntax on creative work?"
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Features</SmallHeading>
            <Text className="sub-header">Everything is a word!</Text>
            <div className="text-block">
              <Appear>
                <Text className="text">
                  Ait has the expected concatenative features
                </Text>
              </Appear>
              <Appear>
                <Text className="text">
                  ...and follows Joy in having quoted programs.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL mode="stack" code={"[ 1 2 3 4 5 ]"}/>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Features</SmallHeading>
            <Text className="sub-header">Create your own vocabulary</Text>
            <div className="text-block">
              <Text className="text">
                Naming your abstractions is quite useful when programming.
              </Text>
              <Appear>
                <Text className="text">
                  Because of how a concatenative language works this process
                  becomes a matter of grouping words.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL
              mode="canvas"
              code={fs.readFileSync('code/definitions.ait', 'utf8')}
            />
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Features</SmallHeading>
            <Text className="sub-header">Create your own vocabulary</Text>
            <div className="text-block">
              <Text className="text">Ait also has support for modules.</Text>
              <Appear>
                <Text className="text">
                  And a foreign function interface (FFI).
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Features</SmallHeading>
            <Text className="sub-header">
              References &mdash; what you need, when you need it.
            </Text>
            <div className="text-block">
              <Appear>
                <Text className="text">
                  Ait can store pointers to values on a space separate from the
                  stack.
                </Text>
              </Appear>
              <Appear>
                <Text className="text">
                  This lets the programmer avoid some of the tedious stack
                  shuffling.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL
              mode="side-by-side"
              code={fs.readFileSync('code/vars.ait', 'utf8')}
              compare={fs.readFileSync('code/no-vars.ait', 'utf8')}
            />
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Creative Process</SmallHeading>
            <Text className="sub-header" />
            <div className="text-block">
              <Text className="text">
                When you reach the point where you have a vocabulary in place,
                experimentation can begin.
              </Text>
              <Appear>
                <Text className="text">
                  This is where the concatenative style shines.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="repl-slide">
            <REPL
              mode="canvas"
              code={fs.readFileSync('code/demo.ait', 'utf8')}
            />
          </Slide>

          <Slide className="repl-slide">
            <REPL
              mode="canvas"
              code={fs.readFileSync('code/final.ait', 'utf8')}
            />
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Downsides</SmallHeading>
            <Text className="sub-header">No silver bullets!</Text>
            <div className="text-block">
              <Text className="text">Postfix is alien to many.</Text>
              <Appear>
                <Text className="text">Stack shuffling is cumbersome.</Text>
              </Appear>
              <Appear>
                <Text className="text">Performance overhead.</Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Roadmap</SmallHeading>
            <Text className="sub-header">
              Roads? Where we're going, we don't need roads.
            </Text>
            <div className="text-block">
              <List>
                <Appear>
                  <ListItem>More and better documentation</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Online playground and REPL</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Namespaced modules</ListItem>
                </Appear>
                <Appear>
                  <ListItem>
                    Better solutions for modules in the browser
                  </ListItem>
                </Appear>
                <Appear>
                  <ListItem>Performance</ListItem>
                </Appear>
                <Appear>
                  <ListItem>Better async handling</ListItem>
                </Appear>
              </List>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Closing thoughts</SmallHeading>
            <Text className="sub-header">The future stays weird.</Text>
            <div className="text-block">
              <Text className="text">
                Ait is a fun little accident that I really enjoy working with.
              </Text>
              <Appear>
                <Text className="text">
                  Exploring the relationship between syntax and creative
                  expression is really interesting.
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide className="text-slide" align="flex-start flex-start">
            <SmallHeading>Resources</SmallHeading>
            <Text className="sub-header">It is dangerous to go alone.</Text>
            <div className="text-block">
              <Appear>
                <Text className="text">
                  <Link href="http://unusual.place">unusual.place</Link>
                </Text>
              </Appear>
              <Appear>
                <Text className="text">
                  <Link href="http://concatenative.org/">
                    concatenative.org
                  </Link>
                </Text>
              </Appear>
              <Appear>
                <Text className="text">
                  <Link href="https://leanpub.com/readevalprintlove003/read">
                    Read Eval Print λove #3 by Michael Fogus
                  </Link>
                </Text>
              </Appear>
            </div>
          </Slide>

          <Slide>
            <BigHeading>Thank you for listening!</BigHeading>
            <Text>Stian Veum Møllersen / @mollerse</Text>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

const mount = document.createElement('div');
document.body.appendChild(mount);
render(<Slides />, mount);
