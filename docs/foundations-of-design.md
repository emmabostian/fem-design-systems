# Foundations Of Design

Before we can code our component library we have to design some of the foundational elements of our design system.

## Color

Color is one of the most important foundational elements of a design system and impacts every single component.

Color theory is the combination of art and science that's used to determine how colors interact.

### Color Mixing

There are two methods for producing colors: additive and subtractive.

Additive color mixing, also known as RGB, is carried out by mixing different amounts of primary colors such as red, green, and blue to produce secondary colors, yellow, cyan, and magenta.

Subtractive color mixing is used when white light reflects off of an object.

### Additive Color Mixing (RGB)

Additive colors start black and become white as more red, blue, or green are added.

TVs and computer monitors use additive color mixing. Every pixel begins as black and express color as a percentage of red, green, and blue.

![Additive color mixing](images/additive-color-mixing.png)

[View the original image](http://bit.ly/38vozMz)

#### Subtractive Color Mixing (CYMK)

While additive color mixing is created by adding colored light to black, subtractive colors are created by absorbing (subtracting) some light wavelengths and reflecting others.

Subtractive colors start as white and as filters are added takes on the appearance of color.

Photos and magazines use subtractive colors.

![Subtractive color mixing](images/subtractive-color-mixing.png)

[View the original image](http://bit.ly/2TE2aag)

### Color Types

![Primary secondary and tertiary](color-terminology.svg)

#### Primary Colors

In the RYB color wheel primary colors are colors which cannot be created by combining other colors. These are red, yellow, and blue.

![Primary](images/primary.svg)

#### Secondary Colors

Secondary colors result from mixing two primary colors. In the RGB color wheel, secondary colors are cyan, magenta, and yellow.

In the RYB color wheel the secondary colors are purple, orange, and green.

![Secondary](images/secondary.svg)

#### Tertiary Colors

Tertiary colors are created by combining a secondary color with a primary color. There are six tertiary colors.

The tertiary colors are red-orange, yellow-orange, yellow-green, blue-green, blue-violet, and red-violet.

![Tertiary](images/tertiary.svg)

### The Color Wheel

There are several types of color combinations which can be used to build color palettes.

#### Monochromatic

Monochromatic palettes are created by establishing variations on a shade of a single color.

![Monochromatic](https://static-cse.canva.com/_next/static/assets/monochromatic-colors.900x518.bec7739a547bd1b3395e68c915d0901f.png)

[View the source](http://bit.ly/2TE2aag)

#### Complementary

Complementary color palettes are created by selecting two colors directly opposite of each other on the color wheel.

![Complementary](https://static-cse.canva.com/_next/static/assets/complementary-colors.900x518.0c8111ad7fa081f48632ab6e0d753f5d.png)

[View the source](http://bit.ly/2TE2aag)

#### Analogous

Analogous color palettes are created by selecting three colors which are side by side on the color wheel.

![Analogous](https://static-cse.canva.com/_next/static/assets/analogous-colors.900x518.2ca117fb3c38f47d9a96430d28b7963c.png)

[View the source](http://bit.ly/2TE2aag)

#### Triadic

Triadic color palettes are created by selecting three evenly-spaced colors from around the color wheel.

![Triadic](https://static-cse.canva.com/_next/static/assets/triadic-colors.900x518.fb18f980ea03a9fa43fb73c99c53e8c2.png)

[View the source](http://bit.ly/2TE2aag)

### Color Terminology

![HSL](images/hue-saturation-light.svg)

[View the source](http://bit.ly/2TE2aag)

#### Hue

A hue is any color on the color wheel. Variations on this hue are created by establishing a shade, tint, or tone.

![Hue](images/hue.svg)

#### Saturation

Saturation is the intensity or purity of a color.

![Saturation](images/saturation.svg)

#### Luminance

Luminance is the amount of brightness, or light, in a color.

![Luminance](images/luminance.svg)

#### Shade

A shade is created by incorporating black to a base hue, which darkens the color.

![Shade](images/shade.svg)

[View the source](http://bit.ly/2TE2aag)

#### Tint

A tint is created by adding white to a base hue, which lightens the color.

![Tint](images/ting.svg)

[View the source](http://bit.ly/2TE2aag)

#### Tone

A tone is created by combining black or white (gray) with a base hue. Tones are subtle variations of the original color.

![Tone](images/tone.svg)

[View the source](http://bit.ly/2TE2aag)

### Color Semantics

The colors we choose for our color palettes can have implications on the semantics of our applications.

Let's take a look at the semantics of colors.

#### Red

Red is typically associated with fire, violence, war, love, and passion. Red can have a physical effect on users, actually raising their blood pressure and respiration rates as it can instill a sense of anger or danger. Thus, red should be used sparingly throughout your application.

#### Orange

Orange is a vibrant and energetic color, typically associated with earth and autumn. Orange can represent change and movement as well as creativity.

#### Yellow

Yellow is associated with happiness and sunshine, yet it can also be associated with deceit and cowardice. Yellow designs typically instill a sense of happiness and cheer.

#### Green

Green represents new beginnings and growth. It can signify renewal and abundance, or it can represent envy, jealousy or lack of experience. Green has many calming effects, similar to blue, but incorporates some of the energy of yellow.

#### Blue

Blue can represent sadness or calmness, responsibility, reliability, and peace. You'll typically see social applications like Facebook and Twitter leverage blue as it subconsciously promotes trust within their users.

#### Purple

Purple is the color of luxury, royalty, and wealth.

#### Black

Black has long been associated with power, elegance and formality, but can also instill a sense of evil, death and mystery.

#### White

White is associated with purity, cleanliness, virtue and is typically seen used for healthcare websites. White can also represent goodness and angels.

#### Gray

Gray typically represents moodiness and depression yet can also be used for more conservative, formal, or modern applications.

#### Brown

Brown is used to create a sense of dependability, reliability, and earthiness but can also be a bit dull in application design.

### Color Values

There are several color values which we can use in our color palettes.

#### HEX

Hex, or hexadecimal, is the base-16 representation of a color where each value can range from 0-9 and A-F.

#### RGB

RGB is the additive color mixing model which allows you to create colors by mixing red, green, and blue light sources. This is used in digital media design.

#### RGBA

RGBA is additive color mixing model which allows you to create colors by mixing red, green, and blue light sources, but incorporates a fourth value, alpha.

Alpha indicates how opaque each pixel is.

#### CYMK

CYMK is the subtractive color mixing model used in print design.

## Creating A Color Palette

Head over to Figma and create a new project.

I've created a starter file for you to use, and you can get that [here](https://www.figma.com/file/FUgY11amAHtmR2zyiHcSYs/FEM-Template?node-id=1%3A127)

Copy and paste over the existing artboards from the starter file into the respective tabs on your new project.

Now head over to [Canva Color Palettes](https://www.canva.com/colors/color-palettes/) or [Coolors](https://coolors.co/browser/latest/1) and select a monochromatic color palette to use.

I chose the palette:

```
#A679DC
#8D53D2
#742DC8
#5F25A4
#050449
```

In your art board, create five 200 x 200 squares. You can create one and command + v to copy and paste, or press and hold option while dragging the shape to make a copy.

These five squares should have the fill of the five hex codes you've chosen.

Re-name each square to be `primary-100` through `primary-500`. Then select one of the squares, click the color style and click the plus button on the right side to add a new color.

You can then add labels to each of the squares so it's clear which color it is. I added both the hex and variable name.

We're also going to need a neutral palette.

I chose the neutral palette below:

```
neutral-600: #000000
neutral-500: #4A4B53
neutral-400: #737581
neutral-300: #E1E1E1
neutral-200: #F4F5F7
neutral-100: #FFFFFF
```

We'll also create text and text-inverted colors.

```
Text Color: #000000;
Text Color Inverted: #ffffff;
```

## Typography

### Terminology

#### Ascender

The piece of a letter which rises above the x-height.
![Ascender](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-18-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Descender

The piece of a letter which dips below the baseline.
![Descender](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-17-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Baseline

The imaginary line on which most letter characters sit.
![Baseline](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-7-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Cap Line

The imaginary line that marks the upper boundary of capital letters and some lowercase letters' ascenders.
![Cap line](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-8-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### X-Height

Height of the typeface's lowercase letters.
![X-height](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-9-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Tracking / Letter Spacing

The uniform amounts of spacing between characters in a complete section of text.
![Tracking, letter spacing](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-10-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Kerning

The horizontal spacing between two consecutive characters.
![Kerning](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-11-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

#### Leading

The vertical spacing between lines of text (from baseline to baseline).
![Leading](https://www.canva.com/learn/wp-content/uploads/2015/07/typography-terms-12-tb-800x0.png)

[View the source](http://bit.ly/2TKGHwr)

### Types Of Font

There are several different types of fonts and each has distinguishing characteristics.

#### Serif

Serif fonts have short lines or strokes on the open ends of letters.

Serif fonts include fonts such as:

- Times New Roman
- Georgia

#### Sans-Serif

Sans-serif fonts, in contrast to serif fonts, do not have short lines or strokes on the open ends of letters (sans means without in French).

Sans-serif fonts include fonts such as:

- Arial
- Tahoma

#### Monospaced

Monospaced fonts have letters and characters which occupy the same amount of horizontal space. They were typically used on typewriters.

Monospaced fonts include fonts such as:

- Courier
- IBM Plex Mono

### Measurements

There are several types of measurements you can use to build a type scale.

**Pixels** are units used by designers, however they shouldn't be used to define a type scale.

Most browsers allow a user to set their default font-size to another value than the default of `16px`. If a user sets their default to `20px`, all font-sizes should scale in relation.

However if you set font-sizes in terms of `px`, a heading set at `30px` will remain at `30px` regardless of the base font-size selected by the user.

**Em** is the unit of typography equal to the currently specified point-size. `1em` can compute to different values depending upon where you are in the code.

Ems perform in a similar fashion to REM, until it comes to nesting.

If you have a `div` with a font-size of `2em`, then you nest a `p` with a font-size of `2em`, the font-size of the paragraph is now `2em` relative to the `div`.

**REM** is the unit of typography equal to the root font size. 1 rem will be equal to the font size defined in the `html` element.

REM is great for creating robust type scale systems which account for user preference and propagate to HTML elements.

You can calculate pixels from REM by multiplying the REM value by the pixel base.

### Type Scale

There are several scales to choose from when building an application. Here are some of the most popular.

#### Major Third

#### Major Second

#### Perfect Fourth

#### Golden Ratio

#### Perfect Fifth

### Creating A Type Scale In Figma

In your Figma project, head to the Typography tab and use the provided artboards as a template.

You should pick a font family and a typescale.

Head to the [Google fonts website](https://fonts.google.com/) and find a font family for your design system.

I'll choose Poppins, a nice sans-serif font.

Now, head over to the [type scale calculator](https://type-scale.com/) and select a type scale.

I chose the Major Second.

We're going to create text styles for our `h1` to `h5` headers as well as paragraphs, helper text, and copyright text.

Create a new text item by pressing 'T' and typing the following:

```
Paragraph - 16px (1rem) FEM Design System
```

I chose to round my REM values to one decimal place, however you may want to extend this out to the hundredths or thousandths place if you want to be more explicit.

We will then use the type scale we just selected to calculate the headers, helper text, and copyright text.

```
H1 - 28px (1.8rem) FEM Design System
H2 - 25px (1.6rem) FEM Design System
H3 - 22px (1.4rem) FEM Design system
H4 - 20px (1.2rem) FEM Design System
H5 - 18px (1.1rem) FEM Design System
Paragraph - 16px (1rem) FEM Design System
Helper Text - 14px (0.8rem) FEM Design System
Copyright Text - 12px (0.7rem) FEM Design System
```

Once each of these has been created (with the respective pixel values and font family you chose in the previous step), select each individually, press the four dots next to Text in the right-hand sidebar, and click the plus icon to add a new style. Give it the name of the element it will represent (i.e. Paragraph, Header 1).

Select all of the text blocks and next to Fill in the right-hand sidebar, click the four dots and select `Text Color` from our color palette.

Now, let's create the inverted text.

Clone the art board we just created and set the background color to black (#000000).

Select all of the text blocks and set the color to `Text Color Inverted`.

## Other Areas Of Design

There are several other areas of design which we won't touch on today, but would be included in a fully-built design system.

Some of these areas include:

- Grid
- Spacing
- Accessibility
- Motion
- Iconography

## Resources

- [Canva Color Wheel](https://www.canva.com/colors/color-wheel/)
- [Smashing Magazine Color Theory](https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/)
- [Canva Typography](https://www.canva.com/learn/typography-terms/)
- [Em vs. Rem, vs. Px](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px)
- [Type scale: a visual calculator](https://type-scale.com/)
