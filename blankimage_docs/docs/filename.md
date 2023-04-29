---
sidebar_position: 3
---

# File Name

![File Name](assets/filename.jpg)

File Name is the only positional argument.

The generated image will be saved in the name provided through the argument. It is recommended to keep it as the first argument.

## Example

```bash
blankimage awsome-cool-teal-image.png
```

### Default File Name

Though, File Name is a positional argument, it is not required. There is a default name for the file name generated based on current time on the machine.


The default format is given by the below template

```python
f"IMG_{datetime.now().strftime('%Y_%m_%d_T_%H_%M_%S_%f')}"
```
:::tip Default

The default file name example,
IMG_2023_04_29_T_11_31_00_713599.png

:::


