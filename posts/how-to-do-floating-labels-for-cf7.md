---
date: "2019-01-24"
title: How to do floating labels for CF7
description: If you have a large Contact Form 7 form, this is a great way to
    unclutter your page.
image: "/images/mobile-contact-us-form.jpg"
cta:
    ctaBtn: Shoot a Message
    ctaTitle: Still need a helping hand?
    ctaText:
        Send me an email and I'll hopefully be able to point you in the right
        direction.
seo:
    seoTitle: How to do Contact Form 7 Floating Labels | Jason Somai
    seoDescription:
        The floating label has been around for some time now, but it's
        tricky to do in CF7. Follow this tutorial and modernize your form's UX.
---

Everybody knows why floating labels are great, right? But here's a refresher link from CSS Tricks just in case you don't:

https://css-tricks.com/float-labels-css/

## What's the issue, tissue?

One day, I decided to try out this new shiny floating label thing on Contact Form 7. I went into inspect mode, and found out when the form renders, it wraps every input in a span element. Furthermore, with the class "wpcf7-form-control-wrap", regardless of what kind of input it is.

For example:

```
<div class="text-wrapper"><label for="first_name">First Name</label>
[text fname id:first_name]
</div>
```

renders as:

```
<div class="text-wrapper"><label for="first_name">First Name</label>
<span class="wpcf7-form-control-wrap fname">
<input type="text" name="fname" value="" size="40"
class="wpcf7-form-control wpcf7-text" id="first_name" aria-invalid="false">
</span>
</div>
```

"So what? It's just an extra span element" I thought. I could still select it with:

```
.wpcf7 .text-wrapper input:focus
```

But, I soon found out it throws a wrench into using the adjacent sibling selector:

```
input:focus + label
```

because you can't combine parent selectors with sibling selectors.

## jQuery to the rescue!

Using Google-Fu, I came up with an easy solution. Since in jQuery you can do a parent's sibling selection, all I did was apply the class "move" to the label if the input's value is greater than 0, and it updates on input focus.

```
jQuery(document).ready(function($) { //no conflict

  //On input focus move the label
  $("input, textarea").focus(function() {
        $(this).parent().siblings("label").addClass("move");
  });

  //On focusout check if there is a value, else remove the .move class.
  $("input, textarea").focusout(function() {
    if ($(this).val().length == 0) {
        $(this).parent().siblings("label").removeClass("move");
    }
  });

  //If the user clicks on the label itself, activate the corresponding input.
  var labelID;
  $('label').click(function () {
    labelID = $(this).attr('for');
    $('#' + labelID).trigger('click');
  });

  //In case there is a prefill value
  $("input, textarea").each(function() {
      if ($(this).val().length != 0) {
          $(this).parent().siblings("label").addClass("move");
      }
      else {
          $(this).parent().siblings("label").removeClass("move");
      }
  });

});
```

Add a little bit of CSS and you're all set:

```
.wpcf7 .text-wrapper input[type=text]{
  -webkit-box-sizing: content-box;
  box-sizing: content-box;
  padding: 0.8rem 0.4rem 0.4rem;
}

.wpcf7 .text-wrapper > label {
  position: absolute;
  top: 1rem;
  left: 30px;
  transition: all .1s ease-in-out;
  z-index: 1;
}

.wpcf7 .text-wrapper > label.move {
  opacity: .4;
  font-size: 10px;
  top: 10px;
  left: 30px;
}
```

Now you'll have some great form UX that will be sure to please the eye!

[Photo by Nicole De Khors](https://burst.shopify.com/@ndekhors?utm_campaign=photo_credit&utm_content=Free+Stock+Photo+of+Mobile+Contact+Us+Form+%E2%80%94+HD+Images&utm_medium=referral&utm_source=credit)
