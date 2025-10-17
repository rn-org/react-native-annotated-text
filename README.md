[![npm](https://img.shields.io/npm/v/@rn-org/react-native-annotated-text.svg)](https://npmjs.com/@rn-org/react-native-annotated-text) [![React Native](https://img.shields.io/badge/React_Native-21232a?style=flat&logo=react&logoColor=0a7ea4&logoSize=small.svg)]() [![Android](https://img.shields.io/badge/Android-green?style=flat&logo=android&logoColor=white)]() [![iOS](https://img.shields.io/badge/iOS-21232a?style=flat&logo=ios&logoColor=white)]() ![RN 0.81.1](https://img.shields.io/badge/RN-0.81.1-brightgreen)

# @rn-org/react-native-annotated-text

Style parts of text to improve readability, increase positive user experience, and encourage greater creativity through use of colors and fonts.

Fully compatible with TypeScript & Turbomodules.

Required React Native Version >=0.72.0

## Supported platforms

| Platform | Support |
|----------|---------|
| iOS      | ✅       |
| Android  | ✅       |
| Web      | ❌       |
| Windows  | ❌       |
| macOS    | ❌       |

## Installation

```sh
npm install @rn-org/react-native-annotated-text @react-native-masked-view/masked-view react-native-linear-gradient
```

or

```sh
yarn add @rn-org/react-native-annotated-text @react-native-masked-view/masked-view react-native-linear-gradient
```
                                                                                                                               
## Style Text

### Change text color

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ color: "blue" }, () => append('Hello World'));
  }}
/>
```
<img width="208" height="65" alt="Screenshot 2025-10-17 at 11 00 33 AM" src="https://github.com/user-attachments/assets/e18ac873-d593-4a19-a24a-77e154d9007c" />

### Change text size

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ fontSize: 20 }, () => append('Hello World'));
  }}
/>
```
<img width="285" height="71" alt="Screenshot 2025-10-17 at 11 01 46 AM" src="https://github.com/user-attachments/assets/db41aef9-13b0-4d26-8336-97d5c4f926b7" />

### Make text italic
Use the `fontStyle` parameter to italicize text.

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ fontStyle: "italic" }, () => append('Hello World'));
  }}
/>
```
<img width="207" height="50" alt="Screenshot 2025-10-17 at 11 03 48 AM" src="https://github.com/user-attachments/assets/78268c85-0833-4787-b498-5b38450d404e" />

### Make text bold
Use the `fontWeight` parameter to bold text (or set another FontWeight).

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ fontWeight: "bold" }, () => append('Hello World'));
  }}
/>
```
<img width="224" height="58" alt="Screenshot 2025-10-17 at 11 06 52 AM" src="https://github.com/user-attachments/assets/104cfc94-5010-463c-9a54-bb2f99df86bc" />

### Add multiple styles in text

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ color: "blue" }, () => append('H'));
    append("ello ")
    withStyle({ color: "red" }, () => append('W'));
    append("orld")
  }}
/>
```
<img width="224" height="58" alt="Screenshot 2025-10-17 at 11 09 42 AM" src="https://github.com/user-attachments/assets/ca2797c6-9623-4f89-8511-4588d70ee7a6" />

### Gradient text

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle(
      {},
      () => append('Hello World'),
      ['#FF0000', '#0000FF']
    );
  }}
/>
```
<img width="224" height="58" alt="Screenshot 2025-10-17 at 11 11 52 AM" src="https://github.com/user-attachments/assets/5e14e880-bcba-40c5-9d91-5981149f0f9d" />
<img width="224" height="58" alt="Screenshot 2025-10-17 at 11 12 47 AM" src="https://github.com/user-attachments/assets/3ab90712-89c9-44cb-ac4c-882d25655e84" />

### Normal + Gradient text

```javascript
import { AnnotatedText } from '@rn-org/react-native-annotated-text';

<AnnotatedText
  annotatedString={(append, withStyle) => {
    withStyle({ fontSize: 24 }, () => append('Hello '));
    withStyle(
      { fontWeight: 'bold', fontSize: 24 },
      () => append('Gradient'),
      ['#FF0000', '#0000FF']
    );
    withStyle({ fontSize: 24 }, () => append(' World!'));
  }}
/>
```
<img width="266" height="58" alt="Screenshot 2025-10-17 at 11 15 00 AM" src="https://github.com/user-attachments/assets/7551edd3-05c2-4ae3-a10a-5e515673848a" />
<img width="266" height="81" alt="Screenshot 2025-10-17 at 11 18 59 AM" src="https://github.com/user-attachments/assets/ac0efd3e-9334-4c86-9061-8337e832291e" />

## How To Run Example App ?

To run example app, follow the below steps

1. Clone the repository
2. Do `yarn install`
3. For android`yarn example android`
5. For iOS `cd ios` and do `bundle exec pod install` and run the iOS app from XCode

