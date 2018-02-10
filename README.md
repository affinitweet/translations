# Affinitweet translations

All translations of Affinitweet.

## How to add translations

- Create a `[your_locale].json` file in the `locales` folder
- Copy and paste an existing translation file in your new file
- Translate existing values to your language
- **Don't forget to add and translate your language name in other files**
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

## Precisions

- Don't translate strings between brackets like `{{something}}`, it's variable
- You don't have to translate the name of the features (ex: `Valentine`, `Secret Crush`...)
- The `seconds` value corresponds to `0 (second) | 1 (second) | 2+ (seconds)`
- If you have a `space` in front of the `:` in your language, don't forget it
- Be careful with upper and lower case letters (espacially at the start of the string) and punctuation
- If you're using another date format in your country, update the order of `{{day}}/{{month}}/{{year}}`


Thank you for your help ❤️
