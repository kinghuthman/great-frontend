Inline block vs inline vs block

Size:

- block takes up the width of the parent container
- inline depends on the content
- inline block depends on the content

Positioning:

- block starts on a new line and tolerates no other html elements(except when float is added)
- inline flows along with other content and allows other elements besides it
- inline block is the same as inline in this matter

Cap specify width and height

- block is a yes
- inline is a no, will ignore
- inline block is a yes

Can be aligned with vertical align

- block is a no
- inline is a yes
- inline block is a yes

Margins and paddings

- all sides respected
- only horizontal sides, vertical sides do not affect layout, vertical space depends on line-height even though the border and padding appear visually around the content
- all sides respected

Float

- inline becomes like a block element where you can set veritcal margins and paddings

Use cases

- layout elements like `<div>`, `<p>`, `<section>` for block
- inline: links <a>, text formatting <span>, text styling - bold <b>, italics <i>
- inline block: buttons, images, and form fields that need custom sizes but stay in line with text
