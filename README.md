⚠️  ———————————————  ⚠️

**This repository is not used anymore and will be archived/deleted soon.**

**If you want to help us translating Affinitweet, please go there: https://localazy.com/p/affinitweet**

**If you need any help with Localazy, [get in touch with us on Twitter](https://twitter.com/affinitweet_) (send a direct message) 😊**

⚠️  ———————————————  ⚠️

# Affinitweet translations

All translations of Affinitweet.

## How to add new translations

- Copy the `en/` folder to create your own translation folder
- Rename the new copied folder with your locale ISO code
- Translate existing values to your language
- **Don't forget to add and translate your language name in other files**
- Update the `translators` file to add your information (see below)
- Send a pull request, wait for approbation and merge

You'll be credited on Affinitweet below your translation if you want to appear as a contributor.

## How to edit/update translations

- Go to the translation folder of your choice
- Edit/update existing translations file
- Send a pull request, wait for approbation and merge

## The `translators` file

Add the following information about your translations into the `translators.js` file:
- `author`: name/username that'll be displayed on Affinitweet
- `language`: official name of the language **in english**

```js
export default {
  fr: {
    author: 'Thomas Reichling',
    language: 'french',
  },
  en: {
    author: 'Thomas Reichling',
    language: 'english',
  },
  /* other locales... */
}
```

## What to translate?

If you're not familiar with code, no problem, it's very easy to understand:

In the example below you would have to translate "`My account`", "`Clear my history`" and "`Your username`".  
Don't change "`account`", "`clearHistory`", "`profile`" and "`username`".

```js
export default {
  account: 'My account',
  clearHistory: 'Clear my history',
  profile: {
    username: 'Your username',
  },
}
```

## Important precisions

- Don't translate the name of the features (ex: `Valentine`, `Secret Crush`...)
- Don't translate words between brackets like `{something}`, it's variables
- Pluralization: the `_pl.seconds` value corresponds to `0 (second) | 1 (second) | 2+ (seconds)`
- If you have a `space` in front of the `:` in your language, don't forget it
- Be careful with punctuation, upper and lower case letters (especially at the start and end of the string)
- If you're using another date format in your country, update the order of `{{day}}/{{month}}/{{year}}`

## Translations and translators

| Language | Author | Available |
|----------|--------|------------|
| 🇬🇧 English | [Thomas Reichling](https://github.com/haplifeman) | ✅ |
| 🇫🇷 French | [Thomas Reichling](https://github.com/haplifeman) | ✅ |
| 🇵🇱 Polish | [Patryk Gawroński](https://github.com/beardimon) | ✅ |
| 🇪🇸 Spanish | [Valerie Blanco](https://github.com/kobernyk) | ✅ |
| 🇨🇳 Traditional Chinese | [Kagurazaka Yashi](https://github.com/kagurazakayashi) | ✅ |
| 🇨🇳 Simplified Chinese | [Kagurazaka Yashi](https://github.com/kagurazakayashi) | ✅ |
| 🇧🇷 Portuguese | [Allan Fernando](https://github.com/allanf181) | ✅ |
| 🇸🇪 Swedish | [Fox Wernicke](https://github.com/BreakinBenny) | ✅ |
| 🇳🇱 Dutch | [Quinten Althues](https://github.com/QkeleQ10) | ✅ |
| 🇩🇪 German | [ByFxbian](https://github.com/ByFxbian) | ✅ |
| AR Arabic | [Abdulkarim Aljubouri](https://github.com/AbdulkarimAljubouri) | ✅ |


Thank you for your help ❤️
