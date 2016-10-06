# Slide View

[![npm](https://img.shields.io/npm/dm/react-native-slide-view.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-slide-view)
[![npm](https://img.shields.io/npm/v/react-native-slide-view.svg?maxAge=2592000)](https://www.npmjs.com/package/react-native-slide-view)

## Getting started
```sh
npm install --save react-native-slide-view
```

## Example

```javascript
class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slideViewVisible: false
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>Some content</Text>
        <SlideView visible={this.state.slideViewVisible}>
          <Text>Some content inside the slide view</Text>
        </SlideView>
      </View>
    )
  }
}
```

## Constribute

Comments, Issues and Pull Requests are welcomed!

## License (MIT)

Copyright (c) 2016 Devnetik

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.