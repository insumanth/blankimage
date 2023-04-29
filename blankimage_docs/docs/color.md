---
sidebar_position: 5
---

# Color


![Color](assets/color.jpg)

You can specify the Color of the blank image using Hex color code.

It can be passed with short form option `-c` or long form option `--color` and passing the desired color in Hex Color Code Format.




## Supported Hex Formats and Shorthand

1. 1 digit hex code
    - Takes the same color code for all 3 RGB Channels.
    - **`#c`** will be considered as rgb(12, 12, 12) as hex `c` equals 12.

2. 3 digit Hex code
    - Hex short hand code.
    - **`#abc`** will be considered as Hex #aabbcc or rgb(170, 187, 204).

3. 4 digit Hex code
    - Hex short hand code with alpha channel.
    - **`#abcd`** will be considered as Hex #aabbccdd or rgba(170, 187, 204, 221).

4. 6 digit Hex code
    - Standard Hex code.
    - **`#123456`** will be considered as rgb(18, 52, 86).

5. 8 digit Hex code
    - Standard Hex code with alpha channel.
    - **`#12345678`** will be considered as rgba(18, 52, 86, 120).


## Example

```bash
blankimage -c "#5"
blankimage --color '#123'
blankimage --color '#abcd'
blankimage -c 123456
blankimage --color 12345678
```

## Missing Argument Error

Since Bash and many other Shell interpret `#` as a Comment, you might get missing argument error.
You can prevent it from happening by using any of the below options

1. Enclosing the color value in Single or Double Quotes.
2. Just Specifying the Hex Value without `#` Symbol.




## Image Format Limitations

The color code will be taken if applicable.
Using RGBA Color (RGB with Alpha Transprancy) will work as expected in PNG but not in JPEG as the latter does not support Transprancy.

:::danger
No Error or Warning will be raised to notify this.
:::

## Default

:::tip Default Color

#008080 is the default color since it looks good 😊.

:::

## Planned Updates

1. Support for RGB and RGBA Color Inputs.
2. Support for HSL Color Inputs.
3. Support for Colors to be specified by Color Names.
