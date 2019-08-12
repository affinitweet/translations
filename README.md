# Affinitweet translations

All translations of Affinitweet.

## How to add translations

- Create a `[your_locale].js` file in the `locales` folder
- Copy and paste an existing translation file in your new file
- Translate existing values to your language
- **Don't forget to add and translate your language name in other files**
- Send a pull request, wait for approbation and merge

You'll be credited on Affinitweet below your translation if you want to appear as a contributor.

## How to edit/update translations

- Go to `[your_locale].js` file in the `locales` folder
- Edit/update existing translation file
- Send a pull request, wait for approbation and merge

## The `translators` file

```js
export default {
  en: {
    author: 'Thomas Reichling',
    language: 'english',
    locale: 'en',
  },
  /* other locales... */
}
```

Add the following information about your translations into the `translators.js` file:
- `author`: name/username that'll be displayed on Affinitweet
- `language`: official name of the language **in english**
- `locale`: official letter country code

## Example

```js
export default {
  account: 'My account',
  clearHistory: 'Clear my history',
  profile: {
    username": 'Your username',
  },
}
```
Here you have to translate "`My account`", "`Clear my history`" and "`Your username`".  
Don't change "`account`", "`clearHistory`", "`profile`" and "`username`".

## Precisions

- **You don't have to translate the name of the features (ex: `Valentine`, `Secret Crush`...)**
- Don't translate strings between brackets like `{{something}}`, it's variable
- The `seconds` value corresponds to `0 (second) | 1 (second) | 2+ (seconds)`
- If you have a `space` in front of the `:` in your language, don't forget it
- Be careful with punctuation, upper and lower case letters (especially at the start and end of the string)
- If you're using another date format in your country, update the order of `{{day}}/{{month}}/{{year}}`

## Translations

| Language | Author | Available |
|----------|--------|------------|
| 🇫🇷 French | [Thomas Reichling](https://github.com/haplifeman) | ✅ |
| 🇬🇧 English | [Thomas Reichling](https://github.com/haplifeman) | ✅ |
| 🇵🇱 Polish | [Patryk Gawroński](https://github.com/beardimon) | ✅ |
| 🇪🇸 Spanish | [Valerie Blanco](https://github.com/kobernyk) | ✅ |
| 🇨🇳 Traditional Chinese | [Kagurazaka Yashi](https://github.com/kagurazakayashi) | ✅ |
| 🇨🇳 Simplified Chinese | [Kagurazaka Yashi](https://github.com/kagurazakayashi) | ✅ |
| 🇧🇷 Portuguese | [Allan Fernando](https://github.com/allanf181) | ✅ |
| 🇹🇷 Turkish | [M.ugur Cagdas](https://github.com/mugurcagdas) | ❌ |
| 🇮🇩 Indonesian | [Asyariruby](https://github.com/asyariruby) | ❌ |

Thank you for your help ❤️
