---
layout: project
title: BMP Steganography
img: assets/img/projects/steganography.png
imgtext: Diagram demonstrating how BMP Steganography decodes an image
tags: C Linux
year: 2023
---
**Steganography** is the process of hiding a secret message within another file in such a way someone cannot know the presence of a hidden message in a particular file.[^1]

This program allows us to:
1. Encode a *secret image* inside a regular image
2. Decode a *hidden image* from a encoded image file

We accomplish this process by leveraging the four least significant bits of each pixel to store information about the *secret image* (the secret image's four most significant bits). For instance, to encode a secret image inside an decoy image, for each pixel we would modify the pixel (R,G,B) as such:
```
Decoy Image Pixel:      (0xM0, 0xK0, 0xI0)
Secret Image Pixel:     (0xN0, 0xL0, 0xJ0)
==> Encoded Pixel:      (0xMN, 0xKL, 0xIJ)
```
The changes to the four least significant bits are not pronounced enough to be picked up by the naked eye. Hence, they are perfect for storing *additional information*. To reveal the secret image from the encoded file, we can simply swap the four MSB and LSB as such:
```
Encoded Pixel:     (0xMN, 0xKL, 0xIJ)
==> Decoded Pixel: (0xNM, 0xLK, 0xJI)
```

This program was written entirely in C and uses only the standard C library[^2] making the program more or less portable.<span class="endmark"></span>


**Code Available Upon Request**
{: .text-center}
---
[^1]: [https://en.wikipedia.org/wiki/Steganography](https://en.wikipedia.org/wiki/Steganography)
[^2]: [https://www.gnu.org/software/libc/](https://www.gnu.org/software/libc/)