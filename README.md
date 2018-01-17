# Affinitweet translations

All translations of Affinitweet.

## How to add translations

- Create a `[your_locale].json` file in the `locales` folder
- Copy and paste an existing translation file in your new file
- Translate existing values to your language
- Send a pull request, wait for approbation and merge

You'll be credited on Affinitweet below your translation if you want to appear as a contributor.

## How to edit/update translations

- Go to `[your_locale].json` file in the `locales` folder
- Edit/update existing translation file
- Send a pull request, wait for approbation and merge

## The `__translation` object

```json
{
  "__translation": {
    "author": "Thomas Reichling",
    "language": "english",
    "locale": "en",
    "flag": "data:image/svg+xml;utf8;base64,PD94bWwgdmVy..."
  }
}
```

- `author`: name/username that'll be displayed on Affinitweet
- `language`: official name of the language **in english**
- `locale`: official letter country code
- `flag`: raw SVG country flag (base64, see [here](https://www.flaticon.com/packs/international-flags-6))

## Example

```json
{
  "account": "My account",
  "clearHistory": "Clear my history",
  "profile": {
    "username": "Your username"
  }
}
```
Here you have to translate "`My account`", "`Clear my history`" and "`Your username`".  
Don't change "`account`", "`clearHistory`", "`profile`" and "`username`".

Thank you for your help ❤️
