---
sidebar_position: 2
---

# Overview

You can get the help page by just typing `blankimage -h` or `blankimage --help` in command line.
This will print out all the available options and the command structure.


```bash
@insumanth $ blankimage --help
usage: blankimage [-h] [-s HEIGHT WIDTH] [-c COLOR] [-i {png,jpeg,gif,webp}] [-v] [-a] [-e] [filename]

positional arguments:
  filename              File name of the generated file. File extension is used to infer the image file type.

options:
  -h, --help            show this help message and exit
  -s HEIGHT WIDTH, --size HEIGHT WIDTH
                        Image dimensions
  -c COLOR, --color COLOR
                        Image Color in Hex format
  -i {png,jpeg,gif,webp}, --image-format {png,jpeg,gif,webp}
                        Image file format.
  -v, --version         Displays the current version
  -a, --about           Displays information about project
  -e, --example         Sample examples to get you stared

```


## Generating Image

blankimage has decent defaults for all the options, so just executing blankimage will generate image.


```bash
$ blankimage
Image IMG_2023_04_29_T_11_31_00_713599.png Generated Successfully.
```

:::tip Defaults

This is made possible by decent defaults. Check each option for information about defaults.

:::

blankimage will generate a 1080 x 1080 Image Teal color png Image in your current directory like below,

![Default Image](./assets/IMG_2023_04_29_T_11_31_00_713599.png)


